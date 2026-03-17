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
          // colleges: ["Govt. Polytechnics", "Private Technical Institutes"],
          notes:
            "Hands-on training in machine operations, manufacturing processes, and automotive repair for industrial roles.",
        },
        {
          name: "Civil Engineering",
          level: "Diploma",
          // colleges: ["State Govt. Polytechnics"],
          notes:
            "Focuses on construction site management, land surveying, and blueprint reading for infrastructure projects.",
        },
        {
          name: "Computer Engineering",
          level: "Diploma",
          // colleges: ["Technical Education Boards"],
          notes:
            "Builds foundational skills in computer hardware assembly, networking, and basic software troubleshooting.",
        },
        {
          name: "Electrical Engineering",
          level: "Diploma",
          // colleges: ["Polytechnic Colleges"],
          notes:
            "Practical learning in power systems, electrical wiring, and the maintenance of motors and generators.",
        },
        {
          name: "Chemical Engineering",
          level: "Diploma",
          notes:
            "Focuses on the basics of chemical unit operations, safety protocols, and raw material processing.",
        },
        {
          name: "Electronics & Communication Engineering",
          level: "Diploma",
          notes:
            "Covers electronic components, circuit testing, and the maintenance of communication devices.",
        },
        {
          name: "Automobile Engineering",
          level: "Diploma",
          notes:
            "Specialized training in engine mechanics, vehicle diagnostics, and the operation of modern transport systems.",
        },
      ],
    },
    {
      title: "B.Tech Branches",
      subtitle: "4-year degree with deep specialization",
      tags: ["High Demand", "Innovative"],
      courses: [
        {
          name: "Computer Science & Engineering (CSE)",
          level: "B.Tech",
          // colleges: ["IITs", "NITs", "IIITs", "Top Private Universities"],
          notes:
            "Comprehensive study of algorithms, software engineering, and AI; the primary pathway to global tech careers.",
        },
        {
          name: "Electronics & Communication Engineering (ECE)",
          level: "B.Tech",
          // colleges: ["IITs", "NITs", "BITS"],
          notes:
            "Focuses on semiconductor design, telecommunications, and the hardware-software interface for IoT devices.",
        },
        {
          name: "Mechanical Engineering",
          level: "B.Tech",
          // colleges: ["IITs", "NITs", "State Govt. Colleges"],
          notes:
            "Modern curriculum covering thermodynamics, robotics, and CAD/CAM, preparing students for Industry 4.0.",
        },
        {
          name: "Information Technology (IT)",
          level: "B.Tech",
          notes:
            "Focuses on the application of computing in business, covering database management and cloud services.",
        },
        {
          name: "Electrical & Electronics Engineering (EEE)",
          level: "B.Tech",
          notes:
            "Bridges heavy power systems with fine electronics; vital for the EV revolution and smart grid technology.",
        },
        {
          name: "Civil Engineering",
          level: "B.Tech",
          notes:
            "Deep dive into structural analysis, urban planning, and environmental engineering for large-scale development.",
        },
        {
          name: "Aerospace Engineering",
          level: "B.Tech",
          notes:
            "Advanced study of aerodynamics, flight mechanics, and spacecraft design for aviation and space agencies.",
        },
        {
          name: "Biotechnology / Biomedical Engineering",
          level: "B.Tech",
          notes:
            "Integrates biology with engineering to develop medical prosthetics and diagnostic tools.",
        },
        {
          name: "Chemical Engineering",
          level: "B.Tech",
          notes:
            "Focuses on the design and operation of industrial plants for petroleum, pharma, and sustainable materials.",
        },
        {
          name: "Mathematics and Computing",
          level: "B.Tech",
          notes:
            "An elite blend of theoretical math and CS, highly sought after for quantitative finance and cryptography.",
        },
        {
          name: "AI and Machine Learning",
          level: "B.Tech",
          notes:
            "A specialized track focusing on data modeling, neural networks, and developing autonomous intelligent systems.",
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
          notes:
            "Advanced research in deep learning, natural language processing, and predictive analytics for big data.",
        },
        {
          name: "M.Tech in Machine Design",
          level: "M.Tech",
          notes:
            "Focuses on the stress analysis, kinematics, and failure theories of complex mechanical systems.",
        },
        {
          name: "M.Tech in Digital Communication",
          level: "M.Tech",
          notes:
            "Specialized study of signal processing, wireless protocols, and next-generation network security.",
        },
        {
          name: "M.Tech in CTM Engineering",
          level: "M.Tech",
          notes:
            "Construction Technology & Management: Focuses on advanced project scheduling, BIM, and lean construction.",
        },
        {
          name: "M.Tech in VLSI & Embedded Systems",
          level: "M.Tech",
          notes:
            "Expertise in microchip design, FPGA programming, and high-performance integrated circuits.",
        },
        {
          name: "M.Tech in Thermal Engineering",
          level: "M.Tech",
          notes:
            "Advanced study of heat transfer, fluid dynamics, and energy conversion for power plants and engines.",
        },
        {
          name: "M.Tech in Power System",
          level: "M.Tech",
          notes:
            "Research into high-voltage engineering, renewable energy integration, and smart grid stability.",
        },
        {
          name: "M.Tech in Production Engineering",
          level: "M.Tech",
          notes:
            "Focuses on advanced manufacturing tech, supply chain optimization, and total quality management.",
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
            "Provides eligibility for a Pharmacy license to manage drug stores and work in pharmaceutical sales.",
        },
        {
          name: "DMLT (Medical Lab Technology)",
          level: "Diploma",
          notes:
            "Trains students in biochemical analysis and microbiology to run diagnostic laboratories.",
        },
        {
          name: "DPT (Diploma in Physiotherapy)",
          level: "Diploma",
          notes:
            "Covers basic physical therapy techniques for pain management and recovery after minor injuries.",
        },
        {
          name: "Diploma in OTT (Operation Theatre Technology)",
          level: "Diploma",
          notes:
            "Prepares technicians to prepare the OT, sterilize instruments, and assist surgeons.",
        },
        {
          name: "Diploma in Radiology & Imaging",
          level: "Diploma",
          notes:
            "Focused on the technical operation of X-ray machines, CT scanners, and imaging software.",
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
            "The foundational degree for clinical practice, involving rigorous training in medicine, surgery, and diagnostics.",
        },
        {
          name: "BDS (Dental)",
          level: "UG",
          notes:
            "Professional degree focused on oral surgery, dental anatomy, and the treatment of dental diseases.",
        },
        {
          name: "B.Pharma (Bachelor of Pharmacy)",
          level: "UG",
          notes:
            "Covers drug formulation, pharmacology, and clinical trials for the pharmaceutical industry.",
        },
        {
          name: "BAMS / BHMS / BUMS / BSMS",
          level: "UG",
          notes:
            "Degrees in alternative medicine (Ayurveda, Homeopathy, etc.) combining traditional wisdom with modern science.",
        },
        {
          name: "B.Sc Nursing",
          level: "UG",
          notes:
            "Professional training in patient care, community health, and medical ethics for clinical nursing.",
        },
        {
          name: "BPT (Bachelor of Physiotherapy)",
          level: "UG",
          notes:
            "A clinical degree focusing on physical rehabilitation, kinesiology, and treating musculoskeletal disorders.",
        },
        {
          name: "B.Sc Medical Imaging Technology",
          level: "UG",
          notes:
            "Advanced study of MRI, Nuclear Medicine, and Ultrasound for complex diagnostics.",
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
            "Super-specialized residency in fields like Cardiology or Orthopedics for expert clinical practice.",
        },
        {
          name: "Pharm.D (Doctor of Pharmacy)",
          level: "Doctoral/PG",
          notes:
            "Clinical-centric program focusing on patient medication therapy and hospital pharmacy services.",
        },
        {
          name: "MDS (Master of Dental Surgery)",
          level: "PG",
          notes:
            "Advanced specialization in areas like Orthodontics or Oral and Maxillofacial Surgery.",
        },
        {
          name: "M.Sc Nursing / MPT",
          level: "PG",
          notes:
            "Post-graduate degrees for specialized roles in pediatric nursing or sports physiotherapy.",
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
          notes:
            "A versatile degree covering business communication, organizational behavior, and basic accounting.",
        },
        {
          name: "BBA in Business Analytics",
          level: "UG",
          notes:
            "Combines management principles with data visualization tools for data-driven decisions.",
        },
        {
          name: "BMS (Management Studies)",
          level: "UG",
          notes:
            "An analytically heavy management degree focusing on financial modeling and strategic planning.",
        },
        {
          name: "BHM (Hotel Management)",
          level: "UG",
          notes:
            "Comprehensive training in front-office operations, F&B management, and luxury hospitality.",
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
          notes:
            "Traditional leadership pillars for brand management, investment banking, or talent acquisition.",
        },
        {
          name: "MBA in Business Analytics / Data Science",
          level: "PG",
          notes:
            "Prepares managers to lead tech teams, focusing on the strategic use of AI in business.",
        },
        {
          name: "PGDM (Post Graduate Diploma in Management)",
          level: "PG",
          notes:
            "Industry-aligned curriculum updated frequently to match market trends and leadership skills.",
        },
        {
          name: "MBA in Supply Chain & Logistics",
          level: "PG",
          notes:
            "Focuses on global procurement, warehouse management, and flow optimization for e-commerce.",
        },
        {
          name: "MBA in Digital Business / E-Commerce",
          level: "PG",
          notes:
            "Covers digital transformation, SEO/SEM strategies, and managing online marketplaces.",
        },
        {
          name: "PGDCA (Post graduate Diploma in Computer application",
          level: "PG",
          notes:
            "A bridge course for non-IT graduates to gain competency in software applications and development.",
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
            "A seamless transition from foundational social sciences to advanced MBA, offered by elite IIMs.",
        },
        {
          name: "B.Tech + MBA Integrated",
          level: "UG+PG",
          notes:
            "Dual-focus degree designed for students wanting to lead technology firms or enter product management.",
        },
      ],
    },
  ],
  "General & Education": [
    {
      title: "Academic Sciences",
      subtitle: "Core scientific research and theory",
      tags: ["Core", "Research"],
      courses: [
        {
          name: "B.Sc (Physics / Chemistry / Maths)",
          level: "UG",
          notes:
            "Deep theoretical grounding in natural sciences; ideal for academia or laboratory research.",
        },
        {
          name: "B.Sc in Computer Science / IT",
          level: "UG",
          notes:
            "Focuses on the mathematical and theoretical underpinnings of computation and software logic.",
        },
        {
          name: "M.Sc (Physics / Chemistry / Biology)",
          level: "PG",
          notes:
            "Advanced research-oriented study required for pursuing a PhD or industrial R&D roles.",
        },
        {
          name: "M.Sc in Data Science / Statistics",
          level: "PG",
          notes:
            "Rigorous mathematical training in probability and statistical inference for high-level analysis.",
        },
      ],
    },
    {
      title: "Education & Teaching",
      subtitle: "Professional programs for educators",
      tags: ["Skill-Based", "Early Professional"],
      courses: [
        {
          name: "D.El.Ed (Diploma in Elementary Education)",
          level: "Diploma",
          notes:
            "Specialized training in child psychology and teaching methods for primary school environments.",
        },
        {
          name: "B.Ed (Bachelor of Education)",
          level: "UG",
          notes:
            "Professional certification covering pedagogy and classroom management for secondary teaching.",
        },
        {
          name: "M.Ed (Master of Education)",
          level: "PG",
          notes:
            "Focuses on educational policy, curriculum design, and the leadership of academic institutions.",
        },
        {
          name: "B.P.Ed (Physical Education)",
          level: "UG",
          notes:
            "Combines sports training with health education and the physiology of physical exercise.",
        },
      ],
    },
    {
      title: "Humanities & Social Sciences",
      subtitle: "Liberal arts and administrative foundations",
      tags: ["Core", "Strategic"],
      courses: [
        {
          name: "B.A. (English / Psychology / Economics)",
          level: "UG",
          notes:
            "Develops critical thinking; provides a strong base for Law, Civil Services, or Journalism.",
        },
        {
          name: "B.Com (General / Hons)",
          level: "UG",
          notes:
            "Focuses on financial accounting and taxation; the stepping stone to becoming a CA or CFA.",
        },
        {
          name: "B.Lib.Sc (Library & Information Science)",
          level: "UG",
          notes:
            "Trains students in digital archiving and the management of modern knowledge centers.",
        },
      ],
    },
  ],
};
