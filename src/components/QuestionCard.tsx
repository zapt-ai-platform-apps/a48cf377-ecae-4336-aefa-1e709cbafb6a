import React, { useState } from 'react';
import { Question } from '../models/question';

interface QuestionCardProps {
  question: Question;
  onSubmit: (answer: string) => void;
  loading?: boolean;
}

export function QuestionCard({ question, onSubmit, loading = false }: QuestionCardProps) {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!answer.trim()) {
      setError('Please provide an answer');
      return;
    }
    
    setError(null);
    onSubmit(answer);
    setAnswer('');
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-2xl mx-auto">
      <div className="mb-2 text-sm text-gray-500">{question.category}</div>
      <h3 className="text-xl font-semibold mb-4">{question.text}</h3>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className={`box-border w-full p-3 border rounded-md ${error ? 'border-red-500' : 'border-gray-300'}`}
            rows={4}
            placeholder="Type your answer here..."
            disabled={loading}
          ></textarea>
          {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
        </div>
        
        <div className="flex justify-end">
          <button
            type="submit"
            className="cursor-pointer inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            disabled={loading}
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </>
            ) : (
              'Submit Answer'
            )}
          </button>
        </div>
      </form>
    </div>
  );
}