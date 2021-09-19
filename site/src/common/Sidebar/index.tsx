import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Detector } from 'react-detect-offline';
import { signOut } from 'next-auth/client';

import Logo from '@/common/Logo';
import { useUserContext } from '@/context/user';
import { useGistContext } from '@/context/gists';

export const Sidebar = () => {
  const router = useRouter();

  const [folders, setFolders] = useState([]);
  const [tags, setTags] = useState([]);

  const { user } = useUserContext();
  const { getFolders, getTags, gists } = useGistContext();

  useEffect(() => {
    async function setStates() {
      setFolders(await getFolders());
      setTags(await getTags());
    }

    setStates();
  }, [getFolders, getTags, setFolders]);

  return (
    <div className="AppWrap_Side_inner">
      <div className="AppWrap_Side_inner_sidebars">
        <div className="AppWrap_Side_inner_sidebars_sidebar">
          <div className="AppWrap_Side_inner_header">
            <div className="AppWrap_Side_inner_header_logo">
              <Logo theme="light" />
            </div>
          </div>
          <div className="AppWrap_Side_inner_mid">
            <nav className="AppWrap_Side_inner_mid_nav">
              <strong>Quick Links</strong>
              <ul>
                <li>All notes</li>
              </ul>
              {folders && folders.length > 0 ? (
                <>
                  <strong>Folders</strong>
                  <ul>
                    {folders.map(({ id, name }) => {
                      return <li key={`notes-folder-${id}`}>{name}</li>;
                    })}
                  </ul>
                </>
              ) : null}
              {tags && tags.length > 0 ? (
                <>
                  <strong>Tags</strong>
                  <ul>
                    {tags.map(({ id, name }) => {
                      return <li key={`notes-tag-${id}`}>{name}</li>;
                    })}
                  </ul>
                </>
              ) : null}
              <ul>
                <button onClick={() => signOut()}>Sign out</button>
              </ul>
            </nav>
          </div>
          <div className="AppWrap_Side_inner_footer">
            <div className="AppWrap_Side_inner_footer_account">
              {user && user.name ? (
                <>
                  <div className="AppWrap_Side_inner_footer_account_avatar">
                    <Detector
                      render={({ online }) => (
                        <div
                          className={`AppWrap_Side_inner_footer_account_avatar_status status_${online}`}
                        ></div>
                      )}
                    />

                    <div className="AppWrap_Side_inner_footer_account_avatar_image">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={user.avatar_url}
                        alt={`${user.name}'s avatar'`}
                      />
                    </div>
                  </div>
                  <div className="AppWrap_Side_inner_footer_account_details">
                    <div className="AppWrap_Side_inner_footer_account_details_name">
                      {user.name}
                    </div>
                    <div className="AppWrap_Side_inner_footer_account_details_subtitle">
                      {user.company}
                    </div>
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </div>
        <div
          className="AppWrap_Side_inner_sidebars_sidebar"
          style={{ background: '#d1e1e4', width: '80%' }}
        >
          {console.log(gists)}
          {gists && gists.length > 0 ? (
            <ul className="notes_list">
              {gists.map(gist => {
                console.log(gist);
                return <li className="notes_list_item">{gist.title}</li>;
              })}
            </ul>
          ) : null}
        </div>
      </div>
    </div>
  );
};
