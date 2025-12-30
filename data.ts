
import { Project, Experience, Translation, Language } from './types';

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
    skills_title: "기술 및 역량",
    contact_title: "연락처",
    footer_text: "위의 모든 기재사항은 사실과 다름없음을 확인합니다. 작성자 조현우."
  },
  en: {
    nav_home: "Home",
    nav_experience: "Experience",
    nav_projects: "Projects",
    nav_skills: "Skills",
    hero_title: "Hyunwoo Cho",
    hero_subtitle: "Senior Game Planner & Service Manager",
    hero_description: "A game industry veteran with 10+ years of experience. Expert in global service launching/operations across VR, Mobile, and PC. Innovating workflows through Generative AI tools like ComfyUI and Stable Diffusion.",
    view_portfolio_video: "View Portfolio Reel",
    experience_title: "Work Experience",
    projects_title: "Project Showcases",
    skills_title: "Skills & Expertise",
    contact_title: "Contact",
    footer_text: "I confirm that all information provided is true. Author: Hyunwoo Cho."
  }
};

export const PROJECTS: Record<Language, Project[]> = {
  ko: [
    { id: "1", title: "LOVE ON (VR)", company: "룩슨", year: "2023-2024", description: "VR 미소녀 연애 시뮬레이션 시스템 및 콘텐츠 기획 총괄. 스팀 런칭 성공.", videoUrl: "https://www.youtube.com/embed/UdmhKL7XMUQ", thumbnail: "", tags: ["VR", "Unreal", "Steam"] },
    { id: "2", title: "BLACKPINK THE GAME", company: "테이크원", year: "2021-2022", description: "글로벌 아티스트 IP 모바일 게임 서비스 기획 및 브랜딩.", videoUrl: "https://www.youtube.com/embed/cA6qwchbJk0", thumbnail: "", tags: ["Mobile", "K-POP", "Global"] },
    { id: "3", title: "AKB48W", company: "테이크원", year: "2021", description: "일본 아이돌 AKB48 글로벌 서비스 기획 및 홈페이지 디자인 관리.", videoUrl: "https://www.youtube.com/embed/jfwnHbLfS7E", thumbnail: "", tags: ["Idol", "Japan", "Service Design"] },
    { id: "4", title: "트리플 하츠", company: "써니사이드게임즈", year: "2018-2019", description: "AOS 장르 라이브 서비스 기획 및 글로벌(한국, 베트남 등) 오픈.", videoUrl: "https://www.youtube.com/embed/TXt9mmxj9yQ", thumbnail: "", tags: ["AOS", "Unity", "Global"] },
    { id: "5", title: "마비노기 글로벌", company: "넥슨", year: "2016-2018", description: "북미/일본 마비노기 라이브 운영 대리. Re:Zero 콜라보 성공.", videoUrl: "https://www.youtube.com/embed/_54xPRSNuIY", thumbnail: "", tags: ["MMORPG", "Nexon", "NA/JP"] },
    { id: "6", title: "크리스탈 하츠", company: "디엠케이팩토리", year: "2015-2016", description: "RPG 프로젝트 밸런스 및 시스템 기획. 스토어 상위 매출 달성.", videoUrl: "https://www.youtube.com/embed/0Xe7JE1nLKc", thumbnail: "", tags: ["RPG", "Unity", "Success"] },
    { id: "7", title: "라비린시아X2", company: "세시소프트", year: "2014-2015", description: "TCG & 그래픽 노벨 기획 및 HTML5 프로젝트 Unity 포팅.", videoUrl: "https://www.youtube.com/embed/pyBuQIOaN1g", thumbnail: "", tags: ["TCG", "Unity", "PM"] },
    { id: "8", title: "학교 2014", company: "라쿤소프트", year: "2013-2014", description: "SNG 장르 밸런스 및 생산 시스템 기획. 넷마블 퍼블리싱 조율.", videoUrl: "https://www.youtube.com/embed/fW2-CVuJMj8", thumbnail: "", tags: ["SNG", "Mobile", "Balance"] }
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
    },
    { 
      company: "디엠케이팩토리", 
      role: "기획팀 사원", 
      period: "2015.03 - 2016.11", 
      highlights: [
        "크리스탈 하츠 (RPG) 프로젝트 런칭 및 기획",
        "레벨/밸런스 기획(전투 공식, 장비 스테이터스)",
        "시나리오, 대전, 길드, 레이드 등 시스템 기획",
        "BM 기획 및 각 스토어 상위 매출 달성 기여",
        "성우 녹음 프로듀싱 등 연출/사운드 기획"
      ] 
    },
    { 
      company: "세시소프트", 
      role: "기획팀 대리", 
      period: "2014.08 - 2015.03", 
      highlights: [
        "라비린시아X2 (TCG) 기획 및 PM",
        "라비린시아1 Unity 개발 환경으로의 포팅 기획",
        "일정 및 리소스 관리, BM 기획",
        "UI/UX 기획 및 스토어 오픈 관리"
      ] 
    },
    { 
      company: "라쿤소프트", 
      role: "기획팀 사원", 
      period: "2013.09 - 2014.06", 
      highlights: [
        "학교 2014 (SNG) 기획 및 런칭",
        "건물 생산 밸런스 및 학생 레벨 기획",
        "콘텐츠/시스템(시나리오, 호감도 등) 기획",
        "넷마블 퍼블리싱 일정 조율 및 리소스 관리"
      ] 
    },
    { 
      company: "조아라", 
      role: "작가 프리랜서", 
      period: "2012.12 - 2013.05", 
      highlights: [
        "동양 판타지 소설 '칠성국' 집필 및 출판",
        "총 4권 출간 및 완결",
        "시나리오 및 세계관 구축 역량 강화"
      ] 
    },
    { 
      company: "알트원", 
      role: "기획팀 사원", 
      period: "2012.05 - 2012.12", 
      highlights: [
        "십이지천2 라이브 서비스 기획",
        "국내 및 글로벌(유럽, 터키 등) 운영 지원",
        "콘텐츠/이벤트 기획 및 유료 아이템 서비스 유지보수"
      ] 
    },
    { 
      company: "Fashion Accessories LTD", 
      role: "Designer (UK)", 
      period: "2009.05 - 2009.11", 
      highlights: [
        "영국 현지 악세서리 및 브로슈어 디자인",
        "샘플 도안 및 카탈로그 제작 관리",
        "글로벌 디자인 트렌드 리서치"
      ] 
    }
  ],
  en: [
    { 
      company: "Luxon", 
      role: "Manager, VR Development", 
      period: "2023.12 - 2024.08", 
      highlights: [
        "Lead planning for LOVE ON VR Steam launch",
        "Managed system/content planning and QA",
        "Global service operation across Steam, SideQuest"
      ] 
    },
    { 
      company: "Takeone Company", 
      role: "Publishing Team Lead", 
      period: "2020.12 - 2022.09", 
      highlights: [
        "Blackpink The Game lead service planning",
        "Publishing platform SDK and dashboard design",
        "Web3.0 NFT PFP project management"
      ] 
    },
    { 
      company: "Nexon Korea", 
      role: "Overseas Biz Manager", 
      period: "2016.11 - 2018.04", 
      highlights: [
        "Mabinogi NA/JP live operations strategy",
        "IP collaboration projects (e.g. Re:Zero)",
        "BM and localization quality control"
      ] 
    }
  ]
};

export const SKILLS = [
  { category: "Gen-AI", items: ["Stable Diffusion", "ComfyUI", "Veo3", "Kling", "Suno", "Midjourney", "ChatGPT"] },
  { category: "Planning Tools", items: ["Jira", "Trello", "Mantis", "GanttChart", "Redmine", "MS Project"] },
  { category: "Dev & Design", items: ["Unity", "Unreal Engine", "Git", "SVN", "Figma", "Photoshop", "Vegas", "Goldwave"] },
  { category: "Certificates", items: ["Information Processing Engineer", "Barista Grade 2", "MOS Master", "CS Level 2"] }
];
