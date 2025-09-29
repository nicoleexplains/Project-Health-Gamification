
import React from 'react';
import { Badge } from '../types';

const BadgesShowcase: React.FC<{ badges: Badge[] }> = ({ badges }) => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-slate-700/50 h-full">
      <h3 className="text-lg font-bold text-white mb-4">Badges Earned</h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 gap-4">
        {badges.map((badge) => (
          <div key={badge.id} className="group flex flex-col items-center text-center relative">
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300
                ${badge.earned
                  ? 'bg-amber-400 text-slate-900 shadow-lg shadow-amber-500/20 group-hover:scale-110'
                  : 'bg-slate-700 text-slate-500 group-hover:bg-slate-600'
                }`}
            >
              {badge.icon}
            </div>
            <p className={`mt-2 text-xs font-semibold ${badge.earned ? 'text-slate-200' : 'text-slate-500'}`}>
              {badge.name}
            </p>
            <div className="absolute bottom-full mb-2 w-48 bg-slate-900 text-white text-xs rounded-lg py-2 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-xl border border-slate-700 z-10">
                <h4 className="font-bold">{badge.name}</h4>
                <p className="text-slate-400">{badge.description}</p>
                {!badge.earned && <p className="text-amber-400 font-bold mt-1">Not yet earned</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BadgesShowcase;
