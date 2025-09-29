
import React, { useState, useEffect } from 'react';
import { getProjectPulseUpdate } from '../services/geminiService';
import { ProjectMetrics, Achievement, Badge } from '../types';

interface ProjectPulseProps {
    metrics: ProjectMetrics;
    achievements: Achievement[];
    badges: Badge[];
}

const ProjectPulse: React.FC<ProjectPulseProps> = ({ metrics, achievements, badges }) => {
    const [pulse, setPulse] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPulse = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const update = await getProjectPulseUpdate(metrics, achievements, badges);
                setPulse(update);
            } catch (err) {
                setError('Failed to get project pulse.');
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPulse();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Run only once on mount

    return (
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 rounded-2xl shadow-lg border border-slate-700/50 flex items-center space-x-4 animate-pulse-subtle">
             <div className="flex-shrink-0 text-3xl">🎉</div>
            <div className="flex-1">
                <h3 className="text-lg font-bold text-white">Project Pulse</h3>
                {isLoading && (
                    <div className="h-4 bg-white/20 rounded-full w-3/4 animate-pulse mt-2"></div>
                )}
                {error && <p className="text-red-300 text-sm mt-1">{error}</p>}
                {!isLoading && !error && (
                    <p className="text-indigo-100 mt-1">{pulse}</p>
                )}
            </div>
        </div>
    );
};

export default ProjectPulse;
