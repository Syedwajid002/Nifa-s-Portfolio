export interface Skill {
  name: string;
  proficiency: number;
}

export const technicalSkills: Skill[] = [
  { name: 'Network Administration', proficiency: 95 },
  { name: 'System Security', proficiency: 90 },
  { name: 'Cloud Infrastructure', proficiency: 85 },
  { name: 'Virtualization', proficiency: 88 },
  { name: 'Database Management', proficiency: 80 },
  { name: 'IT Service Management', proficiency: 92 },
];

export const managementSkills: Skill[] = [
  { name: 'Team Leadership', proficiency: 90 },
  { name: 'Performance Evaluation', proficiency: 85 },
  { name: 'Resource Allocation', proficiency: 88 },
  { name: 'Budget Planning', proficiency: 82 },
  { name: 'Strategic Planning', proficiency: 84 },
  { name: 'Vendor Management', proficiency: 86 },
];

export const projectSkills: Skill[] = [
  { name: 'Agile Methodologies', proficiency: 88 },
  { name: 'Risk Management', proficiency: 85 },
  { name: 'Gantt Chart Creation', proficiency: 90 },
  { name: 'Resource Scheduling', proficiency: 87 },
  { name: 'Stakeholder Management', proficiency: 83 },
  { name: 'Project Documentation', proficiency: 91 },
];

export const softSkills: Skill[] = [
  { name: 'Communication', proficiency: 92 },
  { name: 'Conflict Resolution', proficiency: 87 },
  { name: 'Coaching & Mentoring', proficiency: 89 },
  { name: 'Time Management', proficiency: 88 },
  { name: 'Problem Solving', proficiency: 94 },
  { name: 'Adaptability', proficiency: 90 },
];