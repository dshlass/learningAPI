import React from 'react';
// import './App.css';
import SearchFood from './components/SearchFood/SearchFood'
import SelectedFood from './components/SelectedFoods/SelectedFoods'

const App: React.FC = () => {
  return (
    <div className="App">
        <SearchFood />
        <SelectedFood />
    </div>
  );
}

export default App;
