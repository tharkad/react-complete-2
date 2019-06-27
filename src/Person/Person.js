import React from 'react';
import personStyles from './Person.module.css';

const person = (props) => {
    const rnd = Math.random();
    if (rnd > 0.7) {
        throw new Error('test');
    }

    return (
        <div className={personStyles.Person}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default person;