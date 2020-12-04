import React, { useState } from 'react'

const QuoteMachine = () => {
  const [quote, setQuote] = useState({})

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
  }

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://type.fit/api/quotes')
      const quotes = await response.json()
      const randomNumber = getRandomNumber(0, quotes.length)
      const quote = quotes[randomNumber]
      setQuote(quote)
    } catch (error) {
      setQuote({ error: 'Failed to fetch a quote' })
    }
  }

  return (
    <div>
      <p>{quote.text}</p>
      <span>{quote.author}</span>
      <button></button>
    </div>
  )
}
