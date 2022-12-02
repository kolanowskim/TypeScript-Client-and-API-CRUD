import React, { useState } from "react";
import styled from "styled-components";
import * as api from "../../api/apiConstellations";

type Props = {
  setAddNewConstellationView: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddNewConstellation: React.FC<Props> = ({
  setAddNewConstellationView,
}) => {
  const [constellationName, setConstellationName] = useState("");
  const [constellationDescription, setConstellationDescription] = useState("");
  const [constellationLink, setConstellationLink] = useState("");

  const addNewConstellation = () => {
    api.addNewConstellation(
      constellationName,
      constellationDescription,
      constellationLink
    );
  };

  return (
    <Container>
      <FormWrapper>
        <Button onClick={() => setAddNewConstellationView(false)}>Wyjdź</Button>
        <Form onSubmit={addNewConstellation}>
          <label>
            Nazwa konstelacji:
            <input
              type="text"
              required
              onChange={(e) => setConstellationName(e.target.value)}
            />
          </label>

          <label>
            Opis:
            <input
              type="text"
              required
              onChange={(e) => setConstellationDescription(e.target.value)}
            />
          </label>
          <label>
            Link:
            <input
              type="text"
              required
              onChange={(e) => setConstellationLink(e.target.value)}
            />
          </label>
          <Button type="submit">Dodaj</Button>
        </Form>
      </FormWrapper>
    </Container>
  );
};

export default AddNewConstellation;

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
