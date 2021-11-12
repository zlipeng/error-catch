import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // fetch('https:abc.com')

    // console.log(a)
    // const notdefined,

    // const p = 0;
    // p.name = 'zlp'

    // (function fn ( ) { fn() })()

    // new Image().src = '/remote/image/notdeinfed.png'

    // try {
    //   console.log(a)
    // } catch (error) {
    //   console.log(error)
    // }
    // new Promise((resolve, reject) => {
    //   console.log(a)
    // })
    // new XMLHttpRequest()

  }, [])

  return (
    <div className="App">
      {/* <img src="a.com/b.png" alt="" /> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
