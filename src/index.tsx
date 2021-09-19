import React from 'react'
import { render } from 'react-dom'
import App from './App';
import { hot } from "react-hot-loader/root";


const Render = (Component: any) => 
  render(
    <React.StrictMode>
      <Component />
    </React.StrictMode>,
    document.getElementById('root')
  )

Render(hot(App))