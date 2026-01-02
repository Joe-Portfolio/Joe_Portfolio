# 디자인 문서 (Design Document)

## 1. 프로젝트 개요
**프로젝트명**: Joe Portfolio (조현우 포트폴리오)
**목표**: 10년차 시니어 게임 기획자 및 서비스 매니저로서의 역량을 보여주는 인터랙티브 포트폴리오 사이트 구축.
**핵심 가치**: "Professional", "Creative", "Tech-savvy" (Gen-AI 활용 강조).

## 2. 디자인 시스템 (Design System)
### 2.1 컬러 팔레트
- **Background**: Deep Slate (`#020617`, `slate-950`) - 깊이감 있는 어두운 배경.
- **Primary**: Blue (`blue-500`, `blue-600`) - 신뢰와 전문성.
- **Accent**: Purple/Violet Gradient (`gradient-text`) - 창의성과 트렌디함.
- **Text**: Slate (`slate-200`, `slate-400`, `slate-500`) - 가독성 높은 텍스트 계층 구조.

### 2.2 타이포그래피
- **Font Family**: `Inter` (영문/숫자), `Noto Sans KR` (국문).
- **Styles**:
    - Headings: Bold/Black, Tracking-tight, Uppercase.
    - Body: Clean, Readable, Line-relaxed.

### 2.3 UI 컴포넌트 & 스타일
- **Glassmorphism**: 배경 블러(`backdrop-blur`)와 반투명 레이어를 활용하여 현대적인 느낌 부여.
- **Cards**: 둥근 모서리 (`rounded-3xl` 이상), 미세한 테두리 (`border-white/5`), 호버 시 글로우 효과.
- **Animations**:
    - `fadeInUp`: 요소 등장 시 부드러운 상승 효과.
    - `typing`: 텍스트가 타이핑되듯 나타나는 효과 (상세 경력).
    - `galleryScroll`: 갤러리 이미지 무한 롤링.
    - `pulse/bar`: 로딩 및 음성 재생 status.

## 3. 기능 명세 (Functional Specifications)
### 3.1 인터랙티브 기능
- **Hexagonal Grid Background**: 마우스 움직임에 반응하여 육각형 그리드가 빛나는 Canvas 애니메이션.
- **TTS (Text-to-Speech)**: Google GenAI를 활용하여 포트폴리오 내용을 음성으로 읽어주는 기능.
- **BGM Player**: 배경 음악 재생/일시정지 제어.

### 3.2 섹션별 구성
1.  **Header (Navigation)**
    - 로고 (CHW.)
    - 유틸리티 버튼: BGM Toggle, TTS Toggle, 언어 전환 (KO/EN).
2.  **Hero Section**
    - 자기소개 텍스트.
    - CTA 버튼: 상세 경력 보기, 포트폴리오 영상 보기.
3.  **Experience (Career)**
    - 반응형 그리드 레이아웃.
    - 카드 호버 시 상세 경력 팝업 (타이핑 효과).
    - "경력 요약하기/전체 보기" 토글 기능.
4.  **Projects (Portfolio Reel)**
    - 주요 프로젝트 썸네일 그리드.
    - 클릭 시 유튜브 영상 모달 재생.
    - 호버 시 줌인 및 오버레이 효과.
5.  **Skills**
    - 카테고리별 기술 스택 나열 (Gen-AI, Planning Tools, Dev & Design).
6.  **AI Gallery**
    - 스케치 -> AI 리터칭 결과물 비교.
    - 무한 가로 스크롤링.
    - 클릭 시 이미지 확대 모달.
7.  **Footer**
    - 연락처 정보, 저작권 표시, 시스템 버전.

## 4. 데이터 구조 (Data Structure)
- **JSON 기반 데이터 관리**: `TRANSLATIONS`, `EXPERIENCES`, `PROJECTS`, `SKILLS`, `GALLERY_ITEMS` 객체로 분리하여 유지보수 용이.
- **다국어 지원**: 모든 텍스트 데이터는 `ko`와 `en` 키를 가짐.

## 5. 기술 스택 (Current Tech Stack)
- **Frontend**: React 18, HTML5.
- **Styling**: Tailwind CSS (CDN).
- **Language**: TypeScript (in separated files), Babel Standalone (in HTML).
- **AI Integration**: Google GenAI SDK (for TTS).

---
*Analyzed by Antigravity*
