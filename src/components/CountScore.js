import React, {useState, useEffect} from 'react'
import MemoryCards from './MemoryCards'
// import CardImg from './CardImg'

function CountScore() {

    const startScore = 0
    let [score, setScore] = useState(startScore) //starting score
    let [cards, setCards] = useState(MemoryCards) //available cards in the array
    let [highScore, setHighScore] = useState(0) //setting the highscore to follow current score
    let [clickedCard, setClickedCard] = useState([]) //adds clicked card to new array
    // let showCards = []

    //function to shuffle cards on click event
    let shuffle = require('shuffle-array'),
        shuffCards = cards

    //updates highscore to follow score if beaten
    useEffect (() => {
        if(highScore !== null) {
            if(score > highScore){
                setHighScore(highScore = score)
                // setScore(score = startScore)
            }
        }
    })



    //   click event listener to update score and shuffle cards on click
      const clicked = (id) => {
       
        setScore(score + 1)
        
        
        let newCard = { ...cards[id.event]};
        newCard.cards++
        cards[id.event] = newCard
        setClickedCard(clickedCard.concat(newCard))
        shuffle(shuffCards)
        console.log(newCard)
        
        console.log(clickedCard)
        console.log(cards)
        console.log(score)
        console.log(highScore)
        
        
    }

    // const ex = () => {
    //     clicked([])
    // }
        // loseGame(score = startScore)


        // if(highScore !== null){
        //     if(score > highScore){
        //         setHighScore(highScore = score)
                
        //     }
        // }
        
    

    // const example = () => {
    //     const newClick = [...cards]
    //     let newCard = { ...newClick[1]};
    //     newCard.cards++
    //     newClick[1] = newCard
    //     setClickedCard(newClick)
    //     console.log(newClick)
    // }

    // const loseGame = () => {
    //     if(clickedCard.includes(showCards)) {
           
    //         shuffle(showCards)
    //         clickedCard = []
    //         console.log(clickedCard)

    //     }
    // }


    return (
        <div>
            <div>Score: {score}</div>
            <div>High Score: {highScore}</div>
            <div>{cards.map(card => <p key={card.id} onClick={clicked}>{card.image}</p>)}</div> 
        </div>
    )
}

export default CountScore


