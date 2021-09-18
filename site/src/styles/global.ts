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
    display: flex;
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

  .AppWrap_Main_Content {
    min-height: calc(100vh - 105px);
}

.AppWrap_Main {
    max-height: 100vh;
    overflow-y: auto;
}

.AppWrap_Side {
    width: 100%;
    max-width: 330px;
    background-color: #f9f9f9;
    backdrop-filter: blur(10px);
    border-right: 1px solid #121212;
}

  .AppWrap_Main {
      width: 100%;
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
