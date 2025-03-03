import React from 'react';
import { Conversation } from '../models/assessment';
import { Question } from '../models/question';
import FeedbackCard from './FeedbackCard';

interface ConversationHistoryProps {
  conversations: Conversation[];
  questions: Record<string, Question>;
}

const ConversationHistory: React.FC<ConversationHistoryProps> = ({ conversations, questions }) => {
  if (conversations.length === 0) {
    return <p className="text-center text-gray-500 my-8">No conversation history yet.</p>;
  }

  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      {conversations.map((conversation) => {
        const question = questions[conversation.questionId];
        if (!question) return null;

        return (
          <div key={conversation.id} className="border-b pb-6 mb-6 last:border-b-0">
            <div className="mb-2 text-sm text-gray-500">{question.category}</div>
            <h3 className="text-lg font-medium mb-3">{question.text}</h3>
            
            <div className="bg-gray-50 p-4 rounded-md mb-4">
              <div className="text-sm text-gray-500 mb-1">Your answer:</div>
              <p className="text-gray-800">{conversation.answer}</p>
            </div>
            
            {conversation.perspective && (
              <FeedbackCard 
                title="Governance Perspective" 
                content={conversation.perspective} 
                type="perspective" 
              />
            )}
            
            {conversation.suggestion && (
              <FeedbackCard 
                title="Improvement Suggestion" 
                content={conversation.suggestion} 
                type="suggestion" 
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ConversationHistory;