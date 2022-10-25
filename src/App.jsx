import './App.css';
import Depoimentos from './components/Depoimentos/Depoimentos';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import InscrevaSe from './components/InscrevaSe/InscrevaSe';
import Motivos from './components/Motivos/Motivos';
import Planos from './components/Planos/Planos';
import Programas from './components/Programas/Programas';

function App() {
  return (
    <div className="App">
        <Hero />
        <Programas />
        <Motivos />
        <Planos />
        <Depoimentos />
        <InscrevaSe />
        <Footer />
    </div>
  );
}

export default App;
