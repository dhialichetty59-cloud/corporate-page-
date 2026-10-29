const trainingGroups = [
  {
    id: "qualifications",
    title: "Higher Certificates & Diplomas",
    intro: "One-year Higher Certificates and three-year Diploma pathways. Diploma Years 2 and 3 may be customised where noted in the brief.",
    courses: [
      {
        title: "Higher Certificate in Construction Quantity Surveying",
        length: "1 year",
        modules: [
          "Structure of the Built Environment",
          "Basic Construction Technology 101 & 102",
          "Construction Quantity Surveying 101 & 102",
          "Property Development 101",
          "Land Surveying 101",
          "Commercial Law 101",
          "Construction Law 101"
        ]
      },
      {
        title: "Higher Certificate in Facilities Management",
        length: "1 year",
        modules: [
          "Structure of the Built Environment",
          "Basic Construction Technology 101 & 102",
          "Facilities Management 101 & 102",
          "Construction Quantity Surveying 101",
          "Property Development 101",
          "Commercial Law 101",
          "Property Law 101"
        ]
      },
      {
        title: "Higher Certificate in Construction Project Management",
        length: "1 year",
        modules: [
          "Construction Project Management 101 & 102",
          "Stakeholder Engagement 101",
          "Property Law for entry-level project managers",
          "Construction Quantity Surveying for entry-level project managers",
          "Property Development and Finance",
          "Construction Law",
          "Integrated Capstone Module"
        ]
      },
      {
        title: "Higher Certificate in Property Development",
        length: "1 year",
        modules: [
          "Property Development",
          "Property Economics",
          "Property Law",
          "Introduction to Property Investment",
          "Property Marketing",
          "Management of Property"
        ]
      },
      {
        title: "Higher Certificate in Real Estate",
        length: "1 year",
        modules: [
          "The Nature of Real Estate",
          "Physical, Institutional and Legal Environments",
          "Socio-Economic and Market Environments",
          "Development of Real Estate",
          "Investment and Financing of Real Estate",
          "Marketing and Management of Real Estate",
          "Valuation of Real Estate"
        ]
      },
      {
        title: "Higher Certificate in Property Valuation",
        length: "1 year",
        modules: [
          "Nature and value of real estate",
          "Physical, socio-economic and institutional environments",
          "Market and legal environments",
          "Determining the value of real estate",
          "Valuer's records and valuation reports",
          "Valuation approaches and insurance",
          "Potential and highest and best use"
        ]
      },
      {
        title: "Higher Certificate in Transformative Leadership",
        length: "1 year",
        modules: [
          "Foundations of leadership",
          "Emotional intelligence and self-mastery",
          "Human behaviour in organisations",
          "Communication and conflict resolution",
          "Goal setting and time management",
          "Team building and facilitation",
          "Situational and ethical leadership",
          "Performance evaluation and feedback 101",
          "DNA of business 101",
          "Personal leadership assessment 101",
          "Capstone leadership manifesto and project 101"
        ]
      },
      {
        title: "Diploma in Property Development",
        length: "3 years",
        years: [
          {
            year: 1,
            modules: [
              "Structure of the Built Environment 101",
              "Basic Construction Technology 101",
              "Basic Construction Technology 102",
              "Commercial Law 101",
              "Property Development 101",
              "Property Development 102",
              "Property Economics 101",
              "Property Law 101",
              "Introduction to Property Investment",
              "Property Marketing",
              "Management of Property"
            ]
          },
          {
            year: 2,
            modules: [
              "Time Value of Money",
              "Principles of Building Costing",
              "Fundamentals of Real Estate and Property Types",
              "Residential Property Development",
              "Managing the Development Project Life Cycle",
              "Tenders and Procurement",
              "Feasibility Studies in Property Development",
              "Financing Property Development",
              "Commercial and Industrial Property Development",
              "Land Surveying for Property Development"
            ]
          },
          {
            year: 3,
            modules: [
              "Investment Analysis and Strategy in Property",
              "Township Development",
              "Construction Contracts",
              "Construction Project Planning and Control",
              "Dispute Resolution",
              "Business Ethics",
              "Strategic Real Estate Marketing",
              "Entrepreneurship and Innovation in Property",
              "Integrated Property Development Project (Capstone Portfolio)"
            ]
          }
        ]
      },
      {
        title: "Diploma in Construction Quantity Surveying",
        length: "3 years",
        years: [
          {
            year: 1,
            modules: [
              "Structure of the Built Environment 101",
              "Basic Construction Technology 101",
              "Construction Quantity Surveying 102",
              "Commercial Law 101",
              "Property Development 101",
              "Basic Construction Technology 102",
              "Construction Quantity Surveying 101",
              "Land Surveying 101",
              "Construction Law 101"
            ]
          },
          {
            year: 2,
            modules: [
              "Sustainable construction technology and environmental systems",
              "Advanced measurement of building and structural works",
              "Construction contract law and practice",
              "Construction project coordination and cost management",
              "Property development finance and feasibility analysis",
              "Construction measurement and cost control",
              "Construction Project Communication",
              "Property Law for Construction Quantity Surveyors"
            ]
          },
          {
            year: 3,
            modules: [
              "Advanced Measurement and Bills of Quantities",
              "Construction Professional Practice",
              "Construction Health and Safety",
              "Advanced Construction Project Management",
              "Advanced Construction Cost Management and Project Close Out",
              "Construction Project Technology",
              "Work Integrated Learning in Construction Quantity Surveying",
              "Construction Quantity Surveying Capstone Project"
            ]
          }
        ]
      },
      {
        title: "Diploma in Real Estate",
        length: "3 years",
        years: [
          {
            year: 1,
            modules: [
              "The Nature of Real Estate 101",
              "The Physical Environment of Real Estate 101",
              "The Institutional Environment of Real Estate 101",
              "The Legal Environment of Real Estate 101",
              "The Socio-Economic Environment of Real Estate 101",
              "The Market Environment of Real Estate 101",
              "Development of Real Estate 101",
              "Investment in Real Estate 101",
              "Financing of Real Estate 101",
              "Marketing of Real Estate 101",
              "Management of Real Estate 101",
              "Valuation of Real Estate 101"
            ]
          },
          {
            year: 2,
            modules: [
              "Structure of the Built Environment",
              "Basic Construction Technology 101",
              "Basic Construction Technology 102",
              "Time Value of Money",
              "Feasibility Analysis",
              "Building Technology 201",
              "Introduction to Land Surveying",
              "Basic Quantity Surveying Costing"
            ]
          },
          {
            year: 3,
            modules: [
              "The Strategic Management Plan",
              "Management of Residential Property",
              "Management of Commercial and Industrial Property",
              "Maintenance Management",
              "Principles of Asset Management",
              "Introduction to Facilities Management",
              "Basic Risk Management",
              "Introduction to Security Management of Property",
              "Business Ethics",
              "Integrated Capstone Project for Real Estate"
            ]
          }
        ]
      },
      {
        title: "Diploma in Property Valuation",
        length: "3 years",
        years: [
          {
            year: 1,
            modules: [
              "Nature of Real Estate",
              "Physical Determinants of Property Value",
              "Socio-Economic Environment of Real Estate",
              "Institutional Environment of Real Estate",
              "Market Environment of Real Estate",
              "Legal Environment of Real Estate",
              "Valuation Contexts: Understanding Investment Principles",
              "Determining the Value of Real Estate",
              "Identification of Properties",
              "Valuer's Records and Valuation Reports",
              "Various Approaches to Valuation",
              "Valuation for Insurance Purposes",
              "Potential and Highest and Best Use"
            ]
          },
          {
            year: 2,
            modules: [
              "Influence of Inappropriate Development on Market Value",
              "Leases and Rentals, Valuation of Leasehold Interests",
              "Valuation of Residential Properties",
              "Valuation of Income-Producing Properties",
              "Profit Method of Valuation",
              "Residual and Development Valuation",
              "Influence of Rezoning on Value",
              "Statistics and Probability for Property Valuation",
              "Time Value of Money",
              "Feasibility Analysis",
              "Mass Appraisal for Property Valuation"
            ]
          },
          {
            year: 3,
            modules: [
              "Valuation for Expropriation",
              "Valuation of Usually Non-Negotiable Properties and Rights",
              "Valuation of Specialised and Non-Market Properties",
              "Valuation of Shopping Centres and Retail Development Sites",
              "Valuation of Filling Stations and Fuel Retail Properties",
              "Township Establishment",
              "Valuation of Farmland",
              "Valuation of Game Farms",
              "Capstone Integrated Project for Property Valuation"
            ]
          }
        ]
      },
      {
        title: "Diploma in Facilities Management",
        length: "3 years",
        years: [
          {
            year: 1,
            modules: [
              "SBE 101: Structure of the Built Environment",
              "BCT 101: Basic Construction Technology",
              "BCT 102: Basic Construction Technology",
              "FMT 101: Facilities Management",
              "FMT 102: Facilities Management",
              "CQS 101: Construction Quantity Surveying",
              "PDT 101: Property Development",
              "CML 101: Commercial Law",
              "PRL 101: Property Law"
            ]
          },
          {
            year: 2,
            modules: [
              "Management of Soft Services",
              "Management of Hard Services",
              "Maintenance Management",
              "Facilities Operations and Service Delivery",
              "Utilities Management and Sustainability",
              "Fire Safety",
              "Risk and Disaster Management",
              "Introduction to Project Management in FM",
              "Facilities Planning and Space Management",
              "Introduction to Security Management",
              "Time Value of Money"
            ]
          },
          {
            year: 3,
            modules: [
              "Facilities Management Tenders and Procurement",
              "Principles of Asset Management",
              "Advanced Project Management and Strategic Planning",
              "Leadership and Organisational Behaviour",
              "Integrated Facilities Management and Digital Transformation",
              "Sustainable Facilities Management",
              "Business Ethics",
              "Technical Communication and Reporting",
              "Professional Development and Certification Preparation",
              "Integrated Capstone Project for Facilities Management"
            ]
          }
        ]
      },
      {
        title: "Diploma in Construction Project Management",
        length: "3 years",
        years: [
          {
            year: 1,
            modules: [
              "SBE 101: Structure of the Built Environment",
              "BCT 101: Basic Construction Technology",
              "Property Law for Entry-Level Construction Project Managers",
              "Construction Quantity Surveying for Entry-Level Construction Project Managers",
              "CPM 101: Construction Project Management",
              "CPM 102: Construction Project Management",
              "Property Development and Finance for Entry-Level Construction Project Managers",
              "STE 101: Stakeholder Engagement",
              "Construction Law for Entry-Level Construction Project Managers",
              "Integrating Capstone Module"
            ]
          },
          {
            year: 2,
            modules: [],
            note: "Customisable based on core selection requirements. Confirm the Year 2 module choices with CEA."
          },
          {
            year: 3,
            modules: [],
            note: "Customisable based on core selection requirements. Confirm the Year 3 module choices with CEA."
          }
        ]
      }
    ]
  },
  {
    id: "short-courses",
    title: "Professional Short Courses",
    intro: "Focused programmes that can be delivered as standalone learning or combined into a custom track.",
    courses: [
      {
        title: "Construction Project Management",
        moduleGroups: [
          { title: "Core Foundations", modules: ["Introduction to Project Management (Course Structures, Fundamental Premise, Built Environment Professionalism, Code of Conduct & Ethics, Managerial Structuring, Strategic Management and Business Plans)"] },
          { title: "Operations & Workforce", modules: ["Human Resource Management", "Occupational Health & Safety", "Site Management", "Plant and Equipment", "Total Quality Management", "Communication", "Marketing and Public Relations"] },
          { title: "Technology & Environment", modules: ["Intelligent Buildings", "Energy Efficiency and Green Technology", "Passive Environmental Control in Buildings", "Regulatory Environment and Support"] },
          { title: "Legal & Commercial", modules: ["Project Management", "Commercial and Contracts Law in the Property Industry", "Construction Contracts Law", "Construction and Professional Insurance"] },
          { title: "Financials, Tenders & Costing", modules: ["Property Economics, Budgets and Life Cycle Costing", "Feasibility Studies and Investment", "Estimation of Construction Costs", "Tendering Procedures", "Variation Orders, Interim Certificates and Final Accounts", "Cash Flow Projections", "Procurement of Construction Materials", "Utilisation of Sub-Contractors", "Risk Management"] }
        ]
      },
      {
        title: "Immovable Asset Management",
        moduleGroups: [
          { title: "Lifecycle & Operations", modules: ["Management of Assets", "Disposal of Assets", "Data Collection and Inspections"] },
          { title: "Stakeholder & Risk Control", modules: ["Stakeholder Relationships", "Managing Asset Risks"] },
          { title: "Costing & Standards", modules: ["Estimating Costs", "Norms and Standards", "Measuring Quantities"] },
          { title: "Compliance Framework", modules: ["Legislative Environment", "Systems, Standards and Guidelines"] }
        ]
      },
      {
        title: "Property Development",
        moduleGroups: [
          { title: "Core Foundations", modules: ["Introduction to Property Development (Course Structures, Fundamental Premise, Built Environment Commercial Terminology, Structure of the Built Environment, Professionalism, Code of Conduct & Ethics, Managerial Structuring, Strategic Management and Business Plans)"] },
          { title: "Asset & Site Analytics", modules: ["Introduction to Properties as Assets", "Property Development Process (Part 1 & Part 2)", "Scientific Needs / Site Specific Analysis", "Market Analysis and Investment Process"] },
          { title: "Technology & Valuations", modules: ["Occupational Health & Safety", "Intelligent Buildings", "Energy Efficiency and Green Technology", "Passive Environmental Control in Buildings", "Property Market Valuations"] },
          { title: "Economics & Strategy", modules: ["Property Economics and Management: Basic Property Aspects", "Property Economic Indicators", "Property Marketing, Benchmarking and Trends", "Commercial and Contracts Law in the Property Industry"] },
          { title: "Financials & Feasibilities", modules: ["Property Finance and Risk", "Property Economics, Budgets and Life Cycle Costing", "Feasibility Studies and Investment", "Time Value of Money", "Estimation of Construction Costs", "Tendering Procedures", "Variation Orders, Interim Certificates and Final Accounts", "Cash Flow Projections"] },
          { title: "Practical Applications", modules: ["Property Development Implementation Workshop (Part 1 & Part 2)", "Property and Tenant Management"] }
        ]
      },
      {
        title: "Property and Shopping Centre Management",
        moduleGroups: [
          { title: "Market & Feasibility", modules: ["Introduction", "Role of Shopping Centres", "Retailing Terminology", "The Retail Market", "Market Research", "Location Studies", "Feasibility Analysis"] },
          { title: "Design & Management", modules: ["Shopping Centre Planning & Design", "Shopping Centre Development", "Design & Management of Services", "Parking Design & Management", "Functions of the Shopping Centre Manager", "Profile of the Manager", "The Manager/Owner Relationship"] },
          { title: "Maintenance & Law", modules: ["Principles of Maintenance", "Execution of Maintenance", "Building Condition Assessment", "Maintenance Prioritising & Procurement, SLAs, Outsourcing", "Commercial and Contract Law in the Property Industry (Commercial law, Contract law, Property law, Town planning zoning legal aspects)"] },
          { title: "Risk & Finance", modules: ["Financial Management Overview, Budgets & Operating Costs", "Risk Management Fundamentals (Terminology, Types of Risk)", "Delict", "Security", "Disaster Management", "Shopfront Presentation & Display"] },
          { title: "Leasing & Future Tech", modules: ["Contracts of lease for shopping space", "Leasing of shopping space, measurement of floor areas, the Green Lease", "Marketing and PR", "Future directions (E-commerce, AI)", "Evaluations, Practice Assignment Discussion, Knowledge Gained Survey & Lecturer Evaluations"] }
        ]
      },
      {
        title: "Construction Technology",
        moduleGroups: [
          { title: "Core Mechanics", modules: ["Introduction to Construction Technology (Programme Structures, Fundamental Premise, Built Environment Commercial Terminology, Structure of the Built Environment, Soil Mechanics & Foundations)"] },
          { title: "Materials & Infrastructure", modules: ["Construction Technology", "Cement & Concrete", "Building Components & Finishes", "Building Services", "Electricity Generation"] },
          { title: "Systems & Sustainability", modules: ["Regulatory Environment & Support", "Passive Environmental Control in Buildings", "Intelligent Buildings", "Energy Efficiency and Green Technology"] },
          { title: "Digital & Maintenance Operations", modules: ["Maintenance Work", "BIM (Building Information Modelling)", "Computerised Maintenance Management"] }
        ]
      },
      {
        title: "Facilities Management",
        moduleGroups: [
          { title: "Core Foundations", modules: ["Introduction to Facilities Management (Course Structures, Fundamental Premise, Built Environment Commercial Terminology, Structure of the Built Environment, Professionalism, Code of Conduct & Ethics, Managerial Structuring, Strategic Management and Business Plans)"] },
          { title: "HR, Legal & Safety", modules: ["Human Resource Management & the Legal Environment", "Occupational Health & Safety", "Environmental Management", "Regulatory Environment and Support"] },
          { title: "FM Frameworks", modules: ["FMBOK (Introduction to Facilities Management Body of Knowledge)", "Facilities Operational Management, Services and Utilities", "Operational Facilities Management, Legal and Managerial"] },
          { title: "Sustainable Infrastructure", modules: ["Intelligent Buildings", "Energy Efficiency and Green Technology", "Passive Environmental Control in Buildings", "BIM and Facilities Management", "Computerisation Demonstration"] },
          { title: "Finance & Assets", modules: ["Commercial and Contracts Law in the Property Industry", "Property Economics, Budgets and Life Cycle Costing", "Feasibility Studies and Investment", "Asset and Property Management", "Property Financial and Tenant Management"] },
          { title: "Strategic Oversight", modules: ["Total Quality Management", "Risk Management", "Communication", "Marketing and Public Relations", "Public Private Partnerships", "Stakeholder Engagement", "Strategic Goal Alignment"] }
        ]
      }
    ]
  },
  {
    id: "qcto",
    title: "QCTO Accredited Training",
    intro: "The brief lists occupational skills programmes and occupational certificates. Confirm current application requirements, scope and availability with CEA.",
    courses: [
      { title: "Basic Emergency First Aid", length: "NQF 2 | 2 credits", modules: ["Occupational Skills Programme SP-230801"] },
      { title: "Intermediate Emergency First Aid", length: "NQF 3 | 5 credits", modules: ["Occupational Skills Programme SP-230802"] },
      { title: "Advanced Emergency First Aid", length: "NQF 4 | 6 credits", modules: ["Occupational Skills Programme SP-230803"] },
      { title: "General Residential Repairer", length: "NQF 3 | 31 credits", modules: ["Occupational Skills Programme SP-191202"] },
      { title: "Bricklayer's Assistant", length: "NQF 1 | 45 credits", modules: ["Occupational Skills Programme SP-191217"] },
      { title: "Domestic Water and Drainage Pipe Repairer", length: "NQF 2 | 49 credits", modules: ["Occupational Skills Programme SP-191201"] },
      { title: "Plumbing Hand", length: "NQF 3 | 49 credits", modules: ["Occupational Skills Programme SP-210403"] },
      { title: "Hot and Cold-Water Systems Installer", length: "NQF 4 | 93 credits", modules: ["Occupational Skills Programme SP-211004"] },
      { title: "Occupational Health and Safety Officer", length: "NQF 4 | 120 credits", modules: ["National Occupational Certificate 121929"] },
      { title: "Occupational Health and Safety Assistant", length: "NQF 4 | 44 credits", modules: ["Occupational Certificate 121930"] },
      { title: "Routine Road Maintenance Manager", length: "NQF 5 | 120 credits", modules: ["Occupational Certificate 101864"] }
    ]
  },
  {
    id: "site-skills",
    title: "Practical Skills & Technical Licensing",
    intro: "Practical options for site staff, operations managers and technical maintenance crews, spanning operator licensing, HSE compliance and trade skills.",
    courses: [
      {
        title: "Lifting Machines & Material Handling Options",
        optionHeading: "Machinery & Operator Licensing",
        modules: [
          "Forklift Operations (F1–F4)",
          "Reach Truck (F5)",
          "Pedestrian-Controlled Lift Trucks (Below & Above 2000 KG)",
          "Order Pickers (All levels including high-rise racking)",
          "Rough Terrain & Earthmoving Equipment with lift attachments",
          "Overhead Cranes (Pendant, Radio, and Cab controlled)",
          "Truck Mounted Cranes",
          "Mobile Cranes",
          "MEWP / Cherry Picker Operations"
        ]
      },
      {
        title: "Plant Machinery (Yellow Plant Fleet)",
        optionHeading: "Machinery & Operator Licensing",
        modules: [
          "TLB Operator",
          "Front End Loader",
          "Grader Operations",
          "Dump Truck & Articulated Dump Truck (ADT)",
          "Roller",
          "Bobcat / Skid Steer Loader",
          "Tip Truck",
          "Dozer",
          "Tractor",
          "Water Cart",
          "Excavator",
          "Mini / Concrete Dumper"
        ]
      },
      {
        title: "Emergency Response",
        optionHeading: "Health, Safety & Environmental (HSE) Legal Compliance",
        modules: [
          "First Aid Levels 1 & 2",
          "Emergency Preparedness",
          "Basic & Advanced Firefighting",
          "Incident Investigation & Task Analysis"
        ]
      },
      {
        title: "Site Safety & Risk Management",
        optionHeading: "Health, Safety & Environmental (HSE) Legal Compliance",
        modules: [
          "Hazard Identification & Risk Assessment (HIRA)",
          "OHS Act & Construction Regulations Legal Liability",
          "Mines Health and Safety Act Compliance",
          "Planned Task Observation (PTO)",
          "Permit to Work Systems (Lock-out/Tag-out, Hot Work, Confined Space Entry)"
        ]
      },
      {
        title: "Technical Site Compliance",
        optionHeading: "Health, Safety & Environmental (HSE) Legal Compliance",
        modules: [
          "Confined Space Entry",
          "Scaffold Erection & Inspection",
          "Working at Heights & Fall Protection Plan Development",
          "Open Hole or Deep Excavations Safety Inspections",
          "Hazardous Chemical Handling & Storage"
        ]
      },
      {
        title: "Environmental Management",
        optionHeading: "Health, Safety & Environmental (HSE) Legal Compliance",
        modules: [
          "Environmental Initiatives Implementation on Construction Projects",
          "Material Environmental Impact Assessments",
          "General Workplace Environmental Awareness",
          "Flammable Energy Sources Safety"
        ]
      },
      {
        title: "Basic Rigging & Lifting",
        optionHeading: "Core Trade & Maintenance Practices",
        modules: [
          "Slinging Loads",
          "Basic Rigging Levels 1, 2, & 3 (Mechanical & Manual Lifting Tackle)",
          "Overhead Crane Signaling (Signalman / Banksman)"
        ]
      },
      {
        title: "Concrete, Formwork & Finishes",
        optionHeading: "Core Trade & Maintenance Practices",
        modules: [
          "Batching & Mixing Concrete by Volume (Concrete Hand)",
          "Assembling, Tying & Fixing Reinforcing Cages (Steel Fixer)",
          "Timber Formwork Fabrication, Erection & Stripping (Shutter Hand)",
          "Plastering & Screeds Application"
        ]
      },
      {
        title: "Hand & Power Tools",
        optionHeading: "Core Trade & Maintenance Practices",
        modules: [
          "Safe Use and Maintenance of Hand Tools & Power Hand Tools on a Construction Site"
        ]
      },
      {
        title: "Storage & Fleet Logistics",
        optionHeading: "Core Trade & Maintenance Practices",
        modules: [
          "Safe Loading Practices (General Freight / Vehicles)",
          "Stacking and Storage Management (Freight Preparation)"
        ]
      },
      {
        title: "Safety Management / Junior Safety Officer Track",
        optionHeading: "Core Trade & Maintenance Practices",
        modules: [
          "Continuous Risk Assessment",
          "Workplace Incident Investigation",
          "Safety and Health Management Programme Implementation & Evaluation"
        ]
      }
    ]
  }
];

const education = trainingGroups[0];
const removedHigherCertificateOptions = new Set([
  "Higher Certificate in Construction Quantity Surveying",
  "Higher Certificate in Facilities Management",
  "Higher Certificate in Construction Project Management",
  "Higher Certificate in Property Development",
  "Higher Certificate in Real Estate",
  "Higher Certificate in Property Valuation"
]);
const diplomas = education.courses.slice(7).map((course) => ({
  ...course,
  levels: [
    { id: "nqf5", title: "NQF 5 · Year 1", years: course.years.filter((year) => year.year === 1) },
    { id: "nqf6", title: "NQF 6 · Years 2 and 3", years: course.years.filter((year) => year.year > 1) }
  ]
}));

const packageSections = [
  {
    id: "higher-education",
    title: "Higher education modules",
    classification: "HEQSF · Credited",
    description: "Build a package from modules in CEA's one-year Higher Certificate programmes or three-year Diploma programmes. Mix options across programmes to match your team's needs.",
    pathways: [
      {
        id: "higher-certificates",
        title: "1-year programme options",
        description: "Higher Certificate modules for focused, foundational learning.",
        courses: education.courses.slice(0, 7).filter((course) => !removedHigherCertificateOptions.has(course.title))
      },
      {
        id: "diplomas",
        title: "3-year Diploma options",
        description: "Choose Diploma modules by NQF level and study year.",
        courses: diplomas
      }
    ]
  },
  {
    id: "short-courses",
    title: "Professional short courses",
    classification: "Non-credited",
    description: "Choose focused professional short-course topics. Options can be selected individually and combined into one proposed package.",
    pathways: [
      {
        id: "professional",
        title: "Professional short courses",
        description: "Choose specific topics within one or more short courses.",
        courses: trainingGroups[1].courses
      }
    ]
  },
  {
    id: "skills-development",
    title: "QCTO & skills development programmes",
    classification: "OQSF · Non-credited*",
    description: "Explore occupational skills, technical training and practical workplace options. Select the programmes or skill areas relevant to your workforce.",
    pathways: [
      {
        id: "qcto-programmes",
        title: "QCTO programmes",
        description: "Select one or more occupational skills programmes or qualifications.",
        courses: trainingGroups[2].courses,
        kind: "programmes"
      },
      {
        id: "practical-skills",
        title: "Practical skills & technical licensing",
        description: "Choose hands-on topics and technical training options.",
        courses: trainingGroups[3].courses
      }
    ]
  }
];

const selectedOptions = new Map();
const builderState = {
  step: 1,
  sectionId: "higher-education",
  pathwayId: null,
  diplomaLevel: null,
  qctoCategory: null,
  qctoCategoryTitle: null
};

const sectionIntro = document.querySelector("#section-intro");
const pathwayChooser = document.querySelector("#pathway-chooser");
const pathwayContent = document.querySelector("#pathway-content");
const selectionTotal = document.querySelector("#selection-total");
const selectionError = document.querySelector("#selection-error");
const deliveryError = document.querySelector("#delivery-error");
const headcountInput = document.querySelector("#headcount");
const minimumWarning = document.querySelector("#minimum-warning");
const packageSummary = document.querySelector("#package-summary");

function createElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
}

function currentSection() {
  return packageSections.find((section) => section.id === builderState.sectionId);
}

function updateSelectionCounts() {
  const total = selectedOptions.size;
  selectionTotal.textContent = String(total);
  packageSections.forEach((section) => {
    const count = Array.from(selectedOptions.values()).filter((option) => option.sectionId === section.id).length;
    document.querySelector(`[data-section-count="${section.id}"]`).textContent = String(count);
  });
}

function createPathwayCard(pathway, index) {
  const card = createElement("button", "pathway-card");
  card.type = "button";
  card.dataset.pathwayId = pathway.id;
  card.append(
    createElement("span", "pathway-index", `0${index + 1}`),
    createElement("span", "pathway-card-copy")
  );
  const copy = card.querySelector(".pathway-card-copy");
  copy.append(createElement("strong", "", pathway.title));
  if (pathway.description) copy.append(createElement("small", "", pathway.description));
  card.append(createElement("span", "pathway-arrow", "\u2192"));
  return card;
}

function renderCourseOptions(courses, section, pathway, level = null, hideCourseHeading = false) {
  const courseList = createElement("div", "course-option-list");
  if (pathway.kind === "programmes") {
    const courseCard = createElement("section", "module-group");
    const heading = createElement("div", "module-group-heading");
    heading.append(createElement("h5", "", "Choose programme(s)"));
    courseCard.append(heading);
    const optionList = createElement("div", "module-options");
    courses.forEach((course) => {
      const optionId = `${section.id}/${pathway.id}/${builderState.qctoCategory}/${course.title}`;
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.name = "training-options";
      checkbox.value = optionId;
      checkbox.checked = selectedOptions.has(optionId);
      checkbox.dataset.optionId = optionId;
      checkbox.dataset.sectionId = section.id;
      checkbox.dataset.sectionTitle = section.title;
      checkbox.dataset.pathwayTitle = pathway.title;
      checkbox.dataset.courseTitle = builderState.qctoCategoryTitle;
      checkbox.dataset.optionTitle = course.title;
      checkbox.dataset.optionDetail = [course.modules[0], course.length].filter(Boolean).join(" · ");
      checkbox.dataset.levelTitle = "";
      const label = createElement("label", "module-choice");
      const text = createElement("span", "module-choice-text");
      text.append(createElement("strong", "", course.title));
      text.append(createElement("small", "", checkbox.dataset.optionDetail));
      label.append(checkbox, createElement("span", "custom-check", ""), text);
      optionList.append(label);
    });
    courseCard.append(optionList);
    courseList.append(courseCard);
    return courseList;
  }

  courses.forEach((course) => {
    const courseIndex = pathway.courses.indexOf(course);
    const courseCard = createElement("section", "module-group");
    if (!hideCourseHeading) {
      const heading = createElement("div", "module-group-heading");
      heading.append(createElement("h5", "", course.title));
      if (course.length) heading.append(createElement("span", "course-length", course.length));
      courseCard.append(heading);
    }

    const courseYears = level
      ? course.levels.find((item) => item.id === level.id)?.years ?? []
      : [{ year: null, modules: course.modules }];
    courseYears.forEach((year) => {
      const yearGroup = createElement("div", "diploma-year-group");
      if (year.year) yearGroup.append(createElement("h6", "diploma-year-heading", `Year ${year.year}`));
      if (year.note) yearGroup.append(createElement("p", "diploma-year-note", year.note));

      const optionList = createElement("div", "module-options");
      year.modules.forEach((module, moduleIndex) => {
        const optionId = `${section.id}/${pathway.id}/${level?.id ?? "all"}/${courseIndex}/${year.year ?? "all"}/${moduleIndex}`;
        const label = createElement("label", "module-choice");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "training-options";
        checkbox.value = optionId;
        checkbox.checked = selectedOptions.has(optionId);
        checkbox.dataset.optionId = optionId;
        checkbox.dataset.sectionId = section.id;
        checkbox.dataset.sectionTitle = section.title;
        checkbox.dataset.pathwayTitle = pathway.title;
        checkbox.dataset.courseTitle = course.title;
        checkbox.dataset.optionTitle = module;
        checkbox.dataset.optionDetail = "";
        checkbox.dataset.levelTitle = level?.title ?? "";
        checkbox.dataset.yearTitle = year.year ? `Year ${year.year}` : "";
        label.append(checkbox, createElement("span", "custom-check", ""));
        const text = createElement("span", "module-choice-text");
        text.append(createElement("strong", "", module));
        label.append(text);
        optionList.append(label);
      });
      if (year.modules.length > 0) yearGroup.append(optionList);
      courseCard.append(yearGroup);
    });
    courseList.append(courseCard);
  });
  return courseList;
}

function renderDiplomaAccordions(pathway, section) {
  const accordionList = createElement("div", "diploma-accordion-list");
  pathway.courses.forEach((course, courseIndex) => {
    const accordion = createElement("section", "diploma-accordion");
    const toggle = createElement("button", "diploma-card");
    toggle.type = "button";
    toggle.dataset.diplomaToggle = String(courseIndex);
    toggle.setAttribute("aria-expanded", "false");
    toggle.append(
      createElement("span", "diploma-card-length", course.length),
      createElement("strong", "diploma-card-title", course.title),
      createElement("span", "diploma-card-meta", `NQF 5 · ${course.years[0].modules.length} Year 1 modules`),
      createElement("span", "diploma-card-meta", `NQF 6 · ${course.years.slice(1).reduce((total, year) => total + year.modules.length, 0) || "Customisable"} Years 2–3 modules`),
      createElement("span", "diploma-card-action", "View module options")
    );
    const indicator = createElement("span", "diploma-card-indicator", "+");
    indicator.setAttribute("aria-hidden", "true");
    toggle.append(indicator);

    const panel = createElement("div", "diploma-accordion-panel");
    panel.hidden = true;
    panel.id = `diploma-options-${courseIndex}`;
    toggle.setAttribute("aria-controls", panel.id);

    course.levels.forEach((level) => {
      const levelGroup = createElement("section", "diploma-level-group");
      levelGroup.append(
        createElement("h6", "diploma-level-heading", level.title),
        createElement("p", "diploma-level-description", level.id === "nqf5" ? "Year 1 modules" : "Years 2 and 3 modules")
      );
      levelGroup.append(renderCourseOptions([course], section, pathway, level));
      panel.append(levelGroup);
    });

    accordion.append(toggle, panel);
    accordionList.append(accordion);
  });
  return accordionList;
}

function renderShortCourseAccordions(pathway, section) {
  const accordionList = createElement("div", "diploma-accordion-list");
  pathway.courses.forEach((course, courseIndex) => {
    const accordion = createElement("section", "diploma-accordion");
    const toggle = createElement("button", "diploma-card");
    toggle.type = "button";
    toggle.dataset.shortCourseToggle = String(courseIndex);
    toggle.setAttribute("aria-expanded", "false");
    toggle.append(
      createElement("strong", "diploma-card-title", course.title),
      createElement("span", "diploma-card-action", "View course options")
    );
    const indicator = createElement("span", "diploma-card-indicator", "+");
    indicator.setAttribute("aria-hidden", "true");
    toggle.append(indicator);

    const panel = createElement("div", "diploma-accordion-panel short-course-accordion-panel");
    panel.hidden = true;
    panel.id = `short-course-options-${courseIndex}`;
    toggle.setAttribute("aria-controls", panel.id);

    course.moduleGroups.forEach((group, groupIndex) => {
      const moduleGroup = createElement("section", "short-course-module-group");
      moduleGroup.append(createElement("h6", "diploma-year-heading", group.title));
      const options = createElement("div", "module-options");
      group.modules.forEach((module, moduleIndex) => {
        const optionId = `${section.id}/${pathway.id}/${courseIndex}/${groupIndex}/${moduleIndex}`;
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "training-options";
        checkbox.value = optionId;
        checkbox.checked = selectedOptions.has(optionId);
        checkbox.dataset.optionId = optionId;
        checkbox.dataset.sectionId = section.id;
        checkbox.dataset.sectionTitle = section.title;
        checkbox.dataset.pathwayTitle = pathway.title;
        checkbox.dataset.courseTitle = course.title;
        checkbox.dataset.optionTitle = module;
        checkbox.dataset.optionDetail = "";
        checkbox.dataset.levelTitle = "";
        checkbox.dataset.yearTitle = group.title;

        const label = createElement("label", "module-choice");
        label.append(checkbox, createElement("span", "custom-check", ""));
        const text = createElement("span", "module-choice-text");
        text.append(createElement("strong", "", module));
        label.append(text);
        options.append(label);
      });
      moduleGroup.append(options);
      panel.append(moduleGroup);
    });

    accordion.append(toggle, panel);
    accordionList.append(accordion);
  });
  return accordionList;
}

function renderPracticalSkillGroups(pathway, section) {
  const groups = new Map();
  pathway.courses.forEach((course) => {
    const heading = course.optionHeading;
    if (!groups.has(heading)) groups.set(heading, []);
    groups.get(heading).push(course);
  });

  const container = createElement("div", "practical-skill-groups");
  Array.from(groups.entries()).forEach(([heading, courses], groupIndex) => {
    const accordion = createElement("section", "diploma-accordion practical-skill-accordion");
    const toggle = createElement("button", "diploma-card practical-skill-card");
    toggle.type = "button";
    toggle.dataset.practicalSkillToggle = String(groupIndex);
    toggle.setAttribute("aria-expanded", "false");
    const optionCount = courses.reduce((total, course) => total + course.modules.length, 0);
    toggle.append(
      createElement("strong", "diploma-card-title", heading),
      createElement("span", "diploma-card-meta", `${optionCount} options`)
    );
    const action = createElement("span", "diploma-card-action", "View available options");
    toggle.append(action);
    const indicator = createElement("span", "diploma-card-indicator", "+");
    indicator.setAttribute("aria-hidden", "true");
    toggle.append(indicator);

    const panel = createElement("div", "diploma-accordion-panel practical-skill-panel");
    panel.hidden = true;
    panel.id = `practical-skill-options-${groupIndex}`;
    toggle.setAttribute("aria-controls", panel.id);
    panel.append(renderCourseOptions(courses, section, pathway, null, courses.length === 1));

    accordion.append(toggle, panel);
    container.append(accordion);
  });
  return container;
}

function renderSection() {
  const section = currentSection();
  sectionIntro.replaceChildren(
    createElement("p", "section-classification", section.classification),
    createElement("h4", "", section.title),
    createElement("p", "section-description", section.description)
  );
  pathwayChooser.replaceChildren();
  pathwayContent.replaceChildren();

  if (section.id === "higher-education" && !builderState.pathwayId) {
    section.pathways.forEach((pathway, index) => pathwayChooser.append(createPathwayCard(pathway, index)));
  } else if (section.pathways.length > 1 && !builderState.pathwayId) {
    section.pathways.forEach((pathway, index) => pathwayChooser.append(createPathwayCard(pathway, index)));
  } else {
    const pathway = section.pathways.find((item) => item.id === (builderState.pathwayId ?? section.pathways[0].id));
    if (section.pathways.length > 1 || section.id === "higher-education") {
      const back = createElement("button", "back-link", "\u2190 All " + section.title.toLowerCase());
      back.type = "button";
      back.dataset.backToPathways = "true";
      pathwayContent.append(back);
    }

    if (pathway.id === "qcto-programmes") {
      if (!builderState.qctoCategory) {
        pathwayContent.append(
          createElement("h5", "subpath-heading", "Choose a QCTO programme type"),
          createElement("p", "subpath-description", "Browse occupational skills programmes or part and full qualifications.")
        );
        const categoryCards = createElement("div", "pathway-chooser");
        [
          {
            id: "occupational-skills",
            title: "QCTO Occupational skills programmes",
            description: "Occupational skills programmes listed in the supplied brief."
          },
          {
            id: "part-full-qualifications",
            title: "QCTO Part and full qualifications",
            description: "Occupational certificates and qualifications listed in the supplied brief."
          }
        ].forEach((category, index) => {
          const card = createPathwayCard(category, index);
          card.removeAttribute("data-pathway-id");
          card.dataset.qctoCategory = category.id;
          categoryCards.append(card);
        });
        pathwayContent.append(categoryCards);
        return;
      }

      const backToCategories = createElement("button", "back-link", "\u2190 All QCTO programme types");
      backToCategories.type = "button";
      backToCategories.dataset.backToQctoCategories = "true";
      pathwayContent.append(backToCategories);

      const qctoCourses = trainingGroups[2].courses.filter((course) => {
        const isSkillsProgramme = course.modules[0].startsWith("Occupational Skills Programme");
        return builderState.qctoCategory === "occupational-skills" ? isSkillsProgramme : !isSkillsProgramme;
      });
      const categoryHeading = createElement("div", "pathway-title");
      categoryHeading.append(
        createElement("h5", "", builderState.qctoCategoryTitle),
        createElement("span", "course-count", `${qctoCourses.length} options`)
      );
      pathwayContent.append(categoryHeading, renderCourseOptions(qctoCourses, section, pathway));
      return;
    }

    const courseHeading = createElement("div", "pathway-title");
    courseHeading.append(
      createElement("h5", "", pathway.title),
      createElement("span", "course-count", `${pathway.courses.length} programme options`)
    );
    pathwayContent.append(courseHeading);
    if (pathway.description) pathwayContent.append(createElement("p", "pathway-description", pathway.description));
    if (pathway.id === "diplomas") {
      pathwayContent.append(createElement("p", "level-disclaimer", "Year and NQF groupings are a working interpretation of the supplied brief and must be confirmed by CEA."));
      pathwayContent.append(renderDiplomaAccordions(pathway, section));
      return;
    }
    if (section.id === "short-courses") {
      pathwayContent.append(renderShortCourseAccordions(pathway, section));
      return;
    }
    if (pathway.id === "practical-skills") {
      pathwayContent.append(renderPracticalSkillGroups(pathway, section));
      return;
    }
    pathwayContent.append(renderCourseOptions(pathway.courses, section, pathway));
  }
}

function setStep(step) {
  builderState.step = step;
  document.querySelector("#builder-welcome").hidden = true;
  document.querySelector("#builder-progress").hidden = false;
  document.querySelector("#package-form").hidden = false;
  document.querySelectorAll("[data-builder-panel]").forEach((panel) => {
    panel.hidden = Number(panel.dataset.builderPanel) !== step;
  });
  document.querySelectorAll("[data-progress-step]").forEach((progress) => {
    const number = Number(progress.dataset.progressStep);
    progress.classList.toggle("is-active", number === step);
    progress.classList.toggle("is-complete", number < step);
  });
  document.querySelector(".builder-progress").setAttribute("aria-label", `Package builder, step ${step} of 3`);
  document.querySelector(".package-builder").scrollIntoView({ behavior: "smooth", block: "start" });
}

document.querySelector("#start-package-build").addEventListener("click", () => {
  setStep(1);
  document.querySelector(".section-tab").focus({ preventScroll: true });
});

function renderSummary() {
  packageSummary.replaceChildren();
  const selectedBySection = packageSections.map((section) => ({
    section,
    options: Array.from(selectedOptions.values()).filter((option) => option.sectionId === section.id)
  })).filter((group) => group.options.length > 0);

  selectedBySection.forEach(({ section, options }) => {
    const group = createElement("section", "summary-section");
    const heading = createElement("div", "summary-section-heading");
    heading.append(createElement("h4", "", section.title), createElement("span", "", `${options.length} selected`));
    group.append(heading);
    const list = createElement("ul", "summary-options");
    options.forEach((option) => {
      const item = createElement("li", "");
      const context = [option.pathwayTitle, option.levelTitle, option.yearTitle, option.courseTitle].filter(Boolean).join(" · ");
      item.append(createElement("strong", "", option.optionTitle));
      if (option.optionDetail) item.append(createElement("small", "", option.optionDetail));
      item.append(createElement("span", "summary-context", context));
      list.append(item);
    });
    group.append(list);
    packageSummary.append(group);
  });

  const delivery = document.querySelector('input[name="delivery"]:checked').value;
  const schedule = document.querySelector("#schedule-preference").value.trim();
  const details = createElement("section", "summary-delivery");
  details.append(
    createElement("h4", "", "Cohort & delivery"),
    createElement("p", "", `${headcountInput.value} people · ${delivery}`)
  );
  if (schedule) details.append(createElement("p", "", `Preferred timing: ${schedule}`));
  packageSummary.append(details);
}

document.querySelectorAll(".section-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    builderState.sectionId = tab.dataset.section;
    builderState.pathwayId = null;
    builderState.diplomaLevel = null;
    builderState.qctoCategory = null;
    builderState.qctoCategoryTitle = null;
    document.querySelectorAll(".section-tab").forEach((item) => {
      const active = item === tab;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-selected", String(active));
    });
    renderSection();
  });
});

pathwayChooser.addEventListener("click", (event) => {
  const card = event.target.closest("[data-pathway-id]");
  if (!card) return;
  builderState.pathwayId = card.dataset.pathwayId;
  builderState.diplomaLevel = null;
  builderState.qctoCategory = null;
  builderState.qctoCategoryTitle = null;
  renderSection();
});

pathwayContent.addEventListener("click", (event) => {
  if (event.target.closest("[data-back-to-pathways]")) {
    builderState.pathwayId = null;
    builderState.diplomaLevel = null;
    builderState.diplomaCourseTitle = null;
    builderState.qctoCategory = null;
    builderState.qctoCategoryTitle = null;
    renderSection();
    return;
  }
  const qctoCategory = event.target.closest("[data-qcto-category]");
  if (qctoCategory) {
    builderState.qctoCategory = qctoCategory.dataset.qctoCategory;
    builderState.qctoCategoryTitle = qctoCategory.querySelector(".pathway-card-copy strong").textContent;
    renderSection();
    return;
  }
  if (event.target.closest("[data-back-to-qcto-categories]")) {
    builderState.qctoCategory = null;
    builderState.qctoCategoryTitle = null;
    renderSection();
    return;
  }
  const diplomaToggle = event.target.closest("[data-diploma-toggle]");
  if (diplomaToggle) {
    const panel = document.getElementById(diplomaToggle.getAttribute("aria-controls"));
    const expanded = diplomaToggle.getAttribute("aria-expanded") === "true";
    diplomaToggle.setAttribute("aria-expanded", String(!expanded));
    panel.hidden = expanded;
    return;
  }
  const shortCourseToggle = event.target.closest("[data-short-course-toggle]");
  if (shortCourseToggle) {
    const panel = document.getElementById(shortCourseToggle.getAttribute("aria-controls"));
    const expanded = shortCourseToggle.getAttribute("aria-expanded") === "true";
    shortCourseToggle.setAttribute("aria-expanded", String(!expanded));
    panel.hidden = expanded;
    return;
  }
  const practicalSkillToggle = event.target.closest("[data-practical-skill-toggle]");
  if (practicalSkillToggle) {
    const panel = document.getElementById(practicalSkillToggle.getAttribute("aria-controls"));
    const expanded = practicalSkillToggle.getAttribute("aria-expanded") === "true";
    practicalSkillToggle.setAttribute("aria-expanded", String(!expanded));
    panel.hidden = expanded;
  }
});

pathwayContent.addEventListener("change", (event) => {
  const checkbox = event.target.closest('input[name="training-options"]');
  if (!checkbox) return;
  if (checkbox.checked) selectedOptions.set(checkbox.dataset.optionId, { ...checkbox.dataset });
  else selectedOptions.delete(checkbox.dataset.optionId);
  selectionError.hidden = true;
  updateSelectionCounts();
});

document.querySelector("#continue-to-delivery").addEventListener("click", () => {
  if (selectedOptions.size === 0) {
    selectionError.hidden = false;
    selectionError.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }
  selectionError.hidden = true;
  setStep(2);
});

document.querySelectorAll("[data-headcount-adjust]").forEach((button) => {
  button.addEventListener("click", () => {
    const value = Number(headcountInput.value) || 5;
    headcountInput.value = String(Math.max(0, value + Number(button.dataset.headcountAdjust)));
    headcountInput.dispatchEvent(new Event("input", { bubbles: true }));
  });
});

headcountInput.addEventListener("input", () => {
  minimumWarning.hidden = headcountInput.value === "" || Number(headcountInput.value) >= 5;
  deliveryError.hidden = true;
});

document.querySelector("#package-form").addEventListener("change", (event) => {
  if (event.target.name === "delivery") deliveryError.hidden = true;
});

document.querySelector("#continue-to-review").addEventListener("click", () => {
  const headcount = Number(headcountInput.value);
  const delivery = document.querySelector('input[name="delivery"]:checked');
  const validHeadcount = Number.isInteger(headcount) && headcount >= 5;
  minimumWarning.hidden = validHeadcount;
  deliveryError.hidden = validHeadcount && Boolean(delivery);
  if (!validHeadcount || !delivery) {
    if (!validHeadcount) headcountInput.focus();
    else document.querySelector(".delivery-options").scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }
  renderSummary();
  setStep(3);
});

document.querySelectorAll("[data-go-to]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector("#submission-notice").hidden = true;
    document.querySelector("#submit-package").disabled = false;
    setStep(Number(button.dataset.goTo));
  });
});

document.querySelector("#submit-package").addEventListener("click", (event) => {
  const contactEmail = document.querySelector("#contact-email");
  if (!document.querySelector("#package-form").reportValidity()) return;

  const notice = document.querySelector("#submission-notice");
  document.querySelector("#submission-recipient").textContent = contactEmail.value.trim();
  notice.hidden = false;
  event.currentTarget.disabled = true;
  notice.scrollIntoView({ behavior: "smooth", block: "center" });
});

renderSection();
updateSelectionCounts();
