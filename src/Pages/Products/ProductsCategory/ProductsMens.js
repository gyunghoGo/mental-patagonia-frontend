import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProductsFilterContent from "../ProductsFilterContent";

const ProductsMens = (props) => {
    const [List, setList] = useState([]);
    const [viewSize, setViewSize] = useState(false);
    const [viewColor, setViewColor] = useState(false);
    const [viewSort, setViewSort] = useState(false);
    const [filterSelect, setFilterSelect] = useState([]);
    const [num, setNum] = useState(0);
    const [chosenColor, setChosenColor] = useState("");
    const [contentList, setContentList] = useState([]);
    
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
        getData(0)
    }, []);

    useEffect (()=>{
        getData(num);
        window.scrollTo(0,1340);
    }, [num]);

    const loadList = async () => {
        const res = await fetch("data/mainShopData.json");
        const list = await res.json();
        setList(list);
    }


    const getData = (offsetVal) => {        
        fetch(`http://3.34.144.236:8000/product?offset=${offsetVal}`)
        .then((res) => res.json())
        .then((res) => setContentList(res.data));
    } 

    useEffect(() => {

    }, [filterSelect])

    // const currentColor = filterSelect;
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
                            <ColorWrap>
                                <ColorBtn isActiveColor={viewColor} onClick={showColorBtn}>
                                    <ColorHeader><h6>Color</h6></ColorHeader>
                                    <button>
                                        <svg viewBox="0 0 17 11" aria-labelledby="icon--chevron-down-desc icon--chevron-down-title" id="icon--chevron-down" xmlns="http://www.w3.org/2000/svg" width="10px"><title id="icon--chevron-down-title">chevron down</title><desc id="icon--chevron-down-desc">chevron down</desc><path d="M10.6 8.9l5.7-5.7c.4-.4.4-1 0-1.4L14.9.4c-.4-.4-1-.4-1.4 0l-5 4.9-5-4.9c-.4-.4-1-.4-1.4 0L.7 1.8c-.4.4-.4 1 0 1.4l7.1 7.1c.4.4 1 .4 1.4 0l1.4-1.4z"></path></svg>
                                    </button>
                                </ColorBtn>
                                <ColorCircle isActiveColor={viewColor}>
                                    <Black onClick={() => setChosenColor('Black')}></Black>
                                    <Blue  onClick={() => setChosenColor('Blue')}></Blue>
                                    <Brown onClick={() => setChosenColor('Brown')}></Brown>
                                    <Green onClick={() => setChosenColor('Green')}></Green>
                                    <Gray onClick={() => setChosenColor('Grey')}></Gray>
                                    <Neutral onClick={() => setChosenColor('Khaki')}></Neutral>
                                    <Orange onClick={() => setChosenColor('Mango')}></Orange>
                                    <Pink onClick={() => setChosenColor('Pink')}></Pink>
                                    <Purple onClick={() => setChosenColor('Purple')}></Purple>
                                    <Red onClick={() => setChosenColor('Red')}></Red>
                                    <White onClick={() => setChosenColor('White')}></White>
                                    <Yellow onClick={() => setChosenColor('Yellow')}></Yellow>
                                </ColorCircle>
                            </ColorWrap>
                            <SizeWrap>
                                <SizeBtn  isActiveSize={viewSize} onClick ={showSizeBtn}>
                                    <SizeHeader><h6>Size</h6></SizeHeader>
                                    <button>
                                        <svg viewBox="0 0 17 11" aria-labelledby="icon--chevron-down-desc icon--chevron-down-title" id="icon--chevron-down" xmlns="http://www.w3.org/2000/svg" width="10px"><title id="icon--chevron-down-title">chevron down</title><desc id="icon--chevron-down-desc">chevron down</desc><path d="M10.6 8.9l5.7-5.7c.4-.4.4-1 0-1.4L14.9.4c-.4-.4-1-.4-1.4 0l-5 4.9-5-4.9c-.4-.4-1-.4-1.4 0L.7 1.8c-.4.4-.4 1 0 1.4l7.1 7.1c.4.4 1 .4 1.4 0l1.4-1.4z"></path></svg>
                                    </button>
                                </SizeBtn>
                                <SizeBtnWrap isActiveSize={viewSize}>
                                    <XXS>xxs</XXS>
                                    <XS>xs</XS>
                                    <S>s</S>
                                    <M>m</M>
                                    <L>l</L>
                                    <XL>xl</XL>
                                    <XXL>xxl</XXL>
                                    <XXXL>xxxl</XXXL>
                                </SizeBtnWrap>
                            </SizeWrap>
                            <SortByWrap>
                                <SortByBtn isActiveSort={viewSort} onClick={showSortBtn}>
                                    <SortHeader><h6>Sort By</h6></SortHeader>
                                    <button>
                                        <svg viewBox="0 0 17 11" aria-labelledby="icon--chevron-down-desc icon--chevron-down-title" id="icon--chevron-down" xmlns="http://www.w3.org/2000/svg" width="10px"><title id="icon--chevron-down-title">chevron down</title><desc id="icon--chevron-down-desc">chevron down</desc><path d="M10.6 8.9l5.7-5.7c.4-.4.4-1 0-1.4L14.9.4c-.4-.4-1-.4-1.4 0l-5 4.9-5-4.9c-.4-.4-1-.4-1.4 0L.7 1.8c-.4.4-.4 1 0 1.4l7.1 7.1c.4.4 1 .4 1.4 0l1.4-1.4z"></path></svg>
                                    </button>
                                </SortByBtn>
                                <TextWrapUl isActiveSort={viewSort} >
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
                    <ProductsFilterContent chosenColor={chosenColor} list={contentList} setNum={setNum} />
                </FilterContent>
               
            </Row>
                 
        </Container>
    )
}
export default ProductsMens;

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
    /* padding:0 10px; */
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
    padding-bottom:5%;
    button{
        padding:0.5rem 0.25rem;
        background-color:white;
    }
`;

const ColorWrap = styled.div`
    border-top:1px solid #ccc;
    display:block;
    position:relative;
    width:100%;
    text-align:left;
    overflow:hidden;
`;

const ColorBtn = styled.div`
    width:100%;
    display:flex;
    justify-content:space-around;
   svg{
           transform: ${(props) =>(props.isActiveColor ? "rotate(-180deg)" : "rotate(0deg)")};
        }
`

const ColorHeader = styled.div`
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

const ColorCircle = styled.ul`
    display:flex;
    flex-wrap:wrap;
    align-content:center;
    position:relative;
    height:${(props) => (props.isActiveColor === false ? "0" : "auto")};
    visibility: ${(props)=>(props.isActiveColor === false ? "hidden" : "visible")};
    opacity: ${(props) => (props.isActiveColor === false ? 0 : 1)};
`;

const Black = styled.li`
    width:33px;
    height:33px;
    background-color:black;
    border:1.5px solid #dddddd;
    border-radius:50%;
    cursor: pointer;
    margin:0 0.3rem 0.3rem 0;
`;
const Blue = styled.li`
    width:33px;
    height:33px;
    background-color:#0B478E;
    border:1.5px solid #dddddd;
    border-radius:50%;
    cursor: pointer;
    margin:0 0.3rem 0.3rem 0;
`;
const Brown = styled.li`
    width:33px;
    height:33px;
    background-color:#7D562D;
    border:1.5px solid #dddddd;
    border-radius:50%;
    cursor: pointer;
    margin:0 0.3rem 0.3rem 0;
`;

const Green = styled.li`
    width:33px;
    height:33px;
    background-color:#005543;
    border:1.5px solid #dddddd;
    border-radius:50%;
    cursor: pointer;
    margin:0 0.3rem 0.3rem 0;
`;

const Gray = styled.li`
    width:33px;
    height:33px;
    background-color:#777c7a;
    border:1.5px solid #dddddd;
    border-radius:50%;
    cursor: pointer;
    margin:0 0.3rem 0.3rem 0;
`;

const Neutral = styled.li`
    width:33px;
    height:33px;
    background-color:#CAC1A8;
    border:1.5px solid #dddddd;
    border-radius:50%;
    cursor: pointer;
    margin:0 0.3rem 0.3rem 0;
`;

const Orange = styled.li`
    width:33px;
    height:33px;
    background-color:#F27A36;
    border:1.5px solid #dddddd;
    border-radius:50%;
    cursor: pointer;
    margin:0 0.3rem 0.3rem 0;
`;

const Pink = styled.li`
    width:33px;
    height:33px;
    background-color:#EC0D6D;
    border:1.5px solid #dddddd;
    border-radius:50%;
    cursor: pointer;
    margin:0 0.3rem 0.3rem 0;
`;

const Purple = styled.li`
    width:33px;
    height:33px;
    background-color:#45186C;
    border:1.5px solid #dddddd;
    border-radius:50%;
    cursor: pointer;
    margin:0 0.3rem 0.3rem 0;
`;

const Red = styled.li`
    width:33px;
    height:33px;
    background-color:#D9182F;
    border:1.5px solid #dddddd;
    border-radius:50%;
    cursor: pointer;
    margin:0 0.3rem 0.3rem 0;
`;

const White = styled.li`
    width:33px;
    height:33px;
    background-color:white;
    border:1.5px solid #dddddd;
    border-radius:50%;
    cursor: pointer;
    margin:0 0.3rem 0.3rem 0;
`;

const Yellow = styled.li`
    width:33px;
    height:33px;
    background-color:#EEDA0F;
    border:1.5px solid #dddddd;
    border-radius:50%;
    cursor: pointer;
    margin:0 0.3rem 0.3rem 0;
`;

const SizeWrap = styled.div`
    border-top:1px solid #ccc;
    display:block;
    position:relative;
    width:100%;
    text-align:left;
    overflow:hidden;
 `;

const SizeBtn = styled.div`
    width:100%;
    display:flex;
    justify-content:space-around;
        svg{
           transform: ${(props) =>(props.isActiveSize ? "rotate(-180deg)" : "rotate(0deg)")};
        }
`;

const SizeHeader = styled.div`
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

const SizeBtnWrap = styled.div`
    height:${(props) => (props.isActiveSize === false ? "0" : "auto")};
    visibility: ${(props)=>(props.isActiveSize === false ? "hidden" : "visible")};
    opacity: ${(props) => (props.isActiveSize === false ? 0 : 1)};

`;

const XXS = styled.button`
    padding: 0.4rem 1rem;
    border-radius: 3rem;
    border: 0.3rem solid #000;
    color: #000;
    background-color: #000;
    font-weight: 700;
    font-size: 1rem;
    transition: 0.2s;
    outline: none;
    cursor:pointer;
    margin: 0.2rem;
`;

const XS = styled.button`
    padding: 0.4rem 1rem;
    border-radius: 3rem;
    border: 0.3rem solid #000;
    color: #000;
    background-color: #000;
    font-weight: 700;
    font-size: 1rem;
    transition: 0.2s;
    outline: none;
    cursor:pointer;
    margin: 0.2rem;
`;
const S = styled.button`
    padding: 0.4rem 1rem;
    border-radius: 3rem;
    border: 0.3rem solid #000;
    color: #000;
    background-color: #000;
    font-weight: 700;
    font-size: 1rem;
    transition: 0.2s;
    outline: none;
    cursor:pointer;
    margin: 0.2rem;
`;
const M = styled.button`
    padding: 0.4rem 1rem;
    border-radius: 3rem;
    border: 0.3rem solid #000;
    color: #000;
    background-color: #000;
    font-weight: 700;
    font-size: 1rem;
    transition: 0.2s;
    outline: none;
    cursor:pointer;
    margin: 0.2rem;
`;
const L = styled.button`
    padding: 0.4rem 1rem;
    border-radius: 3rem;
    border: 0.3rem solid #000;
    color: #000;
    background-color: #000;
    font-weight: 700;
    font-size: 1rem;
    transition: 0.2s;
    outline: none;
    cursor:pointer;
    margin: 0.2rem;
`;
const XL = styled.button`
    padding: 0.4rem 1rem;
    border-radius: 3rem;
    border: 0.3rem solid #000;
    color: #000;
    background-color: #000;
    font-weight: 700;
    font-size: 1rem;
    transition: 0.2s;
    outline: none;
    cursor:pointer;
    margin: 0.2rem;
`;

const XXL = styled.button`
    padding: 0.4rem 1rem;
    border-radius: 3rem;
    border: 0.3rem solid #000;
    color: #000;
    background-color: #000;
    font-weight: 700;
    font-size: 1rem;
    transition: 0.2s;
    outline: none;
    cursor:pointer;
    margin: 0.2rem;
`;

const XXXL = styled.button`
    padding: 0.4rem 1rem;
    border-radius: 3rem;
    border: 0.3rem solid #000;
    color: #000;
    background-color: #000;
    font-weight: 700;
    font-size: 1rem;
    transition: 0.2s;
    outline: none;
    cursor:pointer;
    margin: 0.2rem;
`;



const SortByWrap = styled.div`
    border-top:1px solid #ccc;
    display:block;
    position:relative;
    width:100%;
    text-align:left;
    overflow:hidden;
    
`;

const SortByBtn = styled.div`
    width:100%;
    display:flex;
    justify-content:space-around;
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
    flex:none;
    height:${(props) => (props.isActiveSort=== false ? "0" : "auto")};
    visibility: ${(props)=>(props.isActiveSort === false ? "hidden" : "visible")};
    opacity: ${(props) => (props.isActiveSort === false ? 0 : 1)};
`;

const Recommended =styled.li`
    a{
        text-decoration:none;
        display:flex;
        flex-flow:row;
        align-items:conter;
        font-size:0.9rem;
        font-family: Arial, Helvetica, sans-serif;
        letter-spacing:-0.016rem;
        font-weight:600;
        margin-bottom:5%;
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
        font-size:0.9rem;
        font-family: Arial, Helvetica, sans-serif;
        letter-spacing:-0.016rem;
        font-weight:600;
        margin-bottom:5%;
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
        font-size:0.9rem;
        font-family: Arial, Helvetica, sans-serif;
        letter-spacing:-0.016rem;
        font-weight:600;
        margin-bottom:5%;
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
        font-size:0.9rem;
        font-family: Arial, Helvetica, sans-serif;
        letter-spacing:-0.016rem;
        font-weight:600;
        margin-bottom:5%;
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



