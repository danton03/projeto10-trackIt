import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`

  /* Reset CSS */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* Estilos Personalizados */
  /* Cores em variáveis: */
  *{
    font-family: 'Lexend Deca', sans-serif;
    --cor-fundo-tela: #E5E5E5;
    --cor-azul: #126BA5;
    --cor-azul-claro: #52B6FF;
    --cor-verde: #8FC549;
    --cor-branca: #FFFFFF; 
    --cor-cinza-texto: #666666;
    --cor-cinza-claro: #DBDBDB;
    --cor-borda-input: #D5D5D5;
    --cor-input-disabled: #F2F2F2;
    --cor-texto-disabled: #AFAFAF;
    --cor-cinza-botão: #EBEBEB;
    --cor-dia-selecionado: #CFCFCF;
  }
  
  body{
    display: flex;
    justify-content: center;
  }


`;
 
export default GlobalStyle;