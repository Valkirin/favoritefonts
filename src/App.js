import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Header } from './components/UI/Header';
import { MainBar } from './components/UI/MainBar';

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
      <Header />
      <MainBar />
      {/*<MainSec>
        <FontCard />
      </MainSec>
      <Footer /> */}
    </>
  );
}

export default App;
