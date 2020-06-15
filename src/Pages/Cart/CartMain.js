import React, {useState, useEffect}  from "react";
import styled, {css} from "styled-components";
import Header from "../../Component/Header/Header";
import CartItem from "../Cart/CartItem";
import Footer from "../../Component/Footer/Footer";

const CartMain = () => {

    const [addedItem, setAddedItem] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3000/data/data.json')
        .then(res => res.json())
        .then(res => setAddedItem(res.added_items))
    }, [])

    console.log(addedItem)

 return ( 
     <>
      <Header />
      <Wrap>
          <CartSection>
            <h1>Your Bag (2)</h1>
            {addedItem.map(i => 
                <CartItem title={i.item_title} price={i.price} color={i.color} size={i.size} qty={i.qty} image={i.image_url} />
                )}
          </CartSection>
          <SummarySection>
            <h1>Order Summary</h1>
            <Content>
              <SubTotal>
               <p>Subtotal</p>
               <Bold>$298.00</Bold>
              </SubTotal>
              <Estimated>
                  <p>Estimated Tax</p>
                  <Bold>Free</Bold>
               </Estimated>
               <Tax>
                   <p>Estimated Tax</p>
                   <Bold>.</Bold>
               </Tax>
               <Promo>Have a Promo Code ? </Promo>
                <Total>
                <p>Estimated Total</p>
                <Bold>$298.00</Bold>  
                </Total> 
                <Button>Checkout</Button> 
            </Content>
         
          </SummarySection>
      </Wrap>
      <Footer />
    </> 
 );    
}

export default CartMain ;


const Wrap = styled.div`
width: 90%;
margin: 0 auto;
padding: 13% 0;
display: flex;
`;

const CartSection = styled.div`
width: 63%;


 h1 {
    margin:6% ;
    font-size: 30px;
 }
`;

const SummarySection = styled.section`
width: 37%;
height: 600px;
margin-left: 5%;
background-color: black;
color: white;
border-radius: 0.5rem;
 h1 {
     font-size: 30px;
     margin:10% ;
 }
`;

const Content = styled.div`
display: flex;
flex-direction: column;
margin: 10%;
height:70%;
font-weight: 300;
`;

const SubTotal = styled.div`
display: flex;
justify-content: space-between;
padding-bottom: 12%;
`;

const Estimated= styled.div`
display: flex;
justify-content: space-between;
padding-bottom: 15%;
`;

const Tax = styled.div`
display: flex;
justify-content: space-between;
padding-bottom: 12%;
`

const Promo = styled.div`
padding-bottom: 10%;
font-weight: 800;
`;

const Total = styled.div`
display: flex;
justify-content: space-between;
padding-top: 6%;
padding-bottom: 12%;
border-top: 1.8px solid #222222;
`;

const Bold = styled.div`
font-weight: 800;
`;

const Button = styled.button`
background-color: #FA4716;
width: 95%;
height: 12%;
border-radius: 2rem;
color: white;
font-size: 16px;
font-weight: 800;
transition: all 0.3s ease-in-out;
 &:hover{
     transform: scale(1.05);
 }


`;




