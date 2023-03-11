import './App.css';
import './styles.css';
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
      <Hero />
      <Slider />
      <Rewards />
      <Download />
      <ActionCards />
      <Map />
      <PopularCuisines />
      <Footer />
    </>
  );
}

export default App;
