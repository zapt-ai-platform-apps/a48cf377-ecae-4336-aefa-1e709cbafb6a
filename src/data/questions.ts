import { Question } from '../models/question';

export const questions: Record<string, Question> = {
  "board-composition": {
    id: "board-composition",
    text: "How many trustees or board members does your organization have?",
    category: "Board Structure",
    followUpQuestions: ["board-skills", "board-diversity"],
    perspectives: [
      "The typical board size for charities is between 5-12 trustees. Smaller boards can be more agile but may lack diverse skills.",
      "Larger boards offer broader expertise but can become unwieldy in decision-making."
    ],
    suggestions: [
      "Consider whether your board size is appropriate for your organization's complexity and stage of development.",
      "Regularly review board size and composition as your charity evolves."
    ]
  },
  
  "board-skills": {
    id: "board-skills",
    text: "Does your board have a skills matrix or other method to identify gaps in expertise?",
    category: "Board Structure",
    followUpQuestions: ["board-recruitment"],
    perspectives: [
      "A skills audit helps identify gaps in expertise across your board.",
      "Good governance requires diverse skills including financial, legal, risk management, and sector-specific knowledge."
    ],
    suggestions: [
      "Create a simple skills matrix to identify and address gaps in your board.",
      "Conduct annual reviews of board skills against your strategic priorities."
    ]
  },
  
  "board-diversity": {
    id: "board-diversity",
    text: "How diverse is your board in terms of background, experience, and perspectives?",
    category: "Board Structure",
    followUpQuestions: ["board-recruitment"],
    perspectives: [
      "Diverse boards make better decisions by considering multiple perspectives.",
      "Diversity includes age, gender, ethnicity, disability, socioeconomic background, and professional experience."
    ],
    suggestions: [
      "Develop a diversity policy for board recruitment.",
      "Consider co-option or advisory roles to bring in diverse perspectives.",
      "Review your recruitment practices to reach diverse candidates."
    ]
  },
  
  "board-recruitment": {
    id: "board-recruitment",
    text: "How do you recruit new trustees to your board?",
    category: "Board Structure",
    followUpQuestions: ["board-induction"],
    perspectives: [
      "Transparent, skills-based recruitment processes help build stronger boards.",
      "Relying solely on personal networks limits diversity and fresh perspectives."
    ],
    suggestions: [
      "Advertise trustee vacancies publicly, with clear role descriptions.",
      "Consider using trustee recruitment platforms or sector networks.",
      "Implement open application processes with interviews for all candidates."
    ]
  },
  
  "board-induction": {
    id: "board-induction",
    text: "What induction process do new trustees receive?",
    category: "Board Structure",
    followUpQuestions: ["board-meetings"],
    perspectives: [
      "Comprehensive induction helps trustees become effective more quickly.",
      "Good induction covers governance, legal duties, finances, operations, and history."
    ],
    suggestions: [
      "Create an induction pack with key governance documents.",
      "Arrange meetings with key staff, visits to services, and mentor support.",
      "Schedule regular governance training for all trustees."
    ]
  },
  
  "board-meetings": {
    id: "board-meetings",
    text: "How frequently does your board meet, and how effective are your meetings?",
    category: "Board Operations",
    followUpQuestions: ["board-papers", "board-decisions"],
    perspectives: [
      "Meeting frequency should balance oversight with operational needs - typically 4-6 times annually.",
      "Effective meetings require good preparation, chairing, and follow-up."
    ],
    suggestions: [
      "Review meeting frequency and duration against governance needs.",
      "Create an annual board calendar with key governance activities.",
      "Consider using committees for detailed work between meetings."
    ]
  },
  
  "board-papers": {
    id: "board-papers",
    text: "How are board papers prepared and distributed?",
    category: "Board Operations",
    followUpQuestions: ["board-decisions"],
    perspectives: [
      "Timely, concise board papers enable effective decision-making.",
      "Good papers highlight key issues, risks, and recommendations clearly."
    ],
    suggestions: [
      "Develop templates for board papers with executive summaries.",
      "Distribute papers at least one week before meetings.",
      "Consider using board portal software for secure distribution."
    ]
  },
  
  "board-decisions": {
    id: "board-decisions",
    text: "How does your board make and record decisions?",
    category: "Board Operations",
    followUpQuestions: ["board-committees"],
    perspectives: [
      "Clear decision processes and records are essential for accountability.",
      "Good minute-taking focuses on decisions, actions, and key discussion points."
    ],
    suggestions: [
      "Create a decision log to track implementation.",
      "Ensure minutes clearly record decisions, dissent, and actions.",
      "Review your governing document for decision-making requirements."
    ]
  },
  
  "board-committees": {
    id: "board-committees",
    text: "What committees or sub-groups does your board have?",
    category: "Board Operations",
    followUpQuestions: ["financial-oversight"],
    perspectives: [
      "Committees can provide detailed scrutiny in specific areas.",
      "Common committees include Finance, Audit & Risk, and Nominations."
    ],
    suggestions: [
      "Review your committee structure against governance needs.",
      "Ensure clear terms of reference for all committees.",
      "Consider time-limited working groups for specific projects."
    ]
  },
  
  "financial-oversight": {
    id: "financial-oversight",
    text: "How does your board provide financial oversight?",
    category: "Financial Governance",
    followUpQuestions: ["financial-reporting", "risk-management"],
    perspectives: [
      "Financial oversight is a core duty of all trustees.",
      "Good practice includes regular reporting, budget approval, and reserves policy."
    ],
    suggestions: [
      "Ensure all trustees understand basic charity finance.",
      "Develop a clear scheme of financial delegation.",
      "Establish a finance committee for detailed scrutiny."
    ]
  },
  
  "financial-reporting": {
    id: "financial-reporting",
    text: "What financial reports does your board receive, and how often?",
    category: "Financial Governance",
    followUpQuestions: ["risk-management"],
    perspectives: [
      "Timely, accessible financial information is essential for good governance.",
      "Reports should balance detail with strategic oversight."
    ],
    suggestions: [
      "Provide regular management accounts with narrative explanation.",
      "Include both financial and impact reporting.",
      "Use visual presentation for complex financial information."
    ]
  },
  
  "risk-management": {
    id: "risk-management",
    text: "How does your organization identify and manage risks?",
    category: "Risk Governance",
    followUpQuestions: ["strategic-planning"],
    perspectives: [
      "Risk management is a key board responsibility.",
      "Effective oversight balances risk awareness with appropriate risk-taking."
    ],
    suggestions: [
      "Develop and regularly review a risk register.",
      "Focus board attention on strategic and high-impact risks.",
      "Include risk appetite discussions in strategic planning."
    ]
  },
  
  "strategic-planning": {
    id: "strategic-planning",
    text: "How does your board develop and monitor strategic plans?",
    category: "Strategic Governance",
    followUpQuestions: ["impact-measurement"],
    perspectives: [
      "Strategic planning is a core board function.",
      "Good strategy balances mission focus with adaptation to changing contexts."
    ],
    suggestions: [
      "Hold annual strategic away days for the board.",
      "Develop clear success measures for strategic objectives.",
      "Review strategy progress at least quarterly."
    ]
  },
  
  "impact-measurement": {
    id: "impact-measurement",
    text: "How do you measure and report on your organization's impact?",
    category: "Impact Governance",
    followUpQuestions: ["stakeholder-engagement"],
    perspectives: [
      "Impact measurement helps demonstrate effectiveness and learning.",
      "Good governance includes oversight of outcomes, not just activities."
    ],
    suggestions: [
      "Develop a simple impact framework linked to your mission.",
      "Include both quantitative and qualitative measures.",
      "Use impact data for learning and improvement, not just reporting."
    ]
  },
  
  "stakeholder-engagement": {
    id: "stakeholder-engagement",
    text: "How does your organization engage with key stakeholders?",
    category: "Stakeholder Governance",
    followUpQuestions: ["executive-relationship"],
    perspectives: [
      "Stakeholder engagement strengthens accountability and relevance.",
      "Key stakeholders include beneficiaries, funders, partners, and staff."
    ],
    suggestions: [
      "Map your key stakeholders and engagement methods.",
      "Include beneficiary voice in service design and evaluation.",
      "Report regularly to stakeholders on performance and impact."
    ]
  },
  
  "executive-relationship": {
    id: "executive-relationship",
    text: "How would you describe the relationship between the board and executive team?",
    category: "Board-Executive Relations",
    followUpQuestions: ["ceo-oversight"],
    perspectives: [
      "The board-executive relationship is critical for effective governance.",
      "Clear roles and mutual respect support good governance."
    ],
    suggestions: [
      "Clarify and document board and executive roles.",
      "Create opportunities for board-staff engagement beyond the CEO.",
      "Consider regular board-executive development sessions."
    ]
  },
  
  "ceo-oversight": {
    id: "ceo-oversight",
    text: "How does your board oversee and support the Chief Executive?",
    category: "Board-Executive Relations",
    followUpQuestions: ["conflict-management"],
    perspectives: [
      "CEO oversight is a key board responsibility.",
      "Effective oversight balances support with accountability."
    ],
    suggestions: [
      "Establish a formal CEO appraisal process.",
      "Develop clear CEO performance objectives linked to strategy.",
      "Create dedicated chair-CEO communication channels."
    ]
  },
  
  "conflict-management": {
    id: "conflict-management",
    text: "How does your board handle disagreements or conflicts?",
    category: "Board Dynamics",
    followUpQuestions: ["board-evaluation"],
    perspectives: [
      "Constructive conflict can improve decision-making.",
      "Unmanaged conflict can undermine governance effectiveness."
    ],
    suggestions: [
      "Develop a board code of conduct including conflict resolution.",
      "Consider external facilitation for difficult discussions.",
      "Train the chair in managing board dynamics."
    ]
  },
  
  "board-evaluation": {
    id: "board-evaluation",
    text: "How does your board evaluate its own performance?",
    category: "Board Effectiveness",
    followUpQuestions: ["governance-review"],
    perspectives: [
      "Regular board evaluation supports continuous improvement.",
      "Effective boards model the accountability they expect from others."
    ],
    suggestions: [
      "Conduct annual board self-assessments.",
      "Consider external governance reviews every 3 years.",
      "Use evaluation results to create board development plans."
    ]
  },
  
  "governance-review": {
    id: "governance-review",
    text: "When did you last review your governance arrangements?",
    category: "Governance Development",
    followUpQuestions: [],
    perspectives: [
      "Governance should evolve with organizational development.",
      "Regular reviews help identify improvement opportunities."
    ],
    suggestions: [
      "Schedule governance reviews after significant changes.",
      "Consider using governance codes as assessment frameworks.",
      "Create a governance development plan with clear priorities."
    ]
  }
};

export const getFirstQuestion = (): Question => {
  return questions["board-composition"];
};

export const getQuestionById = (id: string): Question | undefined => {
  return questions[id];
};

export const getNextQuestion = (currentId: string): Question | undefined => {
  // Get follow-up questions for current question
  const current = questions[currentId];
  if (current.followUpQuestions && current.followUpQuestions.length > 0) {
    return questions[current.followUpQuestions[0]];
  }
  
  // If no follow-ups, move to next category
  const allIds = Object.keys(questions);
  const currentIndex = allIds.indexOf(currentId);
  if (currentIndex < allIds.length - 1) {
    return questions[allIds[currentIndex + 1]];
  }
  
  return undefined; // No more questions
};