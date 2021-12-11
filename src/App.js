import './App.css';
import Weather from './components/Weather';
import {useState} from "react";

const App = () => {
  // const forecast = ["Rainy", "Snow", "Sunny"]

  const [forecasts, setForecast] = useState([
    {
      id: 1,
      climate: "Rainy",
      characteristics: "Wet 💦"
    },
    {
      id: 2,
      climate: "Snow",
      characteristics: "Freezing  🥶"
    },
    {
      id: 3,
      climate: "Sunny",
      characteristics: "Wet 🥵"
    }
  ])

  const handleChangeForecast = () => {
    setForecast([
      {
        id: 1,
        climate: "Thunderstorm",
        characteristics: "Stormy 🌩️"
      },
      {
        id: 2,
        climate: "Sunny",
        characteristics: "Hot ☀️"
      },
      {
        id: 3,
        climate: "Strong Winds",
        characteristics: "Windy 💨"
      }
    ])
  }

  return (
    <div className='Weather'>
      {forecasts.map((forecast) => (
        <Weather key={forecast.id} forecast={forecast} />
      ))}
      <button onClick = {handleChangeForecast}>Change Forecast</button>
    </div>
    
  );
}

export default App;
