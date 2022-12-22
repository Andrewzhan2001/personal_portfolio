import logo from './logo.svg'; //这里是default
import './App.css';
import {About, Footer, Header, Skills, Testimonial, Work} from './container' //用brace就是自己指定的export
import { Navbar } from './components';
function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />

    </div>
  );
}

export default App;
