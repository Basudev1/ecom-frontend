import styled from "styled-components";
import React, { useEffect, useState } from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { userRequest } from "../requestMethods";
import { Link, useNavigate } from "react-router-dom";
import { removeProduct } from "../redux/cartRedux";
const KEY = process.env.REACT_APP_STRIPE_KEY;
function Cart() {
  const user = localStorage.getItem("Authorization");
  const cart = useSelector((state) => state.cart);
  const quantity = useSelector((state) => state.cart.quantity);
  const [stripeToken, setStripeToken] = useState(null);
  let navigate = useNavigate();
  const onToken = (token) => {
    setStripeToken(token);
  };

  const product = cart.products.map((x) => ({
    productid: x._id,
    quantity: x.quantity,
  }));
  // console.log(product);

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const response = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        });
        const confirm = await userRequest.post("/orders", {
          userId: localStorage.getItem("userId"),
          products: product,
          amount: cart.total,
          address: "Dev.to",
        });
        navigate(`/success/`, { data: response.data });
        // console.log(stripeToken);
      } catch (error) {
        console.log(error);
      }
    };
    stripeToken && cart.total >= 1 && makeRequest();
  }, [stripeToken, cart.total, navigate]);
  const dispatch = useDispatch();
  const removeItem = (p) => {
    const product = cart.products.find((product) => product._id === p);
    // dispatch(removeProduct({ p, quantity }));
    console.log(product._id);
  };

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>Your Bag</Title>
        <Top>
          <TopButton>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              Continue Shopping
            </Link>
          </TopButton>
          <TopTexts>
            <TopText>Shopping Bag({quantity})</TopText>
            <TopText>Your Wishlist(0)</TopText>
          </TopTexts>
          <TopButton type="filled">Check Out Now</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <>
                <Product key={product._id}>
                  <ProductDetail>
                    <Image src={product.img} />
                    <Detail>
                      <ProductName>
                        <b>Product:</b> {product.title}
                      </ProductName>
                      <ProductId>
                        <b>ProductId:</b> {product._id}
                      </ProductId>
                      <ProductColor color={product.color} />
                      <ProductSize>
                        <b>Product Size: </b>
                        {product.size}
                      </ProductSize>
                    </Detail>
                  </ProductDetail>
                  <PriceDetails>
                    <>
                      <span
                        style={{
                          backgroundColor: "black",
                          color: "white",
                          padding: 3,
                          cursor: "pointer",
                        }}
                        onClick={() => removeItem(product._id)}
                      >
                        Remove Item
                      </span>
                    </>
                    <ProductAmountContainer>
                      <Add style={{ cursor: "pointer" }} />
                      <ProductAmount>{product.quantity}</ProductAmount>
                      <Remove style={{ cursor: "pointer" }} />
                    </ProductAmountContainer>
                    <ProductPrice>
                      ₹ {product.price * product.quantity}
                    </ProductPrice>
                  </PriceDetails>
                </Product>
                <Hr />
              </>
            ))}
          </Info>

          <Summary>
            {user === null && (
              <span
                style={{
                  display: "flex",
                  marginTop: 10,
                  fontWeight: "bold",
                  color: "red",
                }}
              >
                Login to checkout
              </span>
            )}
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>₹ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estamited Shipping</SummaryItemText>
              <SummaryItemPrice>₹ 149</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>₹ 149</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>₹ {cart.total}</SummaryItemPrice>
            </SummaryItem>

            <StripeCheckout
              name="DevShop." // the pop-in header title
              description={`Your Total is ₹${cart.total}`} // the pop-in header subtitle
              image="https://stripe.com/img/documentation/checkout/marketplace.png" // the pop-in header image (default none)
              // label="Buy the Thing" // text inside the Stripe button
              // panelLabel="Give Money" // prepended to the amount in the bottom pay button
              amount={cart.total * 100} // cents
              currency="INR"
              stripeKey={KEY}
              // shippingAddress
              // billingAddress
              token={onToken} // submit callback
              // opened={this.onOpened} // called when the checkout popin is opened (no IE6/7)
              // closed={this.onClosed} // called when the checkout popin is closed (no IE6/7)
              // Note: `reconfigureOnUpdate` should be set to true IFF, for some reason
              // you are using multiple stripe keys
              // reconfigureOnUpdate={false}
              // Note: you can change the event to `onTouchTap`, `onClick`, `onTouchStart`
              // useful if you're using React-Tap-Event-Plugin
              // triggerEvent="onTouchTap"
            >
              {/* <button className="btn btn-primary">
    Use your own child component, which gets wrapped in whatever
    component you pass into as "ComponentClass" (defaults to span)
  </button> */}
              <Button disabled={user === null}>CHECKOUT NOW</Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
}

const Summary = styled.div`
  flex: 1;
  height: 50vh;
  border: 0.5px solid grey;
  border-radius: 10px;
  padding: 20px;
  @media only screen and (max-width: 600px) {
    margin-top: 15px;
  }
`;

const SummaryTitle = styled.h2`
  font-weight: 200;
`;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 200;
  cursor: pointer;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;
const Detail = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  // margin-left: 20px;
  justify-content: space-around;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    padding: 0px 0px;
    margin-left: 10px;
  }
`;

const Product = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    padding: 0px;
  }
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  @media only screen and (max-width: 600px) {
    margin: 20px 20px;
  }
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  @media only screen and (max-width: 600px) {
    margin: 5px 15px;
  }
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Image = styled.img`
  width: 200px;
  @media only screen and (max-width: 600px) {
    width: 150px;
  }
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;

const PriceDetails = styled.div`
  flex: 1;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  @media only screen and (max-width: 600px) {
    padding: 10px;
  }
`;
const Container = styled.div``;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  //   padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  margin: 20px;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "#000000" : "transparent"};
  color: ${(props) => props.type === "filled" && "#ffffff"};
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const Info = styled.div`
  flex: 3;
`;
const TopTexts = styled.div`
  display: flex;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const TopText = styled.div`
  text-decoration: underline;
  font-weight: 600;
  cursor: pointer;
  margin: 0 10px;
`;
export default Cart;
