import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ProductsContent =() =>{
    const [categoryList, setCategoryList] = useState([]);

    useEffect(()=>{
        loadList(); }, []
    );

    const loadList = async () => {
        const res = await fetch("http://localhost:3002/data/data.json");
        const list = await res.json();
        setCategoryList(list);
    };
    return(
        <div>
            <CategorySlide>
                <Swiper>
                    {/* <SwiperWrap> */}
                        <SwiperContainer>{categoryList.ProductsMenCategory &&
                            categoryList.ProductsMenCategory.map((re, id) =>(
                            <CardWrap><Card><span>{re.title}</span></Card></CardWrap>
                            ))}
                        </SwiperContainer>
                    {/* </SwiperWrap> */}
                </Swiper>
            </CategorySlide>
        </div>
    )
}
export default ProductsContent;

const CategorySlide = styled.div`
    position:relative;
    width:100vw;
    height:100%;
`;

const Swiper = styled.div`
    position:relative;
    width:100%;
    padding: 4rem 0;
    z-index:10;
`;

// const SwiperWrap = styled.div`
//     position:relative;
// `;

const SwiperContainer = styled.div`
    position:absolute;
    z-index:100;
  
    height:100%;
    display:flex;
    `;

const CardWrap = styled.div`
    width:210px;
    height:150px;
    border-radius:0.6rem;
    border: 0.5px solid #edeaea;
    background-color:#F5F5F5;
    margin-right:2%;
    transition: all ease-in-out .2s;
    &:hover{
        box-shadow: 1px 10px 30px #dddddd;
        transform:scale(1.02);
        transition: all ease-in-out .2s;
    }
    
`;
const Card = styled.div`
    width:90%;
    margin: auto;
    display:flex;
    justify-content:center;
    align-content:center;
    span{
    position:absolute;
    top:48%;
    display:flex;
    justify-content:center;
    align-content:center;
    width:100%;
    height:100%;
    font-size:0.9rem;
    font-family: Arial, Helvetica, sans-serif;
    font-weight:700;
    letter-spacing:1;
       
    }
`;