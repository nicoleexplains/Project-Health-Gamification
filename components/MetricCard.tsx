
import React from 'react';

interface MetricCardProps {
  title: string;
  value: number;
  unit: string;
  color: string;
  trailColor: string;
  strokeColor: string;
  description?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, unit, color, trailColor, strokeColor, description }) => {
    const maxVal = title === "Budget Adherence" ? Math.max(100, value) : 100;
    const percentage = Math.min((value / maxVal) * 100, 100);
    const circumference = 2 * Math.PI * 45; // radius = 45
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
        <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-slate-700/50 flex flex-col justify-between h-full hover:bg-slate-800 transition-colors duration-300">
            <div>
                <h3 className="text-slate-300 font-medium">{title}</h3>
            </div>
            <div className="flex items-center justify-center my-4 relative">
                <svg className="w-32 h-32 transform -rotate-90">
                    <circle 
                        className={trailColor}
                        strokeWidth="10" 
                        fill="transparent" 
                        r="45" 
                        cx="64" 
                        cy="64" 
                    />
                    <circle
                        className={strokeColor}
                        strokeWidth="10"
                        strokeLinecap="round"
                        fill="transparent"
                        r="45"
                        cx="64"
                        cy="64"
                        style={{
                            strokeDasharray: circumference,
                            strokeDashoffset: strokeDashoffset,
                            transition: 'stroke-dashoffset 0.5s ease-out'
                        }}
                    />
                </svg>
                <div className={`absolute flex flex-col items-center justify-center ${color}`}>
                    <span className="text-3xl font-bold">{value}</span>
                    <span className="text-sm font-semibold">{unit}</span>
                </div>
            </div>
            {description && <p className="text-center text-emerald-400 text-sm">{description}</p>}
        </div>
    );
};

export default MetricCard;
