import { useEffect, useState } from "react";
import classes from "./Time.module.css";


const Time = (props) => {
    const [enteredTime, setEnteredTime] = useState("");

    const changeTimeHandler = (event) => {
        console.log(event.target.value);
        setEnteredTime(event.target.value);
    };

    useEffect(() => {
        let isMounted = true;
        if (isMounted && enteredTime) {
            props.enteredTime2(enteredTime);
        }
        return () => {
            isMounted = false;
        };
    }, [enteredTime, props]);

    return (
        <div className={classes.timeCard}>
            <input
                type="time"
                className={classes.time}
                onChange={changeTimeHandler}
                value={enteredTime}
            ></input>
        </div>
    );
};

export default Time;