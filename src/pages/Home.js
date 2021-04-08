import About from '../components/About';
import Services from '../components/Services';
import Works from '../components/Works';
import Partners from '../components/Partners';
import Contact from '../components/Contact';

function App() {
  return (
    <main>
      <About />
      <Services />
      <Works isComponent={true} />
      <Partners />
      <Contact />
    </main>
  );
}

export default App;
