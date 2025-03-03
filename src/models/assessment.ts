import { Answer } from './question';
import { Organization } from './organization';

/**
 * @typedef {Object} Conversation
 * @property {string} id - Unique identifier
 * @property {string} questionId - ID of the question
 * @property {string} answer - User's answer
 * @property {string} [followUpId] - ID of follow-up question
 * @property {string} [suggestion] - Improvement suggestion
 * @property {string} [perspective] - Analysis perspective
 * @property {string} timestamp - When conversation occurred
 */
export interface Conversation {
  id: string;
  questionId: string;
  answer: string;
  followUpId?: string;
  suggestion?: string;
  perspective?: string;
  timestamp: string;
}

/**
 * @typedef {Object} Assessment
 * @property {string} id - Unique identifier
 * @property {Organization} organization - Organization details
 * @property {string} startedAt - When assessment started
 * @property {string} [completedAt] - When assessment completed
 * @property {number} progress - Progress percentage
 * @property {Conversation[]} conversations - All conversation elements
 * @property {Answer[]} answers - All answers given
 * @property {string} currentQuestionId - Current question being answered
 */
export interface Assessment {
  id: string;
  organization: Organization;
  startedAt: string;
  completedAt?: string;
  progress: number;
  conversations: Conversation[];
  answers: Answer[];
  currentQuestionId: string;
}

/**
 * Creates a new assessment
 */
export function createAssessment(organization: Organization, firstQuestionId: string): Assessment {
  return {
    id: crypto.randomUUID(),
    organization,
    startedAt: new Date().toISOString(),
    progress: 0,
    conversations: [],
    answers: [],
    currentQuestionId: firstQuestionId
  };
}

/**
 * Adds a conversation entry to an assessment
 */
export function addConversation(
  assessment: Assessment, 
  questionId: string, 
  answer: string, 
  suggestion?: string, 
  perspective?: string
): Assessment {
  const newConversation: Conversation = {
    id: crypto.randomUUID(),
    questionId,
    answer,
    suggestion,
    perspective,
    timestamp: new Date().toISOString()
  };
  
  return {
    ...assessment,
    conversations: [...assessment.conversations, newConversation]
  };
}

/**
 * Adds an answer to an assessment
 */
export function addAnswer(assessment: Assessment, answer: Answer): Assessment {
  return {
    ...assessment,
    answers: [...assessment.answers, answer]
  };
}

/**
 * Updates the current question
 */
export function updateCurrentQuestion(assessment: Assessment, questionId: string): Assessment {
  return {
    ...assessment,
    currentQuestionId: questionId
  };
}

/**
 * Updates assessment progress
 */
export function updateProgress(assessment: Assessment, progress: number): Assessment {
  return {
    ...assessment,
    progress: progress
  };
}

/**
 * Completes an assessment
 */
export function completeAssessment(assessment: Assessment): Assessment {
  return {
    ...assessment,
    completedAt: new Date().toISOString(),
    progress: 100
  };
}

/**
 * Calculates and updates the progress of an assessment based on answered questions.
 */
export function calculateProgress(assessment: Assessment, totalQuestions: number): Assessment {
  const answeredCount = assessment.answers.length;
  const progress = Math.min(Math.round((answeredCount / totalQuestions) * 100), 100);
  return updateProgress(assessment, progress);
}