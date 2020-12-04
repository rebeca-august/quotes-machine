import React, { useState, useEffect } from 'react'

export function getColor() {
  return (
    'hsl(' +
    360 * Math.random() +
    ',' +
    (25 + 70 * Math.random()) +
    '%,' +
    (85 + 10 * Math.random()) +
    '%)'
  )
}

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

  useEffect(() => {
    fetchQuote()
  }, [])

  return (
    <div style={{ backgroundColor: getColor() }} className="container">
      <p>{quote.text}</p>
      <span>{quote.author}</span>
      <button onClick={fetchQuote} className="new-quote-bnt">
        New Quote
      </button>
    </div>
  )
}

export default QuoteMachine
