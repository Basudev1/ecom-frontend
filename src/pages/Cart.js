import styled from "styled-components";
import React from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import { useSelector } from "react-redux";

function Cart() {
  const cart = useSelector((state) => state.cart);
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>Your Bag</Title>
        <Top>
          <TopButton>Continue Shopping</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist(0)</TopText>
          </TopTexts>
          <TopButton type="filled">Check Out Now</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <>
                <Product>
                  <ProductDetail>
                    <Image src={product.img} />
                    <Detail>
                      <ProductName>
                        <b>Product:</b> {product.title}
                      </ProductName>
                      <ProductId>
                        <b>ProductId:</b> {product._id}
                      </ProductId>
                      <ProductColor color={product.color} />
                      <ProductSize>
                        <b>Product Size: </b>
                        {product.size}
                      </ProductSize>
                    </Detail>
                  </ProductDetail>
                  <PriceDetails>
                    <ProductAmountContainer>
                      <Add style={{ cursor: "pointer" }} />
                      <ProductAmount>{product.quantity}</ProductAmount>
                      <Remove style={{ cursor: "pointer" }} />
                    </ProductAmountContainer>
                    <ProductPrice>
                      {" "}
                      $ {product.price * product.quantity}
                    </ProductPrice>
                  </PriceDetails>
                </Product>
                <Hr />
              </>
            ))}

            {/* <Product>
              <ProductDetail>
                <Image src="https://rukminim1.flixcart.com/image/880/1056/k6jnfrk0/shoe/z/x/9/171-8-pexlo-black-tan-original-imafzqbthfzkqv76.jpeg?q=50" />
                <Detail>
                  <ProductName>
                    <b>Product:</b>Cheviti Teen
                  </ProductName>
                  <ProductId>
                    <b>ProductId:</b>1233343435
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Product Size:</b>M
                  </ProductSize>
                </Detail>
              </ProductDetail>
              <PriceDetails>
                <ProductAmountContainer>
                  <Add style={{ cursor: "pointer" }} />
                  <ProductAmount>2</ProductAmount>
                  <Remove style={{ cursor: "pointer" }} />
                </ProductAmountContainer>
                <ProductPrice> $ 20</ProductPrice>
              </PriceDetails>
            </Product> */}
          </Info>

          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estamited Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
}

const Summary = styled.div`
  flex: 1;
  height: 50vh;
  border: 0.5px solid grey;
  border-radius: 10px;
  padding: 20px;
  @media only screen and (max-width: 600px) {
    margin-top: 15px;
  }
`;

const SummaryTitle = styled.h2`
  font-weight: 200;
`;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 200;
  cursor: pointer;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;
const Detail = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  // margin-left: 20px;
  justify-content: space-around;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    padding: 0px 0px;
    margin-left: 10px;
  }
`;

const Product = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    padding: 0px;
  }
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  @media only screen and (max-width: 600px) {
    margin: 20px 20px;
  }
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  @media only screen and (max-width: 600px) {
    margin: 5px 15px;
  }
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Image = styled.img`
  width: 200px;
  @media only screen and (max-width: 600px) {
    width: 150px;
  }
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;

const PriceDetails = styled.div`
  flex: 1;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  @media only screen and (max-width: 600px) {
    padding: 10px;
  }
`;
const Container = styled.div``;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  //   padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  margin: 20px;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "#000000" : "transparent"};
  color: ${(props) => props.type === "filled" && "#ffffff"};
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const Info = styled.div`
  flex: 3;
`;
const TopTexts = styled.div`
  display: flex;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const TopText = styled.div`
  text-decoration: underline;
  font-weight: 600;
  cursor: pointer;
  margin: 0 10px;
`;
export default Cart;
