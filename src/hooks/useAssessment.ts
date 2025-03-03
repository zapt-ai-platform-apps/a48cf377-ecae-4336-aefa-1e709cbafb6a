import { useState, useEffect } from 'react';
import { Assessment, createAssessment, addConversation, addAnswer, updateCurrentQuestion, completeAssessment, calculateProgress } from '../models/assessment';
import { Organization } from '../models/organization';
import { Answer, createAnswer } from '../models/question';
import { saveAssessment, getCurrentAssessment } from '../utils/storage';
import { getFirstQuestion, getQuestionById, getNextQuestion, questions } from '../data/questions';

export function useAssessment() {
  const [assessment, setAssessment] = useState<Assessment | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Load current assessment on mount
  useEffect(() => {
    try {
      const currentAssessment = getCurrentAssessment();
      setAssessment(currentAssessment);
    } catch (err) {
      setError('Failed to load assessment');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  // Start a new assessment
  const startAssessment = (organization: Organization) => {
    try {
      const firstQuestion = getFirstQuestion();
      const newAssessment = createAssessment(organization, firstQuestion.id);
      
      setAssessment(newAssessment);
      saveAssessment(newAssessment);
      return newAssessment;
    } catch (err) {
      setError('Failed to start assessment');
      console.error(err);
      return undefined;
    }
  };

  // Submit an answer to the current question
  const submitAnswer = (text: string) => {
    if (!assessment) return;
    
    try {
      const currentQuestion = getQuestionById(assessment.currentQuestionId);
      if (!currentQuestion) throw new Error('Question not found');
      
      // Create answer
      const answer = createAnswer(currentQuestion.id, text);
      
      // Add to assessment
      let updatedAssessment = addAnswer(assessment, answer);
      
      // Add conversation entry
      updatedAssessment = addConversation(
        updatedAssessment,
        currentQuestion.id,
        text,
        currentQuestion.suggestions?.[0],
        currentQuestion.perspectives?.[0]
      );
      
      // Get next question
      const nextQuestion = getNextQuestion(currentQuestion.id);
      
      // Update progress using model logic
      updatedAssessment = calculateProgress(updatedAssessment, Object.keys(questions).length);
      
      if (nextQuestion) {
        // Move to next question
        updatedAssessment = updateCurrentQuestion(updatedAssessment, nextQuestion.id);
      } else {
        // Complete assessment if no more questions
        updatedAssessment = completeAssessment(updatedAssessment);
      }
      
      // Save and update state
      saveAssessment(updatedAssessment);
      setAssessment(updatedAssessment);
      
      return nextQuestion;
    } catch (err) {
      setError('Failed to submit answer');
      console.error(err);
      return undefined;
    }
  };

  // Get the current question
  const getCurrentQuestion = () => {
    if (!assessment) return undefined;
    return getQuestionById(assessment.currentQuestionId);
  };

  // Get all answers for the current assessment
  const getAnswers = (): Record<string, Answer> => {
    if (!assessment) return {};
    
    const answerMap: Record<string, Answer> = {};
    for (const answer of assessment.answers) {
      answerMap[answer.questionId] = answer;
    }
    
    return answerMap;
  };

  return {
    assessment,
    loading,
    error,
    startAssessment,
    submitAnswer,
    getCurrentQuestion,
    getAnswers
  };
}