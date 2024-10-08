import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Feature from './components/Feature';
import Gallery from './components/Gallery';
import Flexarea from './components/Flexarea';
import SignupArea from './components/SignupArea';
import Footer from './components/Footer';
import HubspotForm from './components/Formarea';

function App() {
  return (
    <>
    <Header/>
    <Hero/>
    
    <HubspotForm/>
    <Gallery/>
    
    <Footer/>
    </>
  );
}

export default App;
