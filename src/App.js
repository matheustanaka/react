import logo from './logo.svg';
import './App.css';
import Weather from './components/Weather';

const App = () => {
  const forecast = ["Rainy", "Snow", "Sunny"]

  return (
    <div className='Weather'>
      {forecast.map((climate) => <h1>{climate}</h1>)}
    </div>
  );
}

export default App;
