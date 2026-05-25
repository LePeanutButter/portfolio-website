import { Certificate } from "@/src/types";
import { CompanyTable } from "./companyTable";

export const certificates: Certificate[] = [
  {
    id: "cert-1",
    title: "Certificate in Strategic Plan Development",
    issuer: CompanyTable.crehana.name,
    issueDate: "Jul 2025",
    category: "Strategy & Management",
    logoUrl: CompanyTable.crehana.logo,
    media: [
      {
        type: "link",
        url: "https://s3.amazonaws.com/public-lessons.crehana.com/enrollment/attachment/08/07/2025/cert-santiago-botero-garcia-desarrollo-de-un-plan-estrategico-08-07-2025.pdf",
        title: "Credential Document",
        description: "Official certificate on Crehana"
      }
    ]
  },
  {
    id: "cert-2",
    title: "Certificate in Implementation and Monitoring of Agile Product Development",
    issuer:  CompanyTable.crehana.name,
    issueDate: "Jul 2025",
    category: "Agile & Projects",
    logoUrl: CompanyTable.crehana.logo,
    media: [
      {
        type: "link",
        url: "https://s3.amazonaws.com/public-lessons.crehana.com/enrollment/attachment/2025/07/09/implementacion-y-seguimiento-del-desarrollo-de-producto-agil-7946258-Certificado-Crehana.pdf",
        title: "Credential Document",
        description: "Official certificate on Crehana"
      }
    ]
  },
  {
    id: "cert-3",
    title: "TOEFL Junior Certificate - CEFR B2 Profile",
    issuer: CompanyTable.toefl.name,
    issueDate: "Nov 2020",
    category: "Languages",
    logoUrl: CompanyTable.toefl.logo,
    media: [
      {
        type: "pdf",
        url: "/certificates/pdfs/toefl-junior-certificate.pdf",
        title: "TOEFL Junior Certificate",
        description: "TOEFL Junior Certificate with an overall score of 880/900 (B2 level). Demonstrated strong proficiency in English with scores of 290 in Listening, 300 in Language Form and Meaning, and 290 in Reading."
      },
      {
        type: "pdf",
        url: "/certificates/pdfs/toefl-official-score-report.pdf",
        title: "TOEFL Official Score Report",
        description: "Official TOEFL Junior score report, showcasing a total score of 880/900. Breakdown includes: Listening 290, Language Form and Meaning 300, and Reading 290, confirming solid English language skills at the B2 proficiency level."
      }
    ]
  },
  {
    id: "cert-4",
    title: "Oxford Placement Test - CEFR C1 Level Result",
    issuer: CompanyTable.oxford.name,
    issueDate: "Oct 2022",
    category: "Languages",
    logoUrl: CompanyTable.oxford.logo,
    media: [
      {
        type: "pdf",
        url: "/certificates/pdfs/oxford-placement-test-results.pdf",
        title: "Oxford Placement Test Assessment Results",
        description: 'Achieved a weighted score of 96 out of 120 in the Oxford Placement Test, placing at the CEFR C1 level. Scored 99 in the "Use of English" section and 94 in the "Listening" section, demonstrating advanced proficiency in both grammar and listening comprehension.'
      }
    ]
  },
  {
    id: "cert-5",
    title: "Certificate in Leadership with Strategic Vision",
    issuer:  CompanyTable.crehana.name,
    issueDate: "Aug 2025",
    category: "Strategy & Management",
    logoUrl: CompanyTable.crehana.logo,
    media: [
      {
        type: "link",
        url: "https://s3.amazonaws.com/public-lessons.crehana.com/enrollment/attachment/25/08/2025/cert-santiago-botero-garcia-liderazgo-con-vision-estrategica-25-08-2025.pdf",
        title: "Credential Document",
        description: "Official certificate on Crehana"
      }
    ]
  },
  {
    id: "cert-6",
    title: "Certificate in Kanban for IT Project Management",
    issuer:  CompanyTable.crehana.name,
    issueDate: "Aug 2025",
    category: "Agile & Projects",
    logoUrl: CompanyTable.crehana.logo,
    media: [
      {
        type: "link",
        url: "https://s3.amazonaws.com/public-lessons.crehana.com/enrollment/attachment/25/08/2025/cert-santiago-botero-garcia-kanban-para-la-gestion-de-proyectos-de-ti-25-08-2025.pdf",
        title: "Credential Document",
        description: "Official certificate on Crehana"
      }
    ]
  },
  {
    id: "cert-7",
    title: "Certificate in Agile Project Management with AI",
    issuer:  CompanyTable.crehana.name,
    issueDate: "Aug 2025",
    category: "Agile & Projects",
    logoUrl: CompanyTable.crehana.logo,
    media: [
      {
        type: "link",
        url: "https://s3.amazonaws.com/public-lessons.crehana.com/enrollment/attachment/25/08/2025/cert-santiago-botero-garcia-gestion-agil-de-proyectos-con-ia-25-08-2025.pdf",
        title: "Credential Document",
        description: "Official certificate on Crehana"
      }
    ]
  },
  {
    id: "cert-8",
    title: "Certificate in Corporate Vision and Strategy",
    issuer:  CompanyTable.crehana.name,
    issueDate: "Aug 2025",
    category: "Strategy & Management",
    logoUrl: CompanyTable.crehana.logo,
    media: [
      {
        type: "link",
        url: "https://s3.amazonaws.com/public-lessons.crehana.com/enrollment/attachment/26/08/2025/cert-santiago-botero-garcia-vision-y-estrategia-corporativa-26-08-2025.pdf",
        title: "Credential Document",
        description: "Official certificate on Crehana"
      }
    ]
  },
  {
    id: "cert-9",
    title: "Sprach Institut Certificate - CEFR B1.1 Proficiency",
    issuer: CompanyTable.sprach.name,
    issueDate: "Aug 2025",
    category: "Languages",
    logoUrl: CompanyTable.sprach.logo,
    media: [
      {
        type: "pdf",
        url: "/certificates/pdfs/zeugnis-b1.1.pdf",
        title: "Sprach Institut Assessment Results",
        description: "Obtained an overall final grade of 3.7 on the German language scale (1.0 - 5.0 passing scale). Demonstrated well-rounded language skills with individual section scores of 3.2 in Writing, 3.4 in Listening, 3.7 in Reading Comprehension, and 4.3 in Oral Expression/Speaking."
      }
    ]
  },
];
