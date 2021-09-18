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
    background: #28272c;
}

  .AppWrap_Main_Content {
    min-height: calc(100vh - 105px);
}

.AppWrap_Side {
    width: 100%;
    min-width: 225px;
    max-width: 225px;
    background-color: #2c2b30;
    backdrop-filter: blur(10px);
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    z-index: 9;
    transition: all 0.5s ease;
    color: #b7b7b7
}

  .AppWrap_Main {
      width: 100%;
  }

.AppWrap.Session_true .AppWrap_Main {
    background: #28272c;
    color: #b7b7b7;
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
`;
