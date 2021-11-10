import React from 'react'
import Cards from './components/Cards'
import Footer from './components/Footer'
import Header from './components/Header'

const units = ['zergling', 'zealot', 'marine']

const App = () => {

  return (
    <div id='main'>
      <Header />
      <Cards units={units} />
      <Footer />
      
    </div>
  )
}

export default App