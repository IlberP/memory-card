import React, {useState, useEffect} from 'react'
import MemoryCards from './MemoryCards'
import CardImg from './CardImg'

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
        
        
        let newCard = { ...cards[id]};
        newCard.cards++
        cards[id] = newCard
        setClickedCard(clickedCard.concat(newCard))
        setCards(shuffle(shuffCards))
        console.log(newCard)
        
        console.log(clickedCard)
        console.log(cards)
        console.log(score)
        console.log(highScore)
        
        
    }

    


    return (
        <div>
            <div>{cards.map((value, id) => 
            { return <CardImg key={id} info={value} clicked={clicked}/> })}</div>
            <div>Score: {score}</div>
            <div>High Score: {highScore}</div>
            {/* <div>{cards.map(card => <p key={card.id} onClick={ex}>{card.image}</p>)}</div>  */}
        </div>
    )
}

export default CountScore


