import { useState } from "react";
import classes from "./AddTask.module.css";
import Date from "./Date";
import Time from "./Time";


const AddTask = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredTime, setEnteredTime] = useState("");
  const isCompleted = false;

  const addTaskHandler = (event) => {
    event.preventDefault();

    if (enteredTitle.trim().length === 0 || enteredDate.trim().length === 0) {
      return;
    }

    // console.log(enteredTitle, enteredDescription, enteredDate);
    props.onAddTask(
      enteredTitle,
      enteredDescription,
      enteredDate,
      enteredTime,
      isCompleted
    );
    setEnteredTitle("");
    setEnteredDescription("");
  };

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  const dateChangeHandler = (enteredDate2) => {
    setEnteredDate(enteredDate2);
    // console.log(enteredDate);
  };

  const timeChangeHandler = (enteredTime2) => {
    setEnteredTime(enteredTime2);
  };

  return (
    <div className={classes.card}>
      <h2 className={classes.todo}>
        Task Creator
      </h2>
      <form onSubmit={addTaskHandler}>
        <input
          type="text"
          className={classes.input}
          placeholder="Title"
          onChange={titleChangeHandler}
          value={enteredTitle}
        />
        <textarea
          rows="10"
          className={classes.inputDesc}
          placeholder="Description"
          onChange={descriptionChangeHandler}
          value={enteredDescription}
        />

        <div className={classes.connector}>
          <Date enteredDate2={dateChangeHandler} />

          <Time enteredTime2={timeChangeHandler} />
        </div>



        <button type="submit" className={classes.button}>
          ADD TASK
        </button>

      </form>
    </div>
  );
};

export default AddTask;
