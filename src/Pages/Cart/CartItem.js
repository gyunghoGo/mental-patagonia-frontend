import React, {useState, useEffect}  from "react";
import styled, {css} from "styled-components";


const CartItem = (props) =>{
    console.log(props)
    return(
        <>
         <ItemWrap>
             <Img src={props.image} />
             <ItemDetails>
             <Top>
              <Title>{props.title}</Title>
              <Price>{props.price}</Price>
             </Top>
             <Color> Color: {props.color}</Color>
            <Size> Size: {props.size}</Size>
                  <Qty list="select" name="select">
                      <option value="" selected disabled hidden>Qty:{props.qty}</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                  </Qty>
             </ItemDetails>
         </ItemWrap>
        </>
    )
}

export default CartItem;


const ItemWrap = styled.div`
display: flex;
width: 90%;
height: 30%;
margin: 0 auto;
padding: 3% 0;
border-bottom: 0.2px solid rgba(0,0,0,0.1);
`;

const Img = styled.img`
width: 200px;
height: 230px;
`;

const ItemDetails = styled.div`
  margin-left: 3%;
  width: 100%;
  font-size: 16px;
  height:  100%;
  display: flex;
  flex-direction: column;
  
`;

const Top = styled.div`
 display: flex;
 justify-content: space-between;
`;

const Title = styled.div`
 font-size: 20px;
 font-weight: 800;
 color: rgba(0,0,0,0.65);
`;

const Price = styled.div`
font-size: 16px;
font-weight: 700;
`;

const Color = styled.div``;

const Size = styled.div``;

const Qty= styled.select`
 width: 50px;
 background-color: transparent;
 border:none;
 border-bottom: 1px solid grey;
 appearance: none;
 -webkit-appearance: none;
 -moz-appearance: none;
`;
