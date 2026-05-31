// Client-side local storage wrapper for saving user progress
export interface UserProgress {
  completedLessons: string[];
  completedProjects: string[];
  completedChallenges: string[];
  xp: number;
  level: number;
}

const STORAGE_KEY = "darhous_iot_progress";

export function getProgress(): UserProgress {
  if (typeof window === "undefined") {
    return { completedLessons: [], completedProjects: [], completedChallenges: [], xp: 0, level: 1 };
  }
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      console.error("Failed to parse progress", e);
    }
  }
  return { completedLessons: [], completedProjects: [], completedChallenges: [], xp: 0, level: 1 };
}

export function saveProgress(progress: UserProgress) {
  if (typeof window !== "undefined") {
    // Calculate level based on XP (e.g. 100 XP per level)
    progress.level = Math.floor(progress.xp / 100) + 1;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }
}

export function markLessonCompleted(lessonId: string, rewardXp: number = 10) {
  const p = getProgress();
  if (!p.completedLessons.includes(lessonId)) {
    p.completedLessons.push(lessonId);
    p.xp += rewardXp;
    saveProgress(p);
  }
}

export function markProjectCompleted(projectId: string, rewardXp: number = 20) {
  const p = getProgress();
  if (!p.completedProjects.includes(projectId)) {
    p.completedProjects.push(projectId);
    p.xp += rewardXp;
    saveProgress(p);
  }
}

export function markChallengeCompleted(challengeId: string, rewardXp: number) {
  const p = getProgress();
  if (!p.completedChallenges.includes(challengeId)) {
    p.completedChallenges.push(challengeId);
    p.xp += rewardXp;
    saveProgress(p);
  }
}
