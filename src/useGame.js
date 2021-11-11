import { useEffect, useState } from "react"

const units = ['zergling', 'marine', 'zealot', 'adept', 'ghost', 'roach', 'baneling', 'hydralisk', 'probe', 'scv', 'stalker', 'queen']

const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
}


const useGame = () => {
    //const [cards, setCards] = useState([])
    const [picked, setPicked] = useState([])
    const [score, setScore] = useState(0)
    const [bestScore, setBestScore] = useState(0)
    

    

    
        
    const play = (card) => {        
        if ( picked.includes(card) ) {
            lose()
        }
        else {
            win(card)
        }
    }

    const win = (card) => {
        setScore(score + 1)
        setPicked([card, ...picked])
        if (score >= bestScore) {
            setBestScore(score+1)
        }
        shuffleArray(units)
        
    }

    const lose = () => {
        setScore(0)
        setPicked([])
        shuffleArray(units)
    }

    


    return {score, bestScore, play, units}
}

export default useGame
