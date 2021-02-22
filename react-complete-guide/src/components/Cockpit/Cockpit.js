import React, { useEffect } from "react";
import "./Cockpit.css";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) => (props.alt ? "red" : "green")};
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  color: #ddd;

  &:hover {
    background-color: ${(props) => (props.alt ? "salmon" : "lightgreen")};
    color: black;
  }
`;

const cockpit = (props) => {
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    const timer = setTimeout(() => {
      console.log("Saved!!");
    }, 1000);
    return () => {
      clearTimeout(timer);
      console.log("[Cockpit.js] cleaning up in useEffect");
    };
  }, []);

  const classes = [];
  if (props.personsLength <= 2) {
    classes.push("red");
  }
  if (props.personsLength <= 1) {
    classes.push("bold");
  }

  return (
    <div>
      <h1>{props.title}</h1>
      <p className={classes.join(" ")}>This is working</p>
      <StyledButton alt={props.showPersons ? 1 : 0} onClick={props.clicked}>
        Show persons
      </StyledButton>
    </div>
  );
};

export default React.memo(cockpit);
