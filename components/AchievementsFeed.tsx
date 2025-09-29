
import React from 'react';
import { Achievement, AchievementType } from '../types';
import { ICONS } from '../constants';

const AchievementIcon: React.FC<{ type: AchievementType }> = ({ type }) => {
    const iconColor = {
        MILESTONE: 'bg-indigo-500',
        TASK: 'bg-emerald-500',
        BADGE: 'bg-amber-500',
        DEPLOY: 'bg-rose-500',
    };

    return (
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${iconColor[type]}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {ICONS[type]}
            </svg>
        </div>
    );
};

const AchievementsFeed: React.FC<{ achievements: Achievement[] }> = ({ achievements }) => {
    return (
        <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-slate-700/50 h-full">
            <h3 className="text-lg font-bold text-white mb-4">Activity Feed</h3>
            <ul className="space-y-4">
                {achievements.map((achievement) => (
                    <li key={achievement.id} className="flex items-center space-x-4 group">
                        <AchievementIcon type={achievement.type} />
                        <div className="flex-1">
                            <p className="text-slate-200 group-hover:text-white transition-colors">{achievement.description}</p>
                            <p className="text-xs text-slate-400">{achievement.timestamp}</p>
                        </div>
                        <span className="text-sm font-bold text-emerald-400">+{achievement.points} XP</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AchievementsFeed;
