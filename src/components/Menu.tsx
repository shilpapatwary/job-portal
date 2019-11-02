import React from 'react';
import { faQuestionCircle, faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faInstagram, faPinterest, faTwitter} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Menu: React.FC = () => { 
    return(
        <HeaderMenu className="header-menu">
            <MainMenu>
                <MenuList>
                    <MenuItem><FontAwesomeIcon icon={faQuestionCircle} /></MenuItem>
                    <MenuItem><FontAwesomeIcon icon={faUser} /></MenuItem>
                    <MenuItem><FontAwesomeIcon icon={faHeart} /></MenuItem>
                </MenuList>
            </MainMenu>
            <MainMenu>
                <span>Follow us on:</span>
                <MenuList>
                    <MenuItem><FontAwesomeIcon icon={faFacebook} /></MenuItem>
                    <MenuItem><FontAwesomeIcon icon={faInstagram} /></MenuItem>
                    <MenuItem><FontAwesomeIcon icon={faPinterest} /></MenuItem>
                    <MenuItem><FontAwesomeIcon icon={faTwitter} /></MenuItem>
                </MenuList>
            </MainMenu>
        </HeaderMenu>
    )
}
const HeaderMenu = styled.div`
 display:flex;
 justify-content: space-between;
 margin: 0 3%;
`;
const MainMenu = styled.div`
display: flex;
justify-content: center;
    align-items: center;
`;
const MenuList = styled.ul`
  display: flex;
`;
const MenuItem = styled.li`
  padding-right: 1.5rem;
  color: #00000099;
`;
export default Menu;