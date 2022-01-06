import { Add, Remove } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
function Product() {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src="https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png" />
        </ImgContainer>
        <InfoContainer>
          <Title>Sticker Pack</Title>
          <Desc>
            desckfjdfhdjksf dskghdkjghds kdjghdsjkgs lfkasgiuyfjdhsd
            fdsfhdksjfhdjf kfjhdsfiufdskbvdhf dskfjdhfdf hfdfudfh
          </Desc>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="blue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XL</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>XS</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
}

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 30px 0px;
  // // @media only screen and (max-width: 600px) {
  //   // margin: 20px;
  // }
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  margin: 10px;
  padding: 10px;
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
  display: flex;
  aligh-items: center;
  justify-content: space-between;
  width: 50%;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 5px;
`;
const Button = styled.button`
  padding: 15px;
  border: 2px solid black;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
  @media only screen and (max-width: 600px) {
    padding: 0px 20px;
    font-weight: 200;
    margin-left: 30px;
  }
`;

const Price = styled.h3`
  font-size: 40px;
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Title = styled.h1``;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
  @media only screen and (max-width: 600px) {
    margin-bottom: 40px;
  }
`;

const Image = styled.img`
  width: 100%;
  //   height: 90vh;
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Wrapper = styled.div`
  padding: 50px;
  flex: 1;
  display: flex;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    padding: 0px;
    margin-top: 60px;
  }
`;
const Container = styled.div``;
export default Product;
