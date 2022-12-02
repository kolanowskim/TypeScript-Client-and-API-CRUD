import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation";
import AddNewConstellation from "./AddNewConstellation";
import useAllConstellations from "../../hooks/useAllConstellations";

const ConstellationsPage = () => {
  const { allConstellations } = useAllConstellations();
  const [addNewConstellationView, setAddNewConstellationView] = useState(false);
  return (
    <Container>
      <Navigation />
      <ButtonAddConstellation onClick={() => setAddNewConstellationView(true)}>
        Dodaj nową konstelację
      </ButtonAddConstellation>
      {addNewConstellationView && (
        <AddNewConstellation
          setAddNewConstellationView={setAddNewConstellationView}
        />
      )}
      <ConstellationsContainer>
        {allConstellations?.map((constellation) => (
          <ConstellationWrapper key={constellation.id}>
            <h3>{constellation.name}</h3>
            <h3>{constellation.description}</h3>
            <RouteLink to={`/constellationDetails/${constellation.id}`}>
              Pokaż szczegóły
            </RouteLink>
          </ConstellationWrapper>
        ))}
      </ConstellationsContainer>
    </Container>
  );
};

export default ConstellationsPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RouteLink = styled(Link)`
  text-decoration: none;
  background-color: white;
  color: black;
  cursor: pointer;
  padding: 5px;
  border-radius: 5px;
`;

const ButtonAddConstellation = styled.button`
  height: 50px;
  width: 200px;
  cursor: pointer;
`;
const ConstellationsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 20px;
`;

const ConstellationWrapper = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  min-width: 300px;
  min-height: 200px;
  justify-content: center;
  align-items: center;
  background-color: lightblue;
  margin: 15px;
`;
