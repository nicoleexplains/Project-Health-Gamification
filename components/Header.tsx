
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center border-b border-slate-700 pb-4">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Success Dashboard</h1>
        <p className="text-slate-400">Team Phoenix</p>
      </div>
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center font-bold text-lg">
          P
        </div>
      </div>
    </header>
  );
};

export default Header;
