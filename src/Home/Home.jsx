import "./Home.css";
import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 5em;
  text-align: center;
  color: palevioletred;
`;

function template() {
  return (
    <div className="home">
      <Title>Home Page</Title>
    </div>
  );
}

export default template;
