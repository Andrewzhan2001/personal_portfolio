import {About, Footer, Header, Skills, Testimonial, Work} from './container' //用brace就是自己指定的export, 不用就是default export
import { Navbar } from './components';
import './App.scss'

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
