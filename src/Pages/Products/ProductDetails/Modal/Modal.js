import React from "react";
import styled, { css } from "styled-components";
import { connect } from "react-redux";
import { openModal } from "../../../../store/actions";

const Modal = ({openModal, handleModal }) => {

  const closeTrigger = () => {
    openModal();
  }
   
    return( handleModal.handleModal ? 
       <>
        <ModalOverlay onClick={closeTrigger} />
        <ModalWrap>
          <Close onClick={closeTrigger}><i class="fas fa-times"></i></Close>
          <ModalBody>
            <Section>
              <Title>Free Ground Shipping on All Orders</Title>
              <Content>As we adjust to our new safety procedures, order processing may take up to 7 days. All orders include free ground shipping; expedited shipping is on hold for now. </Content>
              <P>More details</P>
            </Section>
            <Section>
              <Title>Returns & Exchanges</Title>
              <Content>Returns and exchanges are being accepted, but please expect delays due to staffing and safety requirements. Thanks for your patience during this time.</Content>
              <P>More details</P>
            </Section>
            <Section>
              <Title>We Guarantee Everything We Make</Title>
              <Content>If you are not satisfied with one of our products at the time you receive it, or if one of our products does not perform to your satisfopen, our Ironclad Guarantee allows you to return it for a replacement or refund at no charge. Damage due to wear and tear will be repaired at a reasonable charge.</Content>
            </Section>
          </ModalBody>
        </ModalWrap>
      </> 
         : 
      <></>          
    )
}


export default connect(null, {openModal} )(Modal) ;

const ModalOverlay = styled.div`
  position: fixed;
  height: 100vh;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0,0,0,0.38);
  z-index: 9;
`;

const ModalWrap = styled.div`
position: fixed;
z-index: 9;
top: 50%;
left: 50%;
width: 45%;
height: 85%;
overflow-y: scroll;
padding: 3% 5%;
background-color: black;
transform: translate(-50%, -50%);
-ms-overflow-style: none;
::-webkit-scrollbar {
  display: none;
}
`;

const Close = styled.div`
color: white;
font-size: 25px;
text-align: end;
cursor: pointer;
`

const ModalBody = styled.div`

width: 90%;
`

const Section = styled.div`
 margin: 20% 0;
 color: white;
  &:first-child{
    margin: 5% 0;
  }
`;

const Title = styled.h1`
  font-size: 16pt;
  font-weight: 800;
  `;

const Content = styled.p`
  font-size: 13pt;
  margin: 5% 0;
  line-height: 1.5;
  font-weight: 400;
`;

const P = styled.p`
 font-size: 11pt;
 font-weight: 700;
`







