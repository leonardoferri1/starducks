import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      outline: none;
      box-sizing: border-box;
      font-family: "Roboto", "Baloo 2", sans-serif;
    }
    
  :root {
      --yellow-dark: #C47F17;
      --normal-yellow: #DBAC2C;
      --yellow-light: #F1E9C9;
      --purple-dark: #4B2995;
      --normal-purple: #8047F8;
      --purple-light: #EBE5F9;
      --grey: #EDEDED,

      --base-title: #272221;
      --base-subtitle: #403937;
      --base-text: #574F4D;
      --base-label: #8D8686;
      --base-hover: #D7D5D5;
      --base-button: #E6E5E5;
      --base-input: #EDEDED;
      --base-card: #F3F2F2;
      --background: #FAFAFA;
      --white: #FFFFFF;
      --base-error: #f84747;
    }

    body {
      background: var(--background);
      color: var(--base-text);
      -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      font-size: 1rem;
    }
   
    button {
      cursor: pointer;
    }
    a {
      text-decoration: none;
    }
`;
