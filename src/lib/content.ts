export type Locale = "es" | "en";

type NavKeys =
  | "hero"
  | "about"
  | "education"
  | "experience"
  | "skills"
  | "certifications"
  | "languages"
  | "contact";

export type NavItem = {
  id: NavKeys;
  href: `#${NavKeys}`;
  label: string;
};

export type EducationItem = {
  institution: string;
  location: string;
  title: string;
  period: string;
  current?: boolean;
  placeholder?: boolean;
};

export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  placeholder?: boolean;
};

export type SkillGroup = {
  name: string;
  skills: string[];
};

export type CertificationItem = {
  name: string;
  issuer: string;
  year?: string;
  placeholder?: boolean;
};

export type LanguageItem = {
  name: string;
  level: string;
  note?: string;
  badge?: string;
};

export type ContactInfo = {
  email: string;
  phone: string;
  linkedin: string;
  contactCta: string;
  emailLabel: string;
  phoneLabel: string;
  linkedinLabel: string;
};

export type HeroContent = {
  name: string;
  title: string;
  subtitle: string;
  locationLine: string;
  scrollHint: string;
  badge: string;
  availability: string;
  ctaLabel: string;
  cvLabel: string;
  altText: string;
};

export type AboutContent = {
  heading: string;
  body: string[];
};

export type SectionLabels = {
  education: string;
  experience: string;
  skills: string;
  certifications: string;
  languages: string;
  contact: string;
  about: string;
};

export type SiteCopy = {
  locale: Locale;
  nav: NavItem[];
  hero: HeroContent;
  about: AboutContent;
  education: {
    heading: string;
    items: EducationItem[];
    currentLabel?: string;
  };
  experience: {
    heading: string;
    items: ExperienceItem[];
  };
  skills: {
    heading: string;
    intro: string;
    groups: SkillGroup[];
  };
  certifications: {
    heading: string;
    items: CertificationItem[];
  };
  languages: {
    heading: string;
    items: LanguageItem[];
  };
  contact: {
    heading: string;
    intro: string;
    info: ContactInfo;
    printNote?: string;
  };
  sectionLabels: SectionLabels;
};

export const copy: Record<Locale, SiteCopy> = {
  es: {
    locale: "es",
    nav: [
      { id: "hero", href: "#hero", label: "Inicio" },
      { id: "about", href: "#about", label: "Perfil" },
      { id: "education", href: "#education", label: "Formación" },
      { id: "experience", href: "#experience", label: "Experiencia" },
      { id: "skills", href: "#skills", label: "Habilidades" },
      { id: "certifications", href: "#certifications", label: "Certificaciones" },
      { id: "languages", href: "#languages", label: "Idiomas" },
      { id: "contact", href: "#contact", label: "Contacto" }
    ],
    hero: {
      name: "Guiny Zapata Cornejo",
      title: "Higienista Dental · Especialista en Prótesis Dental",
      subtitle: "Cuidado integral, precisión clínica y sonrisas con confianza.",
      locationLine: "Madrid, España · Originaria de Perú",
      scrollHint: "Desplázate para ver mi trayectoria",
      badge: "",
      availability: "Disponible para nuevas oportunidades profesionales",
      ctaLabel: "Ver perfil",
      cvLabel: "Currículum Vitae",
      altText: "Retrato profesional de Guiny Zapata Cornejo"
    },
    about: {
      heading: "Perfil profesional",
      body: [
        "Soy Guiny Zapata Cornejo, higienista bucodental y protésica dental en formación, con experiencia clínica y de laboratorio en Madrid.",
        "Me apasiona integrar la prevención en salud bucal con soluciones protésicas funcionales y estéticas, acompañando a cada paciente con cercanía y claridad en todo el proceso.",
        "He trabajado como higienista bucodental en Dentyclass y en clínicas especializadas en ortodoncia invisible, así como en Laboratorio Aragoneses, donde he reforzado mis competencias en prótesis fija y removible.",
        "Actualmente curso el Grado Superior en Prótesis Dental en ILERNA (Madrid) y sigo perfeccionando mi dominio de flujos digitales CAD/CAM y escáneres intraorales."
      ]
    },
    education: {
      heading: "Formación académica",
      items: [
        {
          institution: "ILERNA",
          location: "Madrid, España",
          title: "Grado Superior en Prótesis Dental",
          period: "octubre 2023 – junio 2025 (en curso)",
          current: true
        },
        {
          institution: "Organización Profesional Española (OPESA)",
          location: "Madrid, España",
          title: "Grado Superior en Higiene Bucodental",
          period: "octubre 2017 – junio 2019",
          placeholder: false
        },
        {
          institution: "Stericycle",
          location: "Madrid, España",
          title: "Curso de operador de rayos X",
          period: "noviembre 2022",
          placeholder: false
        }
      ],
      currentLabel: "En curso"
    },
    experience: {
      heading: "Experiencia profesional",
      items: [
        {
          role: "Higienista Bucodental",
          company: "Dentyclass",
          location: "Madrid, España",
          period: "abril 2021 – actualidad",
          placeholder: false,
          bullets: [
            "Asistencia en gabinete dental en distintos tratamientos odontológicos, incluyendo colocación de implantes, cirugías guiadas, injertos óseos con membranas reabsorbibles y cirugía periodontal a colgajo.",
            "Realización de técnicas radiológicas y toma de fotografías dentales para planificación y seguimiento de casos.",
            "Manejo de escáner intraoral iTero y de escáner extraoral 3D, integrando registros digitales en flujos de trabajo CAD‑CAM.",
            "Eliminación de cálculo y tinciones mediante profilaxis dentales, así como educación continua en higiene oral.",
            "Apoyo en el área de prótesis dental: vaciados para modelos de estudio, confección de férulas de blanqueamiento y elaboración de retenedores estéticos.",
            "Elaboración de presupuestos dentales y gestión básica de tratamientos en el software GESDEN."
          ]
        },
        {
          role: "Protésica dental",
          company: "Laboratorio Aragoneses",
          location: "Madrid, España",
          period: "noviembre 2024 – enero 2025",
          placeholder: false,
          bullets: [
            "Colaboración en la confección de sobredentaduras, prótesis fijas y prótesis removibles de resina y metálicas.",
            "Pulido, ajuste y acabado de prótesis dentales con enfoque en precisión y confort para el paciente.",
            "Rotación por distintas áreas del laboratorio: colado, cerámica, acrílicos y CAD‑CAM.",
            "Asistencia en procesos digitales y en el flujo de trabajo CAD‑CAM."
          ]
        },
        {
          role: "Higienista Bucodental",
          company: "Ortodoncia Invisible AC",
          location: "Madrid, España",
          period: "febrero 2021 – marzo 2021",
          placeholder: false,
          bullets: [
            "Exposición inicial al flujo completo de ortodoncia invisible en clínica especializada.",
            "Apoyo en escaneado intraoral, gestión básica de casos y seguimiento del tratamiento."
          ]
        },
        {
          role: "Auxiliar de Odontología",
          company: "Clínica Santa María",
          location: "Madrid, España",
          period: "octubre 2019 – enero 2020",
          placeholder: false,
          bullets: [
            "Apoyo integral en gabinete a odontólogos en tratamientos restauradores, quirúrgicos y preventivos.",
            "Preparación de gabinete, instrumental y materiales, siguiendo protocolos de desinfección y esterilización.",
            "Acompañamiento al paciente antes, durante y después de los procedimientos para favorecer una experiencia segura y tranquila."
          ]
        },
        {
          role: "Higienista Bucodental",
          company: "Centro Europeo de Implantología Oral",
          location: "Madrid, España",
          period: "marzo 2019 – junio 2019",
          placeholder: false,
          bullets: [
            "Asistencia en tratamientos de implantología oral y cirugías periodontales.",
            "Realización de profilaxis y refuerzo de técnicas de higiene oral adaptadas a cada paciente.",
            "Apoyo en la toma de registros, radiografías y fotografías clínicas para el seguimiento de casos complejos."
          ]
        }
      ]
    },
    skills: {
      heading: "Habilidades",
      intro:
        "Combino experiencia clínica en higiene bucodental, implantología y ortodoncia invisible con conocimientos en prótesis dental y flujos digitales CAD/CAM.",
      groups: [
        {
          name: "Habilidades clínicas",
          skills: [
            "Profilaxis dental, detartraje supragingival y mantenimiento periodontal básico",
            "Asistencia en implantología oral, cirugías guiadas, injertos óseos y cirugía periodontal",
            "Manejo asistencial de ortodoncia invisible (escaneos, ataches, seguimiento básico)",
            "Toma de impresiones, registros fotográficos y radiológicos",
            "Confección de férulas de blanqueamiento y retenedores estéticos",
            "Colaboración en confección, ajuste y acabado de prótesis fijas, removibles y sobredentaduras"
          ]
        },
        {
          name: "Herramientas técnicas y software",
          skills: [
            "Interpretación de prescripciones clínicas",
            "Conocimientos básicos de flujo digital CAD/CAM en clínica y laboratorio",
            "Manejo de escáner intraoral iTero y escáner extraoral 3D",
            "Uso habitual de software clínico e historial digital de pacientes (incluido GESDEN)"
          ]
        },
        {
          name: "Habilidades personales",
          skills: [
            "Alta atención al detalle y precisión en el trabajo manual",
            "Capacidad de aprendizaje rápido y adaptación a nuevos entornos",
            "Responsabilidad, organización y trabajo en equipo",
            "Comunicación clara y respetuosa con pacientes y equipos multidisciplinarios"
          ]
        }
      ]
    },
    certifications: {
      heading: "Certificaciones y cursos",
      items: [
        {
          name: "Curso de operador de rayos X",
          issuer: "Stericycle",
          year: "2022",
          placeholder: false
        },
        {
          name: "Cursos de actualización en blanqueamiento dental, ortodoncia e Invisalign",
          issuer: "Diversas entidades de formación continua",
          placeholder: false
        }
      ]
    },
    languages: {
      heading: "Idiomas",
      items: [
        {
          name: "Español",
          level: "Nativo",
          badge: "Nativo"
        },
        {
          name: "Inglés",
          level: "Avanzado (B2–C1)",
          note: "Capacidad sólida para comunicarme con pacientes internacionales en un contexto clínico y académico.",
          badge: "B2–C1"
        }
      ]
    },
    contact: {
      heading: "Contacto",
      intro:
        "Estoy disponible para colaborar con clínicas, laboratorios dentales y proyectos relacionados con salud bucal y prótesis dental.",
      info: {
        email: "zapatacornejoguiny@gmail.com",
        phone: "+34 603 325 755",
        linkedin: "https://es.linkedin.com/in/guiny-zapata-cornejo-b0815b202",
        contactCta: "Envíame un mensaje",
        emailLabel: "Correo electrónico",
        phoneLabel: "Teléfono",
        linkedinLabel: "LinkedIn"
      },
      printNote: "Al imprimir, esta página se adapta al formato tradicional de CV."
    },
    sectionLabels: {
      about: "Perfil profesional",
      education: "Formación académica",
      experience: "Experiencia profesional",
      skills: "Habilidades",
      certifications: "Certificaciones y cursos",
      languages: "Idiomas",
      contact: "Contacto"
    }
  },
  en: {
    locale: "en",
    nav: [
      { id: "hero", href: "#hero", label: "Home" },
      { id: "about", href: "#about", label: "Profile" },
      { id: "education", href: "#education", label: "Education" },
      { id: "experience", href: "#experience", label: "Experience" },
      { id: "skills", href: "#skills", label: "Skills" },
      { id: "certifications", href: "#certifications", label: "Certifications" },
      { id: "languages", href: "#languages", label: "Languages" },
      { id: "contact", href: "#contact", label: "Contact" }
    ],
    hero: {
      name: "Guiny Zapata Cornejo",
      title: "Dental Hygienist · Dental Prosthesis Specialist",
      subtitle: "Comprehensive care, clinical precision and confident smiles.",
      locationLine: "Madrid, Spain · Originally from Peru",
      scrollHint: "Scroll to explore my experience",
      badge: "",
      availability: "Open to new professional opportunities",
      ctaLabel: "View profile",
      cvLabel: "Curriculum Vitae",
      altText: "Professional portrait of Guiny Zapata Cornejo"
    },
    about: {
      heading: "Professional profile",
      body: [
        "I am Guiny Zapata Cornejo, a dental hygienist with clinical and laboratory experience and ongoing training in dental prosthetics, based in Madrid.",
        "I enjoy combining preventive oral care, orthodontic support and prosthetic solutions to help patients regain function and confidence in a calm, well‑explained way.",
        "My background includes work as a dental hygienist at Dentyclass and orthodontic clinics focused on clear aligner therapy, as well as prosthetic work at Laboratorio Aragoneses.",
        "I am currently studying a Higher Degree in Dental Prosthetics at ILERNA (Madrid) while strengthening my skills in digital workflows, CAD/CAM and intraoral scanning."
      ]
    },
    education: {
      heading: "Education",
      items: [
        {
          institution: "ILERNA",
          location: "Madrid, Spain",
          title: "Higher Degree in Dental Prosthetics",
          period: "October 2023 – June 2025 (in progress)",
          current: true
        },
        {
          institution: "Organización Profesional Española (OPESA)",
          location: "Madrid, Spain",
          title: "Higher Degree in Dental Hygiene",
          period: "October 2017 – June 2019",
          placeholder: false
        },
        {
          institution: "Stericycle",
          location: "Madrid, Spain",
          title: "Dental X‑ray Operator Course",
          period: "November 2022",
          placeholder: false
        }
      ],
      currentLabel: "In progress"
    },
    experience: {
      heading: "Professional experience",
      items: [
        {
          role: "Dental Hygienist",
          company: "Dentyclass",
          location: "Madrid, Spain",
          period: "April 2021 – Present",
          placeholder: false,
          bullets: [
            "Assisted with general and specialised dental treatments while maintaining high standards of quality and infection control.",
            "Supported the prosthetics area by pouring models for study casts, fabricating whitening trays and making aesthetic retainers.",
            "Participated in clear‑aligner orthodontic treatments, helping with intraoral scans, attachment placement and removal, and basic treatment follow‑up.",
            "Operated an iTero intraoral scanner and managed digital records, as well as photographic and radiographic documentation."
          ]
        },
        {
          role: "Dental Prosthesis Technician",
          company: "Laboratorio Aragoneses",
          location: "Madrid, Spain",
          period: "November 2024 – January 2025",
          placeholder: false,
          bullets: [
            "Collaborated in the fabrication of overdentures, fixed prostheses and removable resin and metal prostheses.",
            "Polished, adjusted and finished dental prostheses with a focus on precision and patient comfort.",
            "Rotated through different areas of the laboratory including casting, ceramics, acrylics and CAD‑CAM.",
            "Assisted with digital processes and CAD/CAM workflows."
          ]
        },
        {
          role: "Dental Hygienist",
          company: "Ortodoncia Invisible AC",
          location: "Madrid, Spain",
          period: "February 2021 – March 2021",
          placeholder: false,
          bullets: [
            "Gained initial exposure to the full clinical workflow of clear‑aligner orthodontics in a specialised clinic.",
            "Assisted with intraoral scanning, basic case management and treatment follow‑up."
          ]
        }
      ]
    },
    skills: {
      heading: "Skills",
      intro:
        "I bring together clinical experience in dental hygiene, implantology and clear‑aligner orthodontics with growing expertise in dental prosthetics and digital workflows.",
      groups: [
        {
          name: "Clinical skills",
          skills: [
            "Dental prophylaxis, supragingival scaling and basic periodontal maintenance",
            "Chairside assistance in implant placement, guided surgeries, bone grafts and periodontal flap surgery",
            "Assisting with clear‑aligner orthodontics (scans, attachments, basic follow‑up)",
            "Conventional impressions and clinical photography and radiography",
            "Fabrication of whitening trays and aesthetic retainers",
            "Collaboration in the fabrication, adjustment and finishing of fixed, removable prostheses and overdentures"
          ]
        },
        {
          name: "Technical / software",
          skills: [
            "Interpretation of clinical prescriptions",
            "Basic knowledge of digital CAD/CAM workflows in clinic and lab",
            "Use of iTero intraoral scanner and extraoral 3D scanner",
            "Good command of clinical software and electronic health records (including GESDEN)"
          ]
        },
        {
          name: "Soft skills",
          skills: [
            "High attention to detail and precision in manual work",
            "Fast learner with strong adaptability",
            "Responsible, organised and comfortable working in teams",
            "Clear, empathetic communication with both patients and colleagues"
          ]
        }
      ]
    },
    certifications: {
      heading: "Certifications & courses",
      items: [
        {
          name: "Basic Life Support (BLS) / CPR for healthcare providers",
          issuer: "Organization / Professional college",
          year: "Year",
          placeholder: true
        },
        {
          name: "Infection‑control and biosafety in dental clinics",
          issuer: "Institution / University",
          year: "Year",
          placeholder: true
        },
        {
          name: "Update course in CAD/CAM prosthodontics",
          issuer: "Continuing‑education centre",
          year: "Year",
          placeholder: true
        }
      ]
    },
    languages: {
      heading: "Languages",
      items: [
        {
          name: "Spanish",
          level: "Native",
          badge: "Native"
        },
        {
          name: "English",
          level: "Advanced (B2–C1)",
          note: "Confident communicating with international patients in both clinical and academic settings.",
          badge: "B2–C1"
        }
      ]
    },
    contact: {
      heading: "Contact",
      intro:
        "I am open to collaborating with clinics, dental laboratories and projects related to oral health and dental prosthetics.",
      info: {
        email: "zapatacornejoguiny@gmail.com",
        phone: "+34 603 325 755",
        linkedin: "https://es.linkedin.com/in/guiny-zapata-cornejo-b0815b202",
        contactCta: "Send me a message",
        emailLabel: "Email",
        phoneLabel: "Phone",
        linkedinLabel: "LinkedIn"
      },
      printNote: "When printing, this page adapts to a traditional CV layout."
    },
    sectionLabels: {
      about: "Professional profile",
      education: "Education",
      experience: "Professional experience",
      skills: "Skills",
      certifications: "Certifications & courses",
      languages: "Languages",
      contact: "Contact"
    }
  }
};

