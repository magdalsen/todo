import React from 'react';
import Button from './Button';
import '../App.css';

const ListItems = (props) => {

    return (
        <div className='item-list'>
            <ul>
                {props.listItems.map((item) => (
                    <li key={item.id}>
                        <input type="checkbox" className='checkbox-btn' />
                        {item.item}
                        <Button onClick={() => props.onAdd(item.id)} className='delete-btn'>-</Button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListItems;