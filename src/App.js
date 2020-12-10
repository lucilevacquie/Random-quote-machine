import './App.css';
import React, {useState} from "react";

const QuotesLibrary = [
  {
    key: 0,
    text:"Be the change that you wish to see in the world.",
    author:"Gandhi"
  },
  {
    key: 1,
    text:"I have no special talent. I am only passionately curious.",
    author:"Albert Einstein"
  },
  {
    key: 2,
    text:"If you judge people, you have no time to love them.",
    author:"Mother Teresa"
  },
  {
    key: 3,
    text:"Don't count the days, make the days count.",
    author:"Muhammad Ali"
  },
  {
    key: 4,
    text:"Be kind whenever possible. It is always possible.",
    author:"Dalai Lama"
  },
]

const RandomQuote = () => {

  const [currentQuote, setCurrentQuote] = useState({})

  const getRandomQuote = () => {
    const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
    }
    const minQuotes = 0
    let maxQuotes = QuotesLibrary.length - 1

    let int = randomInt(minQuotes, maxQuotes)

    setCurrentQuote({
      text: QuotesLibrary[int].text,
      author: QuotesLibrary[int].author
    })

  }

  return (
  <div id="quote-box">
    <h1>Random Quote Machine</h1>
    <div id="text">"{currentQuote.text}"</div>
    <div id="author">{currentQuote.author}</div>
    <button id="new-quote" onClick={() => getRandomQuote()}>New quote</button>
    <br/>
    <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank">Tweet this quote</a>
  </div>
  )
}

export default RandomQuote;
