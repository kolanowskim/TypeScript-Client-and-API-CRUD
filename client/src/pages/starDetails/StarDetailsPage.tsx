import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  useLoaderData,
  LoaderFunctionArgs,
  Link,
  useNavigate,
} from "react-router-dom";
import useAllConstellations from "../../hooks/useAllConstellations";
import * as apiStar from "../../api/apiStars";
import * as apiStarCon from "../../api/apiStarCon";
import { Star, AllConstellations, Constellation } from "../../types/types";
import Dropdown from "../../components/Dropdown";
import UpdateStar from "./UpdateStar";

export const starDetailsLoader = async ({
  params,
}: LoaderFunctionArgs): Promise<Star> => {
  const data = await apiStar.getStar(params.id);
  return data.star[0];
};

const StarDetailsPage = () => {
  const starData = useLoaderData() as Star;
  const navigate = useNavigate();
  const { allConstellations } = useAllConstellations();

  const [starConstellations, setStarConstellations] =
    useState<AllConstellations>();
  const [dropDownValue, setDropdownValue] = useState<Constellation>();

  const getConstellations = () => {
    apiStarCon.getAllConstellationsForStar(starData.id).then(function (data) {
      setStarConstellations(data.Constellations);
    });
  };

  const addConstellation = () => {
    apiStarCon.addStarConstellation(starData?.id, dropDownValue?.id);
    window.location.reload();
  };

  const deleteStarConstellation = (id: number) => {
    apiStarCon.deleteStarConstellation(id);
    window.location.reload();
  };

  const deleteStar = () => {
    apiStar.deleteStar(starData.id);
    navigate("/stars");
  };

  useEffect(() => {
    getConstellations();
  }, [starData]);

  console.log(starData);
  return (
    <Container>
      <BackLink to="/stars">Cofnij</BackLink>
      <StarWrapper>
        <h3>Dane gwiazdy</h3>
        <P>Nazwa: {starData.name}</P>
        <P>Opis: {starData.description}</P>
        <P>Link: {starData.link}</P>
      </StarWrapper>
      <StarConstellationsContainer>
        <StarConstellationsWrapper>
          <p>Konstelacje do których należy gwiazda: </p>
          {starConstellations?.map((starCon) => (
            <P key={starCon.id}>
              {starCon.name}
              <button onClick={() => deleteStarConstellation(starCon.id)}>
                Usuń
              </button>
            </P>
          ))}
        </StarConstellationsWrapper>
      </StarConstellationsContainer>
      <AddConstellationContainer>
        <AddConstellationsWrapper>
          Dodaj nową konstelację:
          <Dropdown
            placeHolder="Select...."
            options={allConstellations}
            handleValue={setDropdownValue}
          />
          <Button onClick={() => addConstellation()}>Dodaj</Button>
        </AddConstellationsWrapper>
      </AddConstellationContainer>
      <UpdateStar
        id={starData.id}
        name={starData.name}
        description={starData.description}
        link={starData.link}
      />
      <DeleteButton onClick={() => deleteStar()}>Usuń gwiazdę</DeleteButton>
    </Container>
  );
};

export default StarDetailsPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StarWrapper = styled.div`
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

const StarConstellationsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StarConstellationsWrapper = styled.div`
  background-color: lightgrey;
  padding: 35px;
  margin-top: 50px;
`;

const AddConstellationContainer = styled.div`
  display: flex;
  align-items: center;
`;

const AddConstellationsWrapper = styled.div`
  background-color: lightgrey;
  padding: 35px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
