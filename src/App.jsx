import { useState } from 'react'

import './App.css'
import ThemeProvider from './context/ThemeProvider'
import Header from './componets/Header'
import ThemeToggle from './componets/ThemeToggle'

function App() {


  return (
    <ThemeProvider>
      <Header />
      <ThemeToggle />
    </ThemeProvider>
  )
}

export default App
