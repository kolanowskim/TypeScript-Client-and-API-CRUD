import React from "react";
import styled from "styled-components";
import Navigation from "../../components/Navigation";
import UserName from "./UserName";

const MainPage = () => {
  return (
    <Container>
      <Navigation />
      <UserName />
    </Container>
  );
};

export default MainPage;

const Container = styled.div``;
