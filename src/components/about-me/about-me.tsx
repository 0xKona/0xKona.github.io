import styled from "styled-components"

const Container = styled.div`
height: 500px;
    text-align: center;
`

const AboutMe = () => {

    return (
        <Container>
            <h1 style={{margin: 20}}>About me:</h1>
            <h3>
                I am a junior Web and Mobile App developer specialising in:
            </h3>
            <h3>⦿ ReactJS</h3>
            <h3>⦿ React Native</h3>
            <h3>⦿ Typescript</h3>
            <h3>more...</h3>
        </Container>
    )
}

export default AboutMe