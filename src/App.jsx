import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Cafe from './components/Cafe/Cafe'
import QuestionAnswer from './components/Question-Answer/QuestionAnswer'


function App() {
  

  return (
    <div className="App">
      <Header></Header>
      <Cafe></Cafe>
      <QuestionAnswer></QuestionAnswer>
    </div>
  )
}

export default App;
