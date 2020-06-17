import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ProductsFilterContent =() => {
    const [contentList, setContentList] = useState([]);
    
    useEffect (()=>{
        fetch("/data/items.json")
        // fetch("http://10.58.6.173:8080/product")
        .then((res) => res.json())
        .then((res) => setContentList (res.data));
    }, []);
    
    return(
        <Content>
              {contentList.map((el)=> 
               <Filter>
               <Img src={el.product_image} alt="img" />
               <TitleWrap>
                   <SlideTitle>{el.name}</SlideTitle>
                   <Price>{el.price_usd}</Price>
                   {/* <Colors>{el.color}</Colors> */}
               </TitleWrap> 
           </Filter>
           )}
        </Content>
    );
};
export default ProductsFilterContent;

const Content = styled.div`
    padding-top:2rem;
    width:100%;
    height:100%;
    display:flex;
    flex-wrap:wrap;
    align-content:flex-start;
    flex-basis: 0;
    flex-grow: 1;
    text-align:center;
    justify-content: space-around;
    /* flex: 0 0 33.33333%; */
`;

const Filter = styled.div`
    display:flex;
    flex-direction:column;
    margin-right:1.5%;
    padding-top:2%;
    padding-bottom:2%;
    width:320px;
`;

const Img = styled.img`
    width:320px;
    height:330px;
    border-radius:3%;
`;

const TitleWrap = styled.div`
    display:flex;
    flex-direction:column;
`;

const SlideTitle = styled.div`
    font-size:1.2rem;
    font-family:Arial, Helvetica, sans-serif;
    font-weight:700;
    letter-spacing:1.1;
    margin-top:10px;
`;
const Price = styled.div`
    font-size:1.2rem;
    font-family:Arial, Helvetica, sans-serif;
    font-weight:300;
    letter-spacing:1.1;
    margin-top:10px;
    color:#000;
    `;

// const Colors = styled.div`
//     font-size:1rem;
//     font-family:Arial, Helvetica, sans-serif;
//     font-weight:400;
//     letter-spacing:1.1;
//     color: #c6c4c4;
//     margin-top:3px;
// `;
