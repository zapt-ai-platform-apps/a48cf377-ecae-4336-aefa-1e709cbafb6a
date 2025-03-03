import React, { useState, useEffect } from 'react';
import { Layout } from '../../components/Layout';
import { OrganizationForm } from '../../components/OrganizationForm';
import { AssessmentHistory } from '../../components/AssessmentHistory';
import { Organization } from '../../models/organization';
import { Assessment } from '../../models/assessment';
import { useAssessment } from '../../hooks/useAssessment';
import { getAssessments } from '../../utils/storage';

interface HomeProps {
  onStartAssessment: (assessment: Assessment) => void;
  onContinueAssessment: (assessmentId: string) => void;
}

export function Home({ onStartAssessment, onContinueAssessment }: HomeProps) {
  const [assessments, setAssessments] = useState<Assessment[]>([]);
  const { startAssessment } = useAssessment();
  
  useEffect(() => {
    // Load saved assessments
    const savedAssessments = getAssessments();
    setAssessments(savedAssessments);
  }, []);
  
  const handleStartAssessment = (organization: Organization) => {
    const newAssessment = startAssessment(organization);
    if (newAssessment) {
      onStartAssessment(newAssessment);
    }
  };
  
  const handleSelectAssessment = (assessmentId: string) => {
    onContinueAssessment(assessmentId);
  };
  
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-4">Charity Governance Assessment Tool</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Evaluate and strengthen your charity's governance arrangements through this
            structured self-assessment tool.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Start New Assessment</h2>
            <p className="text-gray-600 mb-6">
              Complete a comprehensive governance assessment for your charity by providing
              information about your organization.
            </p>
            <OrganizationForm onSubmit={handleStartAssessment} />
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Previous Assessments</h2>
            <p className="text-gray-600 mb-6">
              Continue or review your previous governance assessments.
            </p>
            <AssessmentHistory 
              assessments={assessments} 
              onSelectAssessment={handleSelectAssessment} 
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}