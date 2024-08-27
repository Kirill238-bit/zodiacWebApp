import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family:'Roboto', 'Montserrat', sans-serif;
  }

  button {
    color: #000;
    cursor: pointer;
  }

  html{
    --tg-viewport-height: 100vh;
    --tg-viewport-stable-height: 100vh;
    display:block;
    touch-action:manipulation;
  }

  .modal .modal-dialog-centered {
    min-height: 100vh;
  }

  img {
    object-fit: contain; 
  }

  ::-webkit-scrollbar {
    width: 0.5px;
    display:none;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0, 0, 0, 0.6);
  }

  ::-webkit-scrollbar-thumb:active {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;