import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Cafe from './components/Cafe/Cafe'
import QuestionAnswer from './components/Question-Answer/QuestionAnswer'


function App() {

 const handleSpeantTimeRead=(time)=>{
    const previousReadTime=JSON.stringify(localStorage.getItem("readTime"));
  if(previousReadTime){
    console.log(previousReadTime)
  }
  else{
    localStorage.setItem("readTime",time);
  }

  }

  return (
    <div className="App">
      <Header></Header>
      <Cafe handleSpeantTimeRead={handleSpeantTimeRead} ></Cafe>
      <QuestionAnswer></QuestionAnswer>
    </div>
  )
}

export default App;
