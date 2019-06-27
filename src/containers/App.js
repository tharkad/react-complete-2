import React, {Component} from 'react';
import appStyles from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      {id: 'asdf', name: 'Max', age: 28},
      {id: 'fawef', name: 'Manu', age: 30},
      {id: 'baerb', name: 'Stephanie', age: 27}      ,
      {id: 'baereb', name: 'Mikey', age: 50}      
    ],
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice();
    persons.splice(personIndex,1);
    this.setState({persons: persons}); 
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  togglePersonHandler = () => {
    this.setState({showPersons: !(this.state.showPersons)})
  }

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons 
          persons={this.state.persons} 
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />
      );
    }

    return (
      <div className={appStyles.App}>
        <Cockpit 
          showPersons = {this.state.showPersons}
          personsLength = {this.state.persons.length}
          clicked = {this.togglePersonHandler} />
        {persons}
      </div>
    );
  }
}

export default App;
 