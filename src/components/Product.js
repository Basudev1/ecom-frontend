import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
function Product({ item }) {
  return (
    <Container>
      <Circle>
        <Image src={item.img} />
      </Circle>
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <Link to={`/product/${item._id}`}>
            <SearchOutlined />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
}

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  margin: 10px;
  transition: all 0.5s ease;
  cursor: pointer;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;
const Info = styled.div`
  opacity: 0;
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  color: gray;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  justify-content: center;
  align-items: center;
  z-index: 3;
  transition: all 0.5s ease;
`;
const Image = styled.img`
  height: 100%;
  z-index: 2;
  display: flex;
  align-items: center;
`;
const Circle = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;
const Container = styled.div`
  // flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 285px;
  height: 350px;
  background: #f5fbfd;
  margin: 5px;
  position: relative;
  z-index: 3;
  &:hover ${Info} {
    opacity: 1;
  }
`;
export default Product;
