import { useState, useEffect } from "react";
import styled from "styled-components";
import { Star, Constellation, StarConstellation } from "../../types/types";
import Dropdown from "../../components/Dropdown";
import useAllStars from "../../hooks/useAllStars";
import useAllConstellations from "../../hooks/useAllConstellations";
import addStarConstellation from "../../api/addStarConstellation";
import getAllConstellationsForStar from "../../api/getAllConstellationsForStar";
import getStar from "../../api/getStar";
import { addNewStar as APIaddNewStar } from "../../api/addNewStar";
import { deleteStar as APIdeleteStar } from "../../api/deleteStar";

const StarsPage = () => {
  const [dropdownValue, setDropdownValue] = useState<Constellation>();
  const [addView, setAddView] = useState(false);
  const [selectedStar, setSelectedStar] = useState<Star>();
  const [displayConView, setDisplayConView] = useState(false);
  const [allConstellationsForStar, setAllConstellationsForStar] =
    useState<StarConstellation>();
  const [starDetails, setStarDetails] = useState<Star>();
  const [starDetailsView, setStarDetailsView] = useState(false);
  const [addNewStarView, setAddNewStarView] = useState(false);
  const [addNewStarName, setAddNewStarName] = useState("");
  const [addNewStarDescription, setAddNewStarDescription] = useState("");
  const [addNewStarLink, setAddNewStarLink] = useState("");

  const { allStars } = useAllStars();
  const { allConstellations } = useAllConstellations();

  const constellationToStarView = (star: Star) => {
    console.log(star.id);
    setSelectedStar(star);
    setAddView(true);
  };

  const displayConstelations = (id: number) => {
    getAllConstellationsForStar(id).then(function (data) {
      setAllConstellationsForStar(data.Constellations);
    });
    setDisplayConView(true);
  };

  const displayStarDetailes = (id: number) => {
    getStar(id).then(function (data) {
      setStarDetails(data.star[0]);
    });
    setStarDetailsView(true);
  };

  const addNewStar = () => {
    console.log("add");
    APIaddNewStar(addNewStarName, addNewStarDescription, addNewStarLink);
  };

  const deleteStar = (id: number) => {
    APIdeleteStar(id);
    window.location.reload();
  };

  return (
    <Container>
      <ButtonAddStar onClick={() => setAddNewStarView(true)}>
        Add new star
      </ButtonAddStar>
      {addNewStarView && (
        <StarDetailesContainer>
          <button onClick={() => setAddNewStarView(false)}>Wyjdź</button>
          <FormAddStar onSubmit={addNewStar}>
            <label>
              Nazwa gwiazdy:
              <input
                type="text"
                required
                onChange={(e) => setAddNewStarName(e.target.value)}
              />
            </label>

            <label>
              Opis:
              <input
                type="text"
                required
                onChange={(e) => setAddNewStarDescription(e.target.value)}
              />
            </label>
            <label>
              Link:
              <input
                type="text"
                required
                onChange={(e) => setAddNewStarLink(e.target.value)}
              />
            </label>
            <button type="submit">Dodaj</button>
          </FormAddStar>
        </StarDetailesContainer>
      )}
      <StarsContainer>
        {allStars?.map((star) => (
          <StarWrapper key={star.id}>
            <h3>{star.name}</h3>
            <h3>{star.description}</h3>
            <button onClick={() => displayStarDetailes(star.id)}>
              Pokaż szczegóły
            </button>
            <button onClick={() => constellationToStarView(star)}>
              Dodaj konstelacje do gwiazdy
            </button>
            <button onClick={() => displayConstelations(star.id)}>
              Wyświetl konstelacje
            </button>
            <button onClick={() => deleteStar(star.id)}>Usuń gwiazdę</button>
          </StarWrapper>
        ))}
      </StarsContainer>
      {starDetailsView && (
        <StarDetailesContainer>
          <button
            onClick={() => {
              setStarDetailsView(false);
            }}
          >
            Wyjdź
          </button>
          <p>{starDetails?.id}</p>
          <p>{starDetails?.name}</p>
          <p>{starDetails?.description}</p>
          <p>{starDetails?.link}</p>
        </StarDetailesContainer>
      )}
      {addView && (
        <ConstellationToStarContainer>
          <ConstellationToStarWrapper>
            <button onClick={() => setAddView(false)}>Wyjdź</button>
            <p>Dodaj Konstelację do gwiazdy</p>
            <p>Nazwa gwiazdy: {selectedStar?.name}</p>
            <p>ID gwiazdy: {selectedStar?.id}</p>
            <Dropdown
              placeHolder="Select...."
              options={allConstellations}
              handleValue={setDropdownValue}
            />
            <button
              onClick={() =>
                addStarConstellation(selectedStar?.id, dropdownValue?.id)
              }
            >
              Dodaj
            </button>
          </ConstellationToStarWrapper>
        </ConstellationToStarContainer>
      )}
      {displayConView && (
        <DisplayConContainer>
          <DisplayConWrapper>
            <button onClick={() => setDisplayConView(false)}>Wyjdź</button>
            {allConstellationsForStar?.map((con) => (
              <p>{con.name}</p>
            ))}
          </DisplayConWrapper>
        </DisplayConContainer>
      )}
    </Container>
  );
};

export default StarsPage;

const Container = styled.div`
  display: flex;
`;

const ButtonAddStar = styled.button`
  height: 50px;
  width: 200px;
`;

const FormAddStar = styled.form`
  display: flex;
  flex-direction: column;
`;
const ConstellationToStarContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: wheat;
  width: 300px;
  height: 300px;
`;

const ConstellationToStarWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StarWrapper = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
`;

const StarsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 20px;
`;

const DisplayConContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: wheat;
  width: 300px;
  height: 300px;
`;

const DisplayConWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StarDetailesContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: wheat;
  width: 300px;
  height: 300px;
`;
