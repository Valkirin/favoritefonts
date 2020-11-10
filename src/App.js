import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    background: #fff;
    margin: 0;
    height: 100%;
    color: #000;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      {/* <Header />
      <NavBar />
      <MainSec>
        <FontCard />
      </MainSec>
      <Footer /> */}
    </>
  );
}

export default App;
