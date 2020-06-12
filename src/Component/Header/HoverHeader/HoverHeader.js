import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HoverHeader = (props) => {
  const [List, setList] = useState([]);

  useEffect(() => {
    loadList();
  }, []);

  const loadList = async () => {
    const res = await fetch("http://localhost:3000/data/data.json");
    const list = await res.json();
    setList(list);
  };


  return (
    <MenuDiv isActive={props.isActive}>
      <MegaMenuUl>
        <MenuLi>
          <Anchor href="/shop/womens">
            <span>Women's</span>
          </Anchor>
          <CategoryDetailUl>
            {List.womenData &&
              List.womenData.map((re, id) => (
                <Link to="/" key={id}>
                  <DetailLi>{re.text}</DetailLi>
                </Link>
              ))}
          </CategoryDetailUl>
        </MenuLi>
        <MenuLi>
          <Anchor href="/shop/men">
            <span>Men's</span>
          </Anchor>
          <CategoryMenDetailUl>
            {List.menData &&
              List.menData.map((re, id) => (
                <Link to={"/"} key={id}>
                  <MenDetailLi href="/">{re.text}</MenDetailLi>
                </Link>
              ))}
          </CategoryMenDetailUl>
        </MenuLi>
        <MenuLi>
          <Anchor href="/shop/womens">
            <span>Packs and Gear</span>
          </Anchor>
          <CategoryDetailUl>
            {List.packData &&
              List.packData.map((re, id) => (
                <Link to={"/"} key={id}>
                  <DetailLi>{re.text}</DetailLi>
                </Link>
              ))}
          </CategoryDetailUl>
        </MenuLi>
        <MenuLi>
          <Anchor href="/shop/womens">
            <span>Kids' and Baby</span>
          </Anchor>
          <CategoryDetailUl>
            {List.kidsData &&
              List.kidsData.map((re, id) => (
                <Link to={"/"} key={id}>
                  <DetailLi>{re.text}</DetailLi>
                </Link>
              ))}
          </CategoryDetailUl>
        </MenuLi>
        <MenuLi>
          <Anchor href="/shop/womens">
            <span>Collections</span>
          </Anchor>
          <CategoryDetailUl>
            {List.collectionData &&
              List.collectionData.map((re, id) => (
                <Link to={"/"} key={id}>
                  <DetailLi>{re.text}</DetailLi>
                </Link>
              ))}
          </CategoryDetailUl>
        </MenuLi>
      </MegaMenuUl>
    </MenuDiv>
  );
};

export default HoverHeader;

const MenuDiv = styled.div`
  width: 100%;
  position: absolute;
  z-index: 999;
  display: flex;
  visibility: ${(props)=>(props.isActive ? "hidden" : "visible")};
  opacity: ${(props) => (props.isActive ? 0 : 1)};
  transition: all ease-in-out 0.2s;
`;
const MegaMenuUl = styled.ul`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 40rem;
  padding: 3.8rem 7.6vw;
  flex-direction: row;
  align-items: flex-start;
  background-color: #000;
  z-index: 100;
`;

const MenuLi = styled.li`
  margin: 0 0.88rem;
  flex: 1 1 0px;
`;

const Anchor = styled.a`
  padding: 0;
  color: #000;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 1.4rem;
  letter-spacing: 0;
  line-height: 2rem;
  display: flex;
  text-align: left;
  span {
    color: White;
    font-size: 0.9rem;
    margin-bottom: 1em;
    padding: 0;
    font-weight: 800;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const CategoryDetailUl = styled.ul`
  transition-delay: 0.1s;
  font-family: Helvetica Neue, Arial, sans-serif;
  
`;
const DetailLi = styled.li`
  margin-bottom: 0.1rem;
  color: #fff;
  font-size: 0.85rem;
  letter-spacing: 0;
  line-height: 2rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const CategoryMenDetailUl = CategoryDetailUl;
const MenDetailLi = DetailLi;
