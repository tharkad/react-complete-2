import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary';
import personStyles from './Person.module.css';

class Person extends Component{

    render () {
        console.log('[Person.js] render');
        return (
            <Aux>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </Aux>
        )
    }
}

export default Person;