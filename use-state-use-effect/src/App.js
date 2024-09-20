import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data); 
    };

    fetchUsers();
  }, []); 

  return (
    <div className="App">
      <h1>Lista de Usuarios</h1>
      {/*mostramos la lista de usuarios*/}
      <ul>
        {users.map(user => (
          <li key={user.id} className="user-card">
            <h2>{user.username}</h2>
            <p>Email: {user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
