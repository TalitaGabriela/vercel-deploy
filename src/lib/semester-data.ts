export type Project = {
  name: string;
  description: string;
  url?: string;
};

export type Semester = {
  label: string;
  period: string;
  icon: string;
  projects: Project[];
};

export const semesters: Semester[] = [
  {
    label: "TADS 01",
    period: "2025/1",
    icon: "🛒",
    projects: [
      {
        name: "E-commerce FlexShop",
        description: "Projeto final da disciplina LAEC-01: loja virtual completa.",
        url: "https://github.com/TalitaGabriela/ecommerce_flexshop_talita",
      },
    ],
  },
  {
    label: "TADS 02",
    period: "2025/2",
    icon: "📚",
    projects: [
      {
        name: "Disciplinas do período",
        description:
          "Período sem repositórios públicos registrados até o momento.",
      },
    ],
  },
  {
    label: "TADS 03",
    period: "2026/1",
    icon: "🌱",
    projects: [
      {
        name: "IrrigaAI",
        description: "Projeto do período, repositório privado.",
      },
    ],
  },
  {
    label: "TADS 04",
    period: "2026/2 (atual)",
    icon: "🚀",
    projects: [
      {
        name: "Framework - Aulas e Avaliações",
        description: "Exercícios e avaliação prática de Framework.",
        url: "https://github.com/TalitaGabriela/avaliacao_pratica_framework",
      },
      {
        name: "Sistema de Gestão de Biblioteca",
        description: "Trabalho prático da disciplina de Framework.",
        url: "https://github.com/TalitaGabriela/TrabPP_Sistema_de_Gestao_Biblioteca",
      },
      {
        name: "Gerência de Serviços de Internet",
        description: "Atividades de Git, GitHub, branches e deploy.",
        url: "https://github.com/TalitaGabriela/atividades-git-e-github",
      },
      {
        name: "Banco de Dados",
        description: "Modelagem e manipulação de banco de dados relacional.",
        url: "https://github.com/TalitaGabriela/atividade-3-banco-de-dados",
      },
      {
        name: "Computação em Nuvem",
        description: "Este projeto: deploy PaaS na Vercel.",
        url: "https://github.com/TalitaGabriela/vercel-deploy",
      },
    ],
  },
];
