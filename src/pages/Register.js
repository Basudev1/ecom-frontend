import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/apiCalls";
function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const { isFetching, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleLogin = (e) => {
    e.preventDefault();
    if (password === cpassword) {
      // alert("password match");.
      console.log(username, email, password);
      register(dispatch, { username, email, password });
    } else {
      alert("password not match");
      setPassword("");
      setCpassword("");
    }
  };
  console.log(error);

  return (
    <Container>
      <Wrapper>
        {error && (
          <span style={{ color: "red" }}>Something went wrong, try again</span>
        )}
        <Title>Create An Account</Title>
        <Form>
          <Input
            placeholder="name"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setCpassword(e.target.value)}
          />
          <Agreement>
            By Creating an Account, I agree to the terms and conditions of the
            site., I also agree to Not to input any real payment information in
            this site.
          </Agreement>
          <Button onClick={handleLogin}>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  // background: gradient(to right, #fdfbfb, #ebedee);
  background: linear-gradient(to right, lightblue, lightyellow);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  @media only screen and (max-width: 600px) {
    width: 60%;
  }
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
const Agreement = styled.span`
  font-size: 14px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #25b7f8;
  color: white;
  cursor: pointer;
`;

export default Register;
