import { useState } from 'react';
import { Search, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface SearchBarProps {
  onSearch: (location: string) => void;
  currentLocation: string;
}

const SearchBar = ({ onSearch, currentLocation }: SearchBarProps) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
      setQuery('');
    }
  };

  return (
    <div className="w-full max-w-md mx-auto animate-fade-up">
      <form onSubmit={handleSubmit} className="relative">
        <div
          className={`
            relative flex items-center gap-3 px-4 py-3
            glass-card rounded-2xl transition-all duration-300
            ${isFocused ? 'ring-2 ring-white/40 bg-white/20' : 'bg-white/15'}
          `}
        >
          <Search className="w-5 h-5 text-white/70 flex-shrink-0" />
          <Input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Search for a city..."
            className="flex-1 bg-transparent border-none text-white placeholder:text-white/50 focus-visible:ring-0 focus-visible:ring-offset-0 p-0 h-auto text-base"
          />
        </div>
      </form>
      
      <div className="flex items-center justify-center gap-2 mt-4 text-white/80">
        <MapPin className="w-4 h-4" />
        <span className="text-sm font-medium">{currentLocation}</span>
      </div>
    </div>
  );
};

export default SearchBar;
