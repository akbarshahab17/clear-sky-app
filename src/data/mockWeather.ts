import { WeatherData } from '@/types/weather';

export const mockWeatherData: WeatherData = {
  current: {
    location: 'San Francisco',
    country: 'US',
    temperature: 18,
    feelsLike: 16,
    humidity: 72,
    windSpeed: 12,
    condition: {
      main: 'Partly Cloudy',
      description: 'Partly cloudy with light breeze',
      icon: 'partly-cloudy',
    },
    visibility: 10,
    pressure: 1015,
    uvIndex: 4,
  },
  forecast: [
    {
      date: '2026-01-05',
      dayName: 'Mon',
      high: 19,
      low: 12,
      condition: { main: 'Sunny', description: 'Clear skies', icon: 'sunny' },
      precipitation: 0,
    },
    {
      date: '2026-01-06',
      dayName: 'Tue',
      high: 17,
      low: 11,
      condition: { main: 'Cloudy', description: 'Overcast', icon: 'cloudy' },
      precipitation: 10,
    },
    {
      date: '2026-01-07',
      dayName: 'Wed',
      high: 15,
      low: 10,
      condition: { main: 'Rainy', description: 'Light rain', icon: 'rainy' },
      precipitation: 60,
    },
    {
      date: '2026-01-08',
      dayName: 'Thu',
      high: 16,
      low: 9,
      condition: { main: 'Partly Cloudy', description: 'Partly cloudy', icon: 'partly-cloudy' },
      precipitation: 20,
    },
    {
      date: '2026-01-09',
      dayName: 'Fri',
      high: 20,
      low: 13,
      condition: { main: 'Sunny', description: 'Sunny and warm', icon: 'sunny' },
      precipitation: 0,
    },
  ],
};

export const getWeatherTheme = (condition: string, hour: number = new Date().getHours()): string => {
  const isNight = hour < 6 || hour > 20;
  
  if (isNight) return 'weather-gradient-night';
  
  const lowerCondition = condition.toLowerCase();
  if (lowerCondition.includes('rain') || lowerCondition.includes('storm')) {
    return 'weather-gradient-rainy';
  }
  if (lowerCondition.includes('cloud') || lowerCondition.includes('overcast')) {
    return 'weather-gradient-cloudy';
  }
  return 'weather-gradient-sunny';
};
