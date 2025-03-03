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
          <h1 className="text-3xl font-bold mb-4">Charity Governance Self-Assessment Prototype</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Evaluate and strengthen your charity's governance arrangements with tailored guidance. Whether your organisation is a formal charity, requiring strict adherence to Charity Commission provisions, or a community group benefiting from a flexible, low-bureaucracy approach, this self-assessment tool is designed to meet your needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Start New Assessment</h2>
            <p className="text-gray-600 mb-6">
              Complete a comprehensive self-assessment for your organisation by providing
              information about your organisation.
            </p>
            <OrganizationForm onSubmit={handleStartAssessment} />
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Previous Assessments</h2>
            <p className="text-gray-600 mb-6">
              Continue or review your previous governance self-assessments.
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