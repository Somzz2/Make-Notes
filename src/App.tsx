import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Template } from './components/mainComponents';
import Header from './components/Header';
import Notes from './components/Notes';

function App() {
  return (
    <Template>
      <Header />
      <Notes />
    </Template>
  );
}

export default App;
