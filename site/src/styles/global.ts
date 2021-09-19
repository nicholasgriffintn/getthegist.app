import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    text-decoration: none;
    list-style: none;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  ul, li {
    list-style: none;
  }

  button {
    cursor: pointer;
    border: none;
  }

  .app-logo {
    max-width: 290px;
  }

  .AppWrap {
    display: block;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    max-width: 100vw;
    overflow-x: hidden;
    background: #EFFCFE;
    color: #121212;
}

.AppWrap.Session_false .AppWrap_Side {
  display: none;
  }

  .AppWrap.Session_true {
    background: #EFFCFE;
}

  .AppWrap_Main_Content {
    min-height: calc(100vh - 105px);
}

.AppWrap_Side {
    width: 100%;
    min-width: 225px;
    max-width: 225px;
    background-color: #dae8ea;
    backdrop-filter: blur(10px);
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    z-index: 9;
    transition: all 0.5s ease;
    color: #111827
}

  .AppWrap_Main {
      width: 100%;
  }

.AppWrap.Session_true .AppWrap_Main {
    padding-left: 225px;
}

  .page-logo {
      width: 100%;
      text-align: center;
      margin-bottom: 40px;
  }

  .page-logo svg {
      max-width: 240px;
      margin: 0 auto;
  }

  .note-prose {
      background: #F9CB49;
      padding: 3rem 2rem;
      border-bottom: solid 30px #F5B92D;
  }

  .AppWrap_Side_inner {
    height: 100%;
    position: relative;
}

.AppWrap_Side_inner_footer {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 10px 15px;
    max-width: 225px;
    width: 100%;
}

.AppWrap_Side_inner_mid {
    padding: 10px 15px;
}

.AppWrap_Side_inner_header {
    padding: 10px 15px;
}

.AppWrap_Side_inner_footer_account {
    display: flex;
    align-items: center;
}

.AppWrap_Side_inner_footer_account_avatar {
    width: 45px;
    height: 45px;
    position: relative;
}

.AppWrap_Side_inner_footer_account_avatar_status {
    background: #cc0c0c;
    position: absolute;
    top: -5px;
    left: -5px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
}

.AppWrap_Side_inner_footer_account_avatar_image {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    overflow: hidden;
}

.AppWrap_Side_inner_footer_account_details {
    padding-left: 10px;
    width: 100%;
}

.AppWrap_Side_inner_footer_account_details_name {
    font-weight: bold;
}

.AppWrap_Side_inner_footer_account_details_subtitle {
    font-size: 0.8rem;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    max-width: 140px
}

.AppWrap_Side_inner_footer_account_avatar_status.status_true {
    background: #18bf4b;
}
`;
