export const getProgress = () => {
  if (typeof window === "undefined") return { xp: 0, completedLessons: [], badges: [] };
  const data = localStorage.getItem("iot_progress");
  if (data) return JSON.parse(data);
  return { xp: 0, completedLessons: [], badges: [] };
};

export const addXP = (amount: number) => {
  if (typeof window === "undefined") return;
  const progress = getProgress();
  progress.xp += amount;
  localStorage.setItem("iot_progress", JSON.stringify(progress));
};

export const markLessonComplete = (lessonId: string) => {
  if (typeof window === "undefined") return;
  const progress = getProgress();
  if (!progress.completedLessons.includes(lessonId)) {
    progress.completedLessons.push(lessonId);
    progress.xp += 10;
    localStorage.setItem("iot_progress", JSON.stringify(progress));
  }
};
