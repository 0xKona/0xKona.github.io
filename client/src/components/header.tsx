import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
    width: 100%;
    height: 75px;
    background-color: orange;
`

const Header = () => {

    return (
        <HeaderContainer>
             <h1>Header</h1>
        </HeaderContainer>
    )

};

export default Header;