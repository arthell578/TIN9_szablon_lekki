import { useState } from 'react';
import './App.css';

function App() {

  const [imie, ustawImie] = useState("");
  const [nazwisko, ustawNazwisko] = useState("");
  const [wiek, ustawWiek] = useState(0);


  return (
    <div class="osoba">
      <label>Imie:</label>
      
      <input type="text" id="imie" onChange={(event) => 
        {ustawImie(event.target.value);
        }}/>
      <label>Nazwisko:</label>
      <input type="text" id="nazwisko" onChange={(event) => 
        {ustawNazwisko(event.target.value);
        }}/>
      <label>Wiek:</label>
      <input type="text" id="wiek" onChange={(event) => 
        {ustawWiek(event.target.value);
        }}/>
      <button>Dodaj osobe</button>
    </div>

  );
}

export default App;
