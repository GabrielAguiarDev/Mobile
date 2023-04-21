import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
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
`
