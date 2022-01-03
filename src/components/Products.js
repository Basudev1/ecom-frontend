import React from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
function Products() {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
  justify-content: center;
  align-items: center;
`;

export default Products;
