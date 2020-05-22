/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring';
import BurgerMenu from './BurgerMenu';
import Brand from './Brand';
import CollapseMenu from './CollapseMenu';

const Navbar = ({ handleNavbar, navState }) => {
  const barAnimation = useSpring({
    from: { transform: 'translate3d(0, -10rem, 0)' },
    transform: 'translate3d(0, 0, 0)'
  });

  const linkAnimation = useSpring({
    from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 800,
    config: config.wobbly
  });

  return (
    <>
      <NavBar style={barAnimation}>
        <FlexContainer>
          <NavLinks style={linkAnimation}>
            <a href="/">link n1</a>
            <a href="/">link n2</a>
            <a href="/">link n3</a>
            <a href="/">link n4</a>
          </NavLinks>
          <BurgerWrapper>
            <BurgerMenu
              navbarState={navState}
              handleNavbar={handleNavbar}
            />
          </BurgerWrapper>
          <Brand />
        </FlexContainer>
      </NavBar>
      <CollapseMenu
        navbarState={navState}
        handleNavbar={handleNavbar}
      />
    </>
  );
};

export default Navbar;

const NavBar = styled(animated.nav)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: #111111;
  z-index: 1;
  font-size: 1.4rem;
`;

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0;
  height: 5rem;
`;

const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;

  & a {
    color: #dfe6e9;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const BurgerWrapper = styled.div`
  margin: auto 0;
  margin-right: auto;

  @media (min-width: 769px) {
    display: none;
  }
`;
