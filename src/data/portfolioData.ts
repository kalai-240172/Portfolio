export interface SocialLinks {
  linkedin: string;
  github: string;
  leetcode: string;
  email: string;
}

export interface SkillItem {
  name: string;
  status: 'Currently Learning';
  focus: string;
  notes: string;
}

export interface PlannedSkillCategory {
  category: string;
  status: 'Planned Learning';
  technologies: string[];
  description: string;
}

export interface RoadmapStage {
  stageNumber: number;
  stageTitle: string;
  subtitle: string;
  status: 'Active / In Progress' | 'Upcoming';
  topics: string[];
  description: string;
}

export interface ProjectDetail {
  id: string;
  title: string;
  category: string;
  status: string;
  description: string;
  problemSolved: string;
  implementedFeatures: string[];
  plannedFeatures: string[];
  technologiesUsed: string[];
  myContribution: string;
  githubUrl?: string;
  demoUrl?: string;
  isPlaceholder?: boolean;
}

export interface JourneyMilestone {
  date: string;
  title: string;
  category: 'Learning' | 'Practice' | 'Project' | 'Milestone';
  description: string;
  tags: string[];
}

export interface EducationData {
  institution: string;
  degree: string;
  status: string;
  location: string;
  department: string;
}

export interface CertificationEntry {
  title: string;
  issuer: string;
  status: 'Future Placeholder' | 'Verified';
  datePlaceholder: string;
  notes: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Kalaivanan S",
    title: "Aspiring AI/ML Engineer",
    educationBrief: "B.E. Computer Science and Engineering",
    college: "Rajalakshmi Institute of Technology, Chennai",
    currentStatus: "Student",
    currentlyLearning: "Python Programming",
    heroIntroduction: "I'm a Computer Science and Engineering student at Rajalakshmi Institute of Technology, Chennai, aspiring to become an AI/ML Engineer. Currently, I'm learning Python and strengthening my programming fundamentals. I'm interested in exploring Artificial Intelligence, Machine Learning, mathematics, and data-driven problem-solving. My goal is to develop the knowledge and practical skills needed to build intelligent solutions for real-world problems.",
    careerGoalStatement: "My goal is to become an AI/ML Engineer who can combine programming, mathematics, data, and intelligent algorithms to develop solutions for real-world problems.",
    avatar: "/profile.jpg",
  },

  socials: {
    linkedin: "https://www.linkedin.com/in/kalaivanan200705/",
    github: "https://github.com/kalai-240172",
    leetcode: "https://leetcode.com/u/Kalai2401/",
    email: "kalai240172@gmail.com",
  } as SocialLinks,

  about: {
    paragraphs: [
      "I'm Kalaivanan S, a Computer Science and Engineering student at Rajalakshmi Institute of Technology, Chennai.",
      "I'm passionate about Artificial Intelligence and Machine Learning and aim to build a career as an AI/ML Engineer.",
      "Currently, I'm learning Python and focusing on programming fundamentals and problem-solving. My learning journey will gradually cover Python libraries, mathematics, data analysis, Data Structures and Algorithms, Machine Learning, and Deep Learning.",
      "I believe in learning concepts step by step, practising consistently, and applying my knowledge through practical projects. My long-term goal is to develop intelligent systems that can solve meaningful real-world problems."
    ],
    highlights: [
      { label: "Institution", value: "Rajalakshmi Institute of Technology, Chennai" },
      { label: "Degree Program", value: "B.E. Computer Science and Engineering" },
      { label: "Current Status", value: "Student (Pursuing)" },
      { label: "Career Direction", value: "Aspiring AI/ML Engineer" },
      { label: "Current Learning", value: "Python Programming & Fundamentals" }
    ]
  },

  // Genuine Current Skill: Only Python as confirmed
  currentSkills: [
    {
      name: "Python",
      status: "Currently Learning",
      focus: "Programming Fundamentals & Problem-Solving",
      notes: "Actively studying variables, data types, conditions, loops, functions, modules, data structures (lists, tuples, sets, dictionaries), OOP, and logic building."
    }
  ] as SkillItem[],

  // Distinct Upcoming Planned Technologies & Concepts
  upcomingSkills: [
    {
      category: "Python Scientific Libraries",
      status: "Planned Learning",
      technologies: ["NumPy", "Pandas", "Matplotlib", "Seaborn"],
      description: "Planned exploration for vector computation, structured tabular data manipulation, and scientific visualization."
    },
    {
      category: "Mathematics for AI/ML",
      status: "Planned Learning",
      technologies: ["Linear Algebra", "Statistics", "Probability", "Calculus"],
      description: "Foundational mathematical disciplines powering gradient descent, loss functions, vectors, matrices, and statistical inference."
    },
    {
      category: "Data Analysis & EDA",
      status: "Planned Learning",
      technologies: ["Data Cleaning", "Exploratory Data Analysis", "Data Visualization", "Dataset Inspection"],
      description: "Extracting insights from datasets, handling missing values, and visual pattern discovery."
    },
    {
      category: "Machine Learning & Deep Learning",
      status: "Planned Learning",
      technologies: ["Supervised Learning", "Unsupervised Learning", "Neural Networks", "TensorFlow / PyTorch"],
      description: "Planned roadmap milestones: regression, classification, clustering, CNNs, RNNs, and model evaluation."
    }
  ] as PlannedSkillCategory[],

  // Modern 8-Stage AI/ML Roadmap
  roadmap: [
    {
      stageNumber: 1,
      stageTitle: "Python Programming",
      subtitle: "Language Core & Problem-Solving",
      status: "Active / In Progress",
      topics: [
        "Python fundamentals",
        "Variables and data types",
        "Conditions and loops",
        "Functions and modules",
        "Lists, tuples, sets and dictionaries",
        "Object-Oriented Programming",
        "Problem-solving"
      ],
      description: "Mastering core Python syntax, control structures, clean code conventions, in-built collections, OOP paradigms, and algorithmic problem-solving."
    },
    {
      stageNumber: 2,
      stageTitle: "Python Libraries",
      subtitle: "Scientific & Numerical Computing",
      status: "Upcoming",
      topics: [
        "NumPy",
        "Pandas",
        "Matplotlib",
        "Seaborn"
      ],
      description: "Working with multi-dimensional arrays, dataframes, data wrangling, and informative data plotting."
    },
    {
      stageNumber: 3,
      stageTitle: "Mathematics for AI/ML",
      subtitle: "Mathematical Foundations",
      status: "Upcoming",
      topics: [
        "Linear Algebra",
        "Statistics",
        "Probability",
        "Calculus"
      ],
      description: "Understanding matrix operations, eigenvalues/eigenvectors, probability distributions, hypothesis testing, derivatives, and gradient optimization."
    },
    {
      stageNumber: 4,
      stageTitle: "Data Structures and Algorithms",
      subtitle: "Algorithmic Efficiency & LeetCode",
      status: "Upcoming",
      topics: [
        "Arrays and strings",
        "Searching and sorting",
        "Recursion",
        "Hashing",
        "Trees and graphs",
        "Problem-solving practice using LeetCode"
      ],
      description: "Sharpening computational problem-solving, asymptotic complexity analysis (Big-O), and systematic LeetCode practice."
    },
    {
      stageNumber: 5,
      stageTitle: "Data Analysis",
      subtitle: "Exploratory Insights & Datasets",
      status: "Upcoming",
      topics: [
        "Data cleaning",
        "Exploratory Data Analysis",
        "Data visualization",
        "Understanding datasets",
        "Extracting useful insights"
      ],
      description: "Transforming raw unstructured data into clean formats, identifying distributions, correlations, outliers, and business takeaways."
    },
    {
      stageNumber: 6,
      stageTitle: "Machine Learning",
      subtitle: "Classical Models & Evaluation",
      status: "Upcoming",
      topics: [
        "Introduction to Machine Learning",
        "Supervised Learning",
        "Unsupervised Learning",
        "Regression",
        "Classification",
        "Clustering",
        "Model training and evaluation"
      ],
      description: "Building predictive models from data, tuning hyperparameters, validating performance metrics (accuracy, precision, recall, F1, ROC-AUC)."
    },
    {
      stageNumber: 7,
      stageTitle: "Deep Learning",
      subtitle: "Neural Architectures & Frameworks",
      status: "Upcoming",
      topics: [
        "Neural Networks",
        "Artificial Neural Networks",
        "Convolutional Neural Networks",
        "Recurrent Neural Networks",
        "Deep Learning frameworks"
      ],
      description: "Designing multi-layer perceptrons, spatial feature extraction with CNNs, sequential temporal processing with RNNs, and framework mastery."
    },
    {
      stageNumber: 8,
      stageTitle: "AI/ML Projects and Deployment",
      subtitle: "End-to-End Production & Serving",
      status: "Upcoming",
      topics: [
        "Practical Machine Learning projects",
        "Real-world datasets",
        "Model development",
        "Model evaluation",
        "Model deployment",
        "Portfolio project development"
      ],
      description: "Developing end-to-end intelligent applications on real datasets, wrapping models with inference APIs, containerization, and cloud deployment."
    }
  ] as RoadmapStage[],

  // Existing Projects preserved with actual implementation & repository details
  projects: [
    {
      id: "project-01",
      title: "Personal Student Progression Tracker",
      category: "Personal Productivity / Student Management",
      status: "In Progress",
      description: "A personal web-based application designed to help students organize academic records, manage personal goals, record daily progress, and monitor their development over time.",
      problemSolved: "Students often struggle with fragmented academic files, unmonitored goals, and a lack of clear feedback on daily study consistency. This application aims to centralize student milestones into a structured personal tracker.",
      implementedFeatures: [
        "User registration and authentication (Security architecture)",
        "Core architectural setup and multi-stage workflow planning",
        "Personal student record management (Initial data modeling & entities)",
        "Foundational UI prototyping for daily logging and metrics layout"
      ],
      plannedFeatures: [
        "Goal creation and management",
        "Daily progress logging",
        "Progress history",
        "Dashboard and progress overview",
        "Academic records and achievement management"
      ],
      technologiesUsed: [
        "Java",
        "Spring Boot",
        "Spring Security",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "H2 Database"
      ],
      myContribution: "Architecting the feature roadmap, defining data entities for progression milestones, designing the planned dashboard views, and developing the frontend & backend stages.",
      githubUrl: "https://github.com/kalai-240172/student-progress-tracker-api",
      demoUrl: "",
      isPlaceholder: false
    },
    {
      id: "project-placeholder-2",
      title: "Upcoming Project: Python Fundamentals Application",
      category: "Problem Solving / Algorithms",
      status: "Planned / Editable Placeholder",
      description: "An upcoming project implementing core Python logic, file handling, and algorithmic problem-solving to reinforce foundational learning.",
      problemSolved: "Practical application of syntax, data manipulation, and clean algorithmic code.",
      implementedFeatures: [
        "Concept formulation stage"
      ],
      plannedFeatures: [
        "Modular CLI or web interface",
        "Algorithmic data processing",
        "Error handling and unit test suites"
      ],
      technologiesUsed: [
        "Python"
      ],
      myContribution: "Project scoping and learning implementation.",
      githubUrl: "",
      demoUrl: "",
      isPlaceholder: true
    }
  ] as ProjectDetail[],

  education: {
    institution: "Rajalakshmi Institute of Technology, Chennai",
    degree: "Bachelor of Engineering — Computer Science and Engineering",
    status: "Pursuing",
    location: "Chennai, Tamil Nadu, India",
    department: "Department of Computer Science and Engineering"
  } as EducationData,

  // Editable timeline of active learning & milestones
  learningJourney: [
    {
      date: "Current Focus",
      title: "Python Programming & Logic Fundamentals",
      category: "Learning",
      description: "Actively studying variables, loops, conditionals, functions, lists, dictionaries, and problem-solving patterns.",
      tags: ["Python", "Fundamentals", "Problem Solving"]
    },
    {
      date: "Ongoing Practice",
      title: "Algorithmic Practice on LeetCode",
      category: "Practice",
      description: "Practising elementary problem solving and algorithmic thinking to build a solid computational bedrock.",
      tags: ["LeetCode", "Coding Practice", "Logic"]
    },
    {
      date: "Active Project",
      title: "Personal Student Progression Tracker Development",
      category: "Project",
      description: "Building and iterating on student record tracking, goal workflows, and academic progress features.",
      tags: ["Student Tracker", "Project Planning", "In Progress"]
    },
    {
      date: "Foundational Step",
      title: "Commenced B.E. Computer Science & Engineering",
      category: "Milestone",
      description: "Enrolled at Rajalakshmi Institute of Technology, Chennai, setting the roadmap towards becoming an AI/ML Engineer.",
      tags: ["Education", "Rajalakshmi Institute of Technology", "CSE"]
    }
  ] as JourneyMilestone[],

  // Honest placeholder section for future verified certifications
  certifications: [
    {
      title: "Technical Certification (Placeholder)",
      issuer: "To be added upon completion",
      status: "Future Placeholder",
      datePlaceholder: "Upcoming",
      notes: "This section is reserved for verified technical certificates, workshops, and verified credentials as they are completed."
    },
    {
      title: "Academic / Technical Achievement (Placeholder)",
      issuer: "To be added upon completion",
      status: "Future Placeholder",
      datePlaceholder: "Upcoming",
      notes: "Reserved for confirmed symposiums, competitive programming contests, and academic achievements."
    }
  ] as CertificationEntry[]
};
