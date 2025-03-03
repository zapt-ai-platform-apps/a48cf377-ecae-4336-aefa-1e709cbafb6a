import React, { useState, useEffect } from 'react';
import './index.css';
import Home from './pages/Home';
import AssessmentPage from './pages/Assessment';
import { Assessment } from './models/assessment';
import { getCurrentAssessment, getAssessments } from './utils/storage';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'assessment'>('home');
  const [currentAssessment, setCurrentAssessment] = useState<Assessment | undefined>(undefined);

  useEffect(() => {
    // Check if there's an in-progress assessment
    const assessment = getCurrentAssessment();
    if (assessment && !assessment.completedAt) {
      setCurrentAssessment(assessment);
      setView('assessment');
    }
  }, []);

  const handleStartAssessment = (assessment: Assessment) => {
    setCurrentAssessment(assessment);
    setView('assessment');
  };

  const handleContinueAssessment = (assessmentId: string) => {
    const assessments = getAssessments();
    const assessment = assessments.find(a => a.id === assessmentId);
    if (assessment) {
      setCurrentAssessment(assessment);
      setView('assessment');
    }
  };

  const handleAssessmentComplete = () => {
    setCurrentAssessment(undefined);
    setView('home');
  };

  return (
    <div className="min-h-screen h-full bg-gray-50 text-gray-900">
      {view === 'home' ? (
        <Home 
          onStartAssessment={handleStartAssessment}
          onContinueAssessment={handleContinueAssessment}
        />
      ) : (
        <AssessmentPage 
          initialAssessment={currentAssessment}
          onComplete={handleAssessmentComplete}
        />
      )}
    </div>
  );
};

export default App;