import Kep from './komponensek/Kep';
import './App.css';
import { adatLista } from './adatok';
import React, {useState} from "react";


function App() {
  const [KepIndex, setNagyKep] = React.useState(0);

  function nagykepcsere(id) {
    console.log("nagykep", id);
    setNagyKep(id)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Képgaléria</h1>
        <div className="fokep">
          <h3>Kép cím</h3>
            <Kep adat={adatLista[KepIndex]}></Kep>
          <p>leírás</p>
        </div>
        <div className="galeria">
          {adatLista.map((elem, index) =>{
            return <Kep adat={elem} key={index} nagykepcsere={nagykepcsere}></Kep>;
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
