import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProductsFilterContent from "./ProductsFilterContent";

const ProductsCategory = (props) => {
    const [List, setList] = useState([]);
    const [viewSize, setViewSize] = useState(false);
    const [viewColor, setViewColor] = useState(false);
    const [viewSort, setViewSort] = useState(false);

    
    const showSizeBtn =()=>{
        if (viewSize === true){
            setViewSize(false);
        }
        else if (viewSize === false){
            setViewSize(true);
        }
    };

    const showColorBtn =()=>{
        if (viewColor === true){
            setViewColor(false);
        }
        else if (viewColor === false){
            setViewColor(true);
        }
    };
    const showSortBtn =()=>{
        if (viewSort === true){
            setViewSort(false);
        }
        else if (viewSort === false){
            setViewSort(true);
        }
    };

   

    useEffect(() => {
        loadList();
    }, []);

    const loadList = async () => {
        const res = await fetch("data/mainShopData.json");
        const list = await res.json();
        setList(list);
    }
    return(
        <Container>
            <Row>
                <FilterListSticky>
                    <FilterSide>
                        <Category>
                            <span>Categories</span>
                            <ul>
                            {List.menData &&
                            List.menData.map((re)=> (
                            <li>{re.text}</li>
                            ))}
                            </ul>
                            </Category>
                        <Filters><span>Filters</span></Filters>
                        <FilterAttribute >
                            <SizeWrap isActiveSize={viewSize} onClick = {showSizeBtn}>
                                <SizeHeader><h6>Color</h6></SizeHeader>
                                <button>
                                    <svg viewBox="0 0 17 11" aria-labelledby="icon--chevron-down-desc icon--chevron-down-title" id="icon--chevron-down" xmlns="http://www.w3.org/2000/svg" width="10px"><title id="icon--chevron-down-title">chevron down</title><desc id="icon--chevron-down-desc">chevron down</desc><path d="M10.6 8.9l5.7-5.7c.4-.4.4-1 0-1.4L14.9.4c-.4-.4-1-.4-1.4 0l-5 4.9-5-4.9c-.4-.4-1-.4-1.4 0L.7 1.8c-.4.4-.4 1 0 1.4l7.1 7.1c.4.4 1 .4 1.4 0l1.4-1.4z"></path></svg>
                                </button>
                            </SizeWrap>
                            <ColorWrap isActiveColor={viewColor} onClick={showColorBtn}>
                                <ColorHeader><h6>Size</h6></ColorHeader>
                                <button>
                                    <svg viewBox="0 0 17 11" aria-labelledby="icon--chevron-down-desc icon--chevron-down-title" id="icon--chevron-down" xmlns="http://www.w3.org/2000/svg" width="10px"><title id="icon--chevron-down-title">chevron down</title><desc id="icon--chevron-down-desc">chevron down</desc><path d="M10.6 8.9l5.7-5.7c.4-.4.4-1 0-1.4L14.9.4c-.4-.4-1-.4-1.4 0l-5 4.9-5-4.9c-.4-.4-1-.4-1.4 0L.7 1.8c-.4.4-.4 1 0 1.4l7.1 7.1c.4.4 1 .4 1.4 0l1.4-1.4z"></path></svg>
                                </button>
                            </ColorWrap>
                            <SortByWrap isActiveSort={viewSort} onClick={showSortBtn}>
                                <SortHeader><h6>Sort By</h6></SortHeader>
                                <button>
                                    <svg viewBox="0 0 17 11" aria-labelledby="icon--chevron-down-desc icon--chevron-down-title" id="icon--chevron-down" xmlns="http://www.w3.org/2000/svg" width="10px"><title id="icon--chevron-down-title">chevron down</title><desc id="icon--chevron-down-desc">chevron down</desc><path d="M10.6 8.9l5.7-5.7c.4-.4.4-1 0-1.4L14.9.4c-.4-.4-1-.4-1.4 0l-5 4.9-5-4.9c-.4-.4-1-.4-1.4 0L.7 1.8c-.4.4-.4 1 0 1.4l7.1 7.1c.4.4 1 .4 1.4 0l1.4-1.4z"></path></svg>
                                </button>
                                <TextWrapUl>
                                    <Recommended><a href = "/">Recommended For You</a></Recommended>
                                    <Popular><a href = "/">Popular</a></Popular>
                                    <LowPrice><a href = "/">Price : Low to High</a></LowPrice>
                                    <HighPrice><a href = "/">Price : High to Low</a></HighPrice>
                                </TextWrapUl>
                            </SortByWrap>
                        </FilterAttribute >
                    </FilterSide>
                </FilterListSticky>
                <FilterContent>
                    <ProductsFilterContent />
                </FilterContent>
            </Row>
        </Container>
    )
}
export default ProductsCategory;

const Container = styled.div`
    width:100%;
    padding-left:3rem;
    padding-right:2rem;
    margin-top:3rem;
`

const Row = styled.div`
    display:flex;
    flex-wrap:wrap;
`

const FilterListSticky = styled.div`
    width:18%;
    flex-basis:0;
    flex-grow:1;
    position:sticky;
    padding-right:1%;
    top: 4rem;
    min-height: calc(100vh - 8rem);
    height: calc(100vh - 8rem);
    overflow: scroll;
    overflow-x: hidden;
    z-index: 1;
`;

const FilterSide = styled.div`
    padding:0 10px;
    margin-top:2.5rem;
    position:relative;
    top:0;
    left:0;
    z-index:5;
`;

const Category = styled.div`
    color:#000;
    background-color:#fff;
    position:relative;
    span{
        color:#000;
        font-size: 1.2rem;
        font-weight: 900;
        letter-spacing: -.028rem;
        margin-bottom:2rem;
        display: block;
        font-family: Arial, Helvetica, sans-serif;
    }
    ul{
        height: auto;
        width: 100%;
        position:relative;
        color:#000;
        font-weight:900;
        font-family: Arial, Helvetica, sans-serif;
        font-size:0.8rem;
        li{
            cursor:pointer;
            margin-bottom:20px;
            &:hover{
            text-decoration:underline;
          }
        }
       
    }
`;

const Filters = styled.div`
    color:#000;
    position:relative;
    height:3rem;
    margin-top:5rem;
    span{
        font-size:1.2rem;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 900;
    }
`;

const FilterAttribute = styled.div`
    padding-bottom:3%;
    button{
        padding:0.5rem 0.25rem;
        background-color:white;
        
    }
`;

const SizeWrap = styled.div`
    border-top:1px solid #ccc;
    display:flex;
    justify-content:space-between;
    svg{
           transform: ${(props) =>(props.isActiveSize ? "rotate(-180deg)" : "rotate(0deg)")};
        }
`;

const SizeHeader = styled.div`
    padding: 0.6rem 0 ;
    cursor:pointer;
    position:relative;
    width:100%;
    h6{
        font-size:0.9rem;
        font-weight: 900;
        font-family: Arial, Helvetica, sans-serif;
        line-height: 1.6rem;
        letter-spacing: -.016rem;
        display: inline-block;
        padding: 0;
    }
`;

const ColorWrap = styled.div`
    border-top:1px solid #ccc;
    display:flex;
    svg{
           transform: ${(props) =>(props.isActiveColor ? "rotate(-180deg)" : "rotate(0deg)")};
        }
 `;

const ColorHeader = styled.div`
    padding: 0.6rem 0 ;
    cursor:pointer;
    position:relative;
    width:100%;
    text-align:left;
    h6{
        font-size:0.9rem;
        font-weight: 900;
        font-family: Arial, Helvetica, sans-serif;
        line-height: 1.6rem;
        letter-spacing: -.016rem;
        display: inline-block;
        padding: 0;
    }
`;

const SortByWrap = styled.div`
     border-top:1px solid #ccc;
     display:flex;
     svg{
           transform: ${(props) =>(props.isActiveSort ? "rotate(-180deg)" : "rotate(0deg)")};
        }
`;

const SortHeader = styled.div`
    padding: 0.6rem 0 ;
    cursor:pointer;
    position:relative;
    width:100%;
    text-align:left;
    h6{
        font-size:0.9rem;
        font-weight: 900;
        font-family: Arial, Helvetica, sans-serif;
        line-height: 1.6rem;
        letter-spacing: -.016rem;
        display: inline-block;
        padding: 0;
    }
`;

const TextWrapUl = styled.ul`
    height:171px;
    flex:none;
`;

const Recommended =styled.li`
    a{
        text-decoration:none;
        display:flex;
        flex-flow:row;
        align-items:conter;
        font-size:1.2rem;
        font-family: Arial, Helvetica, sans-serif;
        letter-spacing:-0.016rem;
        font-weight:600;
    }
    &:hover{
        text-decoration:underline;
    }
`;

const Popular = styled.li`
    a{
        text-decoration:none;
        display:flex;
        flex-flow:row;
        align-items:conter;
        font-size:1.2rem;
        font-family: Arial, Helvetica, sans-serif;
        letter-spacing:-0.016rem;
        font-weight:600;
    }
    &:hover{
        text-decoration:underline;
    }
`;

const LowPrice = styled.li`
    a{
        text-decoration:none;
        display:flex;
        flex-flow:row;
        align-items:conter;
        font-size:1.2rem;
        font-family: Arial, Helvetica, sans-serif;
        letter-spacing:-0.016rem;
        font-weight:600;
    }
    &:hover{
        text-decoration:underline;
    }
`;

const HighPrice = styled.li`
    a{
        text-decoration:none;
        display:flex;
        flex-flow:row;
        align-items:conter;
        font-size:1.2rem;
        font-family: Arial, Helvetica, sans-serif;
        letter-spacing:-0.016rem;
        font-weight:600;
    }
    &:hover{
        text-decoration:underline;
    }
`;

const FilterContent = styled.div`
    width:82%;
    height:100%;
    
    margin-left:2%;
`;

