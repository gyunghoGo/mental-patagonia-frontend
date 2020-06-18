import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ProductsFilterContent =({selectedColotAndSize, chosenColor, list, setNum}) => {
    const [contentList, setContentList] = useState(list);

    useEffect(() => {
        setContentList(list);
    }, [list]) //list가 변할때만 실행시켜 준다. 

    useEffect(() => {
        const filterList = list.filter(item => {
            let isColorExist = false;
    
            for (let i of item.color) {
                if (i.name.includes(chosenColor)){
                    isColorExist = true;
                }
            }
            return isColorExist
        })
        setContentList(filterList);
    }, [chosenColor])

    // 필터링
    // setFilterSelect([...filterSelect, color]);
    

    return(
        <>
        <Content cententList={contentList}>
              {contentList.map((el)=> 
               <Filter>
               <Img src={el.product_image} alt="img" />
               <HoverImg src={el.hover_image[0]} alt="" />
               <TitleWrap>
                   <SlideTitle>{el.name}</SlideTitle>
                   <Price>{el.price_usd}</Price>
               </TitleWrap> 
           </Filter>
           )}
        </Content>
        <Wrap>
            <Prev onClick = {() => setNum(0)}>
                <i class="fas fa-chevron-left"></i>
            </Prev>
            <Next onClick ={() => setNum(1)}>
                <i class="fas fa-chevron-right"></i>
            </Next>
         </Wrap>
        </>
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
    position:relative;
`;

const HoverImg = styled.img`
    width:320px;
    height:330px;
    border-radius:3%;
    position:absolute;
    z-index:5;
    opacity:0;
    transition: opacity .3s;
    &:hover{
        opacity:1;
    }
`;

const TitleWrap = styled.div`
    display:flex;
    flex-direction:column;
    position:relative;
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



const Wrap = styled.div`
    display: flex;
    margin : 0 auto;
    justify-content:center;
`;

const Prev = styled.button`
    padding: 0.4rem 1rem;
    border-radius: 3rem;
    border: 0.3rem solid #000;
    color: #000;
    background-color: #fff;
    font-weight: 700;
    font-size: 1rem;
    transition: 0.2s;
    outline: none;
    cursor:pointer;
    margin : 1rem 0;
`;

const Next = styled.button`
    padding: 0.4rem 1rem;
    border-radius: 3rem;
    border: 0.3rem solid #000;
    color: #000;
    background-color: #fff;
    font-weight: 700;
    font-size: 1rem;
    transition: 0.2s;
    outline: none;
    cursor:pointer;
    margin : 1rem 0;
`;

// const Colors = styled.div`
//     font-size:1rem;
//     font-family:Arial, Helvetica, sans-serif;
//     font-weight:400;
//     letter-spacing:1.1;
//     color: #c6c4c4;
//     margin-top:3px;
// `;
