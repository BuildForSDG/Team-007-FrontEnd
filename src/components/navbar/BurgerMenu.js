/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Burgermenu = ({ handleNavbar, navState }) => (
  <Wrapper onClick={handleNavbar}>
    <div className={navState ? 'open' : ''}>
      <span>&nbsp;</span>
      <span>&nbsp;</span>
      <span>&nbsp;</span>
    </div>
  </Wrapper>
);

export default Burgermenu;

const Wrapper = styled.div`
  position: relative;
  padding-top: .7rem;
  cursor: pointer;
  display: block;

  & span {
    background: #fdcb6e;
    display: block;
    position: relative;
    width: 1.9rem;
    height: .2rem;
    margin-bottom: .7rem;
    transition: all ease-in-out 0.2s;
  }

  .open span:nth-child(2) {
      opacity: 0;
    }

  .open span:nth-child(3) {
    transform: rotate(45deg);
    top: -11px;
  }

  .open span:nth-child(1) {
    transform: rotate(-45deg);
    top: 11px;
  }

`;
