import React,{useState} from "react";
import "./index.css"
import Background from "./Components/Background"
import Search from "./Components/Search/Search"
import Sonuc from "./Components/Sonuc"

function App() {
const[havaDurumu,belirtHavaDurumu]=useState({});
  return (
    <div className='application'>
      <Background back={havaDurumu.weather && havaDurumu.weather[0].main}></Background>
      <div id="title"> Hava Durumu Uygulaması</div>
      <Search belirtHavaDurumu={belirtHavaDurumu}></Search>
      <Sonuc hava={havaDurumu}></Sonuc>
    </div>
  );
}

export default App;
