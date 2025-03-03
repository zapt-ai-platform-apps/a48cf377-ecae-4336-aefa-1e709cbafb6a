import React, { useState } from 'react';
import { Organization, createOrganization } from '../models/organization';
import { sectors, organizationSizes, organizationMaturity, constitutionTypes } from '../data/sectors';

interface OrganizationFormProps {
  onSubmit: (organization: Organization) => void;
}

export function OrganizationForm({ onSubmit }: OrganizationFormProps) {
  const [name, setName] = useState('');
  const [sector, setSector] = useState('');
  const [size, setSize] = useState('');
  const [maturity, setMaturity] = useState('');
  const [constitution, setConstitution] = useState('');
  const [formError, setFormError] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const organization = createOrganization({
        name,
        sector,
        size,
        maturity,
        constitution
      });
      setFormError('');
      onSubmit(organization);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setFormError(error.message);
      } else {
        setFormError('An unknown error occurred');
      }
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">About Your Organisation</h2>
      {formError && <p className="mb-4 text-sm text-red-600">{formError}</p>}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Organisation Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="box-border w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label htmlFor="sector" className="block text-sm font-medium text-gray-700 mb-1">
            Charity Sector
          </label>
          <select
            id="sector"
            value={sector}
            onChange={(e) => setSector(e.target.value)}
            className="box-border w-full px-3 py-2 border border-gray-300 rounded-md"
          >
            <option value="">Select a sector</option>
            {sectors.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="size" className="block text-sm font-medium text-gray-700 mb-1">
            Organisation Size
          </label>
          <select
            id="size"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="box-border w-full px-3 py-2 border border-gray-300 rounded-md"
          >
            <option value="">Select a size</option>
            {organizationSizes.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="maturity" className="block text-sm font-medium text-gray-700 mb-1">
            Organisation Maturity
          </label>
          <select
            id="maturity"
            value={maturity}
            onChange={(e) => setMaturity(e.target.value)}
            className="box-border w-full px-3 py-2 border border-gray-300 rounded-md"
          >
            <option value="">Select maturity</option>
            {organizationMaturity.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="constitution" className="block text-sm font-medium text-gray-700 mb-1">
            Constitution Type
          </label>
          <select
            id="constitution"
            value={constitution}
            onChange={(e) => setConstitution(e.target.value)}
            className="box-border w-full px-3 py-2 border border-gray-300 rounded-md"
          >
            <option value="">Select constitution type</option>
            {constitutionTypes.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
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
}