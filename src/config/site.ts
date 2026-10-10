export interface ServiceItem {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  iconName: 'BrainCircuit' | 'Code2' | 'BarChart3' | 'Cloud';
}

export interface MetricItem {
  value: string;
  label: string;
  iconName: 'FolderCheck' | 'Smile' | 'Clock';
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const siteConfig = {
  name: 'SalesFlo',
  tagline: 'Smarter Solutions. Stronger Businesses.',
  hero: {
    eyebrow: 'IDEAS → AUTOMATION → IMPACT',
    headline: 'Custom Software Solutions for a Smarter Tomorrow',
    supportingText:
      'We build AI-powered automation, modern web & mobile apps, and data-driven solutions to help businesses work smarter, scale faster and achieve more.',
    primaryCta: 'Start Your Project →',
    secondaryCta: 'Our Services',
    highlights: [
      {
        id: 'ai-auto',
        label: 'AI Automation',
        desc: 'Save time & reduce costs',
      },
      {
        id: 'dev',
        label: 'Modern Development',
        desc: 'Web & Mobile Apps',
      },
      {
        id: 'analytics',
        label: 'Data Analytics',
        desc: 'Turn data into decisions',
      },
    ],
  },
  services: [
    {
      id: 'ai-automation',
      name: 'AI Automation',
      shortDesc: 'Streamline your processes with AI agents, chatbots and workflow automation.',
      fullDesc: 'Streamline your processes with AI agents, chatbots and workflow automation.',
      iconName: 'BrainCircuit',
    },
    {
      id: 'web-app-development',
      name: 'Web & App Development',
      shortDesc: 'Modern, responsive and scalable web and mobile applications that perform.',
      fullDesc: 'Modern, responsive and scalable web and mobile applications that perform.',
      iconName: 'Code2',
    },
    {
      id: 'data-analytics',
      name: 'Data Analytics',
      shortDesc: 'Turn your data into actionable insights with beautiful dashboards and reports.',
      fullDesc: 'Turn your data into actionable insights with beautiful dashboards and reports.',
      iconName: 'BarChart3',
    },
    {
      id: 'cloud-devops',
      name: 'Cloud & DevOps',
      shortDesc: 'Secure, scalable and cost-efficient cloud solutions with smooth deployment.',
      fullDesc: 'Secure, scalable and cost-efficient cloud solutions with smooth deployment.',
      iconName: 'Cloud',
    },
  ] as ServiceItem[],
  about: {
    eyebrow: 'ABOUT US',
    headline: 'Your Partner in Digital Transformation',
    description:
      "We're a team of developers, designers and problem-solvers passionate about technology. We help businesses leverage AI and modern software to solve real problems and create lasting value.",
    cta: 'Learn More →',
    metrics: [
      {
        value: '50+',
        label: 'Projects Delivered',
        iconName: 'FolderCheck',
      },
      {
        value: '15+',
        label: 'Happy Clients',
        iconName: 'Smile',
      },
      {
        value: '3+',
        label: 'Years of Experience',
        iconName: 'Clock',
      },
    ] as MetricItem[],
  },
  process: {
    eyebrow: 'OUR PROCESS',
    headline: 'From Idea to Impact',
    subheadline:
      'We follow a simple, transparent process to turn your vision into a successful product.',
    steps: [
      {
        step: '01',
        title: 'Discover',
        description: 'Understand your goals, needs and challenges.',
      },
      {
        step: '02',
        title: 'Plan',
        description: 'Design the right solution and roadmap.',
      },
      {
        step: '03',
        title: 'Build',
        description: 'Develop, test and iterate with your feedback.',
      },
      {
        step: '04',
        title: 'Launch',
        description: 'Deliver and support for long-term success.',
      },
    ] as ProcessStep[],
  },
  contact: {
    eyebrow: 'GET IN TOUCH',
    headline: "Let's Build Something Great",
    description:
      "Have a project in mind or just want to say hello? We'd love to hear from you. Fill out the form and we'll get back to you as soon as possible.",
    email: 'hello@salesflo.dev',
    phone: '+92 300 1234567',
    location: 'Karachi, Pakistan',
    social: [
      {
        name: 'LinkedIn',
        url: 'https://linkedin.com/company/salesflo-agency',
        configured: true,
      },
      {
        name: 'X',
        url: 'https://x.com/salesflo_agency',
        configured: true,
      },
      {
        name: 'GitHub',
        url: 'https://github.com/salesflo-agency',
        configured: true,
      },
      {
        name: 'Instagram',
        url: 'https://instagram.com/salesflo.agency',
        configured: true,
      },
    ],
  },
  portfolio: {
    headline: 'Selected Work & Capabilities',
    description:
      'A preview of high-impact AI agents, web architectures, and automation systems delivered for enterprise and scale-up partners.',
    projects: [
      {
        title: 'Enterprise AI Lead Qualification Engine',
        category: 'AI Automation & n8n',
        outcome: 'Reduced response time from 4 hours to under 60 seconds with automated qualification.',
      },
      {
        title: 'SaaS Analytics Dashboard',
        category: 'Full-Stack Web Application',
        outcome: 'Real-time telemetry and revenue tracking handling 1M+ daily telemetry events.',
      },
      {
        title: 'Multi-Cloud Automation Pipeline',
        category: 'Cloud & DevOps',
        outcome: 'Zero-downtime deployment workflows cutting infrastructure spend by 35%.',
      },
    ],
  },
};
