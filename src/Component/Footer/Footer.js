import React from "react";
// import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";
import {WIDTH800} from "../../Config"

const Footer = () => {
  return (
    <Footers>
      <FooterInner>
        <SubscriptUl>
          <li>
            <Content>
              <span>Subscribe</span>
              <p>
                Sign up for exclusive offers, original stories, activism
                awareness, events and more.
              </p>
              <InputBtnWrap>
                <input placeholder="Email Address"></input>
                <button>Sign Me Up</button>
              </InputBtnWrap>
            </Content>
          </li>
        </SubscriptUl>
        <NeedHelp>
          <span>Neep Help?</span>
          <BtnWrap>
            <button>Help Conter</button>
            <button>Order Status</button>
            <button>Returns and Repairs</button>
            <button>Login</button>
          </BtnWrap>
          <p>
            If you are using a screen reader and having difficulty please call
            us at 1-800-638-6464
          </p>
        </NeedHelp>
        <MoreInfo>
          <span>More Info</span>
          <TextWrap>
            <ul>
              <li>Patagonia Action Works</li>
              <li>Patagonia Provision</li>
              <li>Worn Wear</li>
              <li>Gift Cards</li>
              <li>Find a Store</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
            <ul>
              <li>Patagonia Pro Program</li>
              <li>1% For The Planet</li>
              <li>International Orders</li>
              <li>Group Sales</li>
              <li>Team Sales</li>
              <li>Privacy Policy</li>
              <li>California Transparency Act</li>
            </ul>
          </TextWrap>
        </MoreInfo>
      </FooterInner>
      <FooterBottomWrap>
        <p>© 2020 Patagonia, Inc. All Rights Reserved</p>
        <p>English</p>
      </FooterBottomWrap>
    </Footers>
  );
};

const Footers = styled.footer`
  width: 100vw;
  display: flex;
  position: relative;
  flex-flow: row wrap;
  justify-content: center;
  padding: 0 3.5rem 5rem 3.5rem;
  background: #000;
  color: #fff;
  z-index: 10;
  @media only screen and (max-width:${WIDTH800}){
    padding: 0 2rem 4rem 2rem;
  }
 
`;

const FooterInner = styled.div`
  display: flex;
  position: relative;
  flex: 1 0 100%;
  justify-content: space-between;
  padding: 3rem 0 0;
  font-weight: 800;
  margin-top: 3rem;
  @media only screen and (max-width:${WIDTH800}){
    flex-direction:column;
    width:100%;
  }
`;

const SubscriptUl = styled.ul`
  display: flex;
  margin: 0 5rem 5rem 0;
  padding-right: 2rem;
  width: 33%;
  @media only screen and (max-width:${WIDTH800}){
    width:100%;
    padding:0%;
  }

  li {
    margin-right: 3rem;
    @media only screen and (max-width:${WIDTH800}){
      margin:0;
      width:90%;
    }

  }
  @media only screen and (max-width:${WIDTH800}){
    width:100%;
    margin: 0 0 5rem 0;
}
`;
const Content = styled.div`
  span {
    font-size: 1.7rem;
    font-family: Helvetica Neue, Arial, sans-serif;
    letter-spacing: 1.1px;
  }
  p {
    font-size: 0.9rem;
    font-weight: 400;
    font-family: Helvetica Neue, Arial, sans-serif;
    text-align: left;
    line-height: 1.75;
    margin: 20% 0;
    @media only screen and (max-width:${WIDTH800}){
      margin: 7% 0;
    }
  }
`;

const InputBtnWrap = styled.div`
  input {
    border: none;
    border-color: #fff;
    border-width: 0 0 1px 0;
    border-style: solid;
    background-color: #000;
    margin-bottom: 10%;
    width: 100%;
  }
  button {
    padding: 0.4rem 1.8rem;
    margin-right: 2rem;
    border-radius: 3rem;
    border: 0.3rem solid #ffffff;
    background-color: transparent;
    background-color: #ffff;
    font-size: 1rem;
    font-family: Helvetica Neue, Arial, sans-serif;
    font-weight: 700;
    transition: 0.2s;
    outline: none;
    &:hover {
      transform: scale(1.05);
    }
  }
`;

const NeedHelp = styled.div`
  margin: 0 5rem 5rem 0;
  padding: 0 2rem;
  width: 33%;
  span {
    font-size: 1.7rem;
    font-family: Helvetica Neue, Arial, sans-serif;
    letter-spacing: 1.1px;
  }
  p {
    margin-top: 4rem;
    margin-bottom: 3rem;
    font-weight: 400;
    font-family: Helvetica Neue, Arial, sans-serif;
    font-size: 0.9rem;
    letter-spacing: 1px;
    line-height: 2;
    @media only screen and (max-width:${WIDTH800}){
      margin-top:0;
    }
  }
  @media only screen and (max-width:${WIDTH800}){
      width:100%;
      padding:0;
    }
`;

const BtnWrap = styled.div`
  margin: 4rem 0;
  button {
    padding: 0.4rem 1.5rem;
    border-radius: 3rem;
    border: 0.3rem solid #ffffff;
    color: white;
    background-color: #000;
    margin-right: 2rem;
    margin-bottom: 1rem;
    font-weight: 700;
    font-size: 1rem;
    transition: 0.2s;
    outline: none;
    &:hover {
      transform: scale(1.05);
    }
  }
  @media only screen and (max-width:${WIDTH800}){
      margin: 3rem 0;
    }
`;

const MoreInfo = styled.div`
  width: 33%;
  margin: 0 0 5rem 0;
  padding-left: 3rem;
  span {
    font-size: 1.7rem;
    font-family: Helvetica Neue, Arial, sans-serif;
    letter-spacing: 1.1px;
  }
  @media only screen and (max-width:${WIDTH800}){
      width:100%;
      padding:0;
    }
`;

const TextWrap = styled.div`
  display: flex;
  padding: 2rem 0;
  ul {
    padding-right: 0.5rem;
    margin-top: 2rem;
    font-size: 0.9rem;
    font-family: Helvetica Neue, Arial, sans-serif;
    font-weight: 400;
    color: gray;
    li {
      position: relative;
      margin-bottom: 1.7rem;
      &:hover {
        color: white;
      }
    }
  }
`;

const FooterBottomWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  p {
    font-size: 0.6rem;
    font-family: Helvetica Neue, Arial, sans-serif;
    font-weight: 700;
    color: gray;
  }
  p:last-child {
    margin-right: 3rem;
  }
`;

export default Footer;
