import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/colored 1.png';

const Image = styled.img`
  height: 45px;
  width: 192.46px;
  margin: auto 0;
`;

const Brand = () => <Image src={logo} alt="Farm Reach logo" />;

export default Brand;
