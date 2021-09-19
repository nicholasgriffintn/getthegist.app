import { useRouter } from 'next/router';

import Logo from '@/common/Logo';
import { useUserContext } from '@/context/user';

export const Sidebar = () => {
  const router = useRouter();

  const { user } = useUserContext();

  return (
    <div className="AppWrap_Side_inner">
      <div className="AppWrap_Side_inner_header">
        <div className="AppWrap_Side_inner_header_logo">
          <Logo theme="light" />
        </div>
      </div>
      <div className="AppWrap_Side_inner_mid">
        <nav className="AppWrap_Side_inner_mid_nav">
          <ul>
            <li>Link</li>
          </ul>
        </nav>
      </div>
      <div className="AppWrap_Side_inner_footer">
        <div className="AppWrap_Side_inner_footer_account">
          {user && user.name ? (
            <>
              <div className="AppWrap_Side_inner_footer_account_avatar">
                <div className="AppWrap_Side_inner_footer_account_avatar_status"></div>
                <div className="AppWrap_Side_inner_footer_account_avatar_image">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={user.avatar_url} alt={`${user.name}'s avatar'`} />
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
  );
};
