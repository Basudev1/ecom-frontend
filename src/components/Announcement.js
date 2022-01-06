import React from "react";
import styled from "styled-components";
function Announcement() {
  return (
    <Container>
      <p>
        Please Do not enter your Payment Details here. This site is only for
        dev.to Mongodb Hackathon Only
      </p>
    </Container>
  );
}

const Container = styled.div`
  height: 50px;
  padding: 10px 0px;
  text-align: center;
  background-color: #25b7f8;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  // font-weight: bold;
  font-family: "Ubuntu", sans-serif;
`;

export default Announcement;
