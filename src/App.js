import './App.css';
import HeaderMobile from './components/HeaderMobile';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Contacts from './components/Contacts';
import Footer from './components/Footer';



function App() {
  return (
    <>
      <HeaderMobile bgScrollColor = '#ddd4c3cc' logoDefaultColor = '#fff' logoScrollColor = '#404040' />
      <Hero />
      <About />
      <Menu />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
