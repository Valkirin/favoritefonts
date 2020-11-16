import React from 'react';
import { Header } from './components/UI/Header';
import { MainBar } from './components/UI/MainBar';
// import { GlobalStyles } from './components/UI/globalStyles';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
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
      <GlobalStyles />
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
