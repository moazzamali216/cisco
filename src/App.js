import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Tags from "./components/Tag";
import Network from "./components/Network";
function App() {
  return (
    <div className="overflow-x-hidden">
      <Header />
<Hero/>
<Tags/>

<Network/>
    </div>
  );
}

export default App;
