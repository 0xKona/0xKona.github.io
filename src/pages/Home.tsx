import styled from "styled-components"
import Main from "../components/Landing"

const HomeBody = styled.body`
    width: 100%;
`

const Home = () => {

    return (
        <HomeBody>
            <Main/>
        </HomeBody>
    )
}

export default Home