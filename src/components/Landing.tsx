import styled from "styled-components";
// import Kona from "../assets/kona.png"
import { FaGithub } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import Header from "./header";
import { useState } from "react";
import AboutMe from "./about-me/about-me";
import PageSelector from "./page-selector";
import Projects from "./projects";
import Contact from "./contact";

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    `
const SplashContainer = styled(Wrapper)`
    height: 65%;
    flex-direction: column;
    justify-content: center;
    padding: 40px;
    /* background-color: green; */
`
const LinkContainer = styled.div`
    display: flex;
    flex-grow: 1;
    width: 100%;
    min-height: 100px;
    padding: 0 50%;
    justify-content: space-evenly;
    align-items: center;
    background-color: lightgrey;
`
const LinkWrapper = styled.div`
    cursor: pointer;
    &:hover {
        background-color: darkgrey
    }
`
const Banner = styled.div`
    position: absolute;
    bottom: 0
`

// const Avatar = styled.img`
//     height: 80%;
// `

const Main = () => {

    interface LinkInterface {
        name: string;
        icon: JSX.Element
    }

    const [currentPage, setCurrentPage] = useState('Projects')

    const iconSize = 60

    const links: LinkInterface[] = [
        {name: "Github", icon: <LinkWrapper><FaGithub onClick={() => window.open("https://github.com/0xKona", '_blank')} size={iconSize}/></LinkWrapper>},
        {name: "LeetCode", icon: <LinkWrapper><SiLeetcode onClick={() => window.open("https://leetcode.com/u/0xKona/", '_blank')} size={iconSize}/></LinkWrapper>},
        // {name: "X", icon: <FaXTwitter size={iconSize}/>},
        {name: "LinkedIn", icon: <LinkWrapper><FaLinkedinIn onClick={() => window.open("https://www.linkedin.com/in/konarobinson/", '_blank')} size={iconSize}/></LinkWrapper>}
    ];

    const getCurrentPage = () => {
        switch (currentPage) {
            case 'About Me': return <AboutMe />
            case 'Projects': return <Projects />
            case 'Contact': return <Contact />
            default: return <AboutMe />
        }
    }

    return(
        <Wrapper>
            <Header />
            <PageSelector setCurrentPage={setCurrentPage} />
            <SplashContainer>
                {getCurrentPage()}
                <Banner>Created using Vite + React + Typescript and deployed via GitHub pages.</Banner>
            </SplashContainer>
            <LinkContainer>
                {links.map((link: LinkInterface) => (
                    link.icon
                ))}
            </LinkContainer>
        </Wrapper>
    )
}

export default Main