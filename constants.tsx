
import React from 'react';
import { Badge, Achievement, ProjectMetrics } from './types';

export const ICONS = {
    MILESTONE: <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />,
    TASK: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
    BADGE: <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9a9.75 9.75 0 001.316-5.033 9.75 9.75 0 001.838-2.513 9.75 9.75 0 001.108-3.268A9.75 9.75 0 009 3.75h6a9.75 9.75 0 00-1.762 4.186 9.75 9.75 0 001.108 3.268 9.75 9.75 0 001.838 2.513A9.75 9.75 0 0016.5 18.75z" />,
    DEPLOY: <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 2.25a14.98 14.98 0 00-5.84 7.38m5.84 2.58a14.98 14.98 0 017.38 5.84m-13.22 0a14.98 14.98 0 01-5.84-7.38 14.98 14.98 0 015.84-7.38" />
};

export const MOCK_BADGES: Badge[] = [
  { id: 'b1', name: 'Sprint Champion', description: 'Complete all sprint tasks on time.', earned: true, icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> },
  { id: 'b2', name: 'Budget Master', description: 'Complete a project 10% under budget.', earned: true, icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" /></svg> },
  { id: 'b3', name: 'Bug Hunter', description: 'Squash 10 critical bugs in a week.', earned: true, icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v11.494m-9-5.747h18" /></svg> },
  { id: 'b4', name: 'Documen-star', description: 'Write excellent project documentation.', earned: false, icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg> },
  { id: 'b5', name: 'Launch Commander', description: 'Successfully lead a major feature launch.', earned: true, icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg> },
  { id: 'b6', name: 'Team Player', description: 'Receive 5 positive peer reviews.', earned: false, icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg> },
];

export const MOCK_ACHIEVEMENTS: Achievement[] = [
    { id: 'a1', type: 'DEPLOY', description: 'Launched v2.1 to production', timestamp: '2 hours ago', points: 150 },
    { id: 'a2', type: 'BADGE', description: 'Earned "Launch Commander" badge', timestamp: '2 hours ago', points: 50 },
    { id: 'a3', type: 'TASK', description: 'Resolved critical bug #8812', timestamp: '1 day ago', points: 20 },
    { id: 'a4', type: 'MILESTONE', description: 'Completed "User Authentication" epic', timestamp: '3 days ago', points: 100 },
    { id: 'a5', type: 'TASK', description: 'Merged 5 pull requests', timestamp: '4 days ago', points: 25 },
];

export const MOCK_METRICS: ProjectMetrics = {
    onTimeCompletion: 92,
    budgetAdherence: 105, // 5% under budget
    taskVelocity: 14,
};
