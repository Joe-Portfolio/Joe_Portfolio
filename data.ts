
import { Project, Experience, Translation, Language, GalleryItem } from './types';

export const getYoutubeThumbnail = (url: string) => {
  const videoId = url.split('embed/')[1]?.split('?')[0] || 
                  url.split('v=')[1]?.split('&')[0] || 
                  url.split('youtu.be/')[1]?.split('?')[0];
  return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : "https://picsum.photos/seed/game/800/450";
};

export const TRANSLATIONS: Record<Language, Translation> = {
  ko: {
    nav_home: "홈",
    nav_experience: "경력",
    nav_projects: "프로젝트",
    nav_skills: "기술",
    hero_title: "조현우",
    hero_subtitle: "시니어 게임 기획자 & 서비스 매니저",
    hero_description: "10년 9개월의 경력을 가진 게임 산업 전문가입니다. VR, 모바일, PC 플랫폼의 글로벌 서비스 런칭과 운영에 특화되어 있으며, 생성형 AI(Stable Diffusion, ComfyUI 등)를 활용한 기획 혁신을 선도합니다.",
    view_portfolio_video: "전체 포트폴리오 보기",
    experience_title: "상세 경력 사항",
    projects_title: "주요 프로젝트 영상",
    projects_subtitle: "핵심 프로젝트 런칭 영상입니다. 카드를 클릭하여 상세 영상을 감상하세요.",
    skills_title: "기술 및 역량",
    gallery_title: "AI Creative Gallery",
    gallery_description: "직접 드로잉한 스케치를 생성형 AI 기술로 리터칭하여 퀄리티를 높이는 프로세스입니다. 이미지를 클릭하면 확대해서 보실 수 있습니다.",
    gallery_label_sketch: "Sketch",
    gallery_label_ai: "AI Enhanced",
    exp_hover_hint: "상세 내용 확인을 위해 호버하세요",
    exp_hover_full: "전체 경력 상세 보기",
    contact_title: "연락처",
    footer_text: "위의 모든 기재사항은 사실과 다름없음을 확인합니다. 작성자 조현우.",
    view_history: "전체 타임라인 보기",
    minimize_history: "타임라인 접기"
  },
  en: {
    nav_home: "Home",
    nav_experience: "Experience",
    nav_projects: "Projects",
    nav_skills: "Skills",
    hero_title: "Hyunwoo Cho",
    hero_subtitle: "Senior Game Planner & Service Manager",
    hero_description: "A veteran professional with 10 years and 9 months of experience in the game industry. Specialized in global service launches and operations for VR, Mobile, and PC. Leading planning innovation using Generative AI (Stable Diffusion, ComfyUI).",
    view_portfolio_video: "View Portfolio Reel",
    experience_title: "Work Experience",
    projects_title: "Key Projects",
    projects_subtitle: "Showcase of core project launches. Click cards to watch detailed videos.",
    skills_title: "Skills & Expertise",
    gallery_title: "AI Creative Gallery",
    gallery_description: "A process of retouching hand-drawn sketches using Generative AI to enhance quality. Click images to expand.",
    gallery_label_sketch: "Original Sketch",
    gallery_label_ai: "AI Retouched",
    exp_hover_hint: "Hover for full details",
    exp_hover_full: "View Detailed Resume Snippet",
    contact_title: "Contact",
    footer_text: "I confirm that all information provided is true. Author: Hyunwoo Cho.",
    view_history: "View Full Career Timeline",
    minimize_history: "Minimize History"
  }
};

export const PROJECTS: Record<Language, Project[]> = {
  ko: [
    { id: "1", title: "LOVE ON (VR)", company: "룩슨", year: "2023-2024", description: "VR 미소녀 연애 시뮬레이션 시스템 및 콘텐츠 기획 총괄. 스팀 런칭 성공.", videoUrl: "https://www.youtube.com/embed/UdmhKL7XMUQ", thumbnail: "", tags: ["VR", "Unreal", "Steam"] },
    { id: "2", title: "BLACKPINK THE GAME", company: "테이크원", year: "2021-2022", description: "글로벌 아티스트 IP 모바일 게임 서비스 기획 및 브랜딩.", videoUrl: "https://www.youtube.com/embed/cA6qwchbJk0", thumbnail: "", tags: ["Mobile", "K-POP", "Global"] },
    { id: "3", title: "AKB48W", company: "테이크원", year: "2021", description: "일본 아이돌 AKB48 글로벌 서비스 기획 및 홈페이지 디자인 관리.", videoUrl: "https://www.youtube.com/embed/jfwnHbLfS7E", thumbnail: "", tags: ["Idol", "Japan", "Service Design"] },
    { id: "4", title: "트리플 하츠", company: "써니사이드게임즈", year: "2018-2019", description: "AOS 장르 라이브 서비스 기획 및 글로벌(한국, 베트남 등) 오픈.", videoUrl: "https://www.youtube.com/embed/TXt9mmxj9yQ", thumbnail: "", tags: ["AOS", "Unity", "Global"] },
    { id: "5", title: "마비노기 글로벌", company: "넥슨", year: "2016-2018", description: "북미/일본 마비노기 라이브 운영 대리. Re:Zero 콜라보 성공.", videoUrl: "https://www.youtube.com/embed/_54xPRSNuIY", thumbnail: "", tags: ["MMORPG", "Nexon", "NA/JP"] },
    { id: "6", title: "크리스탈 하츠", company: "디엠케이팩토리", year: "2015-2016", description: "RPG 프로젝트 밸런스 및 시스템 기획. 스토어 상위 매출 달성.", videoUrl: "https://www.youtube.com/embed/0Xe7JE1nLKc", thumbnail: "", tags: ["RPG", "Unity", "Success"] }
  ],
  en: [
    { id: "1", title: "LOVE ON (VR)", company: "Luxon", year: "2023-2024", description: "Lead planner for VR dating simulation. Successfully launched on Steam.", videoUrl: "https://www.youtube.com/embed/UdmhKL7XMUQ", thumbnail: "", tags: ["VR", "Unreal", "Steam"] },
    { id: "2", title: "BLACKPINK THE GAME", company: "Takeone", year: "2021-2022", description: "Service planning and brand management for Blackpink IP mobile game.", videoUrl: "https://www.youtube.com/embed/cA6qwchbJk0", thumbnail: "", tags: ["Mobile", "K-POP", "Global"] },
    { id: "3", title: "AKB48W", company: "Takeone", year: "2021", description: "Global service planning for AKB48 Japanese Idol group IP.", videoUrl: "https://www.youtube.com/embed/jfwnHbLfS7E", thumbnail: "", tags: ["Idol", "Japan", "Service Design"] },
    { id: "4", title: "Triple Hearts", company: "Sunnyside", year: "2018-2019", description: "Live operations for AOS project globally including SE Asia.", videoUrl: "https://www.youtube.com/embed/TXt9mmxj9yQ", thumbnail: "", tags: ["AOS", "Unity", "Global"] },
    { id: "5", title: "Mabinogi Global", company: "Nexon", year: "2016-2018", description: "Overseas live operation manager for North America and Japan markets.", videoUrl: "https://www.youtube.com/embed/_54xPRSNuIY", thumbnail: "", tags: ["MMORPG", "Nexon", "NA/JP"] },
    { id: "6", title: "Crystal Hearts", company: "DMK Factory", year: "2015-2016", description: "Lead balance and system designer for top-grossing RPG.", videoUrl: "https://www.youtube.com/embed/0Xe7JE1nLKc", thumbnail: "", tags: ["RPG", "Unity", "Success"] }
  ]
};

export const EXPERIENCES: Record<Language, Experience[]> = {
  ko: [
    { 
      company: "룩슨", 
      role: "VR게임 개발실 과장", 
      period: "2023.12 - 2024.08", 
      highlights: [
        "LOVE ON (VR 미소녀 연애 시뮬레이션) 개발 총괄",
        "스팀 & 사이드 퀘스트 & 잇치 글로벌 런칭 및 라이브 서비스",
        "개발 일정 관리 및 프로세스 리딩",
        "시스템 및 컨텐츠 기획, 시나리오 작성, QA 검수 총괄",
        "VR 스킨십 시스템 기획 및 구현",
        "사업 기획 및 글로벌 커뮤니티 운영"
      ] 
    },
    { 
      company: "테이크원 컴퍼니", 
      role: "퍼블리싱 서비스팀 팀장", 
      period: "2020.12 - 2022.09", 
      highlights: [
        "BLACKPINK THE GAME 글로벌 서비스 기획 및 관리",
        "퍼블리싱 서비스 플랫폼 기획 및 팀 빌딩",
        "글로벌 지표 대시보드, 통계로그, IAP, 푸시 시스템 구축",
        "글로벌 법률(COPPA, GDPR 등) 관련 기능 기획",
        "AKB48W 및 뿌까 퍼즐 어드벤처 서비스 디자인 관리",
        "Web3.0 NFT PFP/P2E 프로젝트 PM 및 기획"
      ] 
    },
    { 
      company: "2DC", 
      role: "신규사업부 실장", 
      period: "2020.06 - 2020.09", 
      highlights: [
        "창업 초기 게임 플랫폼 신규 사업 기획",
        "리디북스 계열사 신규 게임 플랫폼 사업 제안",
        "캐릭터 채팅 플랫폼 및 퍼블리싱 운영 SDK 기획",
        "모바일 게임 지표 및 시장 리서치(DAU, 매출 분석)"
      ] 
    },
    { 
      company: "카카오키즈", 
      role: "신규사업부 대리", 
      period: "2019.12 - 2020.05", 
      highlights: [
        "유캔두(You Can Do) 자기계발 플랫폼 사업 기획",
        "게이미피케이션 콘텐츠 설계(레벨, 뱃지, 랭킹 시스템)",
        "신규 사업 정책 및 BM 기획",
        "Admin 및 Biz 관리 페이지 기획"
      ] 
    },
    { 
      company: "써니사이드게임즈", 
      role: "기획팀 책임연구원", 
      period: "2018.04 - 2019.05", 
      highlights: [
        "트리플 하츠 (AOS) 프로젝트 오픈 및 라이브 서비스",
        "글로벌 서비스(한국, 베트남, 태국, 미국 등) 운영 관리",
        "길드, 광산, 약탈, 퀘스트 등 시스템/콘텐츠 기획",
        "재화 소모 및 BM 디자인 등 사업 지표 관리"
      ] 
    },
    { 
      company: "넥슨 코리아", 
      role: "마비노기 해외사업팀 대리", 
      period: "2016.11 - 2018.04", 
      highlights: [
        "북미/일본 마비노기 라이브 서비스 운영 전략 수립",
        "Re:Zero 등 유명 IP 콜라보레이션 기획 및 안착",
        "해외 서비스 이벤트 및 BM 기획(가챠, 패키지)",
        "로컬라이징 품질 관리 및 스크립트 유지보수"
      ] 
    }
  ],
  en: [
    { 
      company: "Luxon", 
      role: "Manager, VR Development Dept.", 
      period: "2023.12 - 2024.08", 
      highlights: [
        "Lead planning for 'LOVE ON' (VR Dating Sim)",
        "Successful launch on Steam, SideQuest, and Itch.io",
        "Managed development schedules and lead processes",
        "System/Content planning, scenario writing, and QA lead",
        "Designed and implemented VR interaction systems",
        "Business planning and global community operations"
      ] 
    },
    { 
      company: "Takeone Company", 
      role: "Publishing Service Team Lead", 
      period: "2020.12 - 2022.09", 
      highlights: [
        "Global service planning for 'BLACKPINK THE GAME'",
        "Built publishing service platforms and lead team",
        "Established dashboards, logs, IAP, and push systems",
        "Planned compliance for COPPA/GDPR/CCPA/Japan regulations",
        "Service design lead for AKB48W and Pucca Puzzle Adventure",
        "Web3.0 NFT PFP/P2E project PM and system planning"
      ] 
    },
    { 
      company: "2DC", 
      role: "Director of New Business", 
      period: "2020.06 - 2020.09", 
      highlights: [
        "Strategic planning for early-stage game platforms",
        "Proposed new platform business for Ridi Books affiliates",
        "Designed character chatting and publishing SDKs",
        "Market research and DAU/Revenue analysis via MobileIndex"
      ] 
    },
    { 
      company: "Kakao Kids", 
      role: "Assistant Manager", 
      period: "2019.12 - 2020.05", 
      highlights: [
        "Business planning for 'You Can Do' self-dev platform",
        "Gamification content design (Levels, Badges, Rankings)",
        "Policy and BM planning for new business segments",
        "Designed Admin and B2B management interfaces"
      ] 
    },
    { 
      company: "Sunnyside Games", 
      role: "Lead Planning Researcher", 
      period: "2018.04 - 2019.05", 
      highlights: [
        "Service launch and live ops for 'Triple Hearts' (AOS)",
        "Global ops management (Korea, SE Asia, USA, Japan)",
        "Designed core systems: Guilds, Quests, Tutorials",
        "Managed business KPIs and BM optimization"
      ] 
    },
    { 
      company: "Nexon Korea", 
      role: "Overseas Biz Assistant Manager", 
      period: "2016.11 - 2018.04", 
      highlights: [
        "Live operation strategy for North America & Japan Mabinogi",
        "Planned major IP collaborations (e.g., Re:Zero)",
        "Designed overseas events and monetization items",
        "QA management for localization and script maintenance"
      ] 
    }
  ]
};

export const GALLERY_ITEMS: Record<Language, GalleryItem[]> = {
  ko: [
    { id: 1, name: "서브컬처 미소녀", sketch: "https://i.ibb.co/LhYf7Hw/sketch-1.jpg", result: "https://i.ibb.co/h7n77G1/result-1.jpg" },
    { id: 2, name: "SF 메카닉", sketch: "https://i.ibb.co/xXfWjG8/sketch-2.jpg", result: "https://i.ibb.co/F6P7Y9t/result-2.jpg" },
    { id: 3, name: "신사 캐릭터", sketch: "https://i.ibb.co/0y7x20q/sketch-3.jpg", result: "https://i.ibb.co/Mh77N6f/result-3.jpg" },
    { id: 4, name: "기사 캐릭터", sketch: "https://i.ibb.co/YyYf8Hw/sketch-4.jpg", result: "https://i.ibb.co/h7n77G1/result-4.jpg" },
    { id: 5, name: "궁수 캐릭터", sketch: "https://i.ibb.co/LhYf7Hw/sketch-5.jpg", result: "https://i.ibb.co/h7n77G1/result-5.jpg" },
    { id: 6, name: "무도가 캐릭터", sketch: "https://i.ibb.co/LhYf7Hw/sketch-6.jpg", result: "https://i.ibb.co/h7n77G1/result-6.jpg" }
  ],
  en: [
    { id: 1, name: "Subculture Character", sketch: "https://i.ibb.co/LhYf7Hw/sketch-1.jpg", result: "https://i.ibb.co/h7n77G1/result-1.jpg" },
    { id: 2, name: "Sci-fi Mecha", sketch: "https://i.ibb.co/xXfWjG8/sketch-2.jpg", result: "https://i.ibb.co/F6P7Y9t/result-2.jpg" },
    { id: 3, name: "Gentleman", sketch: "https://i.ibb.co/0y7x20q/sketch-3.jpg", result: "https://i.ibb.co/Mh77N6f/result-3.jpg" },
    { id: 4, name: "Armored Knight", sketch: "https://i.ibb.co/YyYf8Hw/sketch-4.jpg", result: "https://i.ibb.co/h7n77G1/result-4.jpg" },
    { id: 5, name: "Elven Archer", sketch: "https://i.ibb.co/LhYf7Hw/sketch-5.jpg", result: "https://i.ibb.co/h7n77G1/result-5.jpg" },
    { id: 6, name: "Martial Artist", sketch: "https://i.ibb.co/LhYf7Hw/sketch-6.jpg", result: "https://i.ibb.co/h7n77G1/result-6.jpg" }
  ]
};

export const SKILLS = [
  { category: "Gen-AI", items: ["Stable Diffusion", "ComfyUI", "Veo3", "Kling", "Suno", "Midjourney", "ChatGPT"] },
  { category: "Planning Tools", items: ["Jira", "Trello", "Mantis", "GanttChart", "Redmine", "MS Project"] },
  { category: "Dev & Design", items: ["Unity", "Unreal Engine", "Git", "SVN", "Figma", "Photoshop", "Vegas", "Goldwave"] },
  { category: "Certificates", items: ["Information Processing Engineer", "Barista Grade 2", "MOS Master", "CS Level 2"] }
];
