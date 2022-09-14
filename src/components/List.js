import React  from 'react'

import ListItem from './ListItem'

export default function List({list, onItemClick}) {

  return (
    <ul>
       {list.map(item =>
            <ListItem 
                key={item.id} 
                item={item} 
                clickItem={onItemClick}    
            />)}
    </ul>
  )
}
