
import './App.css';
import About from './components/About';
import Attorneys from './components/Attorneys';
import Blog from './components/Blog';
import Case from './components/Case';
import Footer from './components/Footer';
import Form from './components/Form';
import Home from './components/Home';
import Services from './components/Services';
import Value from './components/Value';

function App() {
  return (
    <>
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      {/* <section id="value">
        <Value />
      </section> */}
      <section id="services">
        <Services />
      </section>
      <section id="case-studies">
        <Case />
      </section>
      <section id="attorneys">
        <Attorneys />
      </section>
      <section id="contact">
        <Form />
      </section>
      <section id="blog">
        <Blog />
      </section>
      <Footer />
    </>
  );
}

export default App;
