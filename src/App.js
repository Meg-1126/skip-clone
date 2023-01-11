import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Slider from './components/Slider';
import Rewards from './components/Rewards';
import Download from './components/Download';
import ActionCards from './components/ActionCards';
import Map from './components/Map';
import PopularCuisines from './components/PopularCuisines';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Slider/>
      <Rewards/>
      <Download />
      <ActionCards />
      <Map />
      <PopularCuisines />
      <Footer />
    </>
  );
}

export default App;
