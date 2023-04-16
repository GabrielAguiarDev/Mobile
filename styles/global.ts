import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  :root {
    --primary: #0C99D8;
    --primary-50: #E7F5FB;
    --green-gradient: linear-gradient(180deg, #0C99D8 0%, #78FFD6 99.99%, #E7F5FB 100%);
    
    --grey-100: #F9F9F9;
    --grey-200: #EFEFEF;
    --grey-300: #BDBDBD;
    --grey-350: #bdbdbd8c;
    --grey-400: #747474;
    --grey-800: #4B4B4B;
    
    --white: #ffffff;
    --black: #14121E;
    --background: #F2F5FA;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font: 400 0.875rem 'Poppins', sans-serif;
  }

  body, input, textarea, select, button {
    font: 400 0.875rem 'Poppins', sans-serif;
  }

  html {
    font-size: 100%;

    @media (max-width: 1080px){
      font-size: 93.75%;
    }

    @media (max-width: 720px){
      font-size: 87.5%;
    }
  }
`
