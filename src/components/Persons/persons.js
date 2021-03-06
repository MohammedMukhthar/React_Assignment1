import React, { Component } from "react";

import Person from "./Person/Person";

class Persons extends Component {
  //   static getDerivedStateFromProps(props, state) {
  //     // Rarely Used
  //     console.log("[Prsons.js] getDerivedStateFromProps", props, state);
  //     return state;
  //   }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Persons.js] shouldComponentUpdate", nextProps, this.props);

    if (nextProps.persons !== this.props.persons) {
      return true;
    } else {
      return false;
    }
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js] getSnapshotBeforeUpdate", prevProps, prevState);
    return { message: "Snapshot" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(
      "[Persons.js] componentDidUpdate",
      prevProps,
      prevState,
      this.props
    );
    console.log(snapshot);
  }

  render() {
    console.log("[persons.js] rendering....");
    return this.props.persons.map((person, index) => (
      <Person
        click={() => this.props.clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={(event) => this.props.changed(event, person.id)}
      />
    ));
  }
}

export default Persons;
