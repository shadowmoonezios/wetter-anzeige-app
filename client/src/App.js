import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [stadt, setStadt] = useState('');
  const [wetter Daten, setWetterDaten] = useState(null);

  const holeWetterDaten = async () => {
    const response = await axios.get(`/api/wetter/${stadt}`);
    setWetterDaten(response.data);
  };

  return (
    <div>
      <h1>Wetter Anzeige App</h1>
      <input
        type="text"
        value={stadt}
        onChange={(e) => setStadt(e.target.value)}
        placeholder="Stadt eingeben"
      />
      <button onClick={holeWetterDaten}>Wetter abrufen</button>
      {wetterDaten && (
        <div>
          <h2>Wetter in {wetterDaten.stadt}</h2>
          <p>Temperatur: {wetterDaten.temperature}</p>
          <p>Zustand: {wetterDaten.wetter}</p>
        </div>
      )}
    </div>
  );
}

export default App;