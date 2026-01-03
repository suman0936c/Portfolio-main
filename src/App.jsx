/* @jsxImportSource react */
import React, { useEffect, useMemo, useState, useRef } from "react";
import { 
  ChevronDown, Github, Linkedin, Mail, Phone, ExternalLink, MapPin, 
  Star, Award, Rocket, User, Moon, Sun, Globe2, 
  GraduationCap, Cpu, TerminalSquare, Bot, ShieldCheck, Compass, 
  Trophy, ChevronRight, Briefcase, Code, Database, Cloud, Zap,
  Send, MessageCircle, Heart, Calendar, Users, Target, Coffee,
  Download, Eye, Play, BookOpen, Lightbulb, CheckCircle, Menu,
  Sparkles, Instagram, TrendingUp, BarChart3, ShoppingCart, X
} from "lucide-react";
import profileImage from "./assets/me.jpg";

// ==========================
// DATA (Updated with Suman's Info)
// ==========================
const INFO = {
  name: "Suman Mohapatra",
  headline: "B.Tech CSE Student • Aspiring Data Analyst",
  location: "Puri,Odisha, India",
  email: "sumanmohapatra.2006@gmail.com",
  summary: "Hello! I'm Suman Mohapatra, a B.Tech Computer Science and Engineering student at the Central University of Haryana. My goal is to become a Data Analyst, and I love diving into datasets to find the story behind the numbers. Outside of tech, I enjoy chess, watching anime, and exploring new web series.",
  links: {
    github: "https://github.com/suman0936c",
    linkedin: "https://www.linkedin.com/in/suman0936c",
    instagram: "https://www.instagram.com/unique_suman_/",
    libraryRepo: "#",
  },
  profileImage: profileImage,
};

const EDUCATION = [
  {
    institution: "Central University of Haryana",
    location: "Mahendergarh, India",
    degree: "B.Tech, Computer Science and Engineering",
    period: "August 2023 - Present",
    description: "Skills: Database Management System (DBMS) · Data Structures · Object-Oriented Programming (OOP)"
  },
  {
    institution: "Ghanashyam Hemalata Vidya Mandir",
    location: "Puri, India",
    degree: "12th, PCM",
    period: "Sep 2021 - Apr 2023",
    description: "Grade: 93.8%. Skills: C++ · Python · SQL · C"
  },
  {
    institution: "Odisha Adarsha Vidyalaya",
    location: "Gunupur, India",
    degree: "Matriculation (10th)",
    period: "Apr 2018 - Apr 2021",
    description: "Grade: 90.6%"
  }
];

const SKILLS = {
  Languages: ["Python", "JavaScript", "SQL", "C++", "C", "8086 Assembly"],
  "Frameworks & Libraries": [
    "React.js", "Tailwind CSS", "Vite", "Node.js", "Pandas", "Scikit-learn", "Matplotlib"
  ],
  Databases: ["MySQL", "Firebase"],
  "Tools & Technologies": [
    "Git", "GitHub", "VS Code", "Anaconda", "Tableau", "Power BI", "Video Editing"
  ],
  "Concepts": [
    "Data Structures", "DBMS", "Object-Oriented Programming (OOP)", "Networking", "Data Analysis"
  ],
};

const EXPERIENCE = [
  {
    role: "Python Programming Intern",
    org: "InternPe",
    location: "Remote",
    period: "June 2025 – July 2025",
    bullets: [
      "Completed a 6-week internship focused on Python programming.",
      "Recognized for being a sincere and dedicated intern with a professional attitude and excellent job knowledge.",
    ],
  },
  {
    role: "Fullstack Web Development Intern",
    org: "Unified Mentor Pvt Ltd.",
    location: "Remote",
    period: "March 2025 – April 2025",
    bullets: [
      "Successfully completed a one-month internship as a Fullstack Web Development Intern.",
      "Commended for being consistent and hard-working throughout the program.",
    ],
  },
];

const PROJECTS = [
  {
    title: "Personal Expense & Spending Analysis Dashboard",
    stack: ["SQL", "Microsoft Excel", "Data Analysis"],
    summary: "Analyzed one month of transaction-level personal expense data using SQL for aggregation and validation. Built a static Excel dashboard with KPI cards and charts to visualize daily spending trends, category-wise distribution, and weekday vs weekend spending behavior.",
    ctas: [
      { label: "GitHub", href: "https://github.com/suman0936c/EXPENSE_ANALYSIS.git" },
    ],
    icon: <BarChart3 className="w-5 h-5" />,
    featured: true,
  },
  {
    title: "Student Performance Predictor",
    stack: ["Python", "Scikit-learn", "Pandas", "Machine Learning"],
    summary: "Developed a machine learning model using Python and Scikit-learn to predict student academic performance based on study habits, past grades, and demographic data.",
    ctas: [
      { label: "GitHub", href: "https://github.com/suman0936c/student-performance-predictor.git" },
      { label: "Live Demo", href: "https://studentperformance-predictor.streamlit.app" },
    ],
    icon: <TrendingUp className="w-5 h-5" />,
    featured: true,
  },
  {
    title: "Market Basket Analysis",
    stack: ["Python", "Pandas", "Excel", "Data Analysis"],
    summary: "Performed market basket analysis on a retail dataset to identify frequently co-purchased items. Used Apriori algorithm to generate association rules for marketing strategies.",
    ctas: [
      { label: "GitHub", href: "#" },
    ],
    icon: <BarChart3 className="w-5 h-5" />,
    featured: true,
  },
  {
    title: "University Library Website",
    stack: ["React.js", "Tailwind CSS", "Vite"],
    summary: "Developed a modern, responsive website for the Pandit Deendayal Upadhyaya Central Library from scratch, focusing on a clean UI and user experience.",
    ctas: [
      { label: "GitHub", href: "#" },
      { label: "Live Demo", href: "#" },
    ],
    icon: <BookOpen className="w-5 h-5" />,
  },
  {
    title: "Smart India Hackathon (SIH) 2025",
    stack: ["Data Analysis", "Teamwork", "Problem-Solving"],
    summary: "Participated as part of team 'ByteCode Learners' (Project #25068) to build a solution for real-time groundwater resource evaluation using DWLR data.",
    ctas: [],
    icon: <Compass className="w-5 h-5" />,
  },
  {
    title: "CSE Department Documentary",
    stack: ["Storytelling", "Video Editing", "Directing"],
    summary: "Created a 3-4 minute documentary for the Computer Science and Engineering department, showcasing student life, projects, and faculty.",
    ctas: [],
    icon: <Play className="w-5 h-5" />,
  },
];

const CERTIFICATES = [
  {
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte / Forage",
    image: "/certificate/delloit.png", // Path from your old site
    icon: <ShieldCheck />,
  },
  {
    title: "Quantitative Research Job Simulation",
    issuer: "JPMorgan Chase & Co. / Forage",
    image: "/certificate/jpmorgan.png",
    icon: <Database />,
  },
  {
    title: "Python Programming Internship",
    issuer: "InternPe",
    image: "/certificate/internpe.jpg",
    icon: <Code />,
  },
  {
    title: "Fullstack Web Development Internship",
    issuer: "Unified Mentor Pvt Ltd.",
    image: "/certificate/unified mentors.jpg",
    icon: <Globe2 />,
  }
];

const LEADERSHIP = [
  "Team member of 'ByteCode Learners' for Smart India Hackathon 2025.",
  "Creator and Director of the CSE Departmental Documentary.",
  "Actively building projects and skills to pursue a career in Data Analysis.",
  "Enjoys hobbies like chess, online games, anime, and web series.",
];

const ACHIEVEMENTS = [
  "Smart India Hackathon (SIH) 2025 Participant.",
  "Data Analytics Job Simulation (Deloitte / Forage).",
  "Quantitative Research Job Simulation (JPMorgan / Forage).",
  "Python Programming Internship (InternPe).",
  "Fullstack Web Development Internship (Unified Mentor).",
];

// ==========================
// COMPONENTS
// ==========================

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime = null;
          const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOutQuart * end));
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [end, duration, hasAnimated]);

  return <span ref={ref}>{count}{suffix}</span>;
};

// Code Rain / Matrix Effect
const CodeRain = () => {
  const codeLines = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 3 + 2,
    chars: ['0', '1', 'def', 'import', 'SELECT', 'FROM', 'WHERE', 'print', 'return', 'async', 'await', 'const', 'let', 'var', 'function', 'class', 'if', 'else', 'for', 'while', 'try', 'catch', '{}', '[]', '()', '=>', '==', '!=', '&&', '||'],
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 opacity-20">
      {codeLines.map((line) => (
        <div
          key={line.id}
          className="absolute text-cyan-400 font-mono text-xs md:text-sm"
          style={{
            left: `${line.left}%`,
            top: '-10%',
            animation: `codeFall ${line.duration}s linear infinite`,
            animationDelay: `${line.delay}s`,
            color: Math.random() > 0.5 ? '#00ff88' : '#00d4ff',
          }}
        >
          {line.chars[Math.floor(Math.random() * line.chars.length)]}
        </div>
      ))}
    </div>
  );
};

// Terminal Grid Background
const TerminalGrid = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 opacity-10">
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(cyan 1px, transparent 1px),
          linear-gradient(90deg, cyan 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
      }}></div>
    </div>
  );
};

// Data Stream Effect
const DataStream = () => {
  const streams = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 3,
    duration: Math.random() * 2 + 1.5,
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 opacity-15">
      {streams.map((stream) => (
        <div
          key={stream.id}
          className="absolute w-0.5 bg-gradient-to-b from-transparent via-cyan-400 to-transparent"
          style={{
            left: `${stream.left}%`,
            top: '-10%',
            height: '200px',
            animation: `dataStream ${stream.duration}s linear infinite`,
            animationDelay: `${stream.delay}s`,
            boxShadow: '0 0 10px #00d4ff, 0 0 20px #00d4ff',
          }}
        />
      ))}
    </div>
  );
};

const ScrollAnimatedDiv = ({ children, className = "", animation = "fade-up", threshold = 0.2, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay * 100);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, delay]);

  const animationStyles = {
    "fade-up": isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95",
    "fade-in": isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95",
    "slide-left": isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16",
    "slide-right": isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16",
    "zoom-in": isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90",
  };

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-700 ease-out ${animationStyles[animation]} ${className}`}
    >
      {children}
    </div>
  );
};

const Badge = ({ children, variant = "default", className = "", onClick }) => {
  const baseClasses = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold font-mono transition-colors xs:text-[0.7rem]";
  const variants = {
    default: "bg-gradient-to-r from-cyan-600 to-green-500 text-black hover:from-cyan-500 hover:to-green-400 shadow-lg shadow-cyan-500/50",
    outline: "border border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-400",
    secondary: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/30",
    success: "bg-green-500/20 text-green-400 border border-green-500/30",
  };
 
  return (
    <span 
      className={`${baseClasses} ${variants[variant]} ${onClick ? 'cursor-pointer' : ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </span>
  );
};

const Button = ({ children, variant = "default", size = "default", className = "", onClick, dark = true, ...props }) => {
  const baseClasses = "relative inline-flex items-center justify-center rounded-lg font-medium font-mono transition-all duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 hover:scale-105 active:scale-95 min-w-[44px] min-h-[44px] overflow-hidden group";
  const variants = dark ? {
    default: "bg-gradient-to-r from-cyan-600 to-green-500 text-black hover:from-cyan-500 hover:to-green-400 shadow-lg hover:shadow-cyan-500/50 border border-cyan-400/50",
    outline: "border-2 border-cyan-500/50 bg-transparent hover:bg-cyan-500/10 hover:border-cyan-400 text-cyan-300 hover:text-cyan-200 hover:shadow-lg hover:shadow-cyan-500/30",
    ghost: "hover:bg-cyan-500/10 text-cyan-300",
    success: "bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-500 hover:to-emerald-500 shadow-lg hover:shadow-green-500/50",
  } : {
    default: "bg-gradient-to-r from-cyan-600 to-green-500 text-white hover:from-cyan-500 hover:to-green-400 shadow-lg hover:shadow-cyan-500/50 border border-cyan-400/50",
    outline: "border-2 border-cyan-600/50 bg-transparent hover:bg-cyan-50 hover:border-cyan-500 text-cyan-700 hover:text-cyan-600 hover:shadow-lg hover:shadow-cyan-500/30",
    ghost: "hover:bg-cyan-50 text-cyan-700",
    success: "bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-500 hover:to-emerald-500 shadow-lg hover:shadow-green-500/50",
  };
  const sizes = {
    default: "h-10 px-4 py-2 xs:h-9 xs:px-3 xs:text-sm",
    sm: "h-9 px-3 text-xs xs:text-[0.7rem]",
    lg: "h-12 px-6 xs:h-10 xs:px-4 xs:text-sm",
    icon: "h-10 w-10 xs:h-9 xs:w-9",
  };
 
  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {variant === "default" && (
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
      )}
    </button>
  );
};

const Card = ({ children, className = "", hover = false }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative rounded-lg border border-cyan-500/20 bg-black/40 shadow-lg shadow-cyan-500/10 transition-all duration-300 overflow-hidden ${hover ? 'hover:shadow-2xl hover:shadow-cyan-500/20 hover:border-cyan-400/40' : ''} ${className}`}
      style={{
        transform: hover && mousePosition.x !== 0
          ? `perspective(1000px) rotateY(${(mousePosition.x - 50) / 20}deg) rotateX(${-(mousePosition.y - 50) / 20}deg) scale(1.02)`
          : 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)',
      }}
    >
      {hover && (
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 255, 136, 0.1), transparent 70%)`,
          }}
        />
      )}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(0,255,136,0.03)_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

const CardHeader = ({ children, className = "" }) => (
  <div className={`flex flex-col space-y-1.5 p-6 xs:p-4 ${className}`}>
    {children}
  </div>
);

const CardTitle = ({ children, className = "" }) => (
  <h3 className={`text-2xl xs:text-xl font-semibold leading-none tracking-tight ${className}`}>
    {children}
  </h3>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`p-6 pt-0 xs:p-4 xs:pt-0 ${className}`}>
    {children}
  </div>
);

const Input = ({ className = "", ...props }) => (
  <input
    className={`flex h-10 w-full rounded-md border border-cyan-500/30 bg-black/40 px-3 py-2 text-sm xs:text-xs placeholder:text-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-400 transition-all text-cyan-200 font-mono min-h-[44px] ${className}`}
    {...props}
  />
);

const TextArea = ({ className = "", ...props }) => (
  <textarea
    className={`flex min-h-[80px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm xs:text-xs placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-400 dark:focus:ring-indigo-400 ${className}`}
    {...props}
  />
);

const SectionTitle = ({ icon, title, kicker }) => (
  <ScrollAnimatedDiv animation="fade-up" threshold={0.3}>
    <div className="mb-6 xs:mb-4">
      {kicker && (
        <p className="text-sm xs:text-xs uppercase tracking-widest text-cyan-400/60 mb-2 font-semibold font-mono">
          {kicker}
        </p>
      )}
      <div className="flex items-center gap-3 group">
        <div className="p-2 bg-gradient-to-br from-cyan-500/20 to-green-500/20 border border-cyan-500/30 rounded-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:border-cyan-400/50">
          {React.cloneElement(icon, { className: "w-6 h-6 xs:w-5 xs:h-5 text-cyan-400" })}
        </div>
        <h2 className="text-3xl xs:text-2xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 via-green-400 to-cyan-300 bg-clip-text text-transparent font-mono drop-shadow-[0_0_8px_rgba(0,255,136,0.3)]">
          {title}
        </h2>
      </div>
    </div>
  </ScrollAnimatedDiv>
);

// Tech Background Effects
const TechBackground = () => (
  <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
    {/* Glitch scanlines */}
    <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(transparent_50%,rgba(0,255,136,0.03)_50%)] bg-[length:100%_4px]"></div>
    
    {/* Corner tech accents */}
    <div className="absolute top-0 left-0 w-64 h-64 border-t-2 border-l-2 border-cyan-400/20"></div>
    <div className="absolute top-0 right-0 w-64 h-64 border-t-2 border-r-2 border-cyan-400/20"></div>
    <div className="absolute bottom-0 left-0 w-64 h-64 border-b-2 border-l-2 border-cyan-400/20"></div>
    <div className="absolute bottom-0 right-0 w-64 h-64 border-b-2 border-r-2 border-cyan-400/20"></div>
    
    {/* Subtle glow spots */}
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
  </div>
);

const Glass = ({ children, className = "", dark = true }) => (
  <div className={`relative rounded-lg backdrop-blur-xl shadow-xl p-6 xs:p-4 transition-all duration-300 ${dark ? 'border border-cyan-500/20 bg-black/60 hover:bg-black/80 hover:border-cyan-400/40 hover:shadow-cyan-500/20 shadow-cyan-500/10' : 'border border-gray-200 bg-white/80 hover:bg-white hover:border-gray-300 hover:shadow-lg shadow-gray-200/50'} ${className}`}>
    {dark && (
      <>
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan-500/5 to-transparent pointer-events-none"></div>
        <div className="absolute inset-0 rounded-lg bg-[linear-gradient(90deg,transparent_0%,rgba(0,255,136,0.03)_50%,transparent_100%)] opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
      </>
    )}
    <div className="relative z-10">{children}</div>
  </div>
);

// ==========================
// MAIN APP
// ==========================
export default function Portfolio() {
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return true;
  });
  const [activeSection, setActiveSection] = useState('hero');
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const sectionRefs = useRef({});
 
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.classList.toggle('dark', dark);
      localStorage.setItem('theme', dark ? 'dark' : 'light');
    }
  }, [dark]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const allTags = useMemo(() => 
    ['SQL', 'Power BI', 'Tableau', 'Data Analysis', 'Teamwork', 'Excel', 'Python'], 
  );

  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState(null);

  const filteredProjects = PROJECTS.filter((p) => {
    const matchesQuery = [p.title, p.summary, ...p.stack].join(" ").toLowerCase().includes(query.toLowerCase());
    const matchesTag = activeTag ? p.stack.some(tag => tag.toLowerCase().includes(activeTag.toLowerCase())) : true;
    return matchesQuery && matchesTag;
  });

  const scrollToSection = (sectionId) => {
    const section = sectionRefs.current[sectionId];
    if (section) {
      const y = section.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setShowMobileMenu(false);
  };
 
  // ============================================================
  // FIX 1: Added 'Skills' and 'Experience' to navItems
  // ============================================================
  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className={`min-h-screen relative overflow-x-hidden transition-colors duration-300 ${dark ? 'bg-[#0a0a0a] text-cyan-50' : 'bg-gray-50 text-gray-900'}`} data-theme={dark ? 'dark' : 'light'}>
      {dark && (
        <>
          <TechBackground />
          <TerminalGrid />
          <CodeRain />
          <DataStream />
        </>
      )}
     
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 px-2 backdrop-blur-xl shadow-lg transition-colors duration-300 ${dark ? 'bg-black/80 border-b border-cyan-500/20' : 'bg-white/90 border-b border-gray-200'}`}>
        <div className="mx-auto max-w-6xl flex items-center justify-between p-2 xs:p-3">
            <div className="flex items-center gap-2 xs:gap-3 group cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="p-1.5 xs:p-2 bg-gradient-to-r from-cyan-500 to-green-400 rounded-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg shadow-cyan-500/50">
              <TerminalSquare className="h-4 w-4 xs:h-5 xs:w-5 text-black font-bold" />
            </div>
            <span className={`font-bold text-base xs:text-lg font-mono transition-all ${dark ? 'text-cyan-400 group-hover:text-green-400' : 'text-gray-800 group-hover:text-cyan-600'}`}>suman.dev</span>
          </div>
         
          <nav className="hidden md:flex items-center gap-4 text-sm font-mono">
            {navItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)} 
                className={`relative transition-all duration-300 ${dark 
                  ? activeSection === item.id ? 'opacity-100 font-bold text-cyan-400' : 'opacity-70 hover:opacity-100 hover:text-green-400 text-cyan-300'
                  : activeSection === item.id ? 'opacity-100 font-bold text-cyan-600' : 'opacity-70 hover:opacity-100 hover:text-cyan-500 text-gray-700'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full ${dark ? 'bg-gradient-to-r from-cyan-400 to-green-400 shadow-lg shadow-cyan-400/50' : 'bg-gradient-to-r from-cyan-600 to-cyan-500 shadow-lg shadow-cyan-500/30'}`}></span>
                )}
              </button>
            ))}
          </nav>
         
          <div className="flex items-center gap-1 xs:gap-2">
         
            <a href={INFO.links.linkedin} target="_blank" rel="noreferrer">
              <Button variant="outline" size="icon" className="rounded-full">
                <Linkedin className="h-4 w-4" />
              </Button>
            </a>
            <a href={INFO.links.github} target="_blank" rel="noreferrer">
              <Button variant="outline" size="icon" className="rounded-full">
                <Github className="h-4 w-4" />
              </Button>
            </a>
            <a href={INFO.links.instagram} target="_blank" rel="noreferrer" className="hidden xs:block">
              <Button variant="outline" size="icon" className="rounded-full">
                <Instagram className="h-4 w-4" />
              </Button>
            </a>
           
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full" 
              onClick={() => setDark(!dark)}
              aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
              dark={dark}
            >
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
           
            <button className="md:hidden" onClick={() => setShowMobileMenu(!showMobileMenu)}>
              <Menu className="h-5 w-5 xs:h-6 xs:w-6" />
            </button>
          </div>
        </div>
       
        {showMobileMenu && (
          <nav className="md:hidden flex flex-col items-center pb-3 bg-black/90 backdrop-blur-xl border-t border-cyan-500/20">
            {navItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)} 
                className={`py-1.5 w-full text-center text-sm xs:text-base font-mono transition-all ${activeSection === item.id ? 'opacity-100 font-bold text-cyan-400' : 'opacity-70 hover:opacity-100 hover:text-green-400 text-cyan-300'}`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </header>

      <main className="mx-auto max-w-6xl px-2 xs:px-4 md:px-6 relative z-10 pt-20">
        {/* Hero */}
        <section
          id="hero"
          ref={(el) => (sectionRefs.current.hero = el)}
          className="pt-8 xs:pt-10 md:pt-16 pb-6 xs:pb-8 relative"
        >
          <div className="grid md:grid-cols-2 gap-8 xs:gap-10 md:gap-16 items-center">
            {/* Left Column */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 xs:gap-6">
              <ScrollAnimatedDiv animation="zoom-in" threshold={0.3}>
                <div className="relative group">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-green-400 to-cyan-400 opacity-60 blur-xl group-hover:opacity-100 transition-opacity duration-300 animate-pulse shadow-lg shadow-cyan-500/50"></div>
                  <div className="absolute inset-0 rounded-full border-2 border-cyan-400/50 animate-ping"></div>
                  <img
                    src={INFO.profileImage}
                    alt="Suman Mohapatra"
                    className="relative w-20 h-20 xs:w-24 xs:h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full object-cover shadow-2xl border-4 border-cyan-500/50 max-w-full transform transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </ScrollAnimatedDiv>

              <div className="w-full flex flex-col items-center md:items-start">
                <ScrollAnimatedDiv animation="fade-up" threshold={0.3} delay={0.1}>
                  <h1 className="text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-3 font-mono">
                    <span className="bg-gradient-to-r from-cyan-400 via-green-400 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(0,255,136,0.5)]">
                      {INFO.name}
                    </span>
                  </h1>
                </ScrollAnimatedDiv>

                <ScrollAnimatedDiv animation="fade-up" threshold={0.3} delay={0.2}>
                  <p className="text-base xs:text-lg md:text-xl text-cyan-300/80 mb-4 xs:mb-6 max-w-xl font-medium font-mono">
                    {INFO.headline}
                  </p>
                </ScrollAnimatedDiv>
              </div>

              <ScrollAnimatedDiv animation="fade-up" threshold={0.3} delay={0.3}>
                <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 xs:gap-4 mb-4 xs:mb-6">
                  <a href={INFO.links.linkedin} target="_blank" rel="noreferrer" className="group">
                    <Button
                     variant="default" 
                      size="sm"
                      className="rounded-full px-4 xs:px-6 shadow-lg hover:shadow-xl"
                    >
                      Let's Connect <Linkedin className="ml-2 h-4 w-4 xs:h-5 xs:w-5 group-hover:rotate-12 transition-transform" />
                    </Button>
                  </a>
                  <a href="/resume.pdf" target="_blank" rel="noreferrer" className="group">
                    <Button variant="outline" size="sm" className="rounded-full px-4 xs:px-6 group-hover:bg-cyan-500/10">
                      <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" /> Resume
                    </Button>
                  </a>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2 text-cyan-400/70 text-sm xs:text-base font-mono">
                  <MapPin className="h-4 w-4" /> {INFO.location}
                </div>
              </ScrollAnimatedDiv>

              <ScrollAnimatedDiv animation="fade-up" threshold={0.3} delay={0.4}>
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  {["Data Analysis", "React", "Tailwind CSS", "Python", "SQL"].map((tech, idx) => (
                    <Badge 
                      key={tech}
                      variant="outline" 
                      className="transform transition-all duration-300 hover:scale-110 hover:bg-cyan-500/10 hover:border-cyan-400 text-cyan-300 border-cyan-500/30 font-mono cursor-default"
                      style={{ animationDelay: `${idx * 100}ms` }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </ScrollAnimatedDiv>
            </div>

            {/* Right Column - Stats */}
            <ScrollAnimatedDiv animation="fade-up" threshold={0.3} delay={0.3}>
              <Glass className="w-full shadow-xl rounded-2xl" dark={dark}>
                <h3 className="text-xl xs:text-lg font-bold mb-6 xs:mb-8 flex items-center gap-2 justify-center md:justify-start font-mono text-cyan-300">
                  <Trophy className="h-5 w-5 text-green-400" /> Quick Stats
                </h3>

                <div className="grid grid-cols-2 gap-4 xs:gap-6 md:gap-8">
                  <ScrollAnimatedDiv animation="fade-up" threshold={0.3} delay={0.4}>
                    <div className="text-center">
                      <div className="flex items-center justify-center w-12 h-12 xs:w-14 xs:h-14 bg-cyan-500/10 border border-cyan-500/30 rounded-xl mx-auto mb-3">
                        <Rocket className="w-5 h-5 xs:w-6 xs:h-6 text-cyan-400" />
                      </div>
                      <div className="text-xl xs:text-2xl font-bold text-cyan-400 font-mono">
                        <AnimatedCounter end={6} suffix="+" />
                      </div>
                      <div className="text-xs xs:text-sm text-cyan-300/70 font-mono">Projects</div>
                    </div>
                  </ScrollAnimatedDiv>

                  <ScrollAnimatedDiv animation="fade-up" threshold={0.3} delay={0.5}>
                    <div className="text-center">
                      <div className="flex items-center justify-center w-12 h-12 xs:w-14 xs:h-14 bg-cyan-500/10 border border-cyan-500/30 rounded-xl mx-auto mb-3">
                        <Briefcase className="w-5 h-5 xs:w-6 xs:h-6 text-green-400" />
                      </div>
                      <div className="text-xl xs:text-2xl font-bold text-green-400 font-mono">
                        <AnimatedCounter end={2} />
                      </div>
                      <div className="text-xs xs:text-sm text-cyan-300/70 font-mono">Internships</div>
                    </div>
                  </ScrollAnimatedDiv>

                  <ScrollAnimatedDiv animation="fade-up" threshold={0.3} delay={0.6}>
                    <div className="text-center">
                      <div className="flex items-center justify-center w-12 h-12 xs:w-14 xs:h-14 bg-cyan-500/10 border border-cyan-500/30 rounded-xl mx-auto mb-3">
                        <Award className="w-5 h-5 xs:w-6 xs:h-6 text-cyan-400" />
                      </div>
                      <div className="text-xl xs:text-2xl font-bold text-cyan-400 font-mono">
                        <AnimatedCounter end={4} />
                      </div>
                      <div className="text-xs xs:text-sm text-cyan-300/70 font-mono">Certificates</div>
                    </div>
                  </ScrollAnimatedDiv>

                  <ScrollAnimatedDiv animation="fade-up" threshold={0.3} delay={0.7}>
                    <div className="text-center">
                      <div className="flex items-center justify-center w-12 h-12 xs:w-14 xs:h-14 bg-cyan-500/10 border border-cyan-500/30 rounded-xl mx-auto mb-3">
                        <Target className="w-5 h-5 xs:w-6 xs:h-6 text-green-400" />
                      </div>
                      <div className="text-xl xs:text-2xl font-bold text-green-400 font-mono">
                        <AnimatedCounter end={1} />
                      </div>
                      <div className="text-xs xs:text-sm text-cyan-300/70 font-mono">Hackathon</div>
                    </div>
                  </ScrollAnimatedDiv>
                </div>

                <ScrollAnimatedDiv animation="fade-up" threshold={0.3} delay={0.8}>
                  <div className="mt-6 xs:mt-8 p-3 xs:p-4 bg-gradient-to-r from-cyan-500/10 via-green-500/10 to-cyan-500/10 rounded-lg text-center border border-cyan-500/30 relative overflow-hidden group font-mono">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    <p className="text-xs xs:text-sm font-medium relative z-10 flex items-center justify-center gap-2 text-cyan-300">
                      <Rocket className="w-4 h-4 animate-bounce text-green-400" />
                      <span className="font-mono">Available for Data Analyst Internships & Freelance Roles</span>
                    </p>
                  </div>
                </ScrollAnimatedDiv>
              </Glass>
            </ScrollAnimatedDiv>
          </div>
        </section>

        {/* About Section */}
        <section id="about" ref={(el) => (sectionRefs.current.about = el)} className="py-8 xs:py-12 md:py-16">
          <SectionTitle 
            icon={<Lightbulb />} 
            title="About Me" 
            kicker="Who I Am" 
          />
          <ScrollAnimatedDiv animation="fade-up" threshold={0.3}>
            <Glass>
              <div className="relative">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-green-400 to-cyan-400 rounded-full shadow-lg shadow-cyan-500/50"></div>
                <p className="text-base xs:text-lg leading-relaxed text-cyan-100/90 pl-6 font-mono">
                  {INFO.summary}
                </p>
              </div>
            </Glass>
          </ScrollAnimatedDiv>
        </section>

        {/* Education */}
        <section id="education" ref={(el) => (sectionRefs.current.education = el)} className="py-8 xs:py-12 md:py-16">
          <SectionTitle 
            icon={<GraduationCap />} 
            title="Education" 
            kicker="Academic Background" 
          />
          <div className="space-y-6 xs:space-y-8">
            {EDUCATION.map((edu, i) => (
              <ScrollAnimatedDiv key={i} animation="fade-up" threshold={0.3} delay={i * 0.1}>
                <Glass>
                  <div className="flex flex-col gap-4 xs:gap-6">
                    <ScrollAnimatedDiv animation="slide-left" threshold={0.3} delay={0.1}>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
                          <Calendar className="w-5 h-5 text-cyan-400" />
                        </div>
                        <Badge variant="outline">{edu.period}</Badge>
                      </div>
                      <h3 className="text-xl xs:text-lg font-bold mb-2 text-cyan-200 font-mono">{edu.degree}</h3>
                      <p className="text-green-400 font-semibold mb-1 text-sm xs:text-base font-mono">{edu.institution}</p>
                      <p className="text-xs xs:text-sm text-cyan-300/70 flex items-center gap-1 font-mono">
                        <MapPin className="w-3 h-3"/> {edu.location}
                      </p>
                    </ScrollAnimatedDiv>
                    <ScrollAnimatedDiv animation="slide-right" threshold={0.3} delay={0.2}>
                      <p className="text-cyan-100/80 text-sm xs:text-base font-mono">
                        {edu.description}
                      </p>
                    </ScrollAnimatedDiv>
                  </div>
                </Glass>
              </ScrollAnimatedDiv>
            ))}
          </div>
        </section>

        {/* ============================================================
        FIX 2: ADDED THE MISSING SKILLS SECTION
        ============================================================
        */}
        <section id="skills" ref={(el) => (sectionRefs.current.skills = el)} className="py-8 xs:py-12 md:py-16">
          <SectionTitle 
            icon={<Cpu />} 
            title="Technical Skills" 
            kicker="My Toolkit" 
          />
          <div className="space-y-6 xs:space-y-8">
            {Object.entries(SKILLS).map(([category, skills], i) => (
              <ScrollAnimatedDiv key={category} animation="fade-up" threshold={0.2} delay={i * 0.1}>
                <Glass>
                  <h3 className="text-lg xs:text-xl font-bold mb-4 flex items-center gap-2 text-cyan-300 font-mono">
                    <div className="w-1 h-6 bg-gradient-to-b from-cyan-500 to-green-400 rounded-full shadow-lg shadow-cyan-500/50"></div>
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, idx) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="text-[0.7rem] xs:text-xs transform transition-all duration-300 hover:scale-110 hover:shadow-lg"
                        style={{ animationDelay: `${idx * 50}ms` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Glass>
              </ScrollAnimatedDiv>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" ref={(el) => (sectionRefs.current.experience = el)} className="py-8 xs:py-12 md:py-16">
          <SectionTitle 
            icon={<TerminalSquare />} 
            title="Experience" 
            kicker="Professional Journey" 
          />
         
          <div className="space-y-6 xs:space-y-8">
            {EXPERIENCE.map((exp, i) => (
              <ScrollAnimatedDiv key={i} animation="fade-up" threshold={0.2} delay={i * 0.2}>
                <Glass>
                  <div className="flex flex-col gap-4 xs:gap-6">
                    <ScrollAnimatedDiv animation="slide-left" threshold={0.2} delay={0.1}>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
                          <Briefcase className="w-5 h-5 text-cyan-400" />
                        </div>
                        <Badge variant="outline">{exp.period}</Badge>
                      </div>
                      <h3 className="text-xl xs:text-lg font-bold mb-2 text-cyan-200 font-mono">{exp.role}</h3>
                      <p className="text-green-400 font-semibold mb-1 text-sm xs:text-base font-mono">{exp.org}</p>
                      <p className="text-xs xs:text-sm text-cyan-300/70 flex items-center gap-1 font-mono">
                        <MapPin className="w-3 h-3"/> {exp.location}
                      </p>
                    </ScrollAnimatedDiv>
                   
                    <ScrollAnimatedDiv animation="slide-right" threshold={0.2} delay={0.2}>
                      <ul className="space-y-3">
                        {exp.bullets.map((bullet, j) => (
                          <li key={j} className="flex gap-3 text-cyan-100/80 text-sm xs:text-base font-mono">
                            <ChevronRight className="h-4 w-4 mt-1 text-green-400 flex-shrink-0"/> 
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                       
                      {exp.links && (
                        <div className="mt-4 xs:mt-6 flex flex-wrap gap-3">
                          {exp.links.map((link, k) => (
                            <a key={k} href={link.href} target="_blank" rel="noreferrer">
                              <Button variant="outline" size="sm" className="rounded-full text-xs xs:text-sm">
                                <ExternalLink className="mr-1.5 h-3 w-3 xs:h-3.5 xs:w-3.5"/>
                                {link.label}
                              </Button>
                            </a>
                          ))}
                        </div>
                      )}
                    </ScrollAnimatedDiv>
                  </div>
                </Glass>
              </ScrollAnimatedDiv>
            ))}
          </div>
        </section>
       
        {/* All Projects */}
        <section id="projects" ref={(el) => (sectionRefs.current.projects = el)} className="py-8 xs:py-12 md:py-16">
          <SectionTitle 
            icon={<Rocket />} 
            title="All Projects" 
            kicker="Complete Portfolio" 
          />

          <ScrollAnimatedDiv animation="fade-up" threshold={0.3}>
            <div className="mb-6 xs:mb-8 flex flex-col gap-4 md:items-center">
              <div className="flex-1">
                <Input 
                  value={query} 
                  onChange={(e) => setQuery(e.target.value)} 
                  placeholder="🔍 Search projects..." 
                  className="rounded-full h-10 xs:h-12 px-4 xs:px-6" 
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge 
                  variant={activeTag === null ? "default" : "outline"} 
                  className="cursor-pointer px-3 xs:px-4 py-1.5 xs:py-2" 
                  onClick={() => setActiveTag(null)}
                >
                  All Projects
                </Badge>
                {allTags.map((tag) => (
                  <Badge 
                    key={tag} 
                    variant={activeTag === tag ? "default" : "outline"} 
                    className="cursor-pointer px-2 xs:px-3 py-1 xs:py-2" 
                    onClick={() => setActiveTag(tag)}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </ScrollAnimatedDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6">
            {filteredProjects.map((project, i) => (
              <ScrollAnimatedDiv key={i} animation="fade-up" threshold={0.2} delay={(i % 6) * 0.1}>
                <Card hover className="h-full flex flex-col group">
                  <div className="p-4 xs:p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-gradient-to-br from-cyan-500/20 to-green-500/20 border border-cyan-500/30 rounded-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                        {React.cloneElement(project.icon, { className: "w-5 h-5 text-cyan-400" })}
                      </div>
                      <h3 className="font-bold text-base xs:text-lg leading-tight group-hover:text-green-400 transition-colors text-cyan-200 font-mono">{project.title}</h3>
                    </div>
                   
                    <p className="text-cyan-100/70 mb-4 flex-1 leading-relaxed text-sm xs:text-base font-mono">
                      {project.summary}
                    </p>
                   
                    <div className="flex flex-wrap gap-2 mb-4 xs:mb-6">
                      {project.stack.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-[0.7rem] xs:text-xs">{tech}</Badge>
                      ))}
                    </div>
                   
                    <div className="flex gap-2 mt-auto">
                      {project.ctas.map((cta, j) => (
                        <a key={j} href={cta.href} target="_blank" rel="noreferrer" className="group/link">
                          <Button variant="outline" size="sm" className="rounded-full text-xs xs:text-sm group-hover/link:bg-cyan-500/10">
                            <ExternalLink className="mr-1 h-3 w-3 xs:h-3.5 xs:w-3.5 group-hover/link:rotate-45 transition-transform"/>
                            {cta.label}
                          </Button>
                        </a>
                      ))}
                    </div>
                  </div>
                </Card>
              </ScrollAnimatedDiv>
            ))}
          </div>
        </section>

        {/* Certificates Section */}
        <section id="certificates" ref={(el) => (sectionRefs.current.certificates = el)} className="py-8 xs:py-12 md:py-16">
          <SectionTitle 
            icon={<Award />} 
            title="Certificates" 
            kicker="My Credentials" 
          />
         
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6">
            {CERTIFICATES.map((cert, i) => (
              <ScrollAnimatedDiv key={i} animation="fade-up" threshold={0.2} delay={i * 0.1}>
                <Card hover className="h-full flex flex-col overflow-hidden group">
                  <div className="relative overflow-hidden">
                    <img 
                      src={cert.image} 
                      alt={cert.title} 
                      className="h-48 w-full object-cover cursor-pointer transform transition-transform duration-500 group-hover:scale-110" 
                      onClick={() => setModalImage(cert.image)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <Eye className="text-white w-6 h-6" />
                    </div>
                  </div>
                  <div className="p-4 xs:p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
                        {React.cloneElement(cert.icon, { className: "w-5 h-5 text-cyan-400" })}
                      </div>
                      <h3 className="font-bold text-base xs:text-lg leading-tight text-cyan-200 font-mono">{cert.title}</h3>
                    </div>
                    <p className="text-cyan-100/70 text-sm xs:text-base font-mono">
                      Issued by: {cert.issuer}
                    </p>
                  </div>
                </Card>
              </ScrollAnimatedDiv>
            ))}
          </div>
        </section>

        {/* Leadership & Achievements */}
        <section id="achievements" ref={(el) => (sectionRefs.current.achievements = el)} className="py-8 xs:py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xs:gap-8">
            <ScrollAnimatedDiv animation="fade-up" threshold={0.3}>
              <SectionTitle 
                icon={<Users />} 
                title="Leadership & Community" 
                kicker="Beyond Code" 
              />
              <Glass>
                <ul className="space-y-3 xs:space-y-4">
                  {LEADERSHIP.map((item, i) => (
                    <ScrollAnimatedDiv key={i} animation="fade-up" threshold={0.2} delay={i * 0.1}>
                      <li className="flex gap-3">
                        <div className="p-1 rounded-full mt-1">
                          <ChevronRight className="h-3 w-3 text-green-400"/> 
                        </div>
                        <span className="text-cyan-100/80 text-sm xs:text-base font-mono">{item}</span>
                      </li>
                    </ScrollAnimatedDiv>
                  ))}
                </ul>
              </Glass>
            </ScrollAnimatedDiv>
           
            <ScrollAnimatedDiv animation="fade-up" threshold={0.3}>
              <SectionTitle 
                icon={<Trophy />} 
                title="Achievements" 
              />
              <Glass>
                <ul className="space-y-3 xs:space-y-4">
                  {ACHIEVEMENTS.map((achievement, i) => (
                    <ScrollAnimatedDiv key={i} animation="fade-up" threshold={0.2} delay={i * 0.1}>
                      <li className="flex gap-3">
                        <div className="p-1 rounded-full mt-1">
                          <Star className="h-3 w-3 text-green-400"/> 
                        </div>
                        <span className="text-cyan-100/80 text-sm xs:text-base font-mono">{achievement}</span>
                      </li>
                    </ScrollAnimatedDiv>
                  ))}
                </ul>
              </Glass>
            </ScrollAnimatedDiv>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" ref={(el) => (sectionRefs.current.contact = el)} className="py-8 xs:py-12 md:py-16">
          <SectionTitle 
            icon={<Mail />} 
            title="Get In Touch" 
            kicker="Let's Connect" 
          />
         
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xs:gap-8 md:gap-12">
            <ScrollAnimatedDiv animation="fade-up" threshold={0.3}>
              <div className="space-y-4 xs:space-y-6">
                <Glass>
                  <h3 className="text-xl xs:text-lg font-bold mb-4 text-cyan-300 font-mono">Quick Contact</h3>
                  <div className="space-y-3 xs:space-y-4">
                    <ScrollAnimatedDiv animation="fade-up" threshold={0.2} delay={0.1}>
                      <a href={`mailto:${INFO.email}`} className="flex items-center gap-4 p-3 xs:p-4 rounded-lg hover:bg-cyan-500/10 transition-colors group border border-cyan-500/20">
                        <div className="p-2 xs:p-3 bg-cyan-500/10 border border-cyan-500/30 rounded-lg group-hover:scale-110 transition-transform">
                          <Mail className="h-4 w-4 xs:h-5 xs:w-5 text-cyan-400" />
                        </div>
                        <div>
                          <p className="font-semibold text-sm xs:text-base text-cyan-300 font-mono">Email</p>
                          <p className="text-cyan-100/70 text-xs xs:text-sm font-mono">{INFO.email}</p>
                        </div>
                      </a>
                    </ScrollAnimatedDiv>
                   
                    <ScrollAnimatedDiv animation="fade-up" threshold={0.2} delay={0.3}>
                      <div className="flex items-center gap-4 p-3 xs:p-4 rounded-lg border border-cyan-500/20">
                        <div className="p-2 xs:p-3 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
                          <MapPin className="h-4 w-4 xs:h-5 xs:w-5 text-cyan-400" />
                        </div>
                        <div>
                          <p className="font-semibold text-sm xs:text-base text-cyan-300 font-mono">Location</p>
                          <p className="text-cyan-100/70 text-xs xs:text-sm font-mono">{INFO.location}</p>
                        </div>
                      </div>
                    </ScrollAnimatedDiv>
                  </div>
                 
                  <ScrollAnimatedDiv animation="fade-up" threshold={0.2} delay={0.4}>
                    <div className="mt-4 xs:mt-6 pt-4 xs:pt-6 border-t border-cyan-500/20">
                      <p className="text-xs xs:text-sm text-cyan-300/70 mb-4 font-mono">Connect with me:</p>
                      <div className="flex gap-2 xs:gap-3">
                        <a href={INFO.links.linkedin} target="_blank" rel="noreferrer">
                          <Button variant="outline" size="icon" className="rounded-full">
                            <Linkedin className="h-4 w-4" />
                          </Button>
                        </a>
                        <a href={INFO.links.github} target="_blank" rel="noreferrer">
                          <Button variant="outline" size="icon" className="rounded-full">
                            <Github className="h-4 w-4" />
                          </Button>
                        </a>
                        <a href={INFO.links.instagram} target="_blank" rel="noreferrer">
                          <Button variant="outline" size="icon" className="rounded-full">
                            <Instagram className="h-4 w-4" />
                          </Button>
                        </a>
                        <a href={`mailto:${INFO.email}`}>
                          <Button variant="outline" size="icon" className="rounded-full">
                            <Mail className="h-4 w-4" />
                          </Button>
                        </a>
                      </div>
                    </div>
                  </ScrollAnimatedDiv>
                </Glass>
              </div>
            </ScrollAnimatedDiv>
           
            <ScrollAnimatedDiv animation="fade-up" threshold={0.3}>
              <Glass className="h-full">
                <Coffee className="w-10 h-10 xs:w-12 xs:h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl xs:text-2xl font-bold mb-4 text-center text-cyan-300 font-mono">Ready to collaborate?</h3>
                <p className="text-cyan-100/80 mb-4 xs:mb-6 max-w-2xl mx-auto text-sm xs:text-base text-center font-mono">
                  I'm currently open to internships, freelance projects, and exciting collaborations. 
                  Let's build something amazing together!
                </p>
                <div className="flex flex-wrap justify-center gap-2 xs:gap-4">
                  <Badge variant="success" className="px-3 xs:px-4 py-1.5 xs:py-2 text-xs xs:text-sm">✅ Available for Internships</Badge>
                  <Badge variant="success" className="px-3 xs:px-4 py-1.5 xs:py-2 text-xs xs:text-sm">✅ Freelance Projects</Badge>
                  <Badge variant="success" className="px-3 xs:px-4 py-1.5 xs:py-2 text-xs xs:text-sm">✅ Open Source Contributions</Badge>
                </div>
              </Glass>
            </ScrollAnimatedDiv>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 xs:py-12 border-t border-cyan-500/20">
        <ScrollAnimatedDiv animation="fade-up" threshold={0.3}>
          <div className="mx-auto max-w-6xl px-2 xs:px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 xs:gap-3">
                <div className="p-1.5 xs:p-2 bg-gradient-to-r from-cyan-500 to-green-400 rounded-lg shadow-lg shadow-cyan-500/50">
                  <Sparkles className="h-4 w-4 xs:h-5 xs:w-5 text-black" />
                </div>
                <div>
                  <p className="font-semibold text-sm xs:text-base text-cyan-300 font-mono">{INFO.name}</p>
                  <p className="text-xs xs:text-sm text-cyan-400/70 font-mono">Aspiring Data Analyst</p>
                </div>
              </div>
             
              <div className="flex items-center gap-4 xs:gap-6 text-xs xs:text-sm text-cyan-400/70 font-mono">
                <span>© {new Date().getFullYear()} Built with React & Tailwind CSS</span>
                <div className="flex items-center gap-1">
                  <span>Made with</span>
                  <Heart className="h-3 w-3 xs:h-4 xs:w-4 text-green-400 animate-pulse" />
                  <span>in India</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimatedDiv>
      </footer>
     
      {/* Certificate Modal */}
      {modalImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-300"
          onClick={() => setModalImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10 p-2 hover:bg-white/10 rounded-full"
            onClick={() => setModalImage(null)}
            aria-label="Close modal"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="relative max-w-[90vw] max-h-[90vh] transform transition-transform duration-300 scale-95 animate-in zoom-in">
            <img 
              src={modalImage} 
              alt="Certificate" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}
