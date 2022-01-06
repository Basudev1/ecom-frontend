import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Products from "../components/Products";
// import SliderP from "../components/SliderP";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Announcement />
      <Navbar />
      {/* <SliderP /> */}
      <Categories />
      <Products />
      <NewsLetter />
      <Footer />
    </>
  );
}

export default Home;
