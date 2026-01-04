import { ForecastDay } from '@/types/weather';
import ForecastCard from './ForecastCard';

interface ForecastProps {
  forecast: ForecastDay[];
}

const Forecast = ({ forecast }: ForecastProps) => {
  return (
    <div className="w-full max-w-2xl mx-auto mt-8">
      <h2 className="text-white/80 text-sm font-medium uppercase tracking-wider mb-4 animate-fade-up stagger-2">
        5-Day Forecast
      </h2>
      
      <div className="grid grid-cols-5 gap-2 md:gap-3">
        {forecast.map((day, index) => (
          <ForecastCard key={day.date} day={day} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Forecast;
