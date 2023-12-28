import React from "react";
import styled from "styled-components";
import Kona from "../assets/kona.png"
import Header from "./header";

const MainWrapper = styled.div`
    width: 100%;
    height: 100%;
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
const LandingWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: fit-content;
    // background-color: blue;
    margin: 50px 10% 0px 10%;
`
const LandingMain = styled.div`
    margin: 0px 20px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 10px;
    grid-template-areas: "IntroContainer KonaImg";
`
const IntroContainer = styled.div`
    // background-color: pink;
    grid-area: IntroContainer;
`
const KonaImg = styled.img`
    aspect-ratio: 1 / 1;
    width: 100%;
    // background-color: orange;
    grid-area: KonaImg
`

const Main = () => {
    return(
    <MainWrapper>
        <HeaderWrapper>
            <Header/>
        </HeaderWrapper>
        <LandingWrapper>
            <LandingMain>
                <IntroContainer>
                    <h1>Hi! I'm 0xKona!</h1>
                    <h2>Front-end React Developer</h2>
                    <button>Portfolio</button>
                    <button>Github</button>
                </IntroContainer>
                <KonaImg src={Kona}/>
            </LandingMain>
        </LandingWrapper>
    </MainWrapper>
    )
}

export default Main