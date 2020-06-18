import React, { useState,useEffect } from "react";
import styled, { css } from "styled-components";

const Similarity = (props) => {    
    const data = props.data;
    return(
     <>
      <Wrap>
          <h1>Similar to this Product</h1>
          <SimilarWrap>
              {
                data.id && data.similar.map(
                 (something) => 
                <Similar>   
                 <IMG src={something.product_image} alt="similar"/>
                 <Title>{something.name}</Title>
                 <p>{something.price}</p>
                </Similar>
                )
              }
          </SimilarWrap>

      </Wrap>
     
     </>
    )
}

export default Similarity;


const Wrap = styled.div`

 margin-bottom: 10%;
 padding: 0 10%;
 overflow: hidden;

 h1{
     font-size: 30px;
     padding-bottom: 2%;
     font-weight: 800;
 }


 p{
     text-align: center;
     padding-top: 3%;
 }
`;

const SimilarWrap = styled.div`
 display: flex;

`;

const Similar = styled.div`
 display: flex;
 flex-direction: column;
 padding: 1%;
`;

const IMG = styled.img`
 width:300px;
 height: 300px;
 transition: all 0.3s ease-in-out;
 cursor: pointer;
 &:hover{
     transform: scale(1.05)
 }
`;

const Title = styled.div`
font-size: 21px;
font-weight: 800;
text-align: center;
padding-top: 8%;
`;

