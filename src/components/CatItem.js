import React from "react";
import styled from "styled-components";
function CatItem({ item }) {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>Shop Now</Button>
      </Info>
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  z-index: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  @media only screen and (max-width: 400px) {
    height: 50%;
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
