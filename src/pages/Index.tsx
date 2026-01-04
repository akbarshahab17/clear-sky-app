import { useState, useMemo } from 'react';
import SearchBar from '@/components/weather/SearchBar';
import CurrentWeather from '@/components/weather/CurrentWeather';
import Forecast from '@/components/weather/Forecast';
import { mockWeatherData, getWeatherTheme } from '@/data/mockWeather';
import { WeatherData } from '@/types/weather';

const Index = () => {
  const [weatherData, setWeatherData] = useState<WeatherData>(mockWeatherData);
  const [isLoading, setIsLoading] = useState(false);

  const weatherTheme = useMemo(() => {
    return getWeatherTheme(weatherData.current.condition.main);
  }, [weatherData.current.condition.main]);

  const handleSearch = async (location: string) => {
    setIsLoading(true);
    
    // Simulate API call - in production, this would fetch real data
    setTimeout(() => {
      // Update with mock data - customize location name
      setWeatherData({
        ...mockWeatherData,
        current: {
          ...mockWeatherData.current,
          location: location,
        },
      });
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className={`min-h-screen ${weatherTheme} transition-all duration-1000`}>
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <main className="flex-1 container mx-auto px-4 py-8 md:py-12 flex flex-col">
          {/* Search Section */}
          <div className="mb-8 md:mb-12">
            <SearchBar 
              onSearch={handleSearch}
              currentLocation={`${weatherData.current.location}, ${weatherData.current.country}`}
            />
          </div>

          {/* Weather Display */}
          <div className={`flex-1 flex flex-col justify-center transition-opacity duration-300 ${isLoading ? 'opacity-50' : 'opacity-100'}`}>
            <CurrentWeather data={weatherData.current} />
            <Forecast forecast={weatherData.forecast} />
          </div>

          {/* Footer */}
          <footer className="mt-8 text-center">
            <p className="text-white/40 text-xs">
              Weather data refreshes automatically • Last updated just now
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default Index;
