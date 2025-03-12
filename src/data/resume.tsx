import { Icons } from "@/components/icons";
import { title } from "process";

export const DATA = {
  name: "Thomas Tartrau",
  initials: "TT",
  url: "https://tartrau.fr",
  location: "Nantes, France",
  locationLink: "https://www.google.com/maps/place/nantes",
  description:
    "Dévoué et passionné par la technologie et l'innovation, je suis développeur fullstack et étudiant en informatique.",
  summary:
    "Ma passion pour l'informatique a commencé très tôt, à l'âge de 12 ans, j'ai écrit mes premières lignes de code pour créer des serveurs Minecraft et des bots Discord. Cette expérience précoce m'a permis de découvrir le vaste monde de la programmation et m'a donné envie d'en faire mon métier.\n\nAujourd'hui, en tant qu'étudiant en informatique, je me concentre sur le développement web et applicatif fullstack, combinant ma passion pour la création d'interfaces utilisateur élégantes avec mon intérêt pour l'architecture backend robuste. Je suis particulièrement attiré par les technologies modernes comme React, Next.js et Rust, qui me permettent de créer des applications web performantes et innovantes.\n\nEn dehors de mes études, je contribue activement à des projets open source et je cherche constamment à approfondir mes connaissances en explorant de nouvelles technologies et frameworks. Mon objectif est de devenir un développeur polyvalent capable de relever les défis techniques les plus complexes tout en créant des solutions qui ont un impact positif sur les utilisateurs.",
  avatarUrl: "/me.png",
  skills: [
    "Javascript / Typescript",
    "React / NextJS / Vue",
    "Rust",
    "Java",
    "C#",
    "Python",
    "Linux / infrastructure réseau",
    "MariaDB / PostgreSQL"
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        url: "https://github.com/ThomasTartrau",
        icon: Icons.github,
      },
      LinkedIn: {
        url: "https://www.linkedin.com/in/thomas-tartrau/",
        icon: Icons.linkedin,
      },
    },
  },

  work: [
    {
      company: "Hook0",
      href: "https://hook0.com",
      badges: [],
      location: "Télétravail",
      title: "Développeur Fullstack",
      logoUrl: "/hook0.png",
      start: "Avril 2024",
      end: "Actuellement",
      description:
        "Je travaille actuellement sur Hook0, une nouvelle solution SaaS. Ma mission est d'aider les co-fondateurs à développer le produit et à le rendre plus convivial. C'est un projet open-source passionnant qui me permet de mettre en pratique mes compétences en développement fullstack.",
    },
    {
      company: "Hôpital Local Estuaire Et Sillon",
      href: "https://www.loire-atlantique.fr/44/seniors-personnes-agees/hopital-loire-et-sillon-de-savenay/p1_36825",
      badges: [],
      location: "Savenay, France",
      title: "Agent de maintenance",
      logoUrl: "/savenay-hospital.png",
      start: "28 Octobre 2024",
      end: "30 Octobre 2024",
      description: "Stage d'observation dans le service maintenance de l'hôpital.",
    },
    {
      company: "SCAOUEST",
      href: "https://www.scaouest.fr/",
      badges: [],
      location: "Saint-Étienne-de-Montluc, France",
      title: "Préparateur de commandes",
      logoUrl: "/scaouest.png",
      start: "Juin 2024",
      end: "Juillet 2024",
      description: "Expérience professionnelle en logistique pendant la période estivale.",
    }
  ],
  education: [
    {
      school: "EPSI Nantes",
      href: "https://www.epsi.fr",
      degree: "BTS SIO SLAM & Bachelor Développement",
      details: [
        "2ème année de BTS SIO (Services Informatiques aux Organisations)",
        "Option SLAM (Solutions Logicielles et Applications Métiers)",
        "En parallèle : Bachelor spécialité développement",
      ],
      logoUrl: "/epsi.png",
      start: "2023",
      end: "20**",
    },
    {
      school: "Lycée Jacques Prévert",
      href: "https://prevert.paysdelaloire.e-lyco.fr",
      degree: "Baccalauréat Général",
      details: [
        "Spécialités : Mathématiques, Sciences Économiques et Sociales, Histoire-Géographie Géopolitique Sciences Politiques",
        "Baccalauréat obtenu avec mention Assez Bien",
      ],
      logoUrl: "/education.png",
      start: "2020",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Hook0",
      href: "https://github.com/hook0/hook0",
      dates: "Avril 2024  - Actuellement",
      active: true,
      description:
        "Hook0 est une solution open-source de Webhooks-as-a-service (WaaS) qui simplifie l'envoi de webhooks pour les développeurs. Les développeurs n'ont qu'à faire un appel API, et Hook0 s'occupe de la livraison, des tentatives de réenvoi, de la sécurité et plus encore.",
      technologies: [
        "VueJS",
        "Typescript",
        "PostgreSQL",
        "TailwindCSS",
        "Stripe",
        "Rust",
        "K6",
        "Docker",
      ],
      links: [
        {
          type: "Site Web",
          href: "https://hook0.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Code Source",
          href: "https://github.com/hook0/hook0",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "/hook0-website.png",
      video: "",
    },
    {
      title: "Portfolio professionnel (BTS)",
      href: "https://portfolio-bts.tartrau.fr/",
      dates: "Mars 2025",
      active: true,
      description: "Mon portfolio professionnel pour le BTS SIO SLAM.",
      technologies: [
        "React",
        "Typescript",
        "Magic UI",
        "TailwindCSS",
        "Vercel",
      ],
      links: [
        {
          type: "Site Web",
          href: "https://portfolio-bts.tartrau.fr/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Code Source",
          href: "https://github.com/ThomasTartrau/portfolio-bts",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "/portfolio-bts.png",
      video: "",
    },
    {
      title: "HepEdt2",
      href: "https://hepedt2.tartrau.fr/",
      dates: "Mars 2025",
      active: true,
      description: "HepEdt2 est un site web et une application mobile qui permet aux étudiants, professeurs et administrations pédagogiques utilisant l'emploi du temps fourni par l'application 360 learning d'avoir un accès à leur emploi du temps personnel en un rien de temps ! (l'emploi du temps fourni par 360 learning est très peu pratique et très lent)",
      technologies: [
        "NextJS",
        "Typescript",
        "TailwindCSS",
        "ShadcnUI",
        "Coolify",
        "Docker",
        "Postgres",
        "Metabase"
      ],
      links: [
        {
          type: "Site Web",
          href: "https://hepedt2.tartrau.fr/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/hepedt2.png",
      video: "",
    },
    {
      title: "GradeHub",
      href: "https://gradehub.tartrau.fr/",
      dates: "Mars 2025",
      active: true,
      description: "GradeHub est un site web qui aux professeurs de gérer les écoles, classes et étudiants dans lesquels ils rendent cours. Le but principale est de pouvoir gérer les évaluations, notes et rendus des étudiants. Leur permettant d'historiser leurs notes et passage et d'avoir un accès à leurs notes et rendus en ligne.",
      technologies: [
        "NextJS",
        "Typescript",
        "TailwindCSS",
        "ShadcnUI",
        "Coolify",
        "Docker",
        "Postgres",
        "Metabase"
      ],
      links: [
        {
          type: "Site Web",
          href: "https://gradehub.tartrau.fr/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/gradehub.png",
      video: "",
    },
    {
      title: "Portfolio personnel",
      href: "https://tartrau.fr",
      dates: "Octobre 2024",
      active: true,
      description: "Mon portfolio personnel présentant mon parcours, mes compétences et mes projets.",
      technologies: [
        "React",
        "Typescript",
        "Magic UI",
        "TailwindCSS",
        "Vercel",
      ],
      links: [
        {
          type: "Site Web",
          href: "https://file-vault-vue.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/portfolio.png",
      video: "",
    },
    {
      title: "File vault VUE",
      href: "https://file-vault-vue.vercel.app/",
      dates: "Juillet 2024",
      active: true,
      description:
        "J'ai recréé un composant initialement développé par un membre de la communauté Shadcn. Comme il n'était disponible qu'en ReactJS, j'ai décidé de le recréer en VueJS pour le rendre accessible à une plus large communauté.",
      technologies: [
        "VueJS",
        "Typescript",
        "Shadcn",
        "TailwindCSS",
        "Vercel",
      ],
      links: [
        {
          type: "Site Web",
          href: "https://file-vault-vue.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Code Source",
          href: "https://github.com/ThomasTartrau/file-vault-vue",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "/file-vault.png",
      video: "",
    },
  ],
} as const;
