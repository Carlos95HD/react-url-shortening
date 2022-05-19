import "./assets/css/styles.css";
import { Shortener } from "./components/shortener/Shortener";
import { NavBar } from "./components/layout/NavBar";
import { Title } from "./components/layout/Title";
import { Statistics } from "./components/layout/Statistics";
import { Footer } from "./components/layout/Footer";
import { LinksProvider } from "./context/LinksProvider";

function App() {
  return (
    <LinksProvider>
      <div className="overflow-hidden">
        <NavBar />
        <Title />
        <div className="bg-gray mt-40">
          <Shortener />
          <Statistics />
        </div>
        <Footer />
      </div>
    </LinksProvider>
  );
}

export default App;