import React from 'react';
import './button.css';

const arithmetic_checker = val => {
    return !isNaN(val) || val === '.';
}

const Button = props => (
    <div className={`button-box ${arithmetic_checker(props.children) ? null : 'arithmetic'}`}
    onClick={() => props.clicked(props.children)}>
        {props.children}
    </div>
);

export default Button;