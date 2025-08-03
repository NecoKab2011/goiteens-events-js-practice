import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

ul {
  list-style: none;
}

body {
  font-family: "Roboto", sans-serif;
  background-color:rgb(156, 156, 157);
}
`;
