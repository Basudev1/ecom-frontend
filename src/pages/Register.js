import React from "react";
import styled from "styled-components";
function Register() {
  return (
    <Container>
      <Wrapper>
        <Title>Create An Account</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="Confirm Password" />
          <Agreement>
            By Creating an Account, I agree to the terms and conditions of the
            site., I also agree to Not to input any real payment information in
            this site.
          </Agreement>
          <Button>CREATE</Button>
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
