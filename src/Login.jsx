import React from 'react'
import { FormControl, Input, InputLabel, Button } from '@material-ui/core';

const Login = ({
  email, 
  setEmail, 
  emailError, 
  password, 
  setPassword, 
  passwordError, 
  handleLogin,
}) => {

  return (
    <div className="login-container">
     <form className="login-form" onSubmit={(e) => {handleLogin(e)}}>
      <h4 className="main-heading">Login</h4>
      <FormControl className="field">
            <InputLabel htmlFor="emai">Enter Your Email</InputLabel>
            <Input
              type="email"
              id="email"
              onChange={(e) => { setEmail(e.target.value) }}
              value={email}
              required
            />
          </FormControl>
          <p className="login-err">{emailError}</p>
          <FormControl className="field">
            <InputLabel htmlFor="password">Enter Your Password</InputLabel>
            <Input
              type="password"
              id="password"
              onChange={(e) => { setPassword(e.target.value) }}
              value={password}
            />
          </FormControl>
          <p className="login-err">{passwordError}</p>
          <FormControl className="field button">
            <Button 
              type="submit" 
              variant="contained" 
              color="primary"
            >
              Login
            </Button>
          </FormControl>
       </form>
    </div>
  )
}

export default Login