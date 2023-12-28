import React from "react";
import styled from "styled-components";
import Header from "./components/header";
import Main from "./components/main";

const HomeBody = styled.body`

`

const HeaderWrapper = styled.div`
    position: sticky;
    top: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
`

const Home = () => {


    return (
        <HomeBody>
            <HeaderWrapper>
                <Header/>
            </HeaderWrapper>
            <Main/>
            {/* <Main/> */}
        </HomeBody>
    
    
    )
}

export default Home