import React, { Component } from "react";
import classes from "./App.css";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Persons from "../components/Persons/persons";
import Cockpit from "../components/Cockpit/Cockpit";
class App extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor get triggered", props);

    this.state = {
      persons: [
        { id: "awsdf", name: "Mukhthar", age: 25 },
        { id: "fderg", name: "Shanid", age: 24 },
        { id: "vloyyd", name: "Rahul", age: 30 },
      ],
      otherState: "Some Other Value",
      showPersons: false,
      showCockpit: true,
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props, state);
    return state;
  }

  switchNameHandler = (newName) => {
    // console.log('Was Clicked!');
    //DO NOT DO THIS:  this.state.persons[0].name ="Shanid";
    this.setState({
      persons: [
        { name: newName, age: 25 },
        { name: "Shanid", age: 24 },
        { name: "Rahul", age: 31 },
      ],
    });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };

    //const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  componentDidMount() {
    console.log("[App.js] componentsDidMount()");
  }

  shouldComponentUpdate() {
    console.log("[App.js] shouldComponentUpdate()");
    return true;
  }

  componentDidUpdate() {
    console.log("[App.js] componentDidUpdate()");
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice(); //Another Way of copying array or object
    const persons = [...this.state.persons]; //Another Way of copying array or object
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    let persons = null;
    console.log("[App.js] rendering..", this.state.persons);
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
        </div>
      );
    }

    return (
      <ErrorBoundary>
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}>
          Remove Cockpit
        </button>
        <div className={classes.App}>
          <small>
            You are running this application in <b>{process.env.NODE_ENV}</b>{" "}
            mode.
          </small>
          {this.state.showCockpit && (
            <Cockpit
              title={this.props.appTitle}
              clicked={this.togglePersonsHandler}
              personsLength={this.state.persons.length}
              showPersons={this.state.showPersons}
            />
          )}
          {persons}
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
