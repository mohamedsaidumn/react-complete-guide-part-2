import React, { useState, SyntheticEvent, FormEvent } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props: { onAddGoal: (item: string) => void }) => {
  const [enteredValue, setEnteredValue] = useState("");

  const goalInputChangeHandler = (event: SyntheticEvent) => {
    let target: HTMLInputElement = event.target as HTMLInputElement;
    setEnteredValue(target.value);
  };

  const formSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
