const Weather = ({ forecast }) => {
  return (
    <div className='Weather'>
      <h1>{forecast.climate}</h1>
      <p> Today is {forecast.characteristics}</p>
    </div>
  );
};

export default Weather;
