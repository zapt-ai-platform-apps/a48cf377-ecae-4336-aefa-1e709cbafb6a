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
 * Creates a new organization
 */
export function createOrganization(params: Omit<Organization, 'id' | 'createdAt'>): Organization {
  return {
    ...params,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString()
  };
}