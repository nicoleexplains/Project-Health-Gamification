
import { GoogleGenAI } from "@google/genai";
import { ProjectMetrics, Achievement, Badge } from '../types';

if (!process.env.API_KEY) {
    console.warn("API_KEY environment variable not set. Using placeholder data.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const createPulsePrompt = (metrics: ProjectMetrics, achievements: Achievement[], badges: Badge[]): string => {
  const earnedBadges = badges.filter(b => b.earned).map(b => b.name).slice(0, 3);
  const recentAchievements = achievements.slice(0, 3).map(a => a.description);

  return `
    You are 'Sparky', the enthusiastic and encouraging project mascot for Team Phoenix.
    Your tone is celebratory, fun, and a bit playful. Never be negative. Use emojis.
    Based on the following project data, write a short, celebratory "Project Pulse" update (2-3 sentences) for the team's Success Dashboard.
    Focus on the positives and highlight their recent wins to boost morale.

    Project Data:
    - On-Time Completion Rate: ${metrics.onTimeCompletion}%
    - Budget Adherence: ${metrics.budgetAdherence}% (anything over 100% is under budget and good!)
    - Task Velocity: ${metrics.taskVelocity} tasks/week

    Recent Achievements:
    - ${recentAchievements.join('\n- ')}

    Recently Earned Badges:
    - ${earnedBadges.join('\n- ')}

    Generate the update now.
  `;
};


export const getProjectPulseUpdate = async (
    metrics: ProjectMetrics, 
    achievements: Achievement[], 
    badges: Badge[]
): Promise<string> => {
    if (!process.env.API_KEY) {
        return new Promise(resolve => setTimeout(() => resolve("🚀 What a week, Team Phoenix! We shipped v2.1 and crushed our milestones. Your hard work is making a huge difference. Let's keep this amazing momentum going! 🔥"), 1000));
    }
    
    try {
        const prompt = createPulsePrompt(metrics, achievements, badges);
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
        });
        return response.text;
    } catch (error) {
        console.error("Error generating project pulse update:", error);
        return "Couldn't fetch the latest pulse. But you're all doing great! Keep up the fantastic work.";
    }
};
