import React, {useState} from 'react'
import styles from './form.module.scss'

export default function AddGrocery(props) {

    const [name, setName] = useState('')

const handleSubmit = (event) => {
    event.preventDefault()
    if (name.length > 0 ){
        props.addGrocery(name)
        setName('')
    }
}


  return (
    <form className={styles.form} onSubmit={handleSubmit}>
        <input type='text' value={name} onChange={e => setName(e.target.value)}/>
        <button type='submit'>Add</button>
    </form>
  )
}
