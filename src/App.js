// App.js
import React from 'react';
import {useSelector } from 'react-redux';
import LoginForm from './componenets/Login';
import UserDetails from './componenets/UserDetails';

function App() {
  const user  = useSelector(state => state.user);
  console.log(user);

  return (
      <div className="App">
        {user ? <UserDetails /> : <LoginForm />}
      </div>
  );
}

export default App;
