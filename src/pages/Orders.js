import { style } from "@mui/system";
import { useEffect, useState } from "react";
import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import { userRequest } from "../requestMethods";
function History() {
  const [product, setProduct] = useState({});
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await userRequest.get("/orders");
        setProduct(res.data);
        // let products = JSON.stringify(res.data);

        // console.log(products);
        // console.log(res.data[0].products[0].productid);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, []);

  //
  // populate through json
  //map the data
  // let data = [
  //   {
  //     _id: "61dd81c0750a1f2cc099500d",
  //     userId: "61d53f256a5e205903b86f3c",
  //     products: [
  //       {
  //         productid: "61d54f11b0f0bbd8babef2aa",
  //         quantity: 1,
  //         _id: "61dd81c0750a1f2cc099500e",
  //       },
  //       {
  //         productid: "61d54f21b0f0bbd8babef2ac",
  //         quantity: 1,
  //         _id: "61dd81c0750a1f2cc099500f",
  //       },
  //       {
  //         productid: "61d54f61470ec3422aa2b411",
  //         quantity: 1,
  //         _id: "61dd81c0750a1f2cc0995010",
  //       },
  //     ],
  //     amount: 60,
  //     address: "Dev.to",
  //     status: "pending",
  //     createdAt: "2022-01-11T13:10:24.973Z",
  //     updatedAt: "2022-01-11T13:10:24.973Z",
  //     __v: 0,
  //   },
  //   {
  //     _id: "61dd842b750a1f2cc099501d",
  //     userId: "61d53f256a5e205903b86f3c",
  //     products: [
  //       {
  //         productid: "61d54f61470ec3422aa2b411",
  //         quantity: 2,
  //         _id: "61dd842b750a1f2cc099501e",
  //       },
  //     ],
  //     amount: 40,
  //     address: "Dev.to",
  //     status: "pending",
  //     createdAt: "2022-01-11T13:20:43.235Z",
  //     updatedAt: "2022-01-11T13:20:43.235Z",
  //     __v: 0,
  //   },
  //   {
  //     _id: "61dd99fab4a14db4aee09764",
  //     userId: "61d53f256a5e205903b86f3c",
  //     products: [
  //       {
  //         productid: "61d54f61470ec3422aa2b411",
  //         img: "https://rukminim1.flixcart.com/image/880/1056/kwdv3bk0/kurta/c/4/0/m-863-blue-jaffry-embroidery-original-imag92nnqzyjmhyw.jpeg",
  //         quantity: 1,
  //         _id: "61dd99fab4a14db4aee09765",
  //       },
  //     ],
  //     amount: 20,
  //     address: "Dev.to",
  //     status: "pending",
  //     createdAt: "2022-01-11T14:53:46.909Z",
  //     updatedAt: "2022-01-11T14:53:46.909Z",
  //     __v: 0,
  //   },
  //   {
  //     _id: "61dd9a67b4a14db4aee09771",
  //     userId: "61d53f256a5e205903b86f3c",
  //     products: [
  //       {
  //         productid: "61d54f21b0f0bbd8babef2ac",
  //         img: "https://rukminim1.flixcart.com/image/880/1056/kwtkxow0/sweatshirt/j/n/r/8-9-years-d-s-105-dagcros-original-imag9exjzxtm6cqz.jpeg",
  //         quantity: 1,
  //         _id: "61dd9a67b4a14db4aee09772",
  //       },
  //       {
  //         productid: "61d6b0599d687950cbd5465b",
  //         img: "https://images.meesho.com/images/products/19395873/6b381_512.jpg",
  //         quantity: 1,
  //         _id: "61dd9a67b4a14db4aee09773",
  //       },
  //     ],
  //     amount: 40,
  //     address: "Dev.to",
  //     status: "pending",
  //     createdAt: "2022-01-11T14:55:35.387Z",
  //     updatedAt: "2022-01-11T14:55:35.387Z",
  //     __v: 0,
  //   },
  // ];

  // populate thriugh json
  // let data = [
  //   {
  //     _id: "61ddaf19e7a6f55e509c5360",
  //     userId: "61d53f256a5e205903b86f3c",
  //     products: [
  //       {
  //         productid: "61d54f11b0f0bbd8babef2aa",
  //         title: "Skull Cap Men Winter",
  //         img: "https://rukminim1.flixcart.com/image/880/1056/kws5hu80/cap/z/a/y/free-unisex-black-woolen-winter-beanie-cap-with-scarf-for-men-original-imag9dw2xfkwcxzb.jpeg",
  //         quantity: 1,
  //         _id: "61ddaf19e7a6f55e509c5361",
  //       },
  //       {
  //         productid: "61d54f21b0f0bbd8babef2ac",
  //         title: "Puma tshirts",
  //         img: "https://rukminim1.flixcart.com/image/880/1056/kwtkxow0/sweatshirt/j/n/r/8-9-years-d-s-105-dagcros-original-imag9exjzxtm6cqz.jpeg",
  //         quantity: 1,
  //         _id: "61ddaf19e7a6f55e509c5362",
  //       },
  //     ],
  //     amount: 40,
  //     address: "Dev.to",
  //     status: "pending",
  //     createdAt: "2022-01-11T16:23:53.229Z",
  //     updatedAt: "2022-01-11T16:23:53.229Z",
  //     __v: 0,
  //   },
  // ];
  // map the data products
  // write a function to map through the data
  let productsList = [];
  for (let i = 0; i < product.length; i++) {
    let products = product[i].products;

    for (let j = 0; j < products.length; j++) {
      // console.log(products[j]);
      productsList.push(products[j]);
    }
  }
  // console.log(productsList);
  //
  return (
    <Container>
      <Navbar />
      <Top>
        <Title>Order History</Title>
        <Products>Your Ordered Products</Products>
      </Top>
      <Wrapper>
        {productsList.map((product) => (
          <>
            <ProductDetail key={product.productid}>
              <Image src={product.img} />
              <Detail>
                <ProductName>
                  <b>Product:</b> {product.title}
                </ProductName>
                {/* <ProductId>
              <b>ProductId:</b> 23456789
            </ProductId> */}
                <ProductColor>
                  {" "}
                  <b>Product Id: </b>
                  {product.productid}
                </ProductColor>
                {/* <ProductSize>
                  <b>Product Size: </b>M
                </ProductSize> */}
              </Detail>
            </ProductDetail>
            <Details>
              <ProductName>
                <b>Status:</b> Pending
              </ProductName>
              <ProductId>
                <b>Order On:</b> {product.createdAt}
              </ProductId>
            </Details>
            <Hr />
          </>
        ))}

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
