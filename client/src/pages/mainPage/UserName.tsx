import React, { useState, useEffect } from "react";
import styled from "styled-components";

const UserName = () => {
  const [newName, setNewName] = useState("");
  const [cookieName, setCookieName] = useState<string | undefined>("");

  const setCookie = () => {
    const date = new Date().getDate() + 7;
    document.cookie = `starConstellations=${newName}; expires=${date}}`;
  };

  const getCookie = () => {
    const cookieValue = document.cookie
      .split("; ")
      .find((row) => row.startsWith("starConstellations="))
      ?.split("=")[1];

    setCookieName(cookieValue);
  };

  const deleteCookie = () => {
    document.cookie = `starConstellations=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
    window.location.reload();
  };

  useEffect(() => {
    getCookie();
  });

  return (
    <Container>
      {cookieName ? (
        <div>
          <h2>Imie: {cookieName}</h2>{" "}
          <button onClick={deleteCookie}>Usuń imię</button>
        </div>
      ) : (
        <Form onSubmit={setCookie}>
          <label>Podaj swoje imię</label>
          <input
            type="text"
            required={true}
            onChange={(e) => setNewName(e.target.value)}
          />
          <button type="submit">Dodaj</button>
        </Form>
      )}
    </Container>
  );
};

export default UserName;

const Container = styled.div`
  text-align: center;
`;

const Form = styled.form``;
