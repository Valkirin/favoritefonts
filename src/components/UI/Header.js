import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: center;
  width: 100%;
  height: 54px;
  border-bottom: 1px solid #979797;
`;

const HeaderLogo = styled.div`
  color: #979797;
  .google {
    font-family: Roboto, 'Helvetica Neue', sans-serif;
  }
  .fonts {
    font-family: 'Product Sans', Arial, Helvetica, sans-serif;
  }
`;

const HeaderNav = styled.div`
  ul > li {
    display: inline;
    a {
      text-decoration: none;
      color: #979797;
    }
  }
`;

export const Header = (props) => {
  return (
    <HeaderWrapper>
      <HeaderLogo>
        <span className={'google'}>Google</span>
        <span className={'fonts'}>&nbsp;Fonts</span>
      </HeaderLogo>
      <HeaderNav>
        <ul>
          <li>
            {' '}
            <a href='#'>CATALOG</a>{' '}
          </li>
          <li>
            {' '}
            <a href='#'>FEATURED</a>{' '}
          </li>
          <li>
            {' '}
            <a href='#'>ARTICLES</a>{' '}
          </li>
          <li>
            {' '}
            <a href='#'>ABOUT</a>{' '}
          </li>
        </ul>
      </HeaderNav>
    </HeaderWrapper>
  );
};
