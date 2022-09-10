import { useRef, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { useSearchQuery } from './services/http'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const inputS = useRef<HTMLInputElement>(null)
  const query = useSearchQuery(searchTerm)

  const handleClick = () => {
    setSearchTerm(inputS.current?.value ?? '')
  }

  console.log(query)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
          <label htmlFor="search">
            Search
            <input type="text" id="search" ref={inputS} />
          </label>
          <button type="button" onClick={handleClick}>
            search
          </button>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
