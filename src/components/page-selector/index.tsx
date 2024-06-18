import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    padding: 10px;
`
const PageButton = styled.div`
    cursor: pointer;
    padding: 10px;
    &:hover {
        background-color: darkgrey
    }
`

const PageSelector = ({setCurrentPage}: any) => {

    const pages = ['About Me', 'Projects', 'Contact']

    const setPage = (page: string) => {
        setCurrentPage(page)
    }

    return (
        <Container>
            {pages.map((page: string) => (
                <PageButton onClick={() => setPage(page)}>
                    <h2>{page}</h2>
                </PageButton>
            ))}
        </Container>
    )
}

export default PageSelector