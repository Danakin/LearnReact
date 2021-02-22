import React, { Component } from "react";

import "./App.css";

import Cockpit from "../components/Cockpit/Cockpit";
import Persons from "../components/Persons/Persons";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }

  state = {
    persons: [
      { id: 0, name: "Danny", age: 36 },
      { id: 1, name: "Makiko", age: 38 },
      { id: 2, name: "Emma", age: 2 },
    ],
    showPersons: false,
    showCockpit: true,
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDereivedStateFromProps");
    console.log("[... props]", props);
    console.log("[... state]", state);
    return state;
  }

  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }

  componentDidUpdate() {
    console.log("[App.js] componentDidUpdate");
  }

  nameChangedHandler = (event, id) => {
    // const person = this.state.persons.find(p => p.id === id) // Alternative
    const personIndex = this.state.persons.findIndex((p) => p.id === id);
    const person = {
      ...this.state.persons[personIndex],
    };
    person.name = event.target.value;
    // const person = Object.assign({}, this.state.persons[personIndex]) // Alternative

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons,
    });
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice(); // make copy of original array
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    console.log("[App.js] render");

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <div className="App">
        <button
          onClick={() =>
            this.setState({ showCockpit: !this.state.showCockpit })
          }
        >
          Remove Cockpit
        </button>
        {this.state.showCockpit}
        {this.state.showCockpit ? (
          <Cockpit
            title={this.props.title}
            personsLength={this.state.persons.length}
            showPersons={this.state.showPersons}
            clicked={this.togglePersonsHandler}
          />
        ) : (
          ""
        )}
        {persons}
      </div>
    );
  }
}

export default App;
