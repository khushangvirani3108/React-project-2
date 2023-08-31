import logo from './logo.svg';
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import { Routes, Route, Link } from "react-router-dom";
import Details from './Components/Details';

function App() {
  return (
    <>
      <nav className='w-100 bg-success ' style={{position:"fixed",zIndex:"999"}}>
        <div className='container '>
          <ul style={{ listStyle: "none" }} className='mb-0 d-flex text-light justify-content-between px-5 py-3'>


            <li>
              <a className='text-light text-decoration-none' href='#home'>Home</a>
            </li>
            <li>
              <a className='text-light text-decoration-none' href='#about'>About</a>
            </li>
            <li>
              <a className='text-light text-decoration-none' href='#contact'>Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      <div id='home'>
        <Details />
      </div>

      <div id='about'>
        <About />
      </div>
      <div id='contact'>
        <Contact />
      </div>
    </>
  )
}

export default App;
