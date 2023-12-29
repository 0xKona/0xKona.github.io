import React from "react";
import styled from "styled-components";
import Kona from "../assets/kona.png"

const LandingWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: fit-content;
    background-color: blue;
    margin: 50px 10% 0px 10%;
    padding: 0px 5vw;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    // align-items: center;
    background-color: pink;
    grid-area: IntroContainer;
    padding-left: 5%;
`
const Introduction = styled.h1`
    font-size: 3.2vw;
`
const MyName = styled.span`
    color: #ce2e38;
`
const Description = styled.h2`
    font-size: 2vw;
    color: #1d2327;
`
const Buttons = styled.div`
    
`
const ButtonMain = styled.button`
    height: 50px;
    min-height: 30px;
    width: 150px;
    min-width: 65px;
    cursor: pointer;
    border: none;
    background: rgba(206, 46, 56, 0.8);
    border-radius: 8px;
    backdrop-filter: blur(3.8px);
    -webkit-backdrop-filter: blur(3.8px);
    color: white;
`
const ButtonSecondary = styled(ButtonMain)`
    border: solid rgba(29, 35, 39, 0.4);
    background: rgba(29, 35, 39, 0.3);
    margin-left: 20px;
`

const KonaImg = styled.img`
    aspect-ratio: 1 / 1;
    width: 100%;
    background-color: orange;
    grid-area: KonaImg
`

const Main = () => {
    return(
        <LandingWrapper>
            <LandingMain>
                <IntroContainer>
                    <Introduction>Hi! I'm <MyName>0xKona!</MyName></Introduction>
                    <Description>Front-end React Developer</Description>
                    <Buttons>
                        <ButtonMain>Portfolio</ButtonMain>
                        <ButtonSecondary>Github</ButtonSecondary>
                    </Buttons>
                </IntroContainer>
                <KonaImg src={Kona}/>
            </LandingMain>
        </LandingWrapper>
    )
}

export default Main