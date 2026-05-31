import { lessonsData } from "../data/lessons";
import { projectsData } from "../data/projects";
import { componentsData } from "../data/components";
import { codeExamplesData } from "../data/codeExamples";

export function globalSearch(query: string) {
  const normalizedQuery = query.toLowerCase().trim();
  if (!normalizedQuery) return { lessons: [], projects: [], components: [], codeExamples: [] };

  return {
    lessons: lessonsData.filter(l => l.title.toLowerCase().includes(normalizedQuery) || l.description.toLowerCase().includes(normalizedQuery)),
    projects: projectsData.filter(p => p.title.toLowerCase().includes(normalizedQuery) || p.description.toLowerCase().includes(normalizedQuery)),
    components: componentsData.filter(c => c.name.toLowerCase().includes(normalizedQuery) || c.description.toLowerCase().includes(normalizedQuery)),
    codeExamples: codeExamplesData.filter(ce => ce.title.toLowerCase().includes(normalizedQuery) || ce.description.toLowerCase().includes(normalizedQuery) || ce.code.toLowerCase().includes(normalizedQuery))
  };
}

export function getFilteredItems<T>(items: T[], categoryFilter: string | null, difficultyFilter: string | null = null, getCategory: (item: T) => string, getDifficulty?: (item: T) => string): T[] {
  return items.filter(item => {
    const matchCategory = !categoryFilter || categoryFilter === "الكل" || getCategory(item) === categoryFilter;
    const matchDifficulty = !difficultyFilter || difficultyFilter === "الكل" || (getDifficulty && getDifficulty(item) === difficultyFilter);
    return matchCategory && matchDifficulty;
  });
}
