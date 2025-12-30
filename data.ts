
import { Project, Experience, Translation, Language } from './types';

export const TRANSLATIONS: Record<Language, Translation> = {
  ko: {
    nav_home: "홈",
    nav_experience: "경력",
    nav_projects: "프로젝트",
    nav_skills: "기술",
    hero_title: "조현우",
    hero_subtitle: "게임 기획자 & 서비스 매니저",
    hero_description: "10년 이상의 경력을 가진 게임 산업 전문가로서, VR, 모바일, PC 등 다양한 플랫폼에서 글로벌 서비스를 성공적으로 런칭하고 운영해왔습니다. 최신 생성형 AI 기술을 활용하여 기획의 효율성을 극대화합니다.",
    view_portfolio_video: "포트폴리오 영상 보기",
    experience_title: "경력 사항",
    projects_title: "대표 프로젝트",
    skills_title: "기술 및 역량",
    contact_title: "연락처",
    footer_text: "© 2025 조현우. All rights reserved."
  },
  en: {
    nav_home: "Home",
    nav_experience: "Experience",
    nav_projects: "Projects",
    nav_skills: "Skills",
    hero_title: "Hyunwoo Cho",
    hero_subtitle: "Game Planner & Service Manager",
    hero_description: "A game industry expert with over 10 years of experience, successfully launching and operating global services across VR, Mobile, and PC platforms. I leverage cutting-edge Gen-AI to maximize planning efficiency.",
    view_portfolio_video: "View Portfolio Video",
    experience_title: "Work Experience",
    projects_title: "Key Projects",
    skills_title: "Skills & Capabilities",
    contact_title: "Contact",
    footer_text: "© 2025 Hyunwoo Cho. All rights reserved."
  }
};

export const PROJECTS: Record<Language, Project[]> = {
  ko: [
    {
      id: "1",
      title: "LOVE ON",
      company: "룩슨 (Luxon)",
      year: "2023 - 2024",
      description: "VR 미소녀 연애 시뮬레이션 게임 개발. 시스템 및 콘텐츠 기획, 시나리오, QA 검수를 총괄했습니다.",
      videoUrl: "https://www.youtube.com/embed/UdmhKL7XMUQ",
      thumbnail: "https://picsum.photos/seed/loveon/800/450",
      tags: ["VR", "Unreal Engine", "Subculture", "Global Service"]
    },
    {
      id: "2",
      title: "BLACKPINK THE GAME",
      company: "테이크원 컴퍼니",
      year: "2021 - 2022",
      description: "글로벌 아티스트 블랙핑크 IP를 활용한 모바일 게임 기획 및 서비스 디자인을 담당했습니다.",
      videoUrl: "https://www.youtube.com/embed/cA6qwchbJk0",
      thumbnail: "https://picsum.photos/seed/bp/800/450",
      tags: ["Mobile", "K-POP", "Global Service", "Takeone"]
    },
    {
      id: "3",
      title: "AKB48W",
      company: "테이크원 컴퍼니",
      year: "2021",
      description: "일본 유명 아이돌 AKB48의 글로벌 서비스 기획 및 브랜드/서비스 디자인 관리를 진행했습니다.",
      videoUrl: "https://www.youtube.com/embed/jfwnHbLfS7E",
      thumbnail: "https://picsum.photos/seed/akb/800/450",
      tags: ["Idol", "Planning", "Japan/Korea"]
    },
    {
      id: "4",
      title: "Mabinogi",
      company: "넥슨 코리아",
      year: "2016 - 2018",
      description: "마비노기 해외사업팀 대리로서 북미/일본 라이브 서비스 기획 및 로컬라이징 운영을 담당했습니다.",
      videoUrl: "https://www.youtube.com/embed/_54xPRSNuIY",
      thumbnail: "https://picsum.photos/seed/mabi/800/450",
      tags: ["MMORPG", "Nexon", "Global Live", "Localization"]
    }
  ],
  en: [
    {
      id: "1",
      title: "LOVE ON",
      company: "Luxon",
      year: "2023 - 2024",
      description: "VR dating simulation game development. Led system/content planning, scenario, and QA.",
      videoUrl: "https://www.youtube.com/embed/UdmhKL7XMUQ",
      thumbnail: "https://picsum.photos/seed/loveon/800/450",
      tags: ["VR", "Unreal Engine", "Subculture", "Global Service"]
    },
    {
      id: "2",
      title: "BLACKPINK THE GAME",
      company: "Takeone Company",
      year: "2021 - 2022",
      description: "Planned and designed services for a mobile game featuring global artist BLACKPINK.",
      videoUrl: "https://www.youtube.com/embed/cA6qwchbJk0",
      thumbnail: "https://picsum.photos/seed/bp/800/450",
      tags: ["Mobile", "K-POP", "Global Service", "Takeone"]
    },
    {
      id: "3",
      title: "AKB48W",
      company: "Takeone Company",
      year: "2021",
      description: "Managed global service planning and brand/service design for the famous Japanese idol group AKB48.",
      videoUrl: "https://www.youtube.com/embed/jfwnHbLfS7E",
      thumbnail: "https://picsum.photos/seed/akb/800/450",
      tags: ["Idol", "Planning", "Japan/Korea"]
    },
    {
      id: "4",
      title: "Mabinogi",
      company: "Nexon Korea",
      year: "2016 - 2018",
      description: "Overseas business team manager for Mabinogi, leading live service planning for NA/JP markets.",
      videoUrl: "https://www.youtube.com/embed/_54xPRSNuIY",
      thumbnail: "https://picsum.photos/seed/mabi/800/450",
      tags: ["MMORPG", "Nexon", "Global Live", "Localization"]
    }
  ]
};

export const EXPERIENCES: Record<Language, Experience[]> = {
  ko: [
    {
      company: "룩슨",
      role: "VR게임 개발실 과장",
      period: "2023.12 ~ 2024.08",
      highlights: ["LOVEON VR 개발", "스팀 출시 및 라이브 서비스 관리", "시스템 및 컨텐츠 기획 총괄"]
    },
    {
      company: "테이크원 컴퍼니",
      role: "퍼블리싱서비스팀 팀장",
      period: "2020.12 ~ 2022.09",
      highlights: ["BLACKPINK THE GAME 기획", "Web3.0 NFT 프로젝트 PM", "퍼블리싱 서비스 플랫폼 고도화"]
    },
    {
      company: "넥슨 코리아",
      role: "마비노기 해외사업팀 대리",
      period: "2016.11 ~ 2018.04",
      highlights: ["북미/일본 마비노기 라이브 운영", "Re:Zero 콜라보 기획", "BM 고도화 및 로컬라이징"]
    }
  ],
  en: [
    {
      company: "Luxon",
      role: "VR Game Development Manager",
      period: "2023.12 ~ 2024.08",
      highlights: ["Developed LOVEON VR", "Steam launch and live service management", "Head of system and content planning"]
    },
    {
      company: "Takeone Company",
      role: "Publishing Service Team Lead",
      period: "2020.12 ~ 2022.09",
      highlights: ["BLACKPINK THE GAME planning", "Web3.0 NFT Project PM", "Publishing service platform optimization"]
    },
    {
      company: "Nexon Korea",
      role: "Mabinogi Overseas Business Manager",
      period: "2016.11 ~ 2018.04",
      highlights: ["Live operations for NA/JP markets", "Re:Zero collaboration planning", "BM optimization and localization"]
    }
  ]
};

export const SKILLS = [
  { category: "Tools", items: ["Git", "Jira", "Unity", "Unreal Engine", "Figma", "Photoshop", "Excel"] },
  { category: "Gen-AI", items: ["Stable Diffusion", "Midjourney", "ComfyUI", "Veo3", "Kling", "Suno", "ChatGPT"] },
  { category: "Languages", items: ["Korean (Native)", "English (Advanced Experience)"] },
  { category: "Certifications", items: ["Information Processing Engineer", "Barista Grade 2", "MOS Master"] }
];
