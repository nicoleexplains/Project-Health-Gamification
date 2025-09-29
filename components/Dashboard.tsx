
import React, { useState } from 'react';
import Header from './Header';
import MetricCard from './MetricCard';
import AchievementsFeed from './AchievementsFeed';
import BadgesShowcase from './BadgesShowcase';
import ProjectPulse from './ProjectPulse';
import { Badge, Achievement, ProjectMetrics } from '../types';
import { MOCK_ACHIEVEMENTS, MOCK_BADGES, MOCK_METRICS } from '../constants';

const Dashboard: React.FC = () => {
    const [metrics] = useState<ProjectMetrics>(MOCK_METRICS);
    const [achievements] = useState<Achievement[]>(MOCK_ACHIEVEMENTS);
    const [badges] = useState<Badge[]>(MOCK_BADGES);

    return (
        <div className="animate-fade-in">
            <Header />
            <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                
                <MetricCard 
                    title="On-Time Completion" 
                    value={metrics.onTimeCompletion} 
                    unit="%" 
                    color="text-cyan-400"
                    trailColor="stroke-cyan-400/20"
                    strokeColor="stroke-cyan-400"
                />
                <MetricCard 
                    title="Budget Adherence" 
                    value={metrics.budgetAdherence} 
                    unit="%" 
                    color="text-emerald-400"
                    trailColor="stroke-emerald-400/20"
                    strokeColor="stroke-emerald-400"
                    description={metrics.budgetAdherence > 100 ? `${metrics.budgetAdherence - 100}% Under Budget` : ''}
                />
                <MetricCard 
                    title="Task Velocity" 
                    value={metrics.taskVelocity} 
                    unit=" tasks/wk"
                    color="text-amber-400"
                    trailColor="stroke-amber-400/20"
                    strokeColor="stroke-amber-400"
                />

                <div className="md:col-span-2 lg:col-span-3">
                    <ProjectPulse metrics={metrics} achievements={achievements} badges={badges}/>
                </div>

                <div className="lg:col-span-2">
                    <AchievementsFeed achievements={achievements} />
                </div>
                
                <div>
                    <BadgesShowcase badges={badges} />
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
