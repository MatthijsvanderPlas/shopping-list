import React, {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import styles from './container.module.scss'

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

    const [cart, setCart] = useState([])

    const addGroceryItem = (name) => {
        const newItem = name
        const id = uuidv4()
        setGroceryItems(prevState => {
            return [...prevState, { id: id, title: newItem }]
        })
    }

    const emptyCart = () => {
        setCart([])
    }

    const updateCart = (grocery) => {
        const check = cart.some(item => {return item.id === grocery.id})
        if (check) {
            const [updateItem] = cart.filter(item => item.id === grocery.id)
            const idx = cart.indexOf(updateItem)
            const newCart = cart.map(item => cart.indexOf(item) === idx ? {...item, qty: item.qty +1} : item )
            setCart([...newCart])
        } else {
            setCart([...cart, {...grocery, qty: 1}])
        }
    }

    const handleClickGroceryItems = (item) => {
        const cartLength = (cart.length >= 1 ? true : false)
        if (!cartLength) {
            return setCart([{...item, qty: 1}])
        } else {
            updateCart(item)
        }
    
    }

  return (
    <>
        <div className={styles.container}>
            <GroceryList list={groceryItems} onItemClick={handleClickGroceryItems} addGrocery={addGroceryItem}/>
            <ShoppingCart list={cart} onEmpty={emptyCart}  onItemClick={() => {}}/>
        </div>
    </>
  )
}
