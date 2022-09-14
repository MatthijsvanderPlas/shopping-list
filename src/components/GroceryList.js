import React from 'react'
import List from './List'

export default function GroceryList({list, onItemClick}) {
  return (
    <>
        <List list={list}  onItemClick={onItemClick}/>
    </>
  )
}
