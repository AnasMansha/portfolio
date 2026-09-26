import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiMysql,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiMui,
  SiFormik,
  SiNestjs,
  SiNodedotjs,
  SiExpress,
  SiFlask,
  SiPostgresql,
  SiSupabase,
  SiRedis,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiDocker,
  SiLinux,
  SiPostman,
  SiPrisma,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

export const skillCategories = [
  {
    category: "Languages",
    skills: [
      { name: "TypeScript", Icon: SiTypescript },
      { name: "JavaScript", Icon: SiJavascript },
      { name: "Python", Icon: SiPython },
      { name: "SQL", Icon: SiMysql },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React.js", Icon: SiReact },
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "Tailwind", Icon: SiTailwindcss },
      { name: "Material UI", Icon: SiMui },
      { name: "Formik", Icon: SiFormik },
    ],
  },
  {
    category: "Backend & Databases",
    skills: [
      { name: "NestJS", Icon: SiNestjs },
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "Express.js", Icon: SiExpress },
      { name: "Flask", Icon: SiFlask },
      { name: "PostgreSQL", Icon: SiPostgresql },
      { name: "Supabase", Icon: SiSupabase },
      { name: "Redis", Icon: SiRedis },
      { name: "REST APIs", Icon: TbApi },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git", Icon: SiGit },
      { name: "GitHub", Icon: SiGithub },
      { name: "Docker", Icon: SiDocker },
      { name: "Linux", Icon: SiLinux },
      { name: "Prisma", Icon: SiPrisma },
      { name: "Postman", Icon: SiPostman },
      { name: "Actions", Icon: SiGithubactions },
    ],
  },
];
