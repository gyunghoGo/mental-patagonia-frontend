import React from 'react';
import styled from "styled-components";
import productsMainTop from "../../../images/video/productsMainTop.mp4";

const ProductsVideo =() =>{
    return( 
    <VideoWrap>
    <video playsinline autoplay="true" muted loop>
        <source src = {productsMainTop} type ="video/mp4" />
    </video>
    <ContentWrap>
        <Content>
        <h1>Men's</h1>
        <button>Filter</button>
        </Content>
    </ContentWrap>
    </VideoWrap>
    );
    };
export default ProductsVideo;

//filter icon 추후에 버튼에 추가 예정
{/* <span class="material-icons">
filter_alt
</span> */}


const VideoWrap = styled.div `
position:relative;
z-index:-5;
width:100%;
height:70vh;
transform:scale(1);
overflow:hidden;
object-fit:cover;
video{
position:absolute;
width:100%;
height:100%;
top:0;
left:0;
object-fit:cover;
}
`;

const ContentWrap = styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
display:flex;
justify-content:center;
z-index:5;
padding: 10rem 0 ;
`;

const Content = styled.div`
    width:100%;
    text-align:center;
    position:relative;
    padding: 0 4rem;
    margin-top:8rem;

    h1{
        color:white;
        font-family: Arial, Helvetica, sans-serif;
        font-size:4rem;
        font-weight:900;
        display:flex;
        align-items:center; 
        justify-content:center;
    }
    button{
        cursor: pointer;
        border: 0.1333rem solid #fff;
        padding: 1rem 5rem;
        border-radius:3rem;
        background-color:#fff;
        transition: 0.2s;
        margin-top:3%;
        font-family: Arial, Helvetica, sans-serif;
        font-size:1rem;
        font-weight:700;
        &:hover{
          transform: scale(1.05);
        }
}
`;


