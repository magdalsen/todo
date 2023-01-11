import React from 'react';

import Button from './Button';

const Filter = (props) => {
    const getActive = props.active;
    return (
        <div className={`${!getActive ? 'notVisible' : 'filter'}`}>
            <h3>Filter:</h3>
            <Button onClick={() => props.doFilterD()} className='filterC-btn'>Done</Button>
            <Button onClick={() => props.doFilterC()} className='filterD-btn'>Clear</Button>
        </div>
    )
}

export default Filter;