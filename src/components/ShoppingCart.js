import React from 'react'
import List from './List'
import styles from './shopping.module.scss'

export default function ShoppingCart({list, onEmpty, onItemClick}) {
  return (
    <div className={styles.cart}>
      <h2>Shopping Cart</h2>
      {list.length !== 0 ? <button onClick={onEmpty}>Empty Cart</button> : <h3>Please add an Item</h3>}
    <List list={list} onItemClick={onItemClick}/>    
    </div>
  )
}
