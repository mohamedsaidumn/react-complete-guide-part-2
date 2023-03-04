import React, { useState, SyntheticEvent, FormEvent } from "react";

import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";

//import styled from "styled-components";

// type divProps = { invalid: boolean };
// const FormControl = styled.div<divProps>`
//   margin: 0.5rem 0;
//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${(props) => (props.invalid ? "red" : "black")};
//   }
//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
//     background: ${(props) => (props.invalid ? "#ffd7d7" : "transparent")};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }
//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }
// `;

const CourseInput = (props: { onAddGoal: (item: string) => void }) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event: SyntheticEvent) => {
    let target: HTMLInputElement = event.target as HTMLInputElement;
    if (target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(target.value);
  };

  const formSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
      >
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
