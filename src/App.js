import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={(
        <header className="App-header">
          <h1>Bookstore</h1>
        </header>
      )} />
      <Route path='/categories' element={(
        <header className="App-header">
          <h1>Categories</h1>
        </header>
      )} />
    </Routes>
  );
}

export default App;
