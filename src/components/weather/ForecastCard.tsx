import { ForecastDay } from '@/types/weather';
import WeatherIcon from './WeatherIcon';
import { Droplets } from 'lucide-react';

interface ForecastCardProps {
  day: ForecastDay;
  index: number;
}

const ForecastCard = ({ day, index }: ForecastCardProps) => {
  return (
    <div 
      className={`
        glass-card rounded-2xl p-4 text-center
        transition-all duration-300 hover:scale-105 hover:bg-white/20
        animate-fade-up opacity-0
      `}
      style={{ animationDelay: `${0.3 + index * 0.1}s`, animationFillMode: 'forwards' }}
    >
      <p className="text-white/80 text-sm font-medium mb-3">{day.dayName}</p>
      
      <div className="flex justify-center mb-3">
        <WeatherIcon 
          condition={day.condition.main} 
          size={36} 
          className="text-white"
        />
      </div>
      
      <div className="flex justify-center items-baseline gap-1 mb-2">
        <span className="text-white text-xl font-semibold">{Math.round(day.high)}°</span>
        <span className="text-white/50 text-sm">{Math.round(day.low)}°</span>
      </div>
      
      {day.precipitation > 0 && (
        <div className="flex items-center justify-center gap-1 text-white/60 text-xs">
          <Droplets className="w-3 h-3" />
          <span>{day.precipitation}%</span>
        </div>
      )}
    </div>
  );
};

export default ForecastCard;
