import React, { useState } from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './theme';
// import { GlobalStyles } from './components/UI/globalStyles';

const NavWrapper = styled.div`
  margin: 15px auto;
  width: 85%;
  height: 30px;
  border: 1px solid black;
  border-radius: 30px;
  display: flex;
  flex-direction: row;
`;

const StyledInput = styled.input`
  margin: 6px 0 0 15px;
  border: none;
  :not(:first-child) {
    border-left: 1px solid black;
    padding-left: 7px;
  }
`;

const SelectInput = styled.select``;

export const MainBar = (props) => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <NavWrapper>
        {/* <GlobalStyles /> */}
        <div>
          <StyledInput type='text' name='search' placeholder='Search fonts' />
          <StyledInput type='text' name='text' placeholder='Type something' />
          <SelectInput>
            <option value='20'>20px</option>
            <option value='24'>24px</option>
            <option value='32' selected>
              32px
            </option>
            <option value='40'>40px</option>
          </SelectInput>
          <button onClick={toggleTheme}>Toggle theme</button>
          {/* <ThemeToggle type='checkbox' id='checkbox' /> */}
        </div>
      </NavWrapper>
    </ThemeProvider>
  );
};
