import React from "react";
import styled from "styled-components";
function Login() {
  return (
    <Container>
      <Wrapper>
        <Title>Login</Title>
        <Form>
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Button>Login</Button>
        </Form>
        <Links>
          <Link to="/asf">Forgot Password</Link>
          <Link to="/register">Create an Account</Link>
        </Links>
      </Wrapper>
    </Container>
  );
}

const Link = styled.a``;
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
  flex-direction: column;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
const Links = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px;
  justify-content: space-between;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #25b7f8;
  color: white;
  cursor: pointer;
  margin-top: 10px;
`;

export default Login;
