import React from 'react'

export default function ListItem({item, clickItem}) {
  return (
    <li 
        key={item.id} 
        className='list-item'
        onClick={clickItem}
        value={item.title}
        
    > 
        {item.title}
    </li>
  )
}
