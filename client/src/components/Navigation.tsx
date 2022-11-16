import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Container>
      <NavWrapper>
        <LinkRoute to="/">Strona Główna</LinkRoute>
        <LinkRoute to="/stars">Gwiazdy</LinkRoute>
        <LinkRoute to="/constellations">Konstelacje</LinkRoute>
      </NavWrapper>
    </Container>
  );
};

export default Navigation;

const Container = styled.nav`
  width: 100vw;
  height: 60px;
  text-align: center;
  background: lightgray;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavWrapper = styled.div``;

const LinkRoute = styled(Link)`
  padding: 7px;
  background-color: white;
  border: none;
  text-decoration: none;
  color: black;
  margin: 0 30px 0 30px;
  border-radius: 10px;
  display: inline-block;
`;
