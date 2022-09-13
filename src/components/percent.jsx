import React from 'react';
import './percent.css';

const Percent = (props) => (
    <div className='percent-box' onClick={() => props.clicked(props.children)}>
        {props.children}
    </div>
)

export default Percent;