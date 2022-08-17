import React from 'react'
import "./App.css"
import Header from './Components/header'
import Body from "./Components/body.jsx"
import Footer from "./Components/footer"

function App() {
  return (
    <main className='App'>
      <Header />
      <Body />
      <Footer/>
    </main>
  )
}

export default App