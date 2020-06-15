import React, {useState, useEffect} from "react";
import styled, { css } from "styled-components";

const Thumbnail = (props) => {
  const [clickedThumbNail, setClickedThumbnail] = useState(false)

  const handleThumbNail = (id) => {
    setClickedThumbnail(id);
  }

  console.log("Thumbnail >>",props)

  return (props.thumbnail !==undefined && props.thumbnail.map((thumb) => {
    return (
      <ImgWrap onClick={()=>props.filterColor(thumb.code)} >
       <ThumbnailWrap>
        <IMG src={thumb.image_url} onClick={()=>handleThumbNail(thumb.id)}  alt="thumnails"/>
        <Icon isActive={clickedThumbNail === thumb.id}><i class="fas fa-check-circle"></i></Icon>
       </ThumbnailWrap>
     </ImgWrap>
    )
  }))
};

export default Thumbnail;

const ImgWrap = styled.div`
  width: 800px;
`;

const ThumbnailWrap = styled.div`
 display: flex;
 position: relative;
 width: 50%;
 flex-wrap: nowrap;
`

const IMG = styled.img`
  width: 90px;
  height:90px;
  position: relative;
  border-radius: 2rem;
  margin-right: 5%;
  transition: all 0.3s ease-in-out;
  &:hover{
    transform: scale(1.05);
    cursor: pointer;
  }
`;


const Icon = styled.div`
    display: none;
    position: absolute;
    font-size: 35px;
    top: 30%;
    left: 55%;
    z-index: 99;
    color: black;
    background-image: radial-gradient(at center, white 40%, transparent 40%);
 ${props => props.isActive && css`
   display: block;
    `}
`


