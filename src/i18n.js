import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          nav: {
            home: 'Home',
            work: 'Work',
            tech: 'Tech',
            experience: 'Path',
            education: 'Grad',
            contact: 'Contact',
          },
          hero: {
            scroll: 'Scroll To Explore',
            view: 'View Artifacts',
          },
          sections: {
            work: 'Selected Artifacts',
            tech: 'Core Capabilities',
            experience: 'Professional Path',
            education: 'Academic Record',
            contact: 'Establish Link',
          },
          contact: {
            title: "Let's create something",
            exceptional: 'exceptional.',
            button: 'Start a conversation',
          },
          skills: {
            description: "Continuously integrating cutting-edge technologies to architect resilient and high-performance digital ecosystems.",
          },
          education: {
            major: 'Major',
            gpa: 'GPA',
          },
          ui: {
            projects_sub: 'Selected Artifacts',
            projects_title: 'Development Work',
            skills_sub: 'Capabilities',
            skills_title: 'Technical Stack',
            experience_sub: 'Journey',
            experience_title: 'Professional Path',
            experience_active: 'Active',
            experience_evolution: 'Evolution Continues',
            education_sub: 'Academic',
            education_title: 'Educational Record',
            contact_sub: 'Contact',
            contact_title: "Let's connect",
            contact_available: 'Available for New Projects',
            contact_footer_curated: 'Curated with Precision',
          },
          swipe: 'Swipe to navigate',
        },
      },
      th: {
        translation: {
          nav: {
            home: 'หน้าแรก',
            work: 'ผลงาน',
            tech: 'ทักษะ',
            experience: 'สายงาน',
            education: 'การศึกษา',
            contact: 'ติดต่อ',
          },
          hero: {
            scroll: 'เลื่อนเพื่อสำรวจ',
            view: 'ดูผลงาน',
          },
          sections: {
            work: 'ผลงานที่คัดสรร',
            tech: 'ความเชี่ยวชาญหลัก',
            experience: 'เส้นทางอาชีพ',
            education: 'ประวัติการศึกษา',
            contact: 'ช่องทางการติดต่อ',
          },
          contact: {
            title: 'มาสร้างสรรค์สิ่งที่',
            exceptional: 'พิเศษไปด้วยกัน',
            button: 'เริ่มการสนทนา',
          },
          skills: {
            description: "บูรณาการเทคโนโลยีที่ทันสมัยอย่างต่อเนื่อง เพื่อสร้างระบบดิจิทัลที่มีประสิทธิภาพสูงและมีความยืดหยุ่น",
          },
          education: {
            major: 'วิชาเอก',
            gpa: 'เกรดเฉลี่ย',
          },
          ui: {
            projects_sub: 'ผลงานที่คัดสรร',
            projects_title: 'ผลงานการพัฒนา',
            skills_sub: 'ความสามารถ',
            skills_title: 'ทักษะทางเทคนิค',
            experience_sub: 'เส้นทาง',
            experience_title: 'เส้นทางอาชีพ',
            experience_active: 'ปัจจุบัน',
            experience_evolution: 'ก้าวต่อไปไม่หยุดยั้ง',
            education_sub: 'วิชาการ',
            education_title: 'ประวัติการศึกษา',
            contact_sub: 'ช่องทางติดต่อ',
            contact_title: 'มาร่วมงานกัน',
            contact_available: 'พร้อมสำหรับโปรเจกต์ใหม่',
            contact_footer_curated: 'คัดสรรด้วยความใส่ใจ',
          },
          swipe: 'เลื่อนเพื่อดูเพิ่มเติม',
        },
      },
    },
  });

export default i18n;
