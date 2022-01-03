import React from "react";
import styled from "styled-components";
import { categories } from "../data";
import CatItem from "../components/CatItem";
function Categories() {
  return (
    <Container>
      {categories.map((item) => (
        <CatItem item={item} key={item.id} />
      ))}
      {/* <CatItem /> */}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  // padding: 20px;
  justify-content: space-between;
  @media only screen and (max-width: 400px) {
    margin-top: 60px;
  }
`;
export default Categories;
