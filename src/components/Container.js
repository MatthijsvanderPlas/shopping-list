import React, {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

import GroceryList from './GroceryList'
import ShoppingCart from './ShoppingCart'

export default function Container() {

    const [groceryItems, setGroceryItems] = useState([
        {id: uuidv4(), title: 'Apples'},
        {id: uuidv4(), title: 'Bananas'},
        {id: uuidv4(), title: 'Chips'},
        {id: uuidv4(), title: 'Ice Cream'},
        {id: uuidv4(), title: 'Carton of milk'},
    ])

    const addGroceryItem = (event) => {
        const newItem = event.target.value
        const id = uuidv4()
        setGroceryItems(prevState => {
            return [...prevState, { id: id, title: newItem }]
        })
    }

    const onItemClick = (item) => {
        console.log(`Id: ${item.id} Item: ${item.title}` )
    }

  return (
    <>
        <GroceryList list={groceryItems} onItemClick={onItemClick}/>
        <ShoppingCart />
    </>
  )
}
