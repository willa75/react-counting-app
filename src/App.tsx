import { useEffect, useState } from 'react';
import { getData } from './utils/data.utils';
import './App.css';

export type Count = {
  id: string;
  value: string;
}

export type ValueObject = {
  value: string;
}

function App() {
  const [count, setCount] = useState<Count>({id: process.env.REACT_APP_COUNT_KEY, value: '0'});

  useEffect(() => {
    const fetchCount = async () => {
      const count = await getData<ValueObject>(`https://api.countapi.xyz/get/${process.env.REACT_APP_COUNT_KEY}`);
      setCount({
        id: process.env.REACT_APP_COUNT_KEY,
        value: count.value
      });
    }

    fetchCount();
  }, []);

  const increaseCount = async (): Promise<void> => {
    const newCount = await getData<ValueObject>(`https://api.countapi.xyz/hit/${process.env.REACT_APP_COUNT_KEY}`);
    setCount({
      id: process.env.REACT_APP_COUNT_KEY,
      value: newCount.value
    });
  };

  return (
    <div className="App">
      <h1 className='app-title'>Counting App</h1>
      <div>
        <h2>{ count.value }</h2>
        <button onClick={increaseCount}>Increase Value</button>
      </div>
    </div>
  );
}

export default App;
