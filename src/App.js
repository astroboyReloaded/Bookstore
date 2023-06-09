import { Route, Routes } from 'react-router-dom';
import './App.css';
import Books from './components/Books';
import Categories from './components/Categories';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route path="" element={<Layout />}>
        <Route index element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Route>
    </Routes>
  );
}

export default App;
