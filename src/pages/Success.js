import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { CheckCircle } from "@material-ui/icons";
function Success() {
  const location = useLocation();
  // console.log(location);
  return (
    <Container>
      <Wrapper>
        <Title>
          <Icon>
            <CheckCircle />
          </Icon>
          Payment Successful
        </Title>

        <Desc>
          Congratulations..<br></br> Your Order Has Been Placed,<br></br> You
          will receive your Product Very Soon
        </Desc>
        <Continue>
          <ContBtn style={{ marginBottom: 10 }}>
            <Link style={{ textDecoration: "none" }} to="/">
              Contine Shopping
            </Link>
          </ContBtn>
          <ContBtn>
            <Link style={{ textDecoration: "none" }} to="/orders">
              View Orders
            </Link>
          </ContBtn>
        </Continue>
      </Wrapper>
    </Container>
  );
}

const ContBtn = styled.div`
  border: 2px solid black;
  padding: 10px;
  background-color: white;
  cursor: pointer;
`;
const Continue = styled.div`
  margin-top: 150px;
`;
const Title = styled.h1``;
const Icon = styled.span`
  color: #42f59b;
`;
const Desc = styled.div`
  padding: 10px;
  marginn: 10px;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2 px solid #dedeb4;
  border-radius: 4px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  height: 500px;
  width: 700px;
  background-color: lightyellow;
`;
export default Success;
