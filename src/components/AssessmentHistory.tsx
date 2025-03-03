import React from 'react';
import { Assessment } from '../models/assessment';

interface AssessmentHistoryProps {
  assessments: Assessment[];
  onSelectAssessment: (assessmentId: string) => void;
}

export function AssessmentHistory({ assessments, onSelectAssessment }: AssessmentHistoryProps) {
  if (assessments.length === 0) {
    return (
      <div className="text-center p-8">
        <p className="text-gray-500">No assessment history found.</p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
      <table className="min-w-full divide-y divide-gray-300">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
              Organisation
            </th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              Sector
            </th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              Date
            </th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              Progress
            </th>
            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
              <span className="sr-only">View</span>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {assessments.map((assessment) => {
            const date = new Date(assessment.startedAt);
            const formattedDate = date.toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            });
            
            return (
              <tr key={assessment.id}>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                  {assessment.organization.name}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {assessment.organization.sector}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {formattedDate}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  <div className="w-full bg-gray-200 rounded-full h-2 max-w-xs">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: `${assessment.progress}%` }}
                    ></div>
                  </div>
                  <span className="text-xs mt-1 inline-block">{assessment.progress}%</span>
                </td>
                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                  <button
                    onClick={() => onSelectAssessment(assessment.id)}
                    className="cursor-pointer text-blue-600 hover:text-blue-900"
                  >
                    View<span className="sr-only">, {assessment.organization.name}</span>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}