import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import useGame from './useGame'
import Cards from './components/Cards'



const App = () => {
  const game = useGame()


  return (
    <div id='main' >
      <Header />
      <div id='bg'></div>
      <div id='score'>
        <p>Score: {game.score}</p>
        <p>BestScore: {game.bestScore}</p>
      </div>
      <div id='cards'>
        <Cards units={game.units} onClick={game.play} />
      </div>      
      <Footer />      
    </div>
  )
}

export default App