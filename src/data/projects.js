export const projects = [
  {
    id: "PRJ-01",
    title: { en: "E-Academy", th: "E-Academy" },
    description: {
      en: "An online learning platform enabling users to track progress, issue certificates, and receive course reminders via Line. Built with Angular, ExpressJS, and Moodle.",
      th: "แพลตฟอร์มเรียนออนไลน์ที่ช่วยให้ผู้ใช้งานสามารถเก็บคะแนน ออกใบประกาศนียบัตร พร้อมการแจ้งเตือนการเรียนซ้ำผ่าน Line โดยพัฒนาด้วย Angular และ ExpressJS ร่วมกับ Moodle"
    },
    banner_url: "https://e-academy.ditp.go.th/assets/e-academy/image/logo/logo_top.png",
    link: "https://e-academy.ditp.go.th/home",
    github_link: "",
    status: "DEPLOYED",
    skills: ["Angular", "ExpressJS", "Bootstrap", "Angular Material", "Moodle"]
  },
  {
    id: "PRJ-02",
    title: { en: "E-Academy Backoffice", th: "E-Academy Backoffice" },
    description: {
      en: "A back-office system for managing data in E-Academy, including learning progress reports, adding/removing courses and instructors, tracking learner scores, and sending notifications via Line.",
      th: "ระบบหลังบ้านสำหรับจัดการข้อมูลใน E-Academy เช่น รายงานผลการเรียน การเพิ่ม/ลบหลักสูตรและวิทยากร ติดตามคะแนนผู้เรียน และการแจ้งเตือนผ่าน Line"
    },
    banner_url: "",
    link: "https://e-academy.ditp.go.th/backoffice/",
    github_link: "",
    status: "DEPLOYED",
    skills: ["Angular", "ExpressJS", "Bootstrap", "Angular Material", "Messaging API"]
  },
  {
    id: "PRJ-03",
    title: { en: "Nea Chatbot", th: "Nea Chatbot" },
    description: {
      en: "A chatbot platform developed as a WebApp using NestJS and Python. Supports data training for improved response accuracy and flexibility.",
      th: "แพลตฟอร์มตอบกลับอัตโนมัติด้วย Chatbot ที่พัฒนาด้วย WebApp ใช้ NestJS และ Python รองรับการเทรนข้อมูลเพื่อปรับปรุงการตอบสนอง เพิ่มความยืดหยุ่นในการใช้งาน"
    },
    banner_url: "https://nea.ditp.go.th/th/images/logo-nea.png",
    link: "https://e-academy.ditp.go.th/livechat/ui/chatbox",
    github_link: "",
    status: "ACTIVE",
    skills: ["Angular", "NestJS", "PrimeNG", "Python", "Socket.IO", "Strapi"]
  },
  {
    id: "PRJ-04",
    title: { en: "QSurvey", th: "QSurvey" },
    description: {
      en: "A platform for tracking survey results with features like dashboard reporting, survey creation/deletion, and data export in Excel format.",
      th: "แพลตฟอร์มติดตามผลการทำแบบประเมิน พร้อมฟีเจอร์รายงานผลแบบ Dashboard การสร้าง/ลบแบบประเมิน และการ Export ข้อมูลในรูปแบบไฟล์ Excel"
    },
    banner_url: "https://nea.qsurve.convtech.app/assets/logo_qserve.png",
    link: "https://nea.qsurve.convtech.app/view/dashboard",
    github_link: "",
    status: "ACTIVE",
    skills: ["Angular", "PrimeNG", "NestJS"]
  },
  {
    id: "PRJ-05",
    title: { en: "QIM", th: "QIM" },
    description: {
      en: "A CRM website for managing communication data via Webchat and Appchat, tracking agent activities, and summarizing operational results.",
      th: "เว็บไซต์ CRM สำหรับจัดการข้อมูลการสนทนาผ่าน Webchat และ Appchat พร้อมฟีเจอร์ติดตามการทำงานของ Agent และสรุปผลการทำงาน"
    },
    banner_url: "",
    link: "",
    github_link: "",
    status: "LEGACY",
    skills: ["Angular", "Bootstrap", "ExpressJS", "Socket.IO"]
  },
  {
    id: "PRJ-06",
    title: { en: "Isuzu Leasing", th: "Isuzu Leasing" },
    description: {
      en: "A platform for managing OA work histories and tracking loan performance for Isuzu, with features for overall operational summaries.",
      th: "แพลตฟอร์มจัดการข้อมูล ประวัติการทำงานของ OA และการติดตามผลสินเชื่อสำหรับ Isuzu พร้อมฟีเจอร์สรุปภาพรวมการทำงาน"
    },
    banner_url: "",
    link: "",
    github_link: "",
    status: "COMPLETED",
    skills: ["Angular", "PrimeNG", "Angular Material", "C#"]
  },
  {
    id: "PRJ-07",
    title: { en: "Portfolio", th: "Portfolio" },
    description: {
      en: "A personal portfolio website showcasing personal information, work experience, projects completed, educational background, and contact methods.",
      th: "เว็บไซต์แสดงผลงาน Portfolio ส่วนตัว แสดงข้อมูลส่วนตัว ประวัติการทำงาน โปรเจคที่เคยทำ ประวัติการศึกษาและช่องทางการติดต่อ"
    },
    banner_url: "",
    link: "https://mrtongx0.github.io/",
    github_link: "https://github.com/MrToNGx0/MrToNGx0.github.io",
    status: "ACTIVE",
    skills: ["Angular", "Tailwind", "Angular Material"]
  },
  {
    id: "PRJ-08",
    title: { en: "Portfolio API", th: "Portfolio API" },
    description: {
      en: "An API designed to manage and organize Portfolio website data so that it can be easily edited or retrieved.",
      th: "API ที่ออกแบบมาเพื่อจัดการและจัดระเบียบข้อมูลเว็บไซต์ Portfolio ให้สามารถแก้ไขหรือเรียกข้อมูลได้ง่าย"
    },
    banner_url: "",
    link: "",
    github_link: "https://github.com/MrToNGx0/portfolio-api",
    status: "DEVELOPMENT",
    skills: ["NestJS", "PostgreSQL"]
  }
];
