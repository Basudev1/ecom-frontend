import {
  Email,
  Facebook,
  Instagram,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
function Footer() {
  return (
    <Container>
      <Left>
        <Logo>DevShop</Logo>
        <Description>
          This is a Shop dedicated to Developers, Especially this shop is built
          by a Developer for the Developers, This Shop Not only for dev.to fans,
          also a Showcase for Mongodb Hackathon
        </Description>
        <SocialContainer>
          <SocialIcon>
            <Facebook />
          </SocialIcon>
          <SocialIcon>
            <Instagram />
          </SocialIcon>
          <SocialIcon>
            <Twitter />
          </SocialIcon>
          <SocialIcon>
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>My Cart</ListItem>
          <ListItem>Order History</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Privacy Policy</ListItem>
          <ListItem>Terms and Cond.</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact Us</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          1234 dev.to University
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +9100000000
        </ContactItem>
        <ContactItem>
          <Email style={{ marginRight: "10px" }} /> contact@contact.nothing
        </ContactItem>
      </Right>
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
  display: flex;
`;
const Logo = styled.h1``;
const Description = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;
const Left = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h2`
  margin-top: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export default Footer;
