import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ProductsSlideItems = () => {
    const [itemsList, setItemsList] = useState([]);

    useEffect (()=>{
        fetch("data/pro.json")
        .then((res) => res.json())
        .then((res) => setItemsList (res.category));
    }, []);

    const [currentSlide, setCurrentSlide] = useState(0);
    const [positionX, setPositionX] = useState(0);
    
    const nextSlide =() =>{
        let TOTAL_SLIDES = itemsList.length;
        if(currentSlide >=TOTAL_SLIDES -1){
            return;
        } else{
            setCurrentSlide(currentSlide +1);
            setPositionX(positionX -300);
        }
    };

    const prevSlide = () => {
        if(currentSlide ===0){
            return;
        }else {
            setCurrentSlide (currentSlide -1);
            setPositionX(positionX + 300);
        }
    }
    console.log(itemsList);
    return(
        <>
            <Title>
                <h2>
                    <span>
                        M's Baggies <sup>TM</sup>
                    </span>
                    <span>
                        15 Items
                    </span>
                </h2>
            </Title>
            <SlideContainer>
                <SlideWrap style ={{
                    transform: `translateX(${positionX}px)`,
                    transition: "all 0.3s ease-in-out",
                }}>
                    {itemsList.map((el) =>
                    <Wrap>
                    <Img src={el.image_url} alt="img" />
                    <TitleWrap>
                    <SlideTitle>{el.title}</SlideTitle>
                    <Price>{el.price}</Price>
                    <Colors>{el.color}</Colors>
                    </TitleWrap> </Wrap>)
                    }
                </SlideWrap>
                <BtnWrap>
                    <button className="prev" onClick={prevSlide}>
                    <i class="fas fa-chevron-left"></i>
                    </button>
                    <button className="next" onClick ={nextSlide}>
                    <i class="fas fa-chevron-right"></i>
                    </button>
                </BtnWrap>
            </SlideContainer>
        </>
    );
};
export default ProductsSlideItems;

const Title = styled.div `
    text-align:left;
    padding: 0 4rem;
    display:block;
    position:relative;
    margin: 3rem 0 2rem;
    h2{
        color:#000;
        display:flex;
        text-align:left;
        font-size:2rem;
        letter-spacing:0.01rem;
        line-height:1.12;
        font-weight:800;
        font-family:Arial, Helvetica, sans-serif;
    }
    span:first-child >sup {
        font-size:1rem;
        vertical-align: baseline;
        top: -10px;
        position: relative;
    }
    span:last-child{
        font-size:1rem;
        display:flex;
        align-items:flex-end;
        margin-left:10px;
        margin-bottom:5px;
        text-decoration:underline;
        cursor:pointer;
        &:hover{
            text-decoration:none;
        }
    }
`;



const SlideContainer = styled.div`
    padding: 0 4rem;
    position:relative;
    width:100%;
    height:65vh;
    margin: 0 auto;
    overflow:hidden;
`;


const SlideWrap = styled.div`
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    text-align:center;
`;

const Wrap = styled.div`
    display:flex;
    flex-direction:column;
    margin-right:1.5%;
`;

const Img = styled.img`
    width:400px;
    height:450px;
    border-radius:3%;
`;

const TitleWrap = styled.div`
    display:flex;
    flex-direction:column;
`;

const SlideTitle = styled.div`
    font-size:1.5rem;
    font-family:Arial, Helvetica, sans-serif;
    font-weight:700;
    letter-spacing:1.1;
    margin-top:10px;
`;
const Price = styled.div`
    font-size:1.5rem;
    font-family:Arial, Helvetica, sans-serif;
    font-weight:500;
    letter-spacing:1.1;
    margin-top:10px;
    color:#000;
    `;

const Colors = styled.div`
    font-size:1rem;
    font-family:Arial, Helvetica, sans-serif;
    font-weight:400;
    letter-spacing:1.1;
    color: #c6c4c4;
    margin-top:3px;
`;

const BtnWrap = styled.div`
    display:flex;
    justify-content: space-between;
    width:92%;
    position:absolute;
    top:40%;
    button{
        width:60px;
        height:60px;
        font-size:20px;
        color: #000;
        background-color:#fff;
        border-radius:50%;
        z-index:9;
        box-shadow: 0 6px 8px 0  rgba(0, 0, 0, 0.2);
        transition: all .2s ease-in-out;
        opacity:0.5;
        &:hover{
            transition: all .2s ease-in-out;
            transform: scale(1.05);
            opacity:1;
        }
    }
`