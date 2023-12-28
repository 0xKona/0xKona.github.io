import React from "react";
import styled from "styled-components";

const NavBar = styled.ul`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    list-style-type: none;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0);
    // box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(3.8px);
    -webkit-backdrop-filter: blur(3.8px);
`
const HeaderOption = styled.li`
    padding: 10px;
    cursor: pointer;
    transition: all 2s ease-in;
    // background-color: orange;
    &:hover {
        border-bottom: solid;
    }
`

const Header = () => {

    return (
        <NavBar>
            <HeaderOption>Portfolio</HeaderOption>
            <HeaderOption onClick={() => window.open('https://github.com/0xKona', '_blank', 'noopener')}>GitHub</HeaderOption>
            <HeaderOption>About Me</HeaderOption>
        </NavBar>
    )

};

export default Header;