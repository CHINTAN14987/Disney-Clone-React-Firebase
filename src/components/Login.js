import React from "react";
import styled from "styled-components";
import login1 from "../images/cta-logo-one.svg";
import logo2 from "../images/cta-logo-two.png";
import login from "../images/login-background.jpg";

const Login = () => {
  return (
    <Container>
      <Box>
        <LogoOne src={login1} />
        <SignUp>Get All There</SignUp>
        <Description>
          Enjoy online streaming of New on Disney+ Hotstar Premium videos on
          Disney+ Hotstar - one stop destination for all latest TV shows,
          blockbuster movies.
        </Description>
        <LogoTwo src={logo2} />
      </Box>
    </Container>
  );
};
const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    background: url(${login});
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    content: "";
    position: absolute;
    opcaity: 0.8;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
`;
const Box = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  align-items: center;
`;

const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  text-align: center;
  padding: 17px 0;
  font-size: 18px;
  cursor: pointer;
  color: #f9f9f9;
  border-radius: 4px;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 80px;
  margin-bottom: 12px;
  &:hover {
    background-color: #0483ee;
  }
`;
const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`;
const LogoOne = styled.img``;
const LogoTwo = styled.img`
  width: 90%;
`;
export default Login;
