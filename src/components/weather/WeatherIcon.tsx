import { Sun, Cloud, CloudRain, CloudSun, Snowflake, CloudLightning, Wind, CloudFog } from 'lucide-react';

interface WeatherIconProps {
  condition: string;
  size?: number;
  className?: string;
}

const WeatherIcon = ({ condition, size = 64, className = '' }: WeatherIconProps) => {
  const lowerCondition = condition.toLowerCase();
  
  const iconProps = {
    size,
    className: `${className} drop-shadow-lg`,
    strokeWidth: 1.5,
  };

  if (lowerCondition.includes('thunder') || lowerCondition.includes('storm')) {
    return <CloudLightning {...iconProps} />;
  }
  if (lowerCondition.includes('rain') || lowerCondition.includes('drizzle')) {
    return <CloudRain {...iconProps} />;
  }
  if (lowerCondition.includes('snow')) {
    return <Snowflake {...iconProps} />;
  }
  if (lowerCondition.includes('fog') || lowerCondition.includes('mist')) {
    return <CloudFog {...iconProps} />;
  }
  if (lowerCondition.includes('wind')) {
    return <Wind {...iconProps} />;
  }
  if (lowerCondition.includes('partly') || lowerCondition.includes('few clouds')) {
    return <CloudSun {...iconProps} />;
  }
  if (lowerCondition.includes('cloud') || lowerCondition.includes('overcast')) {
    return <Cloud {...iconProps} />;
  }
  
  return <Sun {...iconProps} />;
};

export default WeatherIcon;
