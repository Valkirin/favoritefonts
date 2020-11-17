import React from 'react';
import styled from 'styled-components';

const FooterInfo = styled.div`
  display: flex;
  justify-content: center;
  font-size: 12px;
`;

export const Footer = (props) => {
  return (
    <FooterInfo>
      <p>coded by FVV | 2020 | Chingu Pre-Work Project</p>
    </FooterInfo>
  );
};
