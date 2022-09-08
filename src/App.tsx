import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { searchDataFromTerm } from './dataFetch'

function App() {
  const [data, setData] = useState([])

  const handleClick = async () => {
    const { data } = await searchDataFromTerm('python')
    setData(data)
    return data
  }
  console.log(data)
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
          <button type='button' onClick={handleClick}>
            Click
          </button>
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
