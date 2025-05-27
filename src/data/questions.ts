
import { Chapter, Question } from './types';
import { mathematicsChapters } from './subjects/mathematics';
import { physicsChapters } from './subjects/physics';
import { chemistryChapters } from './subjects/chemistry';
import { biologyChapters } from './subjects/biology';
import { englishChapters } from './subjects/english';
import { historyChapters } from './subjects/history';

const subjectChapters: { [subject: string]: Chapter[] } = {
  mathematics: mathematicsChapters,
  physics: physicsChapters,
  chemistry: chemistryChapters,
  biology: biologyChapters,
  english: englishChapters,
  history: historyChapters
};

export const getChaptersBySubject = (subject: string): Chapter[] => {
  return subjectChapters[subject] || [];
};

export const getQuestionsByChapter = (subject: string, chapterId: string): Question[] => {
  const chapters = subjectChapters[subject] || [];
  const chapter = chapters.find(ch => ch.id === chapterId);
  return chapter?.questions || [];
};

export const getAllSubjects = (): string[] => {
  return Object.keys(subjectChapters);
};

export const getTotalQuestionsBySubject = (subject: string): number => {
  const chapters = subjectChapters[subject] || [];
  return chapters.reduce((total, chapter) => total + chapter.questions.length, 0);
};
