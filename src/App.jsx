import './App.css';
import Header from './component/Header/Header';
import Hero from './component/Hero/Hero';
import Lookbook from './component/Lookbook/Lookbook';
import Stories from './component/Stories/Stories.jsx';
import About from './component/About/About';
import Footer from './component/Footer/Footer';

function App() {
   return (
    <div className="bg-vault-black text-vault-cream min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <Lookbook />
      <Stories />
      <About />
      <Footer />
    </div>
  );
}

export default App;