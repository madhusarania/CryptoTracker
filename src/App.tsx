import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { useAppDispatch } from './hooks/redux';
import CryptoTable from './features/crypto/CryptoTable';
import Header from './components/Header';
import MockWebSocket from './services/mockWebSocket';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
};

const AppContent: React.FC = () => {
  const dispatch = useAppDispatch();
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  useEffect(() => {
    const mockWs = new MockWebSocket(dispatch);
    mockWs.connect();
    
    return () => {
      mockWs.disconnect();
    };
  }, [dispatch]);
  
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  
  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        
        <main className="container mx-auto px-4 py-8">
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
            <CryptoTable />
          </div>
          
          <div className="mt-6 text-center text-gray-500 dark:text-gray-400 text-sm">
            <p>Data updates every 1-2 seconds to simulate real-time market changes</p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;