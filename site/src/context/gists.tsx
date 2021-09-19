import { createContext, useContext, useEffect } from 'react';
import { useQuery } from 'react-query';

import { baseUrl } from '@/utils/url';
import db from '@/utils/db';

import { User } from '@/context/user';

export type File = {
  [key: string]: {
    filename: string;
    type: string;
    language: string;
    raw_url: string;
    size: number;
    truncated?: boolean;
    content?: string;
  };
};

export type History = {
  [key: string]: {
    user: User;
    version: string;
    committed_at: string;
    change_status: {
      total: number;
      additions: number;
      deletions: number;
    };
    url: string;
  };
};

export type Gist = {
  url?: string;
  id: string;
  files: File;
  public?: boolean;
  created_at: string;
  updated_at: string;
  description: string;
  comments: number;
  owner: User;
  truncated: boolean;
  forks?: any[];
  history?: History[];
};

type UserDataType = {
  gists: Gist[] | undefined;
  getGist: any;
  getFolders: any;
  getTags: any;
};

const GistContext = createContext<UserDataType>(undefined!);

export function GistContextProvider({ children }) {
  async function getGists() {
    if (navigator && navigator.onLine) {
      const response = await fetch(`${baseUrl}/api/github/gists`);

      if (!response.ok) {
        throw new Error('Problem fetching gists list');
      }

      const gists = await response.json();

      return gists.data;
    } else {
      return await db.notes.toArray();
    }
  }

  async function getFolders() {
    return await db.folders.toArray();
  }

  async function getTags() {
    return await db.tags.toArray();
  }

  async function getGist(id): Promise<Gist> {
    if (navigator && navigator.onLine) {
      const response = await fetch(`${baseUrl}/api/github/gists/gist/${id}`);

      if (!response.ok) {
        throw new Error('Problem fetching gist');
      }

      const gist = await response.json();

      return gist.data;
    } else {
      return await db.notes.where({ id });
    }
  }

  async function initaliseNotes() {
    const gistsData = await getGists();

    gistsData.map(async gist => {
      const { id, files } = gist;

      if (id && files) {
        const originalFilesArray: File[] = Object.values(files);

        const metadataOriginal = originalFilesArray.find(
          ({ filename }) => filename === 'metadata.json',
        );
        const contentOriginal = originalFilesArray.find(
          ({ filename }) => filename === 'content.md',
        );

        if (metadataOriginal && contentOriginal) {
          const gistData: Gist = await getGist(id);

          const {
            created_at,
            updated_at,
            comments,
            owner,
            truncated,
            forks,
            history,
          } = gistData;

          const filesArray = Object.values(gistData.files);

          const metadataFile = filesArray.find(
            ({ filename }) => filename === 'metadata.json',
          );

          const metadata = JSON.parse(metadataFile?.content);

          const contentFile = filesArray.find(
            ({ filename }) => filename === 'content.md',
          );

          const content = contentFile?.content;

          const newGist = {
            title: metadata.title,
            tags: metadata.tags,
            color: metadata.color,
            description: metadata.description,
            favorited: metadata.favorited,
            folder: metadata.folder,
            pinned: metadata.pinned,
            id,
            created_at,
            updated_at,
            comments,
            owner,
            truncated,
            forks,
            history,
            metadata,
            files,
            content,
          };

          db.folders.put({ id: metadata.folder, name: metadata.folder });

          if (metadata.tags && metadata.tags.length > 0) {
            metadata.tags.map(tag => {
              return db.tags.put({ id: tag, name: tag });
            });
          }

          db.notes.put(newGist);
        }
      }

      return gist;
    });

    return [];
  }

  const { data: gists } = useQuery<Gist[], Error>(
    ['gists', {}],
    initaliseNotes,
  );

  let sharedState = {
    gists,
    getGist,
    getFolders,
    getTags,
  };

  return (
    <GistContext.Provider value={sharedState}>{children}</GistContext.Provider>
  );
}

export function useGistContext() {
  return useContext(GistContext);
}
