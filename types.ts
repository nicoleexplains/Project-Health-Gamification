
export interface ProjectMetrics {
  onTimeCompletion: number;
  budgetAdherence: number;
  taskVelocity: number;
}

export type AchievementType = 'MILESTONE' | 'TASK' | 'BADGE' | 'DEPLOY';

export interface Achievement {
  id: string;
  type: AchievementType;
  description: string;
  timestamp: string;
  points: number;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  earned: boolean;
}
