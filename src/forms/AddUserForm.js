
import React, { useState } from 'react'

export default function AddUserForm(props) {

    const initialFormState = { id: null, name: '', username: '' }/* SETANDO O ESTADO INICIAL DO FORMULÁRIO */
   
    const [ user, setUser ] = useState(initialFormState)
   
    const handleInputChange = (event) => { /* Evento que será usado no input */
        const { name, value } = event.target
        
        setUser({ ... user, [name]: value }) /* PORQUE AS ... ? */
        
    }

    return(
        <form /* EVENTO QUE CRIA USUÁRIAROS   */
            onSubmit={event => {    
                event.preventDefault()
                if (!user.name || !user.username) return
                props.addUser(user)
                setUser(initialFormState)
        }}
        >
            <label>Name </label>
                <input type="text" name="name" value={user.name} onChange={handleInputChange} />
            <label>Username </label>
                <input type="text" name="username" value={user.username} onChange={handleInputChange} />
            <button>Add new user</button>
        </form>
    )
}