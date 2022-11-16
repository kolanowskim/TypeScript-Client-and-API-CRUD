import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import useAllStars from "../../hooks/useAllStars";
import AddNewStar from "./AddNewStar";
import Navigation from "../../components/Navigation";

const StarsPage = () => {
  const [addNewStarView, setAddNewStarView] = useState(false);

  const { allStars } = useAllStars();

  return (
    <Container>
      <Navigation />
      <ButtonAddStar onClick={() => setAddNewStarView(true)}>
        Add new star
      </ButtonAddStar>
      {addNewStarView && <AddNewStar setAddNewStarView={setAddNewStarView} />}
      <StarsContainer>
        {allStars?.map((star) => (
          <StarWrapper key={star.id}>
            <h3>{star.name}</h3>
            <h3>{star.description}</h3>
            <RouteLink to={`/starDetails/${star.id}`}>
              Pokaż szczegóły
            </RouteLink>
          </StarWrapper>
        ))}
      </StarsContainer>
    </Container>
  );
};

export default StarsPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const RouteLink = styled(Link)`
  text-decoration: none;
  background-color: white;
  color: black;
  cursor: pointer;
  padding: 5px;
  border-radius: 5px;
`;

const ButtonAddStar = styled.button`
  height: 50px;
  width: 200px;
`;

const StarWrapper = styled.div`
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

const StarsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 20px;
`;
