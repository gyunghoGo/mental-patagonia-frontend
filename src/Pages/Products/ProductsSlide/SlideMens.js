import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SlideMensContent from "./SlideMensContent";

const SlideMens =() =>{
    const [categoryList, setCategoryList] = useState([]);

    useEffect (() => {
        fetch("data/productsMenData.json")
        .then((res) => res.json())
        .then((res)=> setCategoryList(res.ProductsMenSlide));
    }, []);

    const [currentSlide, setCurrentSlide] = useState(0);
    const [positionX, setPositionX] = useState(0);
    
    const nextSlide =() =>{
        let TOTAL_SLIDES = categoryList.length;
        if(currentSlide >=TOTAL_SLIDES -1){
            return;
        } else{
            setCurrentSlide(currentSlide +1);
            setPositionX(positionX -200);
        }
    };

    const prevSlide = () => {
        if(currentSlide ===0){
            return;
        }else {
            setCurrentSlide (currentSlide -1);
            setPositionX(positionX + 200);
        }
    }


    return(
            <CategoryContainer>
                <Slide style ={{ 
                    transform: `translateX(${positionX}px)`,
                    transition: "all 0.3s ease-in-out",
                    }}>
                     <SlideMensContent data = {categoryList} />
                </Slide>
                <BtnWrap>
                    <button className="prev" onClick={prevSlide}>
                    <i class="fas fa-chevron-left"></i>
                    </button>
                    <button className="next" onClick ={nextSlide}>
                    <i class="fas fa-chevron-right"></i>
                    </button>
                </BtnWrap>
                
            </CategoryContainer>
    )
}
export default SlideMens;

const CategoryContainer = styled.div`
    position:relative;
    width:100%;
    height:35vh;
    margin: 0 auto;
    padding: 0 4% 0 4%;
    overflow:hidden;
`;

const Slide = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
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
