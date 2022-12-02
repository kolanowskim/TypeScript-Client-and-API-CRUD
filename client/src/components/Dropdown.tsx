import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  AllStars,
  Star,
  AllConstellations,
  Constellation,
} from "../types/types";

interface DropdownProps {
  placeHolder: string;
  options: AllStars | AllConstellations | undefined;
  handleValue?: (newType: Constellation | Star) => void;
}

const Icon = () => {
  return (
    <svg height="20" width="20" viewBox="0 0 20 20">
      <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
    </svg>
  );
};

const Dropdown = ({ placeHolder, options, handleValue }: DropdownProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedValue, setSelectedValue] = useState<Star | null>(null);

  useEffect(() => {
    const handler = () => setShowMenu(false);

    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click", handler);
    };
  });

  const handleInputClick = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };

  const getDisplay = () => {
    if (selectedValue) {
      return selectedValue.name;
    }
    return placeHolder;
  };

  const onItemClick = (option: Star) => {
    setSelectedValue(option);
    handleValue?.(option);
  };

  return (
    <Container>
      <Input onClick={handleInputClick}>
        <SelectedValue>{getDisplay()}</SelectedValue>
        <Tools>
          <Tool>
            <Icon />
          </Tool>
        </Tools>
      </Input>
      {showMenu && (
        <Menu>
          {options?.map((option) => (
            <MenuItem key={option.id} onClick={() => onItemClick(option)}>
              {option.name}
            </MenuItem>
          ))}
        </Menu>
      )}
    </Container>
  );
};

export default Dropdown;

const Container = styled.div`
  text-align: left;
  border: 1px solid #ccc;
  position: relative;
  border-radius: 5px;
  width: 200px;
  margin: 20px;
`;

const Input = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;
  background-color: white;
  border-radius: 5px;
  cursor: pointer;
`;

const SelectedValue = styled.div``;

const Tools = styled.div``;

const Tool = styled.div``;

const Menu = styled.div`
  position: absolute;
  transform: translateY(4px);
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: auto;
  max-height: 150px;
  background-color: white;
`;

const MenuItem = styled.div`
  padding: 5px;
  cursor: pointer;

  &:hover {
    background-color: #9fc3f870;
  }
`;
