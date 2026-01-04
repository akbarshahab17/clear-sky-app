import { CurrentWeather as CurrentWeatherType } from '@/types/weather';
import WeatherIcon from './WeatherIcon';
import { Droplets, Wind, Eye, Gauge } from 'lucide-react';

interface CurrentWeatherProps {
  data: CurrentWeatherType;
}

const CurrentWeather = ({ data }: CurrentWeatherProps) => {
  return (
    <div className="text-center animate-fade-up stagger-1">
      {/* Main Temperature Display */}
      <div className="mb-6">
        <div className="flex items-center justify-center mb-4 animate-float">
          <WeatherIcon 
            condition={data.condition.main} 
            size={100} 
            className="text-white"
          />
        </div>
        
        <h1 className="text-8xl md:text-9xl font-light text-white tracking-tighter mb-2">
          {Math.round(data.temperature)}°
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 font-medium capitalize">
          {data.condition.description}
        </p>
        
        <p className="text-white/70 mt-2">
          Feels like {Math.round(data.feelsLike)}°
        </p>
      </div>

      {/* Weather Details Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8 animate-fade-up stagger-2">
        <WeatherDetail 
          icon={<Droplets className="w-5 h-5" />}
          label="Humidity"
          value={`${data.humidity}%`}
        />
        <WeatherDetail 
          icon={<Wind className="w-5 h-5" />}
          label="Wind"
          value={`${data.windSpeed} km/h`}
        />
        <WeatherDetail 
          icon={<Eye className="w-5 h-5" />}
          label="Visibility"
          value={`${data.visibility} km`}
        />
        <WeatherDetail 
          icon={<Gauge className="w-5 h-5" />}
          label="Pressure"
          value={`${data.pressure} hPa`}
        />
      </div>
    </div>
  );
};

interface WeatherDetailProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const WeatherDetail = ({ icon, label, value }: WeatherDetailProps) => (
  <div className="glass-card rounded-2xl p-4 transition-transform hover:scale-105 duration-300">
    <div className="flex items-center justify-center gap-2 text-white/70 mb-1">
      {icon}
      <span className="text-xs uppercase tracking-wide">{label}</span>
    </div>
    <p className="text-white text-lg font-semibold">{value}</p>
  </div>
);

export default CurrentWeather;
