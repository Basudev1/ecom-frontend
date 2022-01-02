import React from "react";
import styled from "styled-components";
function Announcement() {
  return (
    <Container>
      Due to COVID-19 the DevShop is experiencing slight delays in shipping.
    </Container>
  );
}

const Container = styled.div`
  height: 45px;
  background-color: #25b7f8;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: bold;
  font-family: "Ubuntu", sans-serif;
`;

export default Announcement;
