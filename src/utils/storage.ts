import { Assessment } from '../models/assessment';
import { Organization } from '../models/organization';

const ASSESSMENTS_KEY = 'governance-assessments';
const CURRENT_ASSESSMENT_KEY = 'current-assessment';
const ORGANIZATIONS_KEY = 'governance-organizations';

export function saveAssessment(assessment: Assessment): void {
  // Get existing assessments
  const assessments = getAssessments();
  
  // Update or add the assessment
  const existingIndex = assessments.findIndex(a => a.id === assessment.id);
  if (existingIndex >= 0) {
    assessments[existingIndex] = assessment;
  } else {
    assessments.push(assessment);
  }
  
  // Save to localStorage
  localStorage.setItem(ASSESSMENTS_KEY, JSON.stringify(assessments));
  
  // Update current assessment
  localStorage.setItem(CURRENT_ASSESSMENT_KEY, assessment.id);
}

export function getAssessments(): Assessment[] {
  const stored = localStorage.getItem(ASSESSMENTS_KEY);
  if (!stored) return [];
  
  try {
    return JSON.parse(stored);
  } catch (error) {
    console.error('Failed to parse assessments from storage:', error);
    return [];
  }
}

export function getCurrentAssessment(): Assessment | undefined {
  const currentId = localStorage.getItem(CURRENT_ASSESSMENT_KEY);
  if (!currentId) return undefined;
  
  const assessments = getAssessments();
  return assessments.find(a => a.id === currentId);
}

export function saveOrganization(organization: Organization): void {
  // Get existing organizations
  const organizations = getOrganizations();
  
  // Update or add the organization
  const existingIndex = organizations.findIndex(o => o.id === organization.id);
  if (existingIndex >= 0) {
    organizations[existingIndex] = organization;
  } else {
    organizations.push(organization);
  }
  
  // Save to localStorage
  localStorage.setItem(ORGANIZATIONS_KEY, JSON.stringify(organizations));
}

export function getOrganizations(): Organization[] {
  const stored = localStorage.getItem(ORGANIZATIONS_KEY);
  if (!stored) return [];
  
  try {
    return JSON.parse(stored);
  } catch (error) {
    console.error('Failed to parse organizations from storage:', error);
    return [];
  }
}

export function clearCurrentAssessment(): void {
  localStorage.removeItem(CURRENT_ASSESSMENT_KEY);
}