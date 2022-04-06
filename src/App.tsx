import './assets/css/styles.css'
import { Shortener } from './components/shortener/Shortener';
import { NavBar } from './components/layout/NavBar';
import { Title } from './components/layout/Title';
import { Statistics } from './components/layout/Statistics';

function App() {
  return (
    <div className='overflow-hidden'>
      <NavBar />
      <Title />
      <div className="bg-gray mt-36">
        <Shortener />
        <Statistics />
      </div>
    </div>
  );
}

export default App;