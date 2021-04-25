import React, { Component } from "react";
import classes from "./Person.css";
import Auxilliary from "../../Auxilliary/Auxilliary";

class Person extends Component {
  name = "Mukhthar";
  render() {
    console.log("[Person.js] rendering....");
    return (
      // <div className={classes.Person}>
      <Auxilliary>
        <p onClick={this.props.click}>
          Hi I'm {this.props.name} and I'm {this.props.age} years old
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Auxilliary>
      // </div>
    );
  }
}

export default Person;
