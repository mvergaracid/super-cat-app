import React, { useState, useEffect} from 'react';
import './App.css'

function App() {

  const [ catUrl, setCatUrl] = useState('https://cdn2.thecatapi.com/images/9ch.jpg')

  const apiKey = '4418b721-1550-491a-8387-edd601a73e2b'
  const url = 'https://api.thecatapi.com/v1/images/search'

  useEffect(() => {
    getCat()
  }, [])
  
  const getCat = async () => {
    try {
      const response = await fetch(url)
      const json = await response.json()
      if (json[0]) {
        const catUrl = json[0].url
        setCatUrl(catUrl)
      }
      console.log('cats:', json)
    } catch(error) {
      console.log('error:', error)
    }
  }

  //JSX
  return (
    <div className="app">
      <h1> The best cap app ever created</h1>
      <img src={catUrl} alt="miau" />
      <button onClick={getCat}>Get new random cat</button>
    </div>
  )

}

export default App

