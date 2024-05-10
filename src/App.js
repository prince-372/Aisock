import { useEffect } from 'react';
import './App.css';
import Aistocks from './components/Aistocks';
import Backtotop from './components/Backtotop';
import Statistics from './components/Statistics';
import Topai from './components/Topai';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

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
