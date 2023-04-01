import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Cafe from './components/Cafe/Cafe'


function App() {
  

  return (
    <div className="App">
      <Header></Header>
      <Cafe></Cafe>
    </div>
  )
}

export default App;
