export type Language = 'tr' | 'en';
export type DifficultyLevel = 'Başlangıç' | 'Orta' | 'İleri' | 'Beginner' | 'Intermediate' | 'Advanced';

export interface CodeSnippet {
  title: string;
  language: string;
  code: string;
  description?: string;
  filename?: string;
}

export interface LessonSection {
  id: string;
  title: string;
  content: string;
  codeSnippets?: CodeSnippet[];
  notes?: string[];
  warnings?: string[];
  tips?: string[];
}

export interface LessonModule {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  icon: string;
  category: string;
  difficulty: DifficultyLevel;
  durationMinutes: number;
  overview: string;
  sections: LessonSection[];
  bestPractices: string[];
  commonPitfalls: string[];
  keyTakeaways: string[];
}

export interface QuizQuestion {
  id: string;
  moduleId: string;
  moduleTitle: string;
  difficulty: DifficultyLevel;
  question: string;
  codeSnippet?: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  springConcept: string;
}

export interface CodeRecipe {
  id: string;
  title: string;
  category: 'Security' | 'JPA & DB' | 'Architecture & REST' | 'Exceptions & Validation' | 'Performance & DevOps' | 'Async & Scheduling';
  description: string;
  code: string;
  filename: string;
  tags: string[];
  complexity: DifficultyLevel;
}

export interface SimulatedEndpoint {
  id: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  path: string;
  title: string;
  description: string;
  headers: Record<string, string>;
  requestBody?: string;
  expectedStatus: number;
  responseBody: any;
  sqlQueries: string[];
  springControllerCode: string;
  springServiceCode: string;
}

export interface UserQuizProgress {
  answeredQuestions: Record<string, number>; // questionId -> selectedIndex
  score: number;
  completedAt?: string;
}
