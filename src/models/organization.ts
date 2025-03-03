/**
 * @typedef {Object} Organization
 * @property {string} id - Unique identifier
 * @property {string} name - Organization name
 * @property {string} sector - Type of charity sector
 * @property {string} size - Size of organization
 * @property {string} maturity - How long established
 * @property {string} constitution - Legal structure
 * @property {string} createdAt - Date created
 */
export interface Organization {
  id: string;
  name: string;
  sector: string;
  size: string;
  maturity: string;
  constitution: string;
  createdAt: string;
}

/**
 * Validates organization data.
 * @param {Omit<Organization, 'id' | 'createdAt'>} params
 * @returns {string[]} Array of error messages
 */
export function validateOrganizationData(params: Omit<Organization, 'id' | 'createdAt'>): string[] {
  const errors: string[] = [];
  if (!params.name.trim()) errors.push('Organization name is required');
  if (!params.sector) errors.push('Sector is required');
  if (!params.size) errors.push('Organization size is required');
  if (!params.maturity) errors.push('Organization maturity is required');
  if (!params.constitution) errors.push('Constitution type is required');
  return errors;
}

/**
 * Creates a new organization after validation.
 */
export function createOrganization(params: Omit<Organization, 'id' | 'createdAt'>): Organization {
  const errors = validateOrganizationData(params);
  if (errors.length > 0) {
    throw new Error('Validation errors: ' + errors.join(', '));
  }
  return {
    ...params,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString()
  };
}