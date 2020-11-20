import React from 'react';
import styled from 'styled-components';

const CardWrap = styled.div`
  margin: auto;
  width: 85%;
  min-height: 100%;
`;

const FontBlock = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid black;
  width: 340px;
  height: 340px;
`;

const BlockHeader = styled.div`
  line-height: 0.2;
  height: 65px;
  h {
    font-size: 18px;
    font-family: Arial, Helvetica, sans-serif;
  }

  p {
    font-size: 14px;
    font-family: Roboto, Helvetica, sans-serif;
    color: #5f6368;
  }
`;

const Icon = styled.span`
  background-image: url(https://laravel.ru/favicon.ico);
  width: 32px;
  height: 32px;
  vertical-align: top;
  margin: 15px 5px;
`;

export const MainSection = (props) => {
  return (
    <CardWrap>
      <FontBlock>
        <BlockHeader>
          <h4>Font name</h4>
          <p>Author name</p>
        </BlockHeader>
        <Icon />
      </FontBlock>
    </CardWrap>
  );
};
