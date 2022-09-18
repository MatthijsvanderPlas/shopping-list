import React from 'react'
import List from './List'
import AddGrocery from './AddGrocery'
import styles from './grocery.module.scss'

export default function GroceryList({list, onItemClick, addGrocery}) {
  return (
    <div className={styles.grocery}>
        <h2>Shopping List</h2>
        <AddGrocery addGrocery={addGrocery}/>
        <List list={list}  onItemClick={onItemClick}/>
    </div>
  )
}
