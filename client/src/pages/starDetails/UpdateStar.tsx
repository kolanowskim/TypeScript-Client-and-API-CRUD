import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Star } from "../../types/types";
import { updateStar as apiUpdateStar } from "../../api/apiStars";
/* import { apiUpdateStar } from "../../api/apiUpdateStar"; */

const UpdateStar = ({ id, name, description, link }: Star) => {
  const [starName, setStarName] = useState("");
  const [starDescription, setStarDescription] = useState("");
  const [starLink, setStarLink] = useState("");

  const updateStar = () => {
    apiUpdateStar(id, starName, starDescription, starLink);
  };

  useEffect(() => {
    setStarName(name);
    setStarDescription(description);
    setStarLink(link);
  }, []);

  return (
    <Container>
      <Form onSubmit={updateStar}>
        <label>
          Nazwa gwiazdy:
          <input
            type="text"
            required
            value={starName}
            onChange={(e) => setStarName(e.target.value)}
          />
        </label>

        <label>
          Opis:
          <input
            type="text"
            required
            value={starDescription}
            onChange={(e) => setStarDescription(e.target.value)}
          />
        </label>
        <label>
          Link:
          <input
            type="text"
            required
            value={starLink}
            onChange={(e) => setStarLink(e.target.value)}
          />
        </label>
        <Button type="submit">Aktualizuj</Button>
      </Form>
    </Container>
  );
};

export default UpdateStar;

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
