import { useState, useEffect } from "react";
import classes from "./TasksList.module.css";

const TasksList = (props) => {
  const [isUpcoming, setIsUpcoming] = useState(false);
  const [upcomingTaskList, setUpcomingTaskList] = useState(props.tasks);

  useEffect(() => {
    const tasksitems = isUpcoming ? props.tasks.filter((item) => (new Date()).getTime() < (new Date(`${item.date}T${item.time}`)).getTime()) : props.tasks;
    console.log(tasksitems);

    if (tasksitems) {
      // setUpcomingTaskList(tasksitems); 
    }

  }, []);

  return (
    <div className={classes.block}>
      <div className={classes.buttons}>
        <button type="submit" className={classes.button} >
          UPCOMING TASKS
        </button>
        <button type="submit" className={classes.button} >
          ALL
        </button>
      </div>




      <ul>
        {props.tasks.map((task) => (
          <div
            key={task.id}
            className={classes.listItem}

          >
            <div
              className={classes.circle}
              onClick={() => {
                props.onStatusTask(task.id);
              }}
            ></div>
            <div
              className={
                task.isCompleted
                  ? classes.completeStatus
                  : classes.unCompleteStatus
              }
              onClick={() => {
                props.onStatusTask(task.id);
              }}
            >
              <i className="fa-solid fa-check"></i>
            </div>
            <button
              className={classes.smallButton}
              onClick={() => {
                props.onDeleteTask(task.id);
              }}
            >
              X
            </button>
            <label
              className={
                task.isCompleted === false
                  ? classes.title
                  : classes.titleCompleted
              }
            >
              {task.title}
            </label>
            <label
              className={
                task.isCompleted === false
                  ? classes.priorityStatus
                  : classes.priorityStatusCompleted
              }
            >
              {task.isPriority === true ? (
                <i className="fa-solid fa-flag"></i>
              ) : (
                ""
              )}
            </label>
            <br></br>
            <label
              className={
                task.isCompleted === false
                  ? classes.description
                  : classes.descriptionCompleted
              }
            >
              {task.description}
            </label>
            <br></br>
            <label
              className={
                task.isCompleted === false
                  ? classes.date
                  : classes.dateCompleted
              }
            >
              {task.date} &nbsp;
              {task.time}
            </label>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TasksList;
