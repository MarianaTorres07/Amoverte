import About from './components/About.tsx';
import Contact from './components/Contact.tsx';
import Hero from './components/Hero.tsx';
import NavBar from './components/NavBar.tsx';
import Services from './components/Services.tsx';
import Team from './components/Team.tsx';
import Locations from './components/Locations.tsx';
import Footer from './components/Footer.tsx';

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Team />
      <Locations />
      <Contact />
      <Footer />
    </>
  );
}

export default App;