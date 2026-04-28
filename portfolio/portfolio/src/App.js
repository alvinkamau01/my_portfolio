import React from 'react';
//import Header from './components/header';
import About from './components/about';
import Home from './components/home';
import Projects from './components/projects';

function App() {
  return (
    <div className='fragment'>
      <Home/> 
      <About />
      <Projects/>
    </div>
  );
}

export default App;
