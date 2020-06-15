import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { withRouter, Link } from "react-router-dom";
import Header from "../../Component/Header/Header";

const SignIn = ({ history }) => {

  const goToMain = () => {
    history.push('/products');
  }

  const loginWithKakao = () => {
    window.Kakao.Auth.login({
      success: (authObj) => {
        console.log("success : ", authObj);
        fetch('http://10.58.0.221:8000/member/kakao', {
      headers: {
        "Authorization": authObj.access_token
      },
       }).then(res => res.json())
       .then(res => {if(res.message === 'SUCCESS'){
         localStorage.setItem("patago_token", res.token);
         alert('Successfully Signed in!')
         goToMain();
       }
       }) 
      },
      fail: function (err) {
        console.log("에러", err);
      },
    })
  };


  return (
    <>
      <Header />
      <Wrap>
        <SigninSec>
          <SigninContent>
            <Title>Sign In.</Title>
            <InputWrap>
              <input type="text" placeholder="Email *" />
              <input type="password" placeholder="Password *" />
            </InputWrap>
            <UnderInput>
              <RememberWrap>
                <input type="checkbox" value="Remember me" />
                <span> Remember me </span>
              </RememberWrap>
              <P>Password Help?</P>
            </UnderInput>
            <BtnWrap>
              <Button>Sign In</Button>
              <Button
                onClick={loginWithKakao}
                style={{ "backgroundColor": "#FEE500", color: "black" }}
              >
                Sign in with Kakao
              </Button>
              <Button style={{ "backgroundColor": "#DF4A32" }}>
                Sign in with Google
              </Button>
            </BtnWrap>
          </SigninContent>
        </SigninSec>
        <FindOrderSec>
          <OrderContents>
            <OrderTitle>Looking for your order?</OrderTitle>
            <OrderDesc>
              See your order even if you are not a registered user. Enter the
              order number and your last name.
            </OrderDesc>
            <OrderBtn>Find Your Order</OrderBtn>
          </OrderContents>
        </FindOrderSec>
      </Wrap>
      {/* <Footer /> */}
    </>
  );
};

export default withRouter(SignIn);

const Wrap = styled.div`
  width: 100vw;
  min-width: 1200px;
  height: 100vh;
  display: flex;
`;

const SigninSec = styled.section`
  width: 50%;
  height: 100%;
  margin-top: 8%;
`;

const SigninContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 60%;
  height: 70%;
  margin: 10% auto;
`;

const Title = styled.h1`
  font-size: 55px;
  font-weight: 900;
`;

const InputWrap = styled.div`
  display: flex;
  flex-direction: column;

  input {
    width: 380px;
    height: 42px;
    margin-bottom: 20px;
    font-size: 16px;
    background-color: transparent;
    border-width: 0 0 2px;
    border-color: black;
    outline: none;
  }
`;

const UnderInput = styled.div`
  display: flex;
  width: 380px;
  justify-content: space-between;
  align-items: center;
`;

const RememberWrap = styled.div``;

const P = styled.div`
  font-weight: 800;
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
`;

const BtnWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 35%;
`;

const Button = styled.button`
  width: 80%;
  height: 27%;
  border-radius: 3rem;
  background-color: black;
  margin-right: 2rem;
  color: white;
  font-weight: 700;
  font-size: 1rem;
  transition: 0.2s;
  box-shadow: 0 6px 8px 0 rgba(0, 0, 0, 0.2);
  &:hover {
    transform: scale(1.05);
  }
`;

const FindOrderSec = styled.section`
  width: 30%;
  height: 60%;
  background-color: black;
  border-radius: 3%;
  color: white;
  margin-top: 13%;

`;

const OrderContents = styled.div`
  width: 80%;
  height: 80%;
  margin: 0 auto;
  padding: 15% 0;
`;

const OrderTitle = styled.h1`
  font-size: 30px;
`;

const OrderDesc = styled.p`
  font-size: 17px;
  margin: 10% 0;
  width: 85%;
  line-height: 2;
`;

const OrderBtn = styled.button`
  width: 100%;
  height: 22%;
  margin-top: 20%;
  border-radius: 3rem;
  border: 0.3rem solid #ffffff;
  background-color: transparent;
  font-weight: 700;
  font-size: 1rem;
  color: white;
  transition: 0.2s;
  &:hover {
    transform: scale(1.05);
  }
`;
