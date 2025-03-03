import { createOrganization, validateOrganizationData } from '../../src/models/organization';

describe('Organization Model', () => {
  it('should create an organization when valid data is provided', () => {
    const params = {
      name: 'Test Charity',
      sector: 'Health & Social Care',
      size: 'Small (£10,000 - £100,000)',
      maturity: 'Developing (2-5 years)',
      constitution: 'Charitable Trust'
    };
    const organization = createOrganization(params);
    
    expect(organization).toHaveProperty('id');
    expect(organization.name).toBe('Test Charity');
    expect(organization.createdAt).toBeDefined();
  });

  it('should return validation errors for missing fields', () => {
    const params = {
      name: '',
      sector: '',
      size: '',
      maturity: '',
      constitution: ''
    };
    const errors = validateOrganizationData(params);
    
    expect(errors).toContain('Organization name is required');
    expect(errors).toContain('Sector is required');
    expect(errors).toContain('Organization size is required');
    expect(errors).toContain('Organization maturity is required');
    expect(errors).toContain('Constitution type is required');
  });

  it('should throw an error when creating organization with invalid data', () => {
    const params = {
      name: '',
      sector: '',
      size: '',
      maturity: '',
      constitution: ''
    };
    
    expect(() => createOrganization(params)).toThrowError(/Validation errors/);
  });
});