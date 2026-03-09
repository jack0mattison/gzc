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
      badge: "Atención centrada en el paciente",
      availability: "Disponible para nuevas oportunidades profesionales",
      ctaLabel: "Ver perfil",
      cvLabel: "Currículum Vitae",
      altText: "Retrato profesional de Guiny Zapata Cornejo"
    },
    about: {
      heading: "Perfil profesional",
      body: [
        "Soy Guiny Zapata Cornejo, higienista dental y especialista en prótesis dental peruana, actualmente radicada en Madrid.",
        "Me apasiona combinar la prevención en salud bucal con soluciones protésicas funcionales y estéticas que devuelvan confianza a cada paciente.",
        "Mi enfoque es cercano y respetuoso: escucho, explico y acompaño para que ustedes se sientan seguros en cada etapa del tratamiento.",
        "En este momento continúo perfeccionando mi formación en Dentyclass (Madrid), donde profundizo en técnicas actuales de higiene y prótesis dental."
      ]
    },
    education: {
      heading: "Formación académica",
      items: [
        {
          institution: "Dentyclass",
          location: "Madrid, España",
          title: "Programa de Higiene Dental y Prótesis Dental",
          period: "2023 – 2025 (en curso)",
          current: true
        },
        {
          institution: "Centro de Formación en Higiene y Prótesis Dental",
          location: "Madrid, España",
          title: "Formación integral en Higiene Bucodental y Prótesis Dental",
          period: "2020 – 2023",
          placeholder: true
        }
      ],
      currentLabel: "En curso"
    },
    experience: {
      heading: "Experiencia profesional",
      items: [
        {
          role: "Higienista Dental – Prácticas clínicas",
          company: "Clínica docente Dentyclass",
          location: "Madrid, España",
          period: "2023 – Actualidad",
          placeholder: true,
          bullets: [
            "Atención a pacientes en consultas de higiene y mantenimiento periodontal bajo la supervisión del equipo docente.",
            "Realización de profilaxis, detartrajes y refuerzo de técnicas de higiene oral adaptadas a cada paciente.",
            "Apoyo en la toma de impresiones, registro de mordida y pruebas relacionadas con casos de prótesis.",
            "Registro riguroso de la información clínica y comunicación fluida con el equipo multidisciplinario."
          ]
        }
      ]
    },
    skills: {
      heading: "Habilidades",
      intro:
        "Combino habilidades clínicas sólidas con un manejo responsable de la tecnología y una comunicación cercana con cada paciente.",
      groups: [
        {
          name: "Habilidades clínicas",
          skills: [
            "Tratamiento periodontal básico y mantenimiento",
            "Profilaxis dental y detartraje supragingival",
            "Diseño y seguimiento de planes de higiene oral",
            "Diseño y apoyo en la fabricación de prótesis",
            "Toma de impresiones convencionales y digitales",
            "Radiografías intraorales (según normativa vigente)",
            "Blanqueamiento dental asistido",
            "Educación y motivación en salud bucal"
          ]
        },
        {
          name: "Herramientas técnicas y software",
          skills: [
            "Flujo digital CAD/CAM en prótesis",
            "Escáneres intraorales (nivel asistencial)",
            "Software de imagenología dental",
            "Gestión de historias clínicas digitales"
          ]
        },
        {
          name: "Habilidades personales",
          skills: [
            "Comunicación clara y empática",
            "Alto nivel de detalle y prolijidad",
            "Trabajo en equipo interdisciplinario",
            "Gestión del tiempo en entorno clínico",
            "Sensibilidad intercultural con pacientes internacionales"
          ]
        }
      ]
    },
    certifications: {
      heading: "Certificaciones y cursos",
      items: [
        {
          name: "Curso de RCP básica / BLS para personal de salud",
          issuer: "Entidad / Colegio profesional",
          year: "Año",
          placeholder: true
        },
        {
          name: "Certificación en control de infecciones y bioseguridad en clínicas dentales",
          issuer: "Institución / Universidad",
          year: "Año",
          placeholder: true
        },
        {
          name: "Curso de actualización en prótesis dental CAD/CAM",
          issuer: "Centro de formación continua",
          year: "Año",
          placeholder: true
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
      badge: "Patient‑centred care",
      availability: "Open to new professional opportunities",
      ctaLabel: "View profile",
      cvLabel: "Curriculum Vitae",
      altText: "Professional portrait of Guiny Zapata Cornejo"
    },
    about: {
      heading: "Professional profile",
      body: [
        "I am Guiny Zapata Cornejo, a Peruvian dental hygienist and dental prosthesis specialist currently based in Madrid.",
        "I am passionate about combining preventive oral care with functional and aesthetic prosthetic solutions that restore each patient’s confidence.",
        "My approach is warm and respectful: I listen, explain and guide so that patients feel informed and safe at every stage of treatment.",
        "I am currently advancing my training at Dentyclass (Madrid), deepening my knowledge of up‑to‑date techniques in dental hygiene and prosthodontics."
      ]
    },
    education: {
      heading: "Education",
      items: [
        {
          institution: "Dentyclass",
          location: "Madrid, Spain",
          title: "Dental Hygiene & Dental Prosthesis Programme",
          period: "2023 – 2025 (in progress)",
          current: true
        },
        {
          institution: "Training Centre in Dental Hygiene & Prosthetics",
          location: "Madrid, Spain",
          title: "Comprehensive training in Dental Hygiene and Prosthetics",
          period: "2020 – 2023",
          placeholder: true
        }
      ],
      currentLabel: "In progress"
    },
    experience: {
      heading: "Professional experience",
      items: [
        {
          role: "Dental Hygienist – Clinical internship",
          company: "Dentyclass Teaching Clinic",
          location: "Madrid, Spain",
          period: "2023 – Present",
          placeholder: true,
          bullets: [
            "Cared for patients in hygiene and periodontal maintenance appointments under the supervision of the teaching staff.",
            "Performed prophylaxis, scaling and tailored oral‑hygiene instruction adapted to each patient.",
            "Assisted with impressions, bite registration and appointments related to prosthetic cases.",
            "Documented clinical information accurately and communicated effectively with the multidisciplinary team."
          ]
        }
      ]
    },
    skills: {
      heading: "Skills",
      intro:
        "I bring together solid clinical skills, responsible use of technology and a warm, clear communication style with every patient.",
      groups: [
        {
          name: "Clinical skills",
          skills: [
            "Basic periodontal treatment and maintenance",
            "Dental prophylaxis and supragingival scaling",
            "Planning and monitoring of oral‑hygiene protocols",
            "Design and follow‑up of prosthetic cases",
            "Conventional and digital impressions (assisting level)",
            "Intraoral radiography (according to local regulations)",
            "Assisted teeth whitening procedures",
            "Patient education and motivation in oral health"
          ]
        },
        {
          name: "Technical / software",
          skills: [
            "Digital CAD/CAM workflows for prosthetics",
            "Intraoral scanners (assisting level)",
            "Dental imaging and viewer software",
            "Electronic dental records and charting"
          ]
        },
        {
          name: "Soft skills",
          skills: [
            "Clear, empathetic communication",
            "High attention to clinical detail",
            "Interdisciplinary teamwork",
            "Time management in a clinical setting",
            "Intercultural sensitivity with international patients"
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

