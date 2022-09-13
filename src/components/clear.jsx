import React from 'react';
import './clear.css';

const Clear = (props) => (
    <div className='clear' onClick={props.clears}>
        {props.children}
    </div>
);

export default Clear;