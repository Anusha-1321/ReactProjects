import React, { useState } from "react";

import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState(); //undefined - initiaal val.

  const addUserHandler = (event) => {
    event.preventDefault();

    //validations
    if (enteredUsername.trim().length === 0 && enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please wnter a valid name and age (non-empty values).",
      });
      return;
    }
    //+enteredAge - set it to number
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (>0).",
      });
      return;
    }

    //console.log(enteredUsername, enteredAge);

    //calling addUserHandler of the App.js here
    props.onAddUser(enteredUsername, enteredAge);

    //Resetting the form to clear after the form is submitted
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    // this way we can close our modal
    //we want to close our modal when someone clicks on okay or on the backdrop
    // both of these r in the modal.js  so we'll call this fn from there
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
