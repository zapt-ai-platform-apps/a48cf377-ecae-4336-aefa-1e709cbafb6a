import React from 'react';
import { Assessment } from '../models/assessment';
import { questions } from '../data/questions';

interface AssessmentSummaryProps {
  assessment: Assessment;
  onStartNew: () => void;
}

const AssessmentSummary: React.FC<AssessmentSummaryProps> = ({ assessment, onStartNew }) => {
  const date = new Date(assessment.completedAt || assessment.startedAt);
  const formattedDate = date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const getAnsweredCategories = () => {
    const categories = new Set<string>();
    assessment.answers.forEach(answer => {
      const question = questions[answer.questionId];
      if (question) {
        categories.add(question.category);
      }
    });
    return Array.from(categories);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Assessment Summary</h2>
        
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">Organization Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Name</p>
              <p className="font-medium">{assessment.organization.name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Sector</p>
              <p className="font-medium">{assessment.organization.sector}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Size</p>
              <p className="font-medium">{assessment.organization.size}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Maturity</p>
              <p className="font-medium">{assessment.organization.maturity}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Constitution</p>
              <p className="font-medium">{assessment.organization.constitution}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Completed On</p>
              <p className="font-medium">{formattedDate}</p>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">Assessment Progress</h3>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-blue-600 h-2.5 rounded-full" 
              style={{ width: `${assessment.progress}%` }}
            ></div>
          </div>
          <p className="mt-2 text-sm text-gray-600">
            {assessment.progress}% complete - {assessment.answers.length} questions answered
          </p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">Governance Areas Covered</h3>
          <div className="flex flex-wrap gap-2">
            {getAnsweredCategories().map(category => (
              <span 
                key={category}
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mt-8">
          <button
            onClick={onStartNew}
            className="cursor-pointer inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Start New Assessment
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssessmentSummary;