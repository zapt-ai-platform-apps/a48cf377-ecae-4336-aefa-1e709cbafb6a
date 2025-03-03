import React, { useState } from 'react';
import { Organization, createOrganization } from '../models/organization';
import { sectors, organizationSizes, organizationMaturity, constitutionTypes } from '../data/sectors';

interface OrganizationFormProps {
  onSubmit: (organization: Organization) => void;
}

const OrganizationForm: React.FC<OrganizationFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [sector, setSector] = useState('');
  const [size, setSize] = useState('');
  const [maturity, setMaturity] = useState('');
  const [constitution, setConstitution] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!name.trim()) newErrors.name = 'Organization name is required';
    if (!sector) newErrors.sector = 'Please select a sector';
    if (!size) newErrors.size = 'Please select an organization size';
    if (!maturity) newErrors.maturity = 'Please select organization maturity';
    if (!constitution) newErrors.constitution = 'Please select a constitution type';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      const organization = createOrganization({
        name,
        sector,
        size,
        maturity,
        constitution
      });
      
      onSubmit(organization);
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">About Your Organization</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Organization Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`box-border w-full px-3 py-2 border rounded-md ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="sector" className="block text-sm font-medium text-gray-700 mb-1">
            Charity Sector
          </label>
          <select
            id="sector"
            value={sector}
            onChange={(e) => setSector(e.target.value)}
            className={`box-border w-full px-3 py-2 border rounded-md ${
              errors.sector ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">Select a sector</option>
            {sectors.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {errors.sector && <p className="mt-1 text-sm text-red-600">{errors.sector}</p>}
        </div>

        <div>
          <label htmlFor="size" className="block text-sm font-medium text-gray-700 mb-1">
            Organization Size
          </label>
          <select
            id="size"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className={`box-border w-full px-3 py-2 border rounded-md ${
              errors.size ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">Select a size</option>
            {organizationSizes.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {errors.size && <p className="mt-1 text-sm text-red-600">{errors.size}</p>}
        </div>

        <div>
          <label htmlFor="maturity" className="block text-sm font-medium text-gray-700 mb-1">
            Organization Maturity
          </label>
          <select
            id="maturity"
            value={maturity}
            onChange={(e) => setMaturity(e.target.value)}
            className={`box-border w-full px-3 py-2 border rounded-md ${
              errors.maturity ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">Select maturity</option>
            {organizationMaturity.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
          {errors.maturity && <p className="mt-1 text-sm text-red-600">{errors.maturity}</p>}
        </div>

        <div>
          <label htmlFor="constitution" className="block text-sm font-medium text-gray-700 mb-1">
            Constitution Type
          </label>
          <select
            id="constitution"
            value={constitution}
            onChange={(e) => setConstitution(e.target.value)}
            className={`box-border w-full px-3 py-2 border rounded-md ${
              errors.constitution ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">Select constitution type</option>
            {constitutionTypes.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          {errors.constitution && (
            <p className="mt-1 text-sm text-red-600">{errors.constitution}</p>
          )}
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="cursor-pointer w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Start Assessment
          </button>
        </div>
      </form>
    </div>
  );
};

export default OrganizationForm;