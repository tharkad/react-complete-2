import React from 'react';
import cockpitStyles from './Cockpit.module.css';

const cockpit = (props) => {

    const classes = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = cockpitStyles.Red;
    }

    if (props.personsLength <= 2) {
      classes.push(cockpitStyles.red);
    }
    if (props.personsLength <= 1) {
      classes.push(cockpitStyles.bold);
    }

    return (
        <div className={cockpitStyles.Cockpit}>
            <h1>Hi, I'm a React App</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            <button
            className={btnClass} 
            onClick={props.clicked}>Toggle Persons</button>
        </div>
    )
}

export default cockpit;