import styled from "styled-components";


const HeaderContainer = styled.div`
    width: 100%;
    background-color: lightgrey;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
`
const TextContainer = styled(HeaderContainer)`
    flex-direction: column;
`

const Header = () => {

    return (
        <HeaderContainer>
            <TextContainer>
                <h1>Connor Robinson!</h1>
                <h2>ReactJS and React Native Developer</h2>
            </TextContainer>
        </HeaderContainer>
    )
}

export default Header