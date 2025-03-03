/**
 * @typedef {Object} Question
 * @property {string} id - Unique identifier
 * @property {string} text - Question text
 * @property {string} category - Governance category
 * @property {string[]} [followUpQuestions] - IDs of follow-up questions
 * @property {string[]} [suggestions] - Improvement suggestions
 * @property {string[]} [perspectives] - Analysis perspectives
 */
export interface Question {
  id: string;
  text: string;
  category: string;
  followUpQuestions?: string[];
  suggestions?: string[];
  perspectives?: string[];
}

/**
 * @typedef {Object} Answer
 * @property {string} questionId - ID of the question
 * @property {string} text - Answer text
 * @property {string} timestamp - When answered
 */
export interface Answer {
  questionId: string;
  text: string;
  timestamp: string;
}

/**
 * Creates an answer for a question
 */
export function createAnswer(questionId: string, text: string): Answer {
  return {
    questionId,
    text,
    timestamp: new Date().toISOString()
  };
}