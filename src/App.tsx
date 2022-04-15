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
  const [count, setCount] = useState<Count>({id: '1ccb732e-b55a-4404-ad3f-0f99c02fe44e', value: '219'});

  useEffect(() => {
    const fetchCount =async () => {
      const newCount = await getData<ValueObject>('https://api.countapi.xyz/get/1ccb732e-b55a-4404-ad3f-0f99c02fe44e');
      setCount({
        id: '1ccb732e-b55a-4404-ad3f-0f99c02fe44e',
        value: newCount.value
      });
    }

    fetchCount();
  }, []);



  return (
    <div className="App">
      <h1 className='app-title'>Counting App</h1>
      <div>
        <h2>{ count.value }</h2>
      </div>
    </div>
  );
}

export default App;
