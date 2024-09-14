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
          <div className="content__container">
            <div className='left-content__container'>
              <img src={'images/justin-bieber.gif'} alt='Justin Bieber' />
            </div>
            <div className='right-content__container'>
              <h2>Justin Bieber's Albums</h2>
              <details name="reqs">
                <summary dir="rtl">
                  <span>Purpose</span>
                </summary>
                <ol className='song-items__container'>
                  <li className='song-item'>
                    <ul><li>Mark My Words</li><li>2:14</li></ul>
                  </li>
                  <li className='song-item'>
                    <ul><li>I'll Show You </li><li>3:20</li></ul>
                  </li>
                  <li className='song-item'>
                    <ul><li>What Do You Mean</li><li>3:26</li></ul>
                  </li>
                  <li className='song-item'>
                    <ul><li>Sorry</li><li>3:20</li></ul>
                  </li>
                  <li className='song-item'>
                    <ul><li>Love Yourself</li><li>3:54</li></ul>
                  </li>
                  <li className='song-item'>
                    <ul><li>Company</li><li>3:28</li></ul>
                  </li>
                </ol>
              </details>
              <details name="reqs">
                <summary dir="rtl">
                  <span>Justice</span>
                </summary>
                <ol className='song-items__container'>
                  <li className='song-item'>
                    <ul><li>2 Much</li><li>2:33</li></ul>
                  </li>
                  <li className='song-item'>
                    <ul><li>Deserve You</li><li>3:07</li></ul>
                  </li>
                  <li className='song-item'>
                    <ul><li>As I Am</li><li>2:54</li></ul>
                  </li>
                  <li className='song-item'>
                    <ul><li>Off My Face</li><li>2:36</li></ul>
                  </li>
                  <li className='song-item'>
                    <ul><li>Holy</li><li>3:32</li></ul>
                  </li>
                  <li className='song-item'>
                    <ul><li>Unstable</li><li>2:38</li></ul>
                  </li>
                </ol>
              </details>
              <details name="reqs">
                <summary dir="rtl">
                  <span>Believe</span>
                </summary>
                <ol className='song-items__container'>
                  <li className='song-item'>
                    <ul><li>All Around The World</li><li>4:04</li></ul>
                  </li>
                  <li className='song-item'>
                    <ul><li>Boyfriend </li><li>2:52</li></ul>
                  </li>
                  <li className='song-item'>
                    <ul><li>As long As You Love Me</li><li>3:49</li></ul>
                  </li>
                  <li className='song-item'>
                    <ul><li>Catching Feelings</li><li>3:55</li></ul>
                  </li>
                  <li className='song-item'>
                    <ul><li>Take You</li><li>3:41</li></ul>
                  </li>
                  <li className='song-item'>
                    <ul><li>Right Here</li><li>3:24</li></ul>
                  </li>
                </ol>
              </details>
              <details name="reqs">
                <summary dir="rtl">
                  <span>Changes</span>
                </summary>
                <ol className='song-items__container'>
                  <li className='song-item'>
                    <ul><li>All Around Me</li><li>2:17</li></ul>
                  </li>
                  <li className='song-item'>
                    <ul><li>Habitual</li><li>2:48</li></ul>
                  </li>
                  <li className='song-item'>
                    <ul><li>Come Around Me</li><li>3:21</li></ul>
                  </li>
                  <li className='song-item'>
                    <ul><li>Intentions</li><li>3:33</li></ul>
                  </li>
                  <li className='song-item'>
                    <ul><li>Yummy</li><li>3:29</li></ul>
                  </li>
                  <li className='song-item'>
                    <ul><li>Available</li><li>3:15</li></ul>
                  </li>
                </ol>
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
