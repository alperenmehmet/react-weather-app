import { WeatherContainer } from './components/WeatherContainer';
import { WeatherInfo } from './components/WeatherInfo';
import { CityContainer } from './components/CityContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <div className='city-container'>
        <CityContainer />
      </div>
      <div className='container'>
        <WeatherContainer />
        <WeatherInfo />
      </div>
    </>
  );
}

export default App;
