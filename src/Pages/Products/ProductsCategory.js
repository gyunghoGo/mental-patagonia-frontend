import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ProductsCategory = () => {
    const [List, setList] = useState([]);

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
                        <Category><span>Categories</span>
                            <ul>
                            {List.menData &&
                            List.menData.map((re)=> (
                            <li>{re.text}</li>
                            ))}
                            </ul>
                            </Category>
                        <Filters><span>Filters</span></Filters>
                        <FilterAttribute>
                            <SizeWrap>
                                
                                <SizeHeader><h6>Color</h6></SizeHeader>
                                <button><svg viewBox="0 0 17 11" aria-labelledby="icon--chevron-down-desc icon--chevron-down-title" id="icon--chevron-down" xmlns="http://www.w3.org/2000/svg" width="10px"><title id="icon--chevron-down-title">chevron down</title><desc id="icon--chevron-down-desc">chevron down</desc><path d="M10.6 8.9l5.7-5.7c.4-.4.4-1 0-1.4L14.9.4c-.4-.4-1-.4-1.4 0l-5 4.9-5-4.9c-.4-.4-1-.4-1.4 0L.7 1.8c-.4.4-.4 1 0 1.4l7.1 7.1c.4.4 1 .4 1.4 0l1.4-1.4z"></path></svg>
                                </button>
                            </SizeWrap>
                            <ColorWrap>
                                
                                <ColorHeader><h6>Size</h6></ColorHeader>
                                <button><svg viewBox="0 0 17 11" aria-labelledby="icon--chevron-down-desc icon--chevron-down-title" id="icon--chevron-down" xmlns="http://www.w3.org/2000/svg" width="10px"><title id="icon--chevron-down-title">chevron down</title><desc id="icon--chevron-down-desc">chevron down</desc><path d="M10.6 8.9l5.7-5.7c.4-.4.4-1 0-1.4L14.9.4c-.4-.4-1-.4-1.4 0l-5 4.9-5-4.9c-.4-.4-1-.4-1.4 0L.7 1.8c-.4.4-.4 1 0 1.4l7.1 7.1c.4.4 1 .4 1.4 0l1.4-1.4z"></path></svg>
                                </button>

                            </ColorWrap>
                            <SortByWrap>
                                
                                <SortHeader><h6>Sort By</h6></SortHeader>
                                <button><svg viewBox="0 0 17 11" aria-labelledby="icon--chevron-down-desc icon--chevron-down-title" id="icon--chevron-down" xmlns="http://www.w3.org/2000/svg" width="10px"><title id="icon--chevron-down-title">chevron down</title><desc id="icon--chevron-down-desc">chevron down</desc><path d="M10.6 8.9l5.7-5.7c.4-.4.4-1 0-1.4L14.9.4c-.4-.4-1-.4-1.4 0l-5 4.9-5-4.9c-.4-.4-1-.4-1.4 0L.7 1.8c-.4.4-.4 1 0 1.4l7.1 7.1c.4.4 1 .4 1.4 0l1.4-1.4z"></path></svg>
                                </button>

                            </SortByWrap>
                        </FilterAttribute>
                    </FilterSide>
                </FilterListSticky>
                <FilterContent></FilterContent>
            </Row>
        </Container>
    )
}
export default ProductsCategory;

const Container = styled.div`
    width:100%;
    padding: 0 4rem;
`

const Row = styled.div`
    display:flex;
    flex-wrap:wrap;
`

const FilterListSticky = styled.div`
    width:25%;
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

const FilterContent = styled.div`
    width:75%;
    height:1900px;
    background-color:#ccc;
    margin-top: 5%;
    margin-left:2%;
`;