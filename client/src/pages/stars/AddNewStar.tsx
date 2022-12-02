import React, { useState } from "react";
import styled from "styled-components";
import * as api from "../../api/apiStars";

type Props = {
  setAddNewStarView: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddNewStar: React.FC<Props> = ({ setAddNewStarView }) => {
  const [StarName, setStarName] = useState("");
  const [StarDescription, setStarDescription] = useState("");
  const [StarLink, setStarLink] = useState("");

  const addNewStar = () => {
    console.log("add");
    api.addNewStar(StarName, StarDescription, StarLink);
  };

  return (
    <Container>
      <FormWrapper>
        <Button onClick={() => setAddNewStarView(false)}>Wyjdź</Button>
        <Form onSubmit={addNewStar}>
          <label>
            Nazwa gwiazdy:
            <input
              type="text"
              required
              onChange={(e) => setStarName(e.target.value)}
            />
          </label>

          <label>
            Opis:
            <input
              type="text"
              required
              onChange={(e) => setStarDescription(e.target.value)}
            />
          </label>
          <label>
            Link:
            <input
              type="text"
              required
              onChange={(e) => setStarLink(e.target.value)}
            />
          </label>
          <Button type="submit">Dodaj</Button>
        </Form>
      </FormWrapper>
    </Container>
  );
};

export default AddNewStar;

const Container = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: rgba(239, 239, 240, 0.6);
`;

const FormWrapper = styled.div`
  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  background-color: lightgray;
  height: 300px;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  width: 100px;
  margin: 20px;
`;
