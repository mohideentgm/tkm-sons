import React, { useState, useEffect } from 'react';
import AddList from './AddList'
import {Db} from './Fire'
import Login from './Login'
import './main.css'
import { auth } from './Fire'

function App() {
  const [user, setUser] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [customers, setCustomers] = useState([])
  
  // GET CUSTOMER DETAILS
  useEffect(() => {
    Db.collection("Customers").onSnapshot((snapshot) =>
      setCustomers(snapshot.docs.map((doc) => doc.data()))
    );
  }, [])
  
  const handleLogin = (e) => {
    e.preventDefault()
    auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        setPassword("")
        setEmail("")
      }
      ).then(() => {
        setTimeout(() => {
          manageUser(JSON.parse(localStorage.getItem('authUser')))
        }, 2000)
      })
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
        localStorage.setItem('authUser', JSON.stringify(user))
        setEmailError("")
        setPasswordError("")
      }
      else {
        localStorage.removeItem('authUser')
      }
    })
  }

  useEffect(() => {
    authListener()
  }, [])

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('authUser')))
  }, [])

  function manageUser(user) {
    setUser(user)
  }

  return (
    <main className="main">
      <>
        {user ?
          <AddList customers={customers} setUser={manageUser} /> :
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
