import React from "react";
import List from "./List";
import styled from "styled-components";

const App= () =>{
    return(
        <Container>
            <Row>
                <JustifyContent>
                    <List />
                </JustifyContent>
            </Row>
        </Container>
    )
}

export default App;

const Container = styled.div``;

const Row = styled.div``;

const JustifyContent = styled.div``;
