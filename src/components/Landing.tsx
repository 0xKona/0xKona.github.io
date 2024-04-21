import styled from "styled-components";
import Kona from "../assets/kona.png"
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    `
const SplashContainer = styled(Wrapper)`
    height: 70%;
    flex-direction: row;
    justify-content: center;
    padding: 40px;
    background-color: green;
`
const LinkContainer = styled.div`
    display: flex;
    flex-grow: 1;
    width: 100%;
    padding: 0 50%;
    justify-content: space-evenly;
    align-items: center;
    background-color: red;
`

const Avatar = styled.img`
    height: 80%;
`

const Main = () => {

    interface LinkInterface {
        name: string;
        url: string;
        icon: JSX.Element
    }

    const iconSize = 60

    const links: LinkInterface[] = [
        {name: "Github", url: "https://github.com/0xKona", icon: <FaGithub size={iconSize}/>},
        {name: "LeetCode", url: "", icon: <SiLeetcode size={iconSize}/>},
        {name: "X", url: "", icon: <FaXTwitter size={iconSize}/>}
    ];

    return(
        <Wrapper>
            <SplashContainer>
                <Avatar src={Kona}/>
                <div>
                    <h1>0xKona!</h1>
                    <h2>Front-end React Developer</h2>
                </div>
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