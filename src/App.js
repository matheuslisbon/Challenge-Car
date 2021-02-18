import React from 'react'
import Card from './components/Cards/index'
import Home from './components/Home';
import NavBar from './components/NavBar';
import GlobalStyles from './styles/GlobalStyles'

function App() {
  return (
    <>
      <GlobalStyles/>
      <NavBar/>
      <Home/>
      <Card/>
    </>
  );
}

export default App;
