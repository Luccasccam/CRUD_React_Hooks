import React, { useState, useEffect } from 'react'
import UserTables from './components/UserTables'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'


export default function App (props) {
  
  const usersData = [ // USERDATA NECESSÁRIO VERIFICAR COMO COMPOR DADOS DE UM BANCO
    { id: 1, name: 'Tania', username: 'floppydiskette' },
    { id: 2, name: 'Craig', username: 'siliconeidolon' },
    { id: 3, name: 'Ben', username: 'benisphere' }
  ]

  const [users, setUsers] = useState(usersData) //USESTATE USA O ESTADO DA CONSTANTE USERDATA (OU ATRIBUI INFORMAÇÕES FO BANCO)
  //A CONSTANTE ADDUSER NA FUNÇÃO A BAIXO É RESPONSÁVEL POR CRIAR UM ID SEMPRE COM UM NÚMERO A MAIS
  const addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users , user ]) /* PORQUE AS ... ?*/
  }
  
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !==id )) /* TENTAR ENTENDER A FUNÇÃO QUE ENCONTRA O ID */
  }
  
  const editRow = (user) =>{
    setEditing(true)
    setCurrentUser({
      id: user.id, 
      name: user.name, 
      username: user.username
    })
  }
  const initalFormState = {id: null, name: '', username: ''}/* SETANDO O ESTADO INICIAL DO FORMULÁRIO */
    const [ user, setUser ] = useState(initalFormState)

  useEffect(() =>{
    setUser(props.currentUser)
  }, [props])
    
  const [ editing, setEditing ] = useState(false)
    const [ currentUser, setCurrentUser ] = useState(initalFormState) /* ENTENDER O MOTIVO DOS NOMES currentUser, setCurrentUser */

  const updateUser = (id, updateUser) => {
    setEditing(false)
    setUsers(users.map((user) =>(user.id === id ? updateUser : user))) /* TENTAR ENTENDER A FUNÇÃO */
  }
    
  const handleInputChange = (event) => { /* Evento que será usado no input */
    const { name, value } = event.target
    setUser ({...user, [name]: value })
  }
 

  return (
    <div className="container">
      <h1>Aplicação CRUD App com Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditUserForm
                setEditing={setEditing}
                currentUser={currentUser} /* ENTENDER A CONSTANTE QUE DÁ ESSE NOME */
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser}/>
            </div>
            )}
          </div>
            
        <div className="flex-large">
          <h2>View users</h2>
          <UserTables users={users} editRow={editRow} deleteUser={deleteUser}/> {/* ATRIBUIÇÃO DE USERS COMO FILHO DE USERTABLES  ESTADO EDIÇÃO E DELETE*/}
        </div>
      </div>
    </div>
  )
}
