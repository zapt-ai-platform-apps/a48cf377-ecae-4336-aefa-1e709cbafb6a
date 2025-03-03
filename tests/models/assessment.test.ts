import { createAssessment, calculateProgress, completeAssessment } from '../../src/models/assessment';
import { Organization } from '../../src/models/organization';

describe('Assessment Model', () => {
  const mockOrg: Organization = {
    id: 'org1',
    name: 'Test Org',
    sector: 'Education & Research',
    size: 'Small (£10,000 - £100,000)',
    maturity: 'New (less than 2 years)',
    constitution: 'Unincorporated Association',
    createdAt: new Date().toISOString()
  };

  it('should create a new assessment with initial progress 0', () => {
    const assessment = createAssessment(mockOrg, 'q1');
    expect(assessment.id).toBeDefined();
    expect(assessment.progress).toBe(0);
    expect(assessment.currentQuestionId).toBe('q1');
  });

  it('should update progress correctly', () => {
    let assessment = createAssessment(mockOrg, 'q1');
    // Simulate two answered questions out of 10
    assessment = {
      ...assessment,
      answers: [
        { questionId: 'q1', text: 'a', timestamp: new Date().toISOString() },
        { questionId: 'q2', text: 'b', timestamp: new Date().toISOString() }
      ]
    };
    const updatedAssessment = calculateProgress(assessment, 10);
    expect(updatedAssessment.progress).toBeGreaterThan(0);
    expect(updatedAssessment.progress).toBeLessThanOrEqual(20);
  });

  it('should complete assessment with 100% progress', () => {
    let assessment = createAssessment(mockOrg, 'q1');
    assessment = completeAssessment(assessment);
    expect(assessment.completedAt).toBeDefined();
    expect(assessment.progress).toBe(100);
  });
});