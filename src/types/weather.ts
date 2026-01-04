export interface WeatherCondition {
  main: string;
  description: string;
  icon: string;
}

export interface CurrentWeather {
  location: string;
  country: string;
  temperature: number;
  feelsLike: number;
  humidity: number;
  windSpeed: number;
  condition: WeatherCondition;
  visibility: number;
  pressure: number;
  uvIndex: number;
}

export interface ForecastDay {
  date: string;
  dayName: string;
  high: number;
  low: number;
  condition: WeatherCondition;
  precipitation: number;
}

export interface WeatherData {
  current: CurrentWeather;
  forecast: ForecastDay[];
}

export type WeatherTheme = 'sunny' | 'cloudy' | 'rainy' | 'night';
