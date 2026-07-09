export const personalInfo = {
  name: "Nhim Puthyseth",
  role: "Full Stack Developer",
  roles: [
    "Full Stack Developer",
    "Java & Spring Boot Engineer",
    "React & Next.js Developer",
    "Backend Architect",
    "Computer Science Student",
  ],
  email: "puthysethnhim@gmail.com",
  phone: "015 76 55 81",
  location:
    "Street 05, Dangkor Commune, Dangkor District, Phnom Penh City, Cambodia",
  github: "https://github.com/Harutodesuuu-lang",
  linkedin: "https://www.linkedin.com/in/puthyseth-nhim-8b8535286",
  description:
    "I build modern, scalable web applications using Java, Spring Boot, React, Next.js, and PostgreSQL.",
  about:
    "I'm a proactive and dedicated Computer Science student at Royal University of Phnom Penh with strong programming and problem-solving skills. A Full Stack Generation 2 graduate at ISTAD, I am passionate about backend architecture and modern frontend UI/UX. I seek opportunities in IT roles to apply academic knowledge, contribute to real-world projects, and continuously grow my skill set.",
  cvPath: "/Nhim-Puthyseth-CV_.pdf",
  profileImage: "/img/profile.png",
};

export const stats = [
  { label: "Years Learning", value: 4, suffix: "+" },
  { label: "Projects Completed", value: 5, suffix: "+" },
  { label: "Technologies Mastered", value: 15, suffix: "+" },
];

export const skills = [
  {
    category: "Frontend",
    color: "from-cyan-500/10 to-cyan-500/5",
    borderColor: "border-cyan-500/20",
    iconColor: "text-cyan-500",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "JavaScript",
    ],
  },
  {
    category: "Backend",
    color: "from-emerald-500/10 to-emerald-500/5",
    borderColor: "border-emerald-500/20",
    iconColor: "text-emerald-500",
    items: ["Java", "Spring Boot", "Spring Security", "REST API"],
  },
  {
    category: "Database",
    color: "from-blue-500/10 to-blue-500/5",
    borderColor: "border-blue-500/20",
    iconColor: "text-blue-500",
    items: ["PostgreSQL"],
  },
  {
    category: "Tools & Platforms",
    color: "from-violet-500/10 to-violet-500/5",
    borderColor: "border-violet-500/20",
    iconColor: "text-violet-500",
    items: [
      "Git",
      "GitHub",
      "IntelliJ IDEA",
      "VS Code",
      "Postman",
      "Docker",
      "Figma",
    ],
  },
  {
    category: "Soft Skills",
    color: "from-amber-500/10 to-amber-500/5",
    borderColor: "border-amber-500/20",
    iconColor: "text-amber-500",
    items: [
      "Communication",
      "Teamwork",
      "Critical Thinking",
      "Adaptability",
      "Problem Solving",
      "Attention to Detail",
      "Fast Learner",
    ],
  },
];

export const experience = [
  {
    title: "Spring Internship Program",
    company: "Spring Education Center",
    type: "Internship",
    period: "Nov 18, 2023 – Dec 16, 2023",
    duration: "1 month",
    description:
      "Completed a one-month internship focused on developing professional workplace skills, including communication, teamwork, leadership, and problem-solving through practical activities and collaborative projects.",
    responsibilities: [
      "Participated in team-based projects and collaborative learning activities",
      "Strengthened verbal and written communication skills in a professional environment",
      "Developed teamwork, leadership, and interpersonal skills through group exercises",
      "Improved critical thinking and problem-solving abilities by completing real-world scenarios",
      "Practiced time management, adaptability, and workplace professionalism",
    ],
  },
  {
    title: "Volunteer – Cambodia STEM Festival",
    company: "The 18th Annual Cambodia STEM Festival",
    type: "Volunteer",
    period: "May 10–11, 2024",
    duration: "2 days",
    description:
      "Volunteered at the 18th Annual Cambodia STEM Festival, supporting STEM education outreach and promoting technology to the community.",
    responsibilities: [
      "Assisted in organizing and managing STEM activities and exhibits",
      "Guided participants through demonstrations and hands-on activities",
      "Promoted technology and innovation awareness to the broader community",
    ],
    tech: ["Event Management", "STEM Outreach", "Community Service"],
  },
  {
    title: "Final Project – Smart Attendance Record",
    company: "ISTAD – Full Stack Generation 2",
    type: "Academic Project",
    period: "Dec 15 2025 - June 19 2026",
    duration: "6 months",
    description:
      "Built a comprehensive smart attendance system as the final project for ISTAD's Full Stack Generation 2 program, combining QR code scanning and GPS location verification for real-time attendance management.",
    responsibilities: [
      "Built the backend REST API with Spring Boot and Spring Security",
      "Implemented QR code generation and scanning for check-in/check-out",
      "Integrated GPS location verification to validate attendance presence",
      "Designed and managed a PostgreSQL database for attendance records",
      "Developed the frontend dashboard with React for admin and student roles",
    ],
    tech: [
      "Spring Boot",
      "React",
      "PostgreSQL",
      "QR Code",
      "GPS / Location API",
      "Spring Security",
    ],
  },
];

export const projects = [
  {
    title: "ICheck (Smart Attendance Record System)",
    description:
      "A comprehensive QR-code and GPS-based attendance management system built for educational institutions. Features real-time attendance tracking, automated reporting, and multi-role access control.",
    longDescription:
      "Built with Spring Boot on the backend and React on the frontend, this system enables institutions to manage attendance through QR code scanning and GPS verification. Admins, teachers, and students each have role-specific dashboards with full CRUD capabilities.",
    image:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
    tech: [
      "Spring Boot",
      "React",
      "PostgreSQL",
      "Spring Security",
      "QR Code",
      "GPS API",
      "JWT",
    ],
    features: [
      "QR code-based check-in/check-out",
      "GPS location verification",
      "Role-based access control (Admin / Teacher / Student)",
      "Real-time attendance dashboard",
      "Automated attendance reports",
      "JWT authentication & Spring Security",
    ],
    github: "https://github.com/Harutodesuuu-lang",
    demo: "#",
    featured: true,
    status: "Completed",
  },
  {
    title: "Full Stack Web Application",
    description:
      "A modern full stack web application demonstrating REST API integration, responsive UI, and secure authentication with Spring Boot and React.",
    longDescription:
      "This project showcases integration between a Spring Boot REST backend and a React frontend, complete with form validation, state management, and a polished UI using Tailwind CSS.",
    image:
      "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800",
    tech: ["Java", "Spring Boot", "React", "PostgreSQL", "Tailwind CSS"],
    features: [
      "RESTful API design",
      "CRUD operations",
      "Responsive UI",
      "Form validation",
      "JWT-based security",
    ],
    github: "https://github.com/Harutodesuuu-lang",
    demo: "#",
    featured: false,
    status: "Completed",
  },
];

export const education = [
  {
    degree: "Bachelor's Degree of Education in English Language",
    institution: "Institute of Foreign Languages",
    department: "Royal University of Phnom Penh",
    period: "2021 – 2025",
    status: "Completed",
    description:
      "Developing advanced English proficiency for professional and academic communication.",
    achievements: [
      "Advanced English level",
      "Cross-cultural communication skills",
      "Academic writing and research",
    ],
  },
  {
    degree: "Bachelor's Degree in Computer Science",
    institution: "Department of Computer Science",
    department: "Royal University of Phnom Penh",
    period: "2021 – 2026",
    status: "Completed",
    description:
      "Studying core computer science concepts including algorithms, data structures, software engineering, databases, and networking.",
    achievements: [
      "Strong focus on backend development",
      "Active in programming communities",
      "Volunteer at STEM Festival 2024",
    ],
  },
  {
    degree: "Full Stack Web Development – Generation 2",
    institution: "ISTAD",
    department: "Institute of Science and Technology Advanced Development",
    period: "2025 – 2026",
    status: "Completed",
    description:
      "Intensive full stack development bootcamp covering Java, Spring Boot, React, Next.js, and PostgreSQL with hands-on project-based learning.",
    achievements: [
      "Completed Spring Internship Program",
      "Built Smart Attendance System as final project",
      "Mastered Spring Boot & React ecosystem",
    ],
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
