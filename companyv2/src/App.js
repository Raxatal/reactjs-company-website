import './App.css';
import BestSeller from './Components/BestSeller';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Intro from './Components/Intro';
import OurCompany from './Components/OurCompany';
import Performance from './Components/Performance';
import Product from './Components/Product';
import Services from './Components/Services';
import Team from './Components/Team';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Product id="products" />
      <BestSeller id="bestsellers" />
      <Services id="services" />
      <OurCompany id="aboutus" />
      <Team />
      <Performance />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
