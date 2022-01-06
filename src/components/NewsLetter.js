import { Send } from "@material-ui/icons";
import styled from "styled-components";
import React from "react";

function NewsLetter() {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>
        Subscribe to our Newsletter And Get Trending Products
      </Description>
      <InputContainer>
        <Input placeholder="Your Email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
}

const Container = styled.div`
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fcf5f5;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  @media only screen and (max-width: 600px) {
    font-size: 40px;
  }
`;
const Description = styled.p`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  text-align: center;
  @media only screen and (max-width: 600px) {
    font-size: 20px;
    font-weight: 200;
    margin: 10px;
  }
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: black;
  color: white;
`;

export default NewsLetter;
