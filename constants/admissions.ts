type Course = {
  name: string;
  level: string;
  colleges?: string[];
  notes?: string;
};

type CourseGroup = {
  title: string;
  subtitle?: string;
  tags?: ("High Demand" | "Core" | "Emerging")[];
  courses: Course[];
};

export const admissions: Record<string, CourseGroup[]> = {
  Engineering: [
    {
      title: "B.Tech Core Branches",
      subtitle: "High placement & evergreen demand",
      tags: ["High Demand", "Core"],
      courses: [
        {
          name: "Computer Science & Engineering (CSE)",
          level: "B.Tech",
          colleges: ["IITs", "NITs", "IIITs", "Top Private Universities"],
          notes: "Strong demand in software, product, and startup ecosystem."
        },
        {
          name: "Electronics & Communication Engineering (ECE)",
          level: "B.Tech",
          colleges: ["NITs", "State Govt. Colleges", "Leading Private Colleges"],
          notes: "Bridges core electronics with communication & embedded systems."
        },
        {
          name: "Mechanical Engineering",
          level: "B.Tech",
          colleges: ["IITs", "State Govt. Colleges"],
          notes: "Core branch with opportunities in manufacturing and R&D."
        }
      ]
    },
    {
      title: "M.Tech Specializations",
      subtitle: "For advanced technical expertise",
      tags: ["Emerging"],
      courses: [
        {
          name: "M.Tech in Data Science / AI",
          level: "M.Tech",
          notes: "Ideal for graduates targeting research & high-end analytics roles."
        },
        {
          name: "M.Tech in VLSI & Embedded Systems",
          level: "M.Tech",
          notes: "High demand in semiconductor & hardware design industry."
        }
      ]
    }
  ],
  Medical: [
    {
      title: "Undergraduate Medical Programs",
      subtitle: "NEET-based admissions",
      tags: ["High Demand"],
      courses: [
        {
          name: "MBBS",
          level: "UG",
          notes:
            "Flagship medical program with limited seats and very high competition."
        },
        {
          name: "BDS (Dental)",
          level: "UG",
          notes: "Preferred by students interested in specialized dental practice."
        },
        {
          name: "BAMS / BHMS / BPT",
          level: "UG",
          notes:
            "Alternative health sciences programs with growing acceptance in India."
        }
      ]
    },
    {
      title: "Postgraduate Medical Programs",
      subtitle: "Specializations after MBBS",
      tags: ["Core"],
      courses: [
        {
          name: "MD / MS Clinical Specializations",
          level: "PG",
          notes:
            "Includes Medicine, Surgery, Pediatrics, Gynecology and more high-demand branches."
        }
      ]
    }
  ],
  Management: [
    {
      title: "MBA & PGDM Programs",
      subtitle: "For leadership & corporate careers",
      tags: ["High Demand"],
      courses: [
        {
          name: "MBA in Marketing / Finance / HR",
          level: "PG",
          notes:
            "Ideal for graduates targeting corporate and managerial roles across sectors."
        },
        {
          name: "PGDM (AICTE Approved)",
          level: "PG",
          notes:
            "Industry-oriented program with strong focus on practical exposure and internships."
        }
      ]
    },
    {
      title: "Integrated Management Programs",
      subtitle: "After 12th (5-year)",
      tags: ["Emerging"],
      courses: [
        {
          name: "BBA + MBA Integrated",
          level: "UG + PG",
          notes:
            "Good option for students clear about long-term management career."
        }
      ]
    }
  ]
};

