import { useEffect } from 'react';

import './App.css';

import Header from './Components/Header';
import VerticalTimeline from './Components/VerticalTimeline';

import objects from './Data/events'

function App() {

  useEffect(() => {
    document.title = "Happy One Year Anniversary!"
  }, []);

  return (
    <div className='container'>
      <Header />
      <VerticalTimeline events={objects} />
    </div>
  );
}

export default App;
