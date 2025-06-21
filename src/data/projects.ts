import { Project } from '../components/ProjectCard';

export const featuredProjects: Project[] = [
  {
    id: '1',
    title: 'Enterprise Network Redesign',
    description: 'Led a complete redesign of corporate network infrastructure, improving security and performance while reducing operational costs.',
    image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'technical',
    technologies: ['Cisco', 'Network Security', 'VPN', 'Firewall'],
  },
  {
    id: '2',
    title: 'IT Service Desk Optimization',
    description: 'Redesigned service desk processes and implemented new ticketing system, reducing resolution time by 35% and improving customer satisfaction.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'management',
    technologies: ['ITIL', 'ServiceNow', 'Process Optimization', 'KPIs'],
  },
  {
    id: '3',
    title: 'Cloud Migration Strategy',
    description: 'Developed and executed strategy for migrating on-premises systems to cloud infrastructure, resulting in 40% cost savings and improved scalability.',
    image: 'https://images.pexels.com/photos/8164171/pexels-photo-8164171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'technical',
    technologies: ['AWS', 'Azure', 'Cloud Architecture', 'Migration Planning'],
  }
];

export const allProjects: Project[] = [
  ...featuredProjects,
  {
    id: '4',
    title: 'IT Policy Documentation',
    description: 'Created comprehensive IT policies and procedures documentation to ensure compliance with industry standards and regulatory requirements.',
    image: 'https://images.pexels.com/photos/4467732/pexels-photo-4467732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'documentation',
    technologies: ['Policy Development', 'GDPR', 'ISO 27001', 'Documentation'],
  },
  {
    id: '5',
    title: 'IT Budget Planning',
    description: 'Developed and managed annual IT budget, optimizing resource allocation and achieving 15% cost reduction while maintaining service quality.',
    image: 'https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'management',
    technologies: ['Budget Planning', 'Financial Analysis', 'Resource Allocation', 'ROI Analysis'],
  },
  {
    id: '6',
    title: 'Disaster Recovery Implementation',
    description: 'Designed and implemented comprehensive disaster recovery and business continuity plans, reducing recovery time objectives by 60%.',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'technical',
    technologies: ['DR Planning', 'Business Continuity', 'Data Backup', 'Risk Assessment'],
  },
  {
    id: '7',
    title: 'IT Training Program',
    description: 'Developed and delivered technical training programs for staff, resulting in 40% reduction in user-generated support tickets.',
    image: 'https://images.pexels.com/photos/6633954/pexels-photo-6633954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'management',
    technologies: ['Training Development', 'Knowledge Management', 'Staff Development', 'Technical Documentation'],
  },
  {
    id: '8',
    title: 'Security Compliance Audit',
    description: 'Conducted comprehensive security audit and implemented remediation plan to achieve compliance with industry regulations.',
    image: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'technical',
    technologies: ['Security Auditing', 'Compliance', 'Vulnerability Assessment', 'Risk Management'],
  },
  {
    id: '9',
    title: 'Performance Management Framework',
    description: 'Developed IT staff performance management framework with clear metrics and regular feedback mechanisms.',
    image: 'https://images.pexels.com/photos/5691695/pexels-photo-5691695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'management',
    technologies: ['Performance Metrics', 'Staff Development', 'KPIs', 'Management Tools'],
  },
];