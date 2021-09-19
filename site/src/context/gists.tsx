import { createContext, useContext } from 'react';

import { useQuery } from 'react-query';

import { baseUrl } from '@/utils/url';

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
  url: string;
  id: string;
  files: File;
  public: boolean;
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
};

type GistDetailsQuery = {
  id: string;
};

const GistContext = createContext<UserDataType>(undefined!);

export function UserContextProvider({ children }) {
  async function getGists() {
    const response = await fetch(`${baseUrl}/api/github/gists`);

    if (!response.ok) {
      throw new Error('Problem fetching gists list');
    }

    const gists = await response.json();

    return gists.data;
  }

  const { data: gists } = useQuery<Gist[], Error>(['gists', {}], getGists);

  async function getGist({ id }: GistDetailsQuery): Promise<Gist> {
    const response = await fetch(`${baseUrl}/api/github/gists/gist/${id}`);

    if (!response.ok) {
      throw new Error('Problem fetching gist');
    }

    const gist = await response.json();

    return gist.data;
  }

  let sharedState = {
    gists,
    getGist,
  };

  return (
    <GistContext.Provider value={sharedState}>{children}</GistContext.Provider>
  );
}

export function useGistContext() {
  return useContext(GistContext);
}
