import "./App.css";
import { StoryOne } from "./assets";
// import Navbar from "./components/basic/navbar";
import Getstarted from "./components/basic/getstarted";
import Storydiv from "./components/basic/storydiv";
import Values from "./pages/aboutus/values";
import Whatwedo from "./pages/aboutus/whatwedo";
import Ourmission from "./pages/aboutus/ourmission";
import Herosection from "./pages/aboutus/herosection";
import Whyqrhive from "./pages/home/whyqrhive";
function App() {
  return (
    <div className="App">
      {/* <Navbar />  */}
      <Getstarted /> 
      {/* <Values />  */}
      {/* <Whatwedo/> */}
      {/* <Ourmission /> */}
      {/* <Herosection />
      <Whyqrhive />
      <Storydiv /> */}
    </div>
  );
}

export default App;
