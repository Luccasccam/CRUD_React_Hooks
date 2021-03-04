import React from 'react'

export default  function UserTables(props) { /* PROPS É O PARAMETRO QUE SERÁ USADO PARA SETAR USERS */
   
    return(
        <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
        {props.users.length > 0 ? ( /* seta propriedades do users pergunta se o tamanho é maior que 0 */
            props.users.map((user) =>(  /* cria map para varrer o array o user */
                <tr key={user.id}> {/* key é a definição de onde vai se atribuir as informações nesse caso id de user */}
                    <td>{user.name}</td> {/* name é atributo do array */}
                    <td>{user.username}</td>{/*  assim como user name */}
                    <td>
                        <button 
                            onClick={() => props.editRow(user)}
                            className="button muted-button"
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => props.deleteUser(user.id)}
                            className="button muted-button"
                        >
                            Delete
                        </button>
                    </td>
                </tr>
            ))
        ) : (
            <tr colSpan={3}> No users</tr>
        
        )}
        
    </tbody>
  </table>
)}