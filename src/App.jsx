import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="app">
        {/* Header Section */}
        <header className="app-header">
          <nav>
            <h1>MyTunes</h1>
          </nav>
        </header>

        {/* Main Content Section */}
        <main className="app-content">
          <div className="content-container">
            <div className='left-content-container'>
              <img src={'images/justin-bieber.gif'} alt='Justin Bieber' />
            </div>
            <div className='right-content-container'>
              <h2>Justin Bieber's Albums</h2>
              <details>
                <summary>System Requirements</summary>
                <p>
                  Requires a computer running an operating system. The computer must have some
                  memory and ideally some kind of long-term storage. An input device as well
                  as some form of output device is recommended.
                </p>
              </details>
              <details>
                <summary>System Requirements</summary>
                <p>
                  Requires a computer running an operating system. The computer must have some
                  memory and ideally some kind of long-term storage. An input device as well
                  as some form of output device is recommended.
                </p>
              </details>
            </div>
          </div>
        </main>

        {/* Footer Section */}
        <footer className="app-footer"></footer>
      </div>
    </>
  )
}

export default App
