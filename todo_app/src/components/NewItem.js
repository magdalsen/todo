import React, { useState } from 'react';
import Button from './Button';

const NewItem = (props) => {
    const [enteredItem, setEnteredItem] = useState('');

    const setEnteredValue = (event) => {
        setEnteredItem(event.target.value);
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        props.listNewItem(enteredItem);
        event.target.reset();
    }

    return (
        <div className='form'>
            <form onSubmit={formSubmitHandler}>
                <div>
                    <h1>Todo</h1>
                    <Button className='add-btn' type="submit">Add</Button>
                    <input type="text" placeholder='Text...' onChange={setEnteredValue} />
                </div>
                
            </form>
        </div>
    )
}

export default NewItem;