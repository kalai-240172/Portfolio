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

export interface RoadmapTopic {
  name: string;
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
    title: "Aspiring Software Engineer",
    educationBrief: "B.E. Computer Science and Engineering",
    college: "Rajalakshmi Institute of Technology, Chennai",
    currentStatus: "Student",
    currentlyLearning: "Python",
    heroIntroduction: "I'm passionate about becoming a Software Engineer. Currently, I'm learning Python and strengthening my programming fundamentals. My journey is focused on continuous learning, problem-solving, and building the knowledge required to develop meaningful software.",
    avatar: "/profile.jpg",
  },

  socials: {
    linkedin: "https://www.linkedin.com/in/kalaivanan200705/",
    github: "https://github.com/kalai-240172",
    leetcode: "https://leetcode.com/u/Kalai240172/",
    email: "kalaivanan240172@example.com", // Editable email address placeholder
  } as SocialLinks,

  about: {
    paragraphs: [
      "I'm Kalaivanan S, a Computer Science and Engineering student at Rajalakshmi Institute of Technology, Chennai.",
      "I'm passionate about becoming a Software Engineer and continuously improving my technical knowledge.",
      "Currently, I'm learning Python and focusing on understanding programming concepts and developing problem-solving skills.",
      "I have a clear learning roadmap to explore frontend development, backend development, databases, Data Structures and Algorithms, and other core computer science concepts in the future.",
      "I believe in growing through consistent learning, practical experience, and curiosity. My goal is to become a well-rounded Software Engineer who can understand problems and build meaningful solutions."
    ],
    highlights: [
      { label: "Institution", value: "Rajalakshmi Institute of Technology, Chennai" },
      { label: "Degree Program", value: "B.E. Computer Science and Engineering" },
      { label: "Current Status", value: "Student (Pursuing)" },
      { label: "Core Focus", value: "Python & Programming Fundamentals" }
    ]
  },

  // Strictly showing only verified / genuine skills as requested
  currentSkills: [
    {
      name: "Python",
      status: "Currently Learning",
      focus: "Programming Fundamentals & Problem-Solving",
      notes: "Learning syntax, control flows, data structures in Python, clean code principles, and logic development."
    }
  ] as SkillItem[],

  // Honest structured 6-stage roadmap
  roadmap: [
    {
      stageNumber: 1,
      stageTitle: "Programming Fundamentals",
      subtitle: "Core Language & Logic Building",
      status: "Active / In Progress",
      topics: [
        "Python",
        "Problem-solving",
        "Programming logic"
      ],
      description: "Strengthening core programming constructs, understanding loops, conditionals, functions, data structures in Python, and computational problem-solving."
    },
    {
      stageNumber: 2,
      stageTitle: "Frontend Development",
      subtitle: "Client-side Web Architecture",
      status: "Upcoming",
      topics: [
        "HTML",
        "CSS",
        "JavaScript",
        "React"
      ],
      description: "Planned exploration of modern responsive web structures, asynchronous JavaScript, and component-based user interfaces with React."
    },
    {
      stageNumber: 3,
      stageTitle: "Backend Development",
      subtitle: "Server Architecture & APIs",
      status: "Upcoming",
      topics: [
        "Backend fundamentals",
        "REST APIs",
        "Server-side programming"
      ],
      description: "Understanding client-server communication, HTTP verbs, API contracts, routing, and server-side request/response lifecycles."
    },
    {
      stageNumber: 4,
      stageTitle: "Database Management",
      subtitle: "Data Persistence & Schemas",
      status: "Upcoming",
      topics: [
        "SQL",
        "PostgreSQL",
        "Database integration"
      ],
      description: "Planned learning of relational data modeling, query composition, table constraints, and persistent database connectivity."
    },
    {
      stageNumber: 5,
      stageTitle: "Computer Science Fundamentals",
      subtitle: "Systems & Algorithmic Foundations",
      status: "Upcoming",
      topics: [
        "Object-Oriented Programming",
        "Data Structures and Algorithms",
        "DBMS",
        "Operating Systems",
        "Computer Networks"
      ],
      description: "Foundational computer science theory: OOP design principles, algorithmic time & space complexity, system resource management, and network protocols."
    },
    {
      stageNumber: 6,
      stageTitle: "Professional Development",
      subtitle: "Engineering Workflows & Career Readiness",
      status: "Upcoming",
      topics: [
        "Git and GitHub",
        "Projects",
        "Deployment fundamentals",
        "Interview preparation",
        "Communication skills"
      ],
      description: "Version control hygiene, real-world deployment workflows, technical communication, mock interviews, and software engineer career preparation."
    }
  ] as RoadmapStage[],

  // Projects strictly adhering to real state and distinctions
  projects: [
    {
      id: "project-01",
      title: "Personal Student Progression Tracker",
      category: "Personal Productivity / Student Management",
      status: "In Progress",
      description: "A personal web-based progression tracking platform designed to help students organize their academic records, manage personal goals, record daily progress, and understand their improvement over time.",
      problemSolved: "Students often struggle with fragmented academic files, unmonitored goals, and a lack of clear feedback on daily study consistency. This application aims to centralize student milestones into a structured personal tracker.",
      implementedFeatures: [
        "Core architectural setup and multi-stage workflow planning",
        "Initial student record data modeling and progression entities",
        "Foundational UI prototyping for daily logging and metrics layout"
      ],
      plannedFeatures: [
        "Secure user registration and authentication",
        "Personal student record management",
        "Goal creation and management",
        "Daily progress logging",
        "Progress history",
        "Dashboard and statistical overview",
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
      githubUrl: "", // Editable placeholder — left empty until published
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
      description: "Enrolled at Rajalakshmi Institute of Technology, Chennai, setting the roadmap towards becoming a Software Engineer.",
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
