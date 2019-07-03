import React, { Component } from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import WithClass from '../../../hoc/WithClass';
import personStyles from './Person.module.css';
import PropTypes from 'prop-types';

class Person extends Component{
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }
    
    componentDidMount() {
        //this.inputElement.focus();
        this.inputElementRef.current.focus();
    }
    
    render () {
        console.log('[Person.js] render');
        return (
            <Auxiliary>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input 
                    type="text" 
                    //ref={(inputEl) => {this.inputElement = inputEl}}
                    ref={this.inputElementRef}
                    onChange={this.props.changed} 
                    value={this.props.name}
                />
            </Auxiliary>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default WithClass(Person, personStyles.Person);