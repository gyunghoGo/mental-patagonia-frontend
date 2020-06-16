import React from 'react';
import styled from "styled-components";

const HeaderFilterTop =() => {
    return(
        <MensFilterBar>
            <Container>
                <span>Men's</span>
                <span>Filter</span>
            </Container>
        </MensFilterBar>
    )
} 
export default HeaderFilterTop;

const MensFilterBar = styled.div`
    width:100vw;
    height:10vh;
    background-color:blueviolet;
    opacity: 1;
    transform: translateY(0);
    height: 8rem;
    background: #fff;
    display: block;
    width: 100%;
    
`;

const Container = styled.div`
    width:100%;
    height:100%;
    padding: 0 4rem 0 4rem;
    
    display:flex;
    justify-content:space-between;
    align-items:center;
    
   
    span{
        font-size:0.9rem;
        font-family: Arial, Helvetica, sans-serif;
        font-weight:800; 
        cursor:pointer;
        }
    span:last-child::before{
        margin-top: 1px;
        margin-right: 10px;
        width: 14px;
        height: 14px;
        display: inline-block;
        content:url("data:image/svg+xml; utf8, %3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2022%2020%22%3E%3Cg%20transform%3D%22translate%281%202%29%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20transform%3D%22translate%280%202%29%22%20fill%3D%22%23000%22%3E%3Crect%20width%3D%2220%22%20height%3D%223%22%20rx%3D%221%22%2F%3E%3Cpath%20d%3D%22M1%2010h18a1%201%200%20011%201v1a1%201%200%2001-1%201H1a1%201%200%2001-1-1v-1a1%201%200%20011-1z%22%2F%3E%3C%2Fg%3E%3Ccircle%20stroke%3D%22%23000%22%20stroke-width%3D%223%22%20fill%3D%22%23FFF%22%20cx%3D%2216%22%20cy%3D%223%22%20r%3D%223%22%2F%3E%3Ccircle%20stroke%3D%22%23000%22%20stroke-width%3D%223%22%20fill%3D%22%23FFF%22%20cx%3D%224%22%20cy%3D%2213%22%20r%3D%223%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
    }
    span:first-child{
        &:hover{
        text-decoration:underline;
    }
    }
    span:last-child{
        transition: all .2s ease-in-out;
        &:hover{
            transform:scale(1.02);
            transition: all .2s ease-in-out;
        }
    }

`;