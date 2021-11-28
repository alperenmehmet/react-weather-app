import { WeatherContainer } from './components/WeatherContainer';
import { WeatherInfo } from './components/WeatherInfo';
import { WeekContainer } from './components/WeekContainer';

function App() {
  return (
    <div className='container'>
      <WeatherContainer />
      <WeatherInfo />
    </div>
  );
}

export default App;
