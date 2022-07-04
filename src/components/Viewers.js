import React from "react";
import styled from "styled-components";
import view1 from "../images/viewers-disney.png";
import view2 from "../images/viewers-pixar.png";
import view3 from "../images/viewers-marvel.png";
import view4 from "../images/viewers-starwars.png";
import view5 from "../images/viewers-national.png";

const Viewers = () => {
  return (
    <Container>
      <Wrap>
        <img src={view1} alt="" />
      </Wrap>
      <Wrap>
        <img src={view2} alt="" />
      </Wrap>
      <Wrap>
        <img src={view3} alt="" />
      </Wrap>
      <Wrap>
        <img src={view4} alt="" />
      </Wrap>
      <Wrap>
        <img src={view5} alt="" />
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 30px;
  display: grid;
  grid-gap: 25px;
  padding: 30px 0 26px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
`;
const Wrap = styled.div`
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  transition: all 250ms;
  border-radius: 10px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
export default Viewers;
