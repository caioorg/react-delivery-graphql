import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
  html,
  body,
  #root {
    height:100vh;
  }
`
export const Container = styled.div`
  max-width: 1336px;
  margin: 0 auto;
  height: 100%;
  font-family: Arial, Helvetica, sans-serif;
  color: #000000;
`
