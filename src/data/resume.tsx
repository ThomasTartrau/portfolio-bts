import { Icons } from "@/components/icons";

export const DATA = {
  name: "Thomas Tartrau",
  initials: "TT",
  url: "https://tartrau.fr",
  location: "Nantes, France",
  locationLink: "https://www.google.com/maps/place/nantes",
  description:
    "Hard worker, passionate about technology and innovation, I am a fullstack developer and IT student.",
  summary:
    "I start to write my first line of code when i got 12 year old to make Minecraft Server and Discord bots. Right now i'm studing and try to do my best for being a good developer. I'm currently learning and exploring new technologies and frameworks to improve my skills.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Rust",
    "Postgres",
    "Java",
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
      location: "Remote",
      title: "Fullstack developer",
      logoUrl: "/hook0.png",
      start: "April 2024",
      end: "Present",
      description:
        "I'm currently working on a new SaaS called Hook0. My goal is to help the Co-Fonder to expand the product and make it more user-friendly. Open-Source projet.",
    },
    {
      company: "Hopital Local Estuaire Et Sillon",
      href: "https://www.loire-atlantique.fr/44/seniors-personnes-agees/hopital-loire-et-sillon-de-savenay/p1_36825",
      badges: [],
      location: "Savenay, France",
      title: "Maintenance worker",
      logoUrl: "/savenay-hospital.png",
      start: "28 October 2024",
      end: "30 October 2024",
      description: "",
    },
    {
      company: "SCAOUEST",
      href: "https://www.scaouest.fr/",
      badges: [],
      location: "Saint-Étienne-de-Montluc, France",
      title: "Order picker",
      logoUrl: "/scaouest.png",
      start: "June 2024",
      end: "July 2024",
      description: "",
    }
  ],
  education: [
    {
      school: "EPSI",
      href: "https://www.epsi.fr",
      degree: "2nd year of higher educationHND & in IT Services Management",
      logoUrl: "/epsi.png",
      start: "2024",
      end: "2025",
    },
    {
      school: "EPSI",
      href: "https://www.epsi.fr",
      degree: "1st year of higher educationHND & in IT Services Management",
      logoUrl: "/epsi.png",
      start: "2023",
      end: "2024",
    },
    {
      school: "Lycée Jacques Prévert",
      href: "",
      degree: "Baccalaureate",
      logoUrl: "/education.png",
      start: "2020",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Hook0",
      href: "https://github.com/hook0/hook0",
      dates: "April 2024 - Present",
      active: true,
      description:
        "Hook0 is an Open-Source Webhooks-as-a-service (WaaS) that makes it easy for developers to send webhooks. Developers make one API call, and Hook0 takes care of deliverability, retries, security, and more.",
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
          type: "Website",
          href: "https://hook0.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source Code",
          href: "https://github.com/hook0/hook0",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "/hook0-website.png",
      video: "",
    },
    {
      title: "File vault VUE",
      href: "https://file-vault-vue.vercel.app/",
      dates: "July 2024",
      active: true,
      description:
        "I remade a component created by a member of the Shadcn community. However, it was only available in ReactJS, so I decided to recreate it in VueJS.",
      technologies: [
        "VueJS",
        "Typescript",
        "Shadcn",
        "TailwindCSS",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://file-vault-vue.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source Code",
          href: "https://github.com/ThomasTartrau/file-vault-vue",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "/file-vault.png",
      video: "",
    },
    {
      title: "Portfolio",
      href: "https://tartrau.fr",
      dates: "October 2024",
      active: true,
      description: "",
      technologies: [
        "React",
        "Typescript",
        "Magic UI",
        "TailwindCSS",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://file-vault-vue.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/portfolio.png",
      video: "",
    },
  ],
} as const;
