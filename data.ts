
import { Project, Experience, Translation, Language, GalleryItem } from './types.ts';

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
    hero_description: "10년 9개월의 경력을 가진 게임 산업 전문가입니다. VR, 모바일, PC 플랫폼의 글로벌 서비스 런칭과 운영에 특화되어 있으며, 생성형 AI를 활용한 기획 혁신을 선도합니다.",
    view_portfolio_video: "전체 포트폴리오 보기",
    experience_label: "PROFESSIONAL CAREER",
    experience_title: "상세 경력 사항",
    projects_label: "PORTFOLIO REEL",
    projects_title: "주요 프로젝트 영상",
    projects_subtitle: "핵심 프로젝트 런칭 영상입니다. 클릭하여 상세 내용을 확인하세요.",
    skills_label: "TECHNICAL STACK",
    skills_title: "기술 및 역량",
    gallery_label: "CREATIVE PIPELINE",
    gallery_title: "AI Creative Workflow",
    gallery_description: "직접 드로잉한 스케치를 생성형 AI로 리터칭하여 시각화 퀄리티를 극대화하는 과정입니다.",
    gallery_label_sketch: "Sketch",
    gallery_label_ai: "AI Retouched",
    exp_hover_hint: "상세 내용 확인을 위해 마우스를 올리세요",
    exp_hover_full: "전체 경력 상세 보기",
    contact_title: "연락처",
    footer_text: "위의 모든 기재사항은 사실과 다름없음을 확인합니다. 작성자 조현우.",
    view_history: "전체 경력 보기",
    minimize_history: "경력 요약하기",
    explore_projects: "더 많은 프로젝트 보기"
  },
  en: {
    nav_home: "Home",
    nav_experience: "Experience",
    nav_projects: "Projects",
    nav_skills: "Skills",
    hero_title: "Hyunwoo Cho",
    hero_subtitle: "Senior Game Planner & Service Manager",
    hero_description: "A seasoned expert with 10+ years of experience. Specialist in global service launches for VR, Mobile, and PC platforms. Pioneering planning innovation with Generative AI.",
    view_portfolio_video: "View Portfolio Reel",
    experience_label: "PROFESSIONAL CAREER",
    experience_title: "Work Experience",
    projects_label: "PORTFOLIO REEL",
    projects_title: "Featured Projects",
    projects_subtitle: "Core project launch showcases. Click to watch detailed videos.",
    skills_label: "TECHNICAL STACK",
    skills_title: "Skills & Expertise",
    gallery_label: "CREATIVE PIPELINE",
    gallery_title: "AI Creative Workflow",
    gallery_description: "The process of maximizing visualization quality by retouching hand-drawn sketches with Generative AI.",
    gallery_label_sketch: "Original Sketch",
    gallery_label_ai: "AI Enhanced",
    exp_hover_hint: "Hover over for full details",
    exp_hover_full: "Detailed Resume Snippet",
    contact_title: "Contact",
    footer_text: "I confirm that all information provided is true. Author: Hyunwoo Cho.",
    view_history: "Full Career History",
    minimize_history: "Show Less",
    explore_projects: "Explore All Projects"
  }
};

export const PROJECTS: Record<Language, Project[]> = {
  ko: [
    { id: "1", title: "LOVE ON (VR)", company: "룩슨", year: "2023-2024", description: "VR 서브컬처 미소녀 연애 시뮬레이션 개발. 스팀, 사이드퀘스트 글로벌 출시.", videoUrl: "https://www.youtube.com/embed/UdmhKL7XMUQ", thumbnail: "", tags: ["VR", "Unreal", "Steam"] },
    { id: "2", title: "트리플 하츠", company: "써니사이드게임즈", year: "2018-2019", description: "AOS - Unity 프로젝트 글로벌 서비스 오픈 및 관리 (한국, 베트남, 태국, 미국, 일본, 중국).", videoUrl: "https://www.youtube.com/embed/TXt9mmxj9yQ", thumbnail: "", tags: ["AOS", "Unity", "Global"] },
    { id: "3", title: "마비노기", company: "넥슨코리아", year: "2016-2018", description: "MMORPG 해외 라이브 서비스 기획 (일본/미국). Re:제로 콜라보 등 대형 이벤트 주도.", videoUrl: "https://www.youtube.com/embed/_54xPRSNuIY", thumbnail: "", tags: ["MMORPG", "Nexon", "NA/JP"] },
    { id: "4", title: "크리스탈 하츠", company: "디엠케이팩토리", year: "2015-2016", description: "RPG - Unity 프로젝트 오픈. 밸런스, 시스템, UI/UX 기획 및 스토어 상위 매출 달성.", videoUrl: "https://www.youtube.com/embed/0Xe7JE1nLKc", thumbnail: "", tags: ["RPG", "Unity", "Success"] },
    { id: "5", title: "BLACKPINK THE GAME", company: "테이크원", year: "2021-2022", description: "글로벌 아티스트 IP 모바일 게임 브랜드 및 서비스 디자인 기획.", videoUrl: "https://www.youtube.com/embed/cA6qwchbJk0", thumbnail: "", tags: ["Mobile", "K-POP", "Global"] },
    { id: "6", title: "라비린시아X2", company: "세시소프트", year: "2014-2015", description: "TCG & 그래픽 노벨 프로젝트 Unity 포팅 및 일정/리소스 관리.", videoUrl: "https://www.youtube.com/embed/pyBuQIOaN1g", thumbnail: "", tags: ["TCG", "Unity", "PM"] },
    { id: "7", title: "학교 2014", company: "라쿤소프트", year: "2013-2014", description: "SNG 장르 밸런스 및 컨텐츠 기획. 넷마블 퍼블리싱 일정 조율.", videoUrl: "https://www.youtube.com/embed/fW2-CVuJMj8", thumbnail: "", tags: ["SNG", "Mobile", "Balance"] }
  ],
  en: [
    { id: "1", title: "LOVE ON (VR)", company: "Luxon", year: "2023-2024", description: "VR dating sim launch on Steam/SideQuest. Lead system & content planner.", videoUrl: "https://www.youtube.com/embed/UdmhKL7XMUQ", thumbnail: "", tags: ["VR", "Unreal", "Steam"] },
    { id: "2", title: "Triple Hearts", company: "Sunnyside", year: "2018-2019", description: "Global launch & Live ops for AOS project across 6+ countries.", videoUrl: "https://www.youtube.com/embed/TXt9mmxj9yQ", thumbnail: "", tags: ["AOS", "Unity", "Global"] },
    { id: "3", title: "Mabinogi Global", company: "Nexon", year: "2016-2018", description: "Overseas live operation manager for NA/JP. Managed Re:Zero collab.", videoUrl: "https://www.youtube.com/embed/_54xPRSNuIY", thumbnail: "", tags: ["MMORPG", "Nexon", "NA/JP"] },
    { id: "4", title: "Crystal Hearts", company: "DMK Factory", year: "2015-2016", description: "RPG project balance & system lead. Achieved top store rankings.", videoUrl: "https://www.youtube.com/embed/0Xe7JE1nLKc", thumbnail: "", tags: ["RPG", "Unity", "Success"] },
    { id: "5", title: "BLACKPINK THE GAME", company: "Takeone", year: "2021-2022", description: "Service design and branding for K-POP IP mobile game.", videoUrl: "https://www.youtube.com/embed/cA6qwchbJk0", thumbnail: "", tags: ["Mobile", "K-POP", "Global"] }
  ]
};

export const EXPERIENCES: Record<Language, Experience[]> = {
  ko: [
    {
      company: "룩슨", role: "VR게임 개발실 과장", period: "2023.12 - 2024.08",
      highlights: [
        "LOVE ON (VR 미소녀 연애 시뮬레이션) 개발 총괄",
        "스팀 & 사이드 퀘스트 & 잇치 출시 및 라이브 서비스 (글로벌)",
        "VR 스킨십 시스템 기획 및 구현"
      ]
    },
    {
      company: "테이크원 컴퍼니", role: "퍼블리싱서비스팀 팀장", period: "2020.12 - 2022.09",
      highlights: [
        "퍼블리싱 서비스 플랫폼 기획 및 팀 빌딩",
        "BLACKPINK THE GAME 글로벌 서비스 디자인 기획",
        "COPPA/GDPR/일본 자금결제법 등 글로벌 법률 관련 기능 기획"
      ]
    },
    {
      company: "2DC", role: "신규사업부 실장", period: "2020.06 - 2020.09",
      highlights: [
        "창업 초기 게임 플랫폼 신규 사업 기획",
        "캐릭터 채팅 플랫폼 및 퍼블리싱 운영/서비스 SDK 기획"
      ]
    },
    {
      company: "카카오키즈", role: "신규사업부 대리", period: "2019.12 - 2020.05",
      highlights: [
        "유캔두 사업 기획 및 자기 개발 플랫폼 앱 시장 분석",
        "게이미피케이션 콘텐츠 설계 (레벨, 뱃지, 랭킹 등)"
      ]
    },
    {
      company: "주식회사 써니사이드게임즈", role: "기획팀 책임연구원", period: "2018.04 - 2019.05",
      highlights: [
        "트리플 하츠 기획 (AOS - Unity)",
        "글로벌 서비스 오픈 및 관리 (한국, 베트남, 태국, 미국, 일본, 중국)"
      ]
    },
    {
      company: "넥슨코리아", role: "마비노기 해외사업팀 대리", period: "2016.11 - 2018.04",
      highlights: [
        "북미/일본 마비노기 해외 라이브 서비스 기획",
        "Re:제로 콜라보 등 대규모 이벤트 운영"
      ]
    },
    {
      company: "(주)디엠케이팩토리", role: "기획팀 사원", period: "2015.03 - 2016.11",
      highlights: [
        "크리스탈 하츠 기획 (RPG - Unity)",
        "레벨/밸런스 및 BM 기획 (가챠, 마일리지)",
        "각 스토어 상위 매출 달성"
      ]
    },
    {
      company: "세시소프트", role: "기획팀 대리", period: "2014.08 - 2015.03",
      highlights: ["라비린시아X2 기획 & PM", "HTML5 기반 게임 Unity 포팅"]
    },
    {
      company: "(주)라쿤소프트", role: "기획팀 사원", period: "2013.09 - 2014.06",
      highlights: ["학교 2014 기획 (SNG - Unity)", "넷마블 퍼블리싱 일정 조율"]
    },
    {
      company: "조아라", role: "작가 프리랜서", period: "2012.12 - 2013.05",
      highlights: ["칠성국 판타지 소설 집필 및 출판"]
    },
    {
      company: "(주)주식회사알트원", role: "기획팀 사원", period: "2012.05 - 2012.12",
      highlights: ["십이지천2 기획 및 국내/외 서비스 유지 보수"]
    },
    {
      company: "Fashion Accessories LTD", role: "Designer", period: "2009.05 - 2009.11",
      highlights: ["영국 현지 제품 및 브로슈어 디자인"]
    }
  ],
  en: [
    { company: "Luxon", role: "VR Manager", period: "2023.12 - 2024.08", highlights: ["LOVE ON VR Lead Planner"] },
    { company: "Takeone Company", role: "Publishing Lead", period: "2020.12 - 2022.09", highlights: ["BLACKPINK THE GAME Global Service Design"] },
    { company: "Nexon Korea", role: "Overseas Manager", period: "2016.11 - 2018.04", highlights: ["Mabinogi NA/JP Live Operation"] },
    { company: "DMK Factory", role: "Lead Planner", period: "2015.03 - 2016.11", highlights: ["Crystal Hearts System & Balance"] }
  ]
};

const generateGalleryItems = (): GalleryItem[] => {
  return Array.from({ length: 61 }, (_, i) => {
    const num = String(i + 1).padStart(3, '0');
    return {
      id: i + 1,
      name: `Creative Work ${num}`, // Generic name, handled by UI text mostly
      sketch: `./components/images/gallary/gallary_${num}.png`,
      result: `./components/images/gallary/gallary_${num}_ai.png`
    };
  });
};

export const GALLERY_ITEMS: Record<Language, GalleryItem[]> = {
  ko: generateGalleryItems(),
  en: generateGalleryItems()
};

export const SKILLS = [
  { category: "Gen-AI", items: ["Stable Diffusion", "ComfyUI", "Veo3", "Kling", "Suno", "Midjourney", "ChatGPT", "Cursor"] },
  { category: "Planning Tools", items: ["Jira", "Trello", "Mantis", "GanttChart", "Redmine", "MS Project"] },
  { category: "Dev & Design", items: ["Unity", "Unreal Engine", "Git", "SVN", "Figma", "Photoshop", "Vegas", "Goldwave", "Luascript"] },
  { category: "Certificates", items: ["Information Processing Engineer", "Barista Grade 2", "MOS Master", "CS Level 2", "Computer Graphics Specialist"] }
];
