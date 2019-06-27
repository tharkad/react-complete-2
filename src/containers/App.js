import React, {Component} from 'react';
import appStyles from './App.module.css';
import Person from '../components/Persons/Person/Person';

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
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );

      btnClass = appStyles.Red;
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push(appStyles.red);
    }
    if (this.state.persons.length <= 1) {
      classes.push(appStyles.bold);
    }

    return (
      <div className={appStyles.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button
          className={btnClass} 
          onClick={this.togglePersonHandler.bind(this, 'Maximilian')}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
 