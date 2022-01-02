import React from "react";
import styled from "styled-components";
// import { useState } from "react";
// import SearchIcon from "@mui/icons-material/Search";
import { Search } from "@material-ui/icons";
// import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Badge from "@material-ui/core/Badge";
import { ShoppingBagOutlined } from "@mui/icons-material";

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{ color: "gray", fontSize: 25 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>DevShop</Logo>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Login</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingBagOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  height: 60px;
  // background-color: #000000;
`;

const Wrapper = styled.div`
  padding: 20px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-cintent: center;
`;

const SearchContainer = styled.div`
  // border: 1px solid gray;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 10px;
`;

const Input = styled.input`
  // display: none;
  border: 2px solid gray;
  padding: 6px;
  "&:focus": {
    // display: block;
    outline: none;
    border: 2 px solid gray;
  }
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 20px;
`;

export default Navbar;
