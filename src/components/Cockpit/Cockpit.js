import React , { useEffect } from 'react';
import cockpitStyles from './Cockpit.module.css';

const Cockpit = (props) => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    setTimeout(() => {
      alert('Saved data to cloud!');
    }, 1000);
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
    }
  }, []); //empty array makes this act like componentDiMount

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    };
  });

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
          <h1>{props.title}</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          <button
          className={btnClass} 
          onClick={props.clicked}>Toggle Persons</button>
      </div>
  )
}

export default React.memo(Cockpit);