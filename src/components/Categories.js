import { useSelector } from 'react-redux';

const Categories = () => {
  const { status } = useSelector((state) => state.categories);

  return (
    <header className="App-header">
      <h1>{status}</h1>
    </header>
  );
};

export default Categories;
