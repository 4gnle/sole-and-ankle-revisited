/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { QUERIES, COLORS, WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <>
    <Backdrop />

    <Wrapper>
      <UnstyledButton onClick={onDismiss}>
        <Icon id="close" strokeWidth={1.5} />
      </UnstyledButton>

      <Links>
        <NavLinks href="/sale">Sale</NavLinks>
        <NavLinks href="/new">New&nbsp;Releases</NavLinks>
        <NavLinks href="/men">Men</NavLinks>
        <NavLinks href="/women">Women</NavLinks>
        <NavLinks href="/kids">Kids</NavLinks>
        <NavLinks href="/collections">Collections</NavLinks>
      </Links>

      <Footer>
        <FooterLinks href="/terms">Terms and Conditions</FooterLinks>
        <FooterLinks href="/privacy">Privacy Policy</FooterLinks>
        <FooterLinks href="/contact">Contact Us</FooterLinks>
      </Footer>
    </Wrapper>

    </>
  );
};

export default MobileMenu;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.2);
`;

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  left: 15vw;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100vh;
  background-color: white;
  z-index: 9999;
  justify-content: space-between;
  padding: 1rem;
  backdrop-filter: drop-shadow(4px 4px 10px blue);
`;

const Links = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const NavLinks = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;


const FooterLinks = styled.a`
  font-size: 0.9rem;
  text-decoration: none;
  color: ${COLORS.gray[700]};
  font-weight: ${WEIGHTS.normal};
`;
