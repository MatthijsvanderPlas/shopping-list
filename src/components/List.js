import React, {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

import ListItem from './ListItem'

export default function List() {

    const [groceryItems, setGoceryItems] = useState([
        {id: uuidv4(), title: 'Apples'},
        {id: uuidv4(), title: 'Bananas'},
        {id: uuidv4(), title: 'Chips'},
        {id: uuidv4(), title: 'Ice Cream'},
        {id: uuidv4(), title: 'Carton of milk'},
    ])

    const addGroceryItem = (event) => {
        const newItem = event.target.value
        const id = uuidv4()
        setGoceryItems(prevState => {
            return [...prevState, { id: id, title: newItem }]
        })
    }

    const onItemClick = (item) => {
        console.log(`Id: ${item.id} Item: ${item.title}` )
    }

  return (
    <ul>
       {groceryItems.map(item => 
            <ListItem 
                key={item.id} 
                item={item} 
                clickItem={() => onItemClick(item)}    
            />)}
    </ul>
  )
}
