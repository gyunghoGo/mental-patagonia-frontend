import React from "react";
import styled from "styled-components";

const SlideMensContent = (props) => {
    return props.data.map((data)=>{
        return(
            <Container>
                <p>{data.title}</p>
            </Container>
        );
    });
};
export default SlideMensContent;

const Container = styled.div`
    position : relative;
    width:210px;
    height:150px;
    border-radius:0.6rem;
    border: 0.5px solid #edeaea;
    background-color:#F5F5F5;
    margin-right:2%;
    transition: all ease-in-out .2s;    
    flex-shrink: 0;
    &:hover{
        box-shadow: 1px 10px 30px #dddddd;
        transform:scale(1.02);
        transition: all ease-in-out .2s;
    }
    p{
        position:absolute;
        width:100%;
        top:45%;
        text-align:center;
        font-size:0.9rem;
        font-family: Arial, Helvetica, sans-serif;
        font-weight:700;
        letter-spacing:1;
        padding: 0 auto;
    }
    `;
