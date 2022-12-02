import React, { useState, useEffect } from "react";
import {
  useLoaderData,
  LoaderFunctionArgs,
  Link,
  useNavigate,
} from "react-router-dom";
import styled from "styled-components";
import { AllStars, Star, Constellation } from "../../types/types";
import * as apiCon from "../../api/apiConstellations";
import * as apiStarCon from "../../api/apiStarCon";
import useAllStars from "../../hooks/useAllStars";
import Dropdown from "../../components/Dropdown";
import UpdateConstellation from "./UpdateConstellation";

export const constellationDetailsLoader = async ({
  params,
}: LoaderFunctionArgs): Promise<Constellation> => {
  const data = await apiCon.getConstellation(params.id);
  return data.constellation[0];
};

const ConDetailsPage = () => {
  const constellationData = useLoaderData() as Constellation;
  const navigate = useNavigate();
  const { allStars } = useAllStars();

  const [constellationStars, setConstellationStars] = useState<AllStars>();
  const [dropDownValue, setDropdownValue] = useState<Star>();

  const getStars = () => {
    apiStarCon
      .getAllStarsForConstellation(constellationData.id)
      .then(function (data) {
        setConstellationStars(data.Stars);
      });
  };

  const addStar = () => {
    apiStarCon.addStarConstellation(dropDownValue?.id, constellationData?.id);
    window.location.reload();
  };

  const deleteStarConstellation = (id: number) => {
    apiStarCon.deleteStarConstellation(id);
    window.location.reload();
  };

  const deleteStar = () => {
    apiCon.deleteConstellation(constellationData.id);
    navigate("/constellations");
  };

  useEffect(() => {
    getStars();
  }, [constellationData]);

  return (
    <Container>
      <BackLink to="/constellations">Cofnij</BackLink>
      <ConstellationWrapper>
        <h3>Dane konstelacji</h3>
        <P>Nazwa: {constellationData.name}</P>
        <P>Opis: {constellationData.description}</P>
        <P>Link: {constellationData.link}</P>
      </ConstellationWrapper>
      <ConstellationStarsContainer>
        <ConstellationStarsWrapper>
          <p>Gwiazdy znajdujące się w tej konstelacji: </p>
          {constellationStars?.map((starCon) => (
            <P key={starCon.id}>
              {starCon.name}
              <button onClick={() => deleteStarConstellation(starCon.id)}>
                Usuń
              </button>
            </P>
          ))}
        </ConstellationStarsWrapper>
      </ConstellationStarsContainer>
      <AddStarContainer>
        <AddStarWrapper>
          Dodaj nową gwiazdę:
          <Dropdown
            placeHolder="Select...."
            options={allStars}
            handleValue={setDropdownValue}
          />
          <Button onClick={() => addStar()}>Dodaj</Button>
        </AddStarWrapper>
      </AddStarContainer>
      <UpdateConstellation
        id={constellationData.id}
        name={constellationData.name}
        description={constellationData.description}
        link={constellationData.link}
      />
      <DeleteButton onClick={() => deleteStar()}>Usuń konstelację</DeleteButton>
    </Container>
  );
};

export default ConDetailsPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ConstellationWrapper = styled.div`
  background-color: lightgrey;
  padding: 35px;
  margin-top: 50px;
  width: 50%;
`;

const P = styled.p`
  background-color: white;
  border-radius: 3px;
  padding: 10px;
`;

const Button = styled.button`
  width: 100px;
  padding: 5px;
  border-radius: 5px;
  background: white;
  border: none;
  cursor: pointer;
  transition: 0.2s;

  :hover {
    background-color: lightblue;
  }
`;

const DeleteButton = styled.button`
  background-color: rgb(254, 121, 104);
  border: none;
  padding: 15px;
  font-size: 20px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.2s;
  margin-top: 20px;
  :hover {
    background-color: rgb(196, 77, 86);
  }
`;

const BackLink = styled(Link)`
  background-color: lightblue;
  padding: 15px;
  border-radius: 10px;
  text-decoration: none;
  color: black;
  transition: 0.2s;

  :hover {
    background-color: rgb(11, 127, 171);
  }
`;

const ConstellationStarsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ConstellationStarsWrapper = styled.div`
  background-color: lightgrey;
  padding: 35px;
  margin-top: 50px;
`;

const AddStarContainer = styled.div`
  display: flex;
  align-items: center;
`;

const AddStarWrapper = styled.div`
  background-color: lightgrey;
  padding: 35px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
