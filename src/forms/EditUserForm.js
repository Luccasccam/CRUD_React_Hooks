
import React, { useState } from 'react'


export default function EditUserForm(props) {
    
const [ user, setUser ] =  useState(props.currentUser) 

const handleInputChange = (event) => { /* Evento que será usado no input */
    const { name, value } = event.target
    setUser({...user, [name]: value })
}

return(
    <form /* EVENTO QUE CRIA USUÁRIAROS   */
        onSubmit={(event) => {
            event.preventDefault()
            props.updateUser(user.id, user) /* ENTENDER OS PARAMETROS DA FUNÇÃO */
        }}
    >
        <label>Name</label>
            <input type="text" name="name" value={user.name} onChange={handleInputChange} />
        <label>Username</label>
            <input type="text" name="username" value={user.username} onChange={handleInputChange} />
        <button>Update user</button>
        <button
        onClick={() => props.setEditing(false)}
        >
            Cancel
        </button>
    </form>
)
}

