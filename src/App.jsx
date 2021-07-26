import React, { useState, useEffect } from 'react';
import AddList from './AddList'
import Login from './Login'
import './main.css'
import { auth } from './Fire'

function App() {
  const [user, setUser] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")

  const handleLogin = (e) => {
    e.preventDefault()
    auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        setPassword("")
        setEmail("")
      }
      )
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/userdisabled":
          case "auth/user-not-found":
            setEmailError(err.message)
            break;
          case "auth/wrong-password":
            setPasswordError(err.message)
            break;
        }
      })
  }

  const authListener = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user)
        setEmailError("")
        setPasswordError("")
      }
      else {
        setUser("")
      }
    })
  }

  useEffect(() => {
    authListener()
  }, [])

  return (
    <main className="main">
      <>
        {user ?
          <AddList /> :
          <Login
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            emailError={emailError}
            passwordError={passwordError}
            handleLogin={handleLogin}
          />
        }
      </>
    </main>
  );
}

export default App;