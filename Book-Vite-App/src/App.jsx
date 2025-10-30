import React from 'react'
import { Component } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Book from './Components/Book'

const App = () => {
  return (
    <div>
    <div>
      <Header/>
    </div>
    
    <div className='booklist'>
      <Book/>
      <Book/>
      <Book/>
    </div>
    
    <div>
      <Footer/>
    </div>

    </div>
    
  )
}

export default App
