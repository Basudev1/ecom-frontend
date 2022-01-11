import { style } from "@mui/system";
import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
function History() {
  return (
    <Container>
      <Navbar />
      <Top>
        <Title>Order History</Title>
        <Products>Products</Products>
      </Top>
      <Wrapper>
        <ProductDetail>
          <Image src="https://rukminim1.flixcart.com/image/880/1056/kws5hu80/cap/z/a/y/free-unisex-black-woolen-winter-beanie-cap-with-scarf-for-men-original-imag9dw2xfkwcxzb.jpeg" />
          <Detail>
            <ProductName>
              <b>Product:</b> Skull Cap
            </ProductName>
            {/* <ProductId>
              <b>ProductId:</b> 23456789
            </ProductId> */}
            <ProductColor>
              {" "}
              <b>Product Color: </b>Black
            </ProductColor>
            <ProductSize>
              <b>Product Size: </b>M
            </ProductSize>
          </Detail>
        </ProductDetail>
        <Details>
          <ProductName>
            <b>Status:</b> Pending
          </ProductName>
          <ProductId>
            <b>Order On:</b> 30days ago
          </ProductId>
        </Details>
        <Hr />
        <ProductDetail>
          <Image src="https://rukminim1.flixcart.com/image/880/1056/kws5hu80/cap/z/a/y/free-unisex-black-woolen-winter-beanie-cap-with-scarf-for-men-original-imag9dw2xfkwcxzb.jpeg" />
          <Detail>
            <ProductName>
              <b>Product:</b> Skull Cap
            </ProductName>
            {/* <ProductId>
              <b>ProductId:</b> 23456789
            </ProductId> */}
            <ProductColor>
              {" "}
              <b>Product Color: </b>Black
            </ProductColor>
            <ProductSize>
              <b>Product Size: </b>M
            </ProductSize>
          </Detail>
        </ProductDetail>
        <Details>
          <ProductName>
            <b>Status:</b> Pending
          </ProductName>
          <ProductId>
            <b>Order On:</b> 30days ago
          </ProductId>
        </Details>
        <Hr />
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
}

const Hr = styled.hr`
  background-color: #eee;
  color: #eee;
  border: 1px solid #eee;
  height: 1px;
`;
const Image = styled.img`
  width: 200px;
  @media only screen and (max-width: 600px) {
    width: 150px;
  }
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.span``;
// const ProductColor = styled.div`
//   width: 20px;
//   height: 20px;
//   border-radius: 50%;
//   background-color: ${(props) => props.color};
// `;
const ProductSize = styled.span``;

const PriceDetails = styled.div`
  flex: 1;

  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;
const Detail = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-right: 200px;
  // margin-left: 20px;
  justify-content: space-around;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    padding: 0px 0px;
    margin-left: 20px;
    margin-right: 20px;
  }
`;
const Details = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  margin-right: 200px;
  // margin-left: 20px;
  justify-content: space-around;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    padding: 0px 0px;
    margin-left: 20px;
    margin-right: 20px;
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
  padding: 20px;
  // flex: 2;
  display: flex;
`;

const Wrapper = styled.div`
  // height: 500px;
  // width: 700px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
const Products = styled.h3`
  padding: 20px;
  margin: 10px;
`;

const Title = styled.h1`
  padding: 20px;
`;

const Top = styled.div`
// display: flex;
height: 500px
width: 80%;
margin-top:20px;`;
const Container = styled.div``;
export default History;
