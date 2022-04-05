import './assets/css/styles.css'
import { Shortener } from './components/shortener/Shortener';
import { NavBar } from './components/ui/NavBar';
import { Title } from './components/ui/Title';

function App() {
  return (
    <div className='overflow-hidden'>

      {/* NavBar */}
      <NavBar />
      {/* Title */}
      <Title />
      {/* Shortener Component */}
      <div className="bg-gray mt-36">
        <Shortener />
      </div>
      {/* Statitics */}
    </div>
  );
}

export default App;