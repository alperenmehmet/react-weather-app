import { WeatherContainer } from './components/WeatherContainer';
import { WeatherInfo } from './components/WeatherInfo';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='container'>
      <WeatherContainer />
      <WeatherInfo />
    </div>
  );
}

export default App;
