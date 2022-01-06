import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
function CatItem({ item }) {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>Shop Now</Button>
        </Info>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
  margin: 5px;
  // height: 50vh;
  z-index: 1;
  // @media only screen and (max-width: 400px) {
  //   display: flex;
  //   flex-direction: column;
  // }
`;
const Image = styled.img`
  width: 100%;
  height: 50vh;
  @media only screen and (max-width: 400px) {
    height: 30vh;
  }
  object-fit: cover;
`;
const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h3``;
const Button = styled.button``;

export default CatItem;
