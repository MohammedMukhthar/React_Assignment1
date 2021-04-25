import React, { useEffect } from "react";
import classes from "./Cockpit.css";

const Cockpit = (props) => {
  useEffect(() => {
    console.log("[Cockpit.js] 1st useEffect()");

    return () => {
      console.log("[Cockpit.js] Clean up work in 1st cockpit");
    };
  }, []);

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect()");

    return () => {
      console.log("[Cockpit.js] Clean up work in 2nd cockpit");
    };
  });

  const assignedClassed = [];
  let btnClass = "";

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.personsLength <= 2) {
    assignedClassed.push(classes.red);
  }
  if (props.personsLength <= 1) {
    assignedClassed.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClassed.join(" ")}>This is really working!!</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Personss
      </button>
    </div>
  );
};

export default React.memo(Cockpit);
