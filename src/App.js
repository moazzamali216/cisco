import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Tags from "./components/Tag";
import BillService from "./components/BillService";
import Network from "./components/Network";
import FeedBack from "./components/FeedBack";
import Story from "./components/Story";
import Guide from "./components/Guide";
import Deploys from "./components/Deploys"
import Products from "./components/Products"
import Technology from "./components/Technology";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Hero />
      <Tags />
      <Network />
      <BillService />
      <FeedBack />
      <Story/>
      <Guide/>
      <Deploys/>
      <Products/>
      <Technology/>
      <Footer/>
    </div>
  );
}

export default App;
