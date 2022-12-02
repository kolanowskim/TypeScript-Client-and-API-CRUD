import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Constellation } from "../../types/types";
import * as api from "../../api/apiConstellations";

const UpdateConstellation = ({
  id,
  name,
  description,
  link,
}: Constellation) => {
  const [constellationName, setConstellationName] = useState("");
  const [constellationNameDescription, setConstellationDescription] =
    useState("");
  const [constellationNameLink, setConstellationLink] = useState("");

  const updateConstellation = () => {
    api.updateConstellation(
      id,
      constellationName,
      constellationNameDescription,
      constellationNameLink
    );
  };

  useEffect(() => {
    setConstellationName(name);
    setConstellationDescription(description);
    setConstellationLink(link);
  }, []);

  return (
    <Container>
      <Form onSubmit={updateConstellation}>
        <label>
          Nazwa konstelacji:
          <input
            type="text"
            required
            value={constellationName}
            onChange={(e) => setConstellationName(e.target.value)}
          />
        </label>

        <label>
          Opis:
          <input
            type="text"
            required
            value={constellationNameDescription}
            onChange={(e) => setConstellationDescription(e.target.value)}
          />
        </label>
        <label>
          Link:
          <input
            type="text"
            required
            value={constellationNameLink}
            onChange={(e) => setConstellationLink(e.target.value)}
          />
        </label>
        <Button type="submit">Aktualizuj</Button>
      </Form>
    </Container>
  );
};

export default UpdateConstellation;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: lightgrey;
  padding: 35px;
  margin-top: 50px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  width: 100px;
  padding: 5px;
  border-radius: 5px;
  background: white;
  border: none;
  cursor: pointer;
  transition: 0.2s;
  margin-top: 20px;

  :hover {
    background-color: lightblue;
  }
`;
