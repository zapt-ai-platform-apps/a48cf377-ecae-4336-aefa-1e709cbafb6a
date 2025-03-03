import React, { useState, useEffect } from 'react';
import { Layout } from '../../components/Layout';
import { QuestionCard } from '../../components/QuestionCard';
import { FeedbackCard } from '../../components/FeedbackCard';
import { ProgressBar } from '../../components/ProgressBar';
import { ConversationHistory } from '../../components/ConversationHistory';
import { AssessmentSummary } from '../../components/AssessmentSummary';
import { useAssessment } from '../../hooks/useAssessment';
import { Assessment as AssessmentType } from '../../models/assessment';
import { questions } from '../../data/questions';
import { saveAssessment, clearCurrentAssessment } from '../../utils/storage';
import { Question } from '../../models/question';

interface AssessmentPageProps {
  initialAssessment?: AssessmentType;
  onComplete: () => void;
}

export function AssessmentPage({ initialAssessment, onComplete }: AssessmentPageProps) {
  const { 
    assessment, 
    submitAnswer, 
    getCurrentQuestion,
    loading: assessmentLoading 
  } = useAssessment();
  const [currentQuestion, setCurrentQuestion] = useState<Question | undefined>(undefined);
  const [answerLoading, setAnswerLoading] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  
  // Initialize assessment state
  useEffect(() => {
    if (initialAssessment) {
      saveAssessment(initialAssessment);
    }
  }, [initialAssessment]);
  
  // Update current question when assessment changes
  useEffect(() => {
    if (assessment) {
      const question = getCurrentQuestion();
      setCurrentQuestion(question);
    }
  }, [assessment, getCurrentQuestion]);
  
  const handleAnswerSubmit = async (answer: string) => {
    if (!assessment) return;
    
    setAnswerLoading(true);
    try {
      const nextQuestion = submitAnswer(answer);
      if (nextQuestion) {
        setCurrentQuestion(nextQuestion);
      } else {
        // Assessment complete
        setTimeout(() => {
          onComplete();
        }, 500);
      }
    } catch (error) {
      console.error('Error submitting answer:', error);
    } finally {
      setAnswerLoading(false);
    }
  };
  
  const handleStartNew = () => {
    clearCurrentAssessment();
    onComplete();
  };
  
  if (!assessment) {
    return (
      <Layout>
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </Layout>
    );
  }
  
  // If assessment is complete, show summary
  if (assessment.completedAt) {
    return (
      <Layout>
        <AssessmentSummary 
          assessment={assessment} 
          onStartNew={handleStartNew} 
        />
      </Layout>
    );
  }
  
  const mostRecentConversation = assessment.conversations.length > 0
    ? assessment.conversations[assessment.conversations.length - 1]
    : null;
    
  const hasFeedback = Boolean(
    mostRecentConversation && 
    (mostRecentConversation.perspective || mostRecentConversation.suggestion)
  );
  
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2">Governance Assessment</h1>
          <p className="text-gray-600 mb-4">
            {assessment.organization.name} - {assessment.organization.sector}
          </p>
          <ProgressBar progress={assessment.progress} />
        </div>
        
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setShowHistory(!showHistory)}
            className="cursor-pointer text-sm text-blue-600 hover:text-blue-800 flex items-center"
          >
            {showHistory ? 'Hide History' : 'Show History'}
            <svg
              className={`ml-1 h-4 w-4 transform ${showHistory ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
        
        {showHistory && (
          <div className="mb-8">
            <ConversationHistory 
              conversations={assessment.conversations} 
              questions={questions}
            />
          </div>
        )}
        
        <div className="space-y-6">
          {hasFeedback && mostRecentConversation && (
            <div>
              {mostRecentConversation.perspective && (
                <FeedbackCard
                  title="Governance Perspective"
                  content={mostRecentConversation.perspective}
                  type="perspective"
                />
              )}
              
              {mostRecentConversation.suggestion && (
                <FeedbackCard
                  title="Improvement Suggestion"
                  content={mostRecentConversation.suggestion}
                  type="suggestion"
                />
              )}
            </div>
          )}
          
          {currentQuestion && (
            <QuestionCard
              question={currentQuestion}
              onSubmit={handleAnswerSubmit}
              loading={answerLoading}
            />
          )}
        </div>
      </div>
    </Layout>
  );
}