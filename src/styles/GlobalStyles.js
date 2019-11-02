import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
 body, h1,h2,h3, ol, li {
   margin:0;
   padding:0;
 }
 li {
     list-style: none;
 }
 `;

 export default GlobalStyles;