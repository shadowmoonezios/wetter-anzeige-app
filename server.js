const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Verbindung
const uri = 'mongodb://localhost:27017/wetter';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB-Datenbankverbindung hergestellt');
});

// API-Routen
app.get('/api/wetter/:stadt', (req, res) => {
  const stadt = req.params.stadt;
  // Hier sollte der API-Call zu OpenWeatherMap erfolgen
  // Zu diesem Zeitpunkt gibt die API aktuell nur statische Daten zurück.
  // Temporär: Rückgabe eines festen Wetterstatus
  res.json({ stadt, wetter: "Sonnig", temperature: "20°C" });
  // TODO: Ersetze die statische Antwort mit dynamischer Wetterdatenabfrage von OpenWeatherMap
  // Dies sollte in Zukunft implementiert werden, um aktuelle Wetterinformationen bereitzustellen.
});

// Server starten
app.listen(port, () => {
  console.log(`Server läuft auf Port: ${port}`);
});