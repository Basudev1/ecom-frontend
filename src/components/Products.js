import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
const axios = require("axios");
function Products({ cat, filters, sort }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:3000/api/v1/products?category=${cat}`
            : "http://localhost:3000/api/v1/products"
        );
        setProducts(res.data["products"]);
        // console.log(res.data["products"]);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  //assending decending filter

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      {/* {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))} */}
      {cat
        ? filteredProducts.map((item) => <Product item={item} key={item._id} />)
        : products.map((item) => <Product item={item} key={item._id} />)}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  // grid-template-columns: 25% 25% 25% 25%;
  flex-wrap: wrap;
  margin-top: 10px;
  // margin: 20px;
  justify-content: center;
  align-items: center;
`;

export default Products;
