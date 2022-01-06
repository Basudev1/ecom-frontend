import { Add, Remove } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
function Product() {
  const loaction = useLocation();
  const id = loaction.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
        // console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleAddToCart = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
  };
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>$ {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map((col) => (
                <FilterColor
                  color={col}
                  key={col}
                  onClick={() => setColor(col)}
                />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove
                onClick={() => handleQuantity("dec")}
                style={{ cursor: "pointer" }}
              />
              <Amount>{quantity}</Amount>
              <Add
                onClick={() => handleQuantity("inc")}
                style={{ cursor: "pointer" }}
              />
            </AmountContainer>
            <Button onClick={handleAddToCart}>ADD TO CART</Button>
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
    margin-bottom: 10px;
  }
`;

const Image = styled.img`
  width: 84%;
  margin: 30px;
  height: 75%;
  //   height: 90vh;
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Wrapper = styled.div`
  padding: 30px;
  flex: 1;
  display: flex;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    padding: 0px;
    margin-top: 10px;
  }
`;
const Container = styled.div``;
export default Product;
