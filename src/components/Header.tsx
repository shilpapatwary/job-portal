import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import styled from "styled-components";
import logo from '../assets/logo.png';

const Header: React.FC = () => {
  return (
    <header>
      <HeaderAds className="header-ads">
        <span>Jobs posted in the last 24 hrs!</span>
        <AdLink>Click to follow</AdLink>
      </HeaderAds>
      <div>
        <Menu />
      </div>
      <Logo className="logo">
        <Link href="/">
          <a><LogoIcon src={logo}></LogoIcon></a>
        </Link>
      </Logo>
    </header>
  );
};
const HeaderAds = styled.div`
  background-color: #000000cc;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  height: 2.5rem;
`;
const AdLink = styled.span`
  margin-left: 1rem;
  border-bottom: 1px solid #fff;
  letter-spacing: 0.09375rem;
  cursor: pointer;
  font-size: 0.75rem;
`;
const Logo = styled.div `
 display: flex;
 justify-content: center;
`;
const LogoIcon = styled.img `
 width: 4rem;
 height: 4rem;
`;
export default Header;
