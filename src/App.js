import './App.css';
import Aistocks from './components/Aistocks';
import Backtotop from './components/Backtotop';
import Statistics from './components/Statistics';
import Topai from './components/Topai';

function App() {
  return (
    <div className=' bg-darkblue'>
      <Topai/>
      <Aistocks/>
      <Statistics/>
      <Backtotop/>
    </div>
  );
}

export default App;
