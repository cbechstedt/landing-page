import './App.scss';
import React from 'react'
import Logo from './components/Logo';
import Arrow from './components/Arrow';
import { Button } from 'react-bootstrap';

const App = () => {
  return (
    <main>
      <header className='header-container'>
        <Logo />
        <nav className='menu-container'>
          <a>What we offer</a>
          <a>How it works</a>
          <a>Portfolio</a>
        </nav>
        <Button className='btn-purple'>
          Contact us
        </Button>
      </header>
    </main>
  );
};



export default App;
