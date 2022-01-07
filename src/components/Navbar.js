import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import SearchIcon from "@mui/icons-material/Search";
import { Search, Menu, Close } from "@material-ui/icons";
// import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Badge from "@material-ui/core/Badge";
import { ShoppingBagOutlined } from "@mui/icons-material";
import { useSelector } from "react-redux";

function Navbar() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const quantity = useSelector((state) => state.cart.quantity);
  // console.log(quantity);
  return (
    <Container>
      <Wrapper show={showSearch}>
        <Left>
          <Icon>
            <Menu onClick={() => setBurgerStatus(true)} />
          </Icon>
          <SearchContainer>
            <Input />
            <Search
              style={{ color: "gray", fontSize: 25, marginLeft: "-35px" }}
            />
          </SearchContainer>
        </Left>
        <Center>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Logo>DevShop</Logo>
          </Link>
        </Center>
        <Right>
          <RegLog>
            <Link to="/register">
              <MenuItem>Register</MenuItem>
            </Link>
            <Link to="/register">
              <MenuItem>Login</MenuItem>
            </Link>
          </RegLog>
          <Icon>
            <Search onClick={() => setShowSearch(true)} />
          </Icon>
          <MenuItem>
            <Link to="/cart">
              <Badge badgeContent={quantity} color="primary">
                <ShoppingBagOutlined />
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
      <BurgerNav show={burgerStatus}>
        {/* show={burgerStatus} */}
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>

        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Cart</a>
        </li>
        <li>
          <a href="#">Categories</a>
        </li>
        <li>
          <a href="#">Login</a>
        </li>
        <li>
          <a href="#">Register</a>
        </li>
      </BurgerNav>
      <SearchIcon show={showSearch}>
        <Input
          placeholder="Search Products"
          style={{
            width: "70%",
            marginLeft: "15px",
            height: "50px",
            padding: "25px",
          }}
        />
        <CustomClose onClick={() => setShowSearch(false)} />
      </SearchIcon>
    </Container>
  );
}

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  background-color: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.3s ease-out;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  a {
    text-decoration: none;
    font-weight: 600;
  }
`;

const CustomClose = styled(Close)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Icon = styled.div`
  display: none;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
    display: block;
    align-items: center;
    justify-content: center;
  }
`;
const SearchIcon = styled.div`
  display: none;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
    display: ${(props) => (props.show ? "flex" : "none")};
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    position: fixed;
    width: 100%;
    transform: all 0.5s ease-out;
  }
`;

const RegLog = styled.div`
  display: flex;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const Container = styled.div`
  height: 60px;
  padding-bottom: 25px;
  border-bottom: 1px solid black;
  // background-color: #000000;
`;

const Wrapper = styled.div`
  padding: 5px 10px;
  margin: 0 15px;
  // display: flex;
  display: ${(props) => (props.show ? "none" : "flex")};
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
  // cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 10px;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

// const Input = styled.input`
//   // display: none;
//   border-radius: 3px;
//   border: 2px solid gray;
//   padding: 6px;
//   "&:focus": {
//     // display: block;
//     outline: none;
//     border: 2 px solid gray;
//   }
// `;

const Input = styled.input`
  width: 50px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  background-color: white;
  // background-image: url(https://i.imgur.com/MACjo6S.png);
  background-position: 10px 50px;
  background-repeat: no-repeat;
  padding: 10px 60px;
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;
  &:focus {
    width: 100%;
  }
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  text-decoration: none;
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
