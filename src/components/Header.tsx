import React from 'react';
import { Moon, Sun, RefreshCw } from 'lucide-react';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-900 dark:to-purple-900 px-4 py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <RefreshCw className="h-8 w-8 text-white mr-2" />
          <h1 className="text-2xl font-bold text-white">CryptoTracker</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center bg-white/10 rounded-full p-1">
            <button
              onClick={toggleDarkMode}
              className="flex items-center justify-center p-2 rounded-full transition-colors duration-200"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-yellow-300" />
              ) : (
                <Moon className="h-5 w-5 text-white" />
              )}
            </button>
          </div>
          <div className="text-xs text-white bg-white/20 px-3 py-2 rounded">
            Live Updates
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;