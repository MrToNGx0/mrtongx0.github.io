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
          swipe: 'เลื่อนเพื่อดูเพิ่มเติม',
        },
      },
    },
  });

export default i18n;
