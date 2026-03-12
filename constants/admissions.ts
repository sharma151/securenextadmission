type Course = {
  name: string;
  level: string;
  colleges?: string[];
  notes?: string;
};

type CourseGroup = {
  title: string;
  subtitle?: string;
  tags?: (
    | "High Demand"
    | "Core"
    | "Emerging"
    | "Early Entry"
    | "Skill-Based"
    | "Innovative"
    | "Research"
    | "Advanced Tech"
    | "IIM Focus"
    | "Integrated"
    | "Early Professional"
    | "Corporate"
    | "Skill-Oriented"
    | "No NEET Required"
    | "Clinical"
    | "Super-Specialty"
    | "High ROI"
    | "Strategic"
  )[];
  courses: Course[];
};

export const admissions: Record<string, CourseGroup[]> = {
  Engineering: [
    {
      title: "Diploma in Engineering",
      subtitle: "3-year practical and technical foundation",
      tags: ["Early Entry", "Skill-Based"],
      courses: [
        {
          name: "Mechanical Engineering",
          level: "Diploma",
          colleges: ["Govt. Polytechnics", "Private Technical Institutes"],
          notes:
            "Focuses on production, tool design, and automobile maintenance.",
        },
        {
          name: "Civil Engineering",
          level: "Diploma",
          colleges: ["State Govt. Polytechnics"],
          notes:
            "Training in site supervision, surveying, and basic structural drawing.",
        },
        {
          name: "Computer Engineering",
          level: "Diploma",
          colleges: ["Technical Education Boards"],
          notes:
            "Covers IT hardware, networking, and foundational web technologies.",
        },
        {
          name: "Electrical Engineering",
          level: "Diploma",
          colleges: ["Polytechnic Colleges"],
          notes:
            "Focus on industrial wiring, power distribution, and motor maintenance.",
        },
        {
          name: "Chemical Engineering",
          level: "Diploma",
          notes: "Covers industrial chemical processes and plant operations.",
        },
        {
          name: "Electronics & Communication Engineering",
          level: "Diploma",
          notes:
            "Practical skills in circuit repair, PCB design, and telecom basics.",
        },
        {
          name: "Automobile Engineering",
          level: "Diploma",
          notes:
            "Dedicated focus on vehicle mechanics and workshop management.",
        },
      ],
    },
    {
      title: "B.Tech and B.E. Branches",
      subtitle: "4-year degree with deep specialization",
      tags: ["High Demand", "Innovative"],
      courses: [
        {
          name: "Computer Science & Engineering (CSE)",
          level: "B.Tech",
          colleges: ["IITs", "NITs", "IIITs", "Top Private Universities"],
          notes:
            "Dominant branch covering AI, Software Development, and Cloud.",
        },
        {
          name: "Electronics & Communication Engineering (ECE)",
          level: "B.Tech",
          colleges: ["IITs", "NITs", "BITS"],
          notes: "Bridges hardware and software; key for 5G, IoT, and VLSI.",
        },
        {
          name: "Mechanical Engineering",
          level: "B.Tech",
          colleges: ["IITs", "NITs", "State Govt. Colleges"],
          notes:
            "Evolved branch focusing on Robotics, EV, and Smart Manufacturing.",
        },
        {
          name: "Information Technology (IT)",
          level: "B.Tech",
          notes:
            "Focuses on enterprise software, database systems, and networking.",
        },
        {
          name: "Electrical & Electronics Engineering (EEE)",
          level: "B.Tech",
          notes:
            "Focus on renewable energy systems, power electronics, and smart grids.",
        },
        {
          name: "Civil Engineering",
          level: "B.Tech",
          notes:
            "Focus on smart city infrastructure, sustainable design, and hydraulics.",
        },
        {
          name: "Aerospace Engineering",
          level: "B.Tech",
          notes: "Focus on aircraft design, propulsion, and space technology.",
        },
        {
          name: "Biotechnology / Biomedical Engineering",
          level: "B.Tech",
          notes:
            "Combines biology with engineering for medical device innovation.",
        },
        {
          name: "Chemical Engineering",
          level: "B.Tech",
          notes: "Focus on large-scale chemical production and petroleum tech.",
        },
        {
          name: "Mathematics and Computing",
          level: "B.Tech",
          notes: "High-demand branch blending pure math with computer science.",
        },
        {
          name: "AI and Machine Learning",
          level: "B.Tech",
          notes:
            "Dedicated branch for neural networks and intelligent systems.",
        },
      ],
    },
    {
      title: "M.Tech Specializations",
      subtitle: "2-year advanced research and niche expertise",
      tags: ["Research", "Advanced Tech"],
      courses: [
        {
          name: "M.Tech in AI / Data Science",
          level: "M.Tech",
          notes: "Deep research into machine learning algorithms and big data.",
        },
        {
          name: "M.Tech in VLSI & Embedded Systems",
          level: "M.Tech",
          notes:
            "Core specialization for the semiconductor and chip design industry.",
        },
        {
          name: "M.Tech in Cybersecurity",
          level: "M.Tech",
          notes:
            "Focus on advanced cryptography, digital forensics, and network defense.",
        },
        {
          name: "M.Tech in Robotics & Autonomous Systems",
          level: "M.Tech",
          notes: "Research into mechatronics and self-driving technologies.",
        },
        {
          name: "M.Tech in Structural Engineering",
          level: "M.Tech",
          notes:
            "Advanced civil engineering specialization for complex architectures.",
        },
        {
          name: "M.Tech in Quantum Technology",
          level: "M.Tech",
          notes: "Emerging field for next-gen computing and communication.",
        },
        {
          name: "M.Tech in Renewable & Sustainable Energy",
          level: "M.Tech",
          notes: "Focus on green hydrogen, solar thermal, and carbon capture.",
        },
      ],
    },
  ],
  Medical: [
    {
      title: "Diploma and Certificate Medical Programs",
      subtitle: "Fast-track clinical and technical roles",
      tags: ["Skill-Oriented", "No NEET Required"],
      courses: [
        {
          name: "D.Pharma (Diploma in Pharmacy)",
          level: "Diploma",
          notes:
            "2-year program for retail pharmacy and drug distribution roles.",
        },
        {
          name: "DMLT (Medical Lab Technology)",
          level: "Diploma",
          notes:
            "Trains technicians for diagnostic labs, blood banks, and pathology.",
        },
        {
          name: "DPT (Diploma in Physiotherapy)",
          level: "Diploma",
          notes:
            "Focused on physical rehabilitation and basic therapeutic exercises.",
        },
        {
          name: "Diploma in OTT (Operation Theatre Technology)",
          level: "Diploma",
          notes:
            "Critical support role for assisting surgeons and managing OT equipment.",
        },
        {
          name: "Diploma in Radiology & Imaging",
          level: "Diploma",
          notes: "Covers X-Ray, CT Scan, and MRI assistance.",
        },
      ],
    },
    {
      title: "Undergraduate Medical and Allied Health",
      subtitle: "Degree programs for professional practitioners",
      tags: ["High Demand", "Clinical"],
      courses: [
        {
          name: "MBBS",
          level: "UG",
          notes:
            "The premier medical degree for surgeons and physicians; requires NEET-UG.",
        },
        {
          name: "BDS (Dental)",
          level: "UG",
          notes: "Specialized degree for dental surgery and oral health.",
        },
        {
          name: "B.Pharma (Bachelor of Pharmacy)",
          level: "UG",
          notes:
            "4-year degree for roles in drug manufacturing, R&D, and clinical research.",
        },
        {
          name: "BAMS / BHMS / BUMS / BSMS",
          level: "UG",
          notes:
            "AYUSH systems (Ayurveda, Homeopathy, Unani, Siddha) with growing global demand.",
        },
        {
          name: "B.Sc Nursing",
          level: "UG",
          notes:
            "4-year professional program for registered nurses in hospitals and clinics.",
        },
        {
          name: "BPT (Bachelor of Physiotherapy)",
          level: "UG",
          notes:
            "4.5-year degree for specialized physical therapists and sports rehab.",
        },
        {
          name: "B.Sc Medical Imaging Technology",
          level: "UG",
          notes:
            "Advanced diagnostics including ultrasonography and nuclear medicine.",
        },
      ],
    },
    {
      title: "Postgraduate Medical Specializations",
      subtitle: "Advanced clinical and pharmaceutical expertise",
      tags: ["Research", "Super-Specialty"],
      courses: [
        {
          name: "MD / MS Specializations",
          level: "PG",
          notes:
            "Clinical mastery in Cardiology, Oncology, Pediatrics, or General Surgery.",
        },
        {
          name: "Pharm.D (Doctor of Pharmacy)",
          level: "Doctoral/PG",
          notes:
            "6-year integrated or 3-year post-B.Pharma focused on clinical pharmacy.",
        },
        {
          name: "MDS (Master of Dental Surgery)",
          level: "PG",
          notes: "Specializations like Orthodontics or Oral Surgery.",
        },
        {
          name: "M.Sc Nursing / MPT",
          level: "PG",
          notes:
            "Leadership and teaching roles in nursing or advanced physiotherapy.",
        },
      ],
    },
  ],
  Management: [
    {
      title: "Undergraduate Management Degrees",
      subtitle: "Foundational business and leadership programs",
      tags: ["Early Professional", "Corporate"],
      courses: [
        {
          name: "BBA (General / Hons)",
          level: "UG",
          notes: "Covers core business pillars: Marketing, Finance, and HR.",
        },
        {
          name: "BBA in Business Analytics",
          level: "UG",
          notes:
            "Data-driven management program focusing on business intelligence tools.",
        },
        {
          name: "BMS (Management Studies)",
          level: "UG",
          notes:
            "Analytical approach to management, popular in metro university circuits.",
        },
        {
          name: "BHM (Hotel Management)",
          level: "UG",
          notes:
            "Focuses on hospitality, tourism, and service-sector operations.",
        },
      ],
    },
    {
      title: "Postgraduate & Specialized MBA/PGDM",
      subtitle: "Leadership roles and executive expertise",
      tags: ["High ROI", "Strategic"],
      courses: [
        {
          name: "MBA in Marketing / Finance / HR",
          level: "PG",
          notes: "Traditional high-demand pillars for corporate management.",
        },
        {
          name: "MBA in Business Analytics / Data Science",
          level: "PG",
          notes:
            "Top-trending 2026 branch; focuses on AI, Big Data, and Python for business.",
        },
        {
          name: "PGDM (Post Graduate Diploma in Management)",
          level: "PG",
          notes:
            "Autonomous, industry-linked programs often offering higher practical exposure.",
        },
        {
          name: "MBA in Supply Chain & Logistics",
          level: "PG",
          notes: "Critical for the e-commerce and global manufacturing boom.",
        },
        {
          name: "MBA in Digital Business / E-Commerce",
          level: "PG",
          notes: "Prepares leaders for the platform-based digital economy.",
        },
      ],
    },
    {
      title: "Integrated Management Programs",
      subtitle: "5-year dual degree tracks after 12th",
      tags: ["IIM Focus", "Integrated"],
      courses: [
        {
          name: "IPM (Integrated Programme in Management)",
          level: "UG+PG",
          notes:
            "The flagship 5-year BBA+MBA program at top IIMs (Indore, Rohtak, etc.).",
        },
        {
          name: "B.Tech + MBA Integrated",
          level: "UG+PG",
          notes:
            "Ideal for technical students aiming for product management or CTO roles.",
        },
      ],
    },
  ],
};
