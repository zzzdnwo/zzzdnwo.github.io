import nzBoard1 from '../assets/images/nzBoard_screen1.png';
import nzBoard2 from '../assets/images/nzBoard_screen2.png';
import nzBoard3 from '../assets/images/nzBoard_screen3.png';
import nzBoard4 from '../assets/images/nzBoard_screen4.png';
import nzBoard5 from '../assets/images/nzBoard_screen5.png';
import nzBoard6 from '../assets/images/nzBoard_screen6.png';
import nzBoard7 from '../assets/images/nzBoard_screen7.png';
import nzBoard8 from '../assets/images/nzBoard_screen8.png';
import nzBoard9 from '../assets/images/nzBoard_screen9.png';
import nzBoard10 from '../assets/images/nzBoard_screenGif1.gif';
import zReport1 from '../assets/images/zReport_screen1.png';
import zReport2 from '../assets/images/zReport_screen2.png';
import zReport3 from '../assets/images/zReport_screen3.png';
import zReport4 from '../assets/images/zReport_screenGif.gif';
import beyond1 from '../assets/images/beyond_screen1.jpg';
import beyond1Thumb from '../assets/images/beyond_screen1Thumb.png';
import beyond2 from '../assets/images/beyond_screen2.jpg';
import beyond2Thumb from '../assets/images/beyond_screen2Thumb.png';
import beyond3 from '../assets/images/beyond_screen3.png';
import bizbooks1 from '../assets/images/bizbooks_screen1.png';
import bizbooks2 from '../assets/images/bizbooks_screenGif1.gif';
import bizbooks3 from '../assets/images/bizbooks_screen2.png';
import bizbooks4 from '../assets/images/bizbooks_screenGif2.gif';
import bizbooks5 from '../assets/images/bizbooks_screen3.png';
import nzHome1 from '../assets/images/nzHome_screen1.gif';
import nzHome2 from '../assets/images/nzHome_screen2.gif';
import nzHome3 from '../assets/images/nzHome_screen3.jpg';
import nzHome3Thumb from '../assets/images/nzHome_screen3Thumb.png';
import nzHome4 from '../assets/images/nzHome_screen4.gif';
import nzHome5 from '../assets/images/nzHome_screen5.png';
import nzHome5Thumb from '../assets/images/nzHome_screen5Thumb.jpg';
import nzHome6 from '../assets/images/nzHome_screen6.png';
import nzHome6Thumb from '../assets/images/nzHome_screen6Thumb.jpg';
import nzHome7 from '../assets/images/nzHome_screen7.jpg';
import nzHome7Thumb from '../assets/images/nzHome_screen7Thumb.png';

const feature = (id, title, bullets) => ({ id, title, bullets });
const stack = (name, category) => ({ name, category });
const screen = (src, label, thumbnail = src) => ({ src, thumbnail, label });

const projectDetails = {
  nzBoard: {
    summary: [
      '뉴젠보드(프로그램 매뉴얼 사이트) 리뉴얼 프로젝트',
      '기존 레거시 Vanilla JS 기반 구조를 React + TypeScript 구조로 리뉴얼 안정성과 유지보수성을 향상.',
    ],
    description: ['뉴젠 전체 프로그램 매뉴얼을 조회·검색하고 등록·수정·삭제할 수 있는 매뉴얼 통합 관리 웹사이트'],
    stacks: [
      stack('React', 'frontend'), stack('TypeScript', 'frontend'), stack('Zustand', 'frontend'), stack('SCSS', 'frontend'),
      stack('REST API', 'database'), stack('CKEditor 5', 'dataVisual'), stack('Git', 'dev'), stack('GitHub', 'dev'),
      stack('Redmine', 'dev'), stack('Zeplin', 'dev'),
    ],
    sections: [
      {
        id: 'features', title: '✨ 주요 구현 기능', items: [
          feature('react-typescript', 'React + TypeScript 기반 프론트엔드 개발', [
            'React + TypeScript 기반 컴포넌트 구조로 프론트엔드를 구현하여 화면 단위를 모듈화하고 유지보수를 고려한 UI 구조로 개발',
            '프로그램 선택 및 카테고리 상태에 따라 화면이 동적으로 변경되는 구조를 구현하여 데이터 기반 UI 흐름을 설계',
          ]),
          feature('zustand', '전역 상태 관리 구조 구축 (Zustand)', [
            '프로그램 선택 상태와 Depth 계층 상태를 전역으로 관리하여 화면 간 상태 흐름을 일관되게 유지',
            'Write 화면 진입 시 현재 선택된 카테고리 정보를 자동으로 전달하도록 구현하여 매뉴얼 작성 시 사용자 편의성을 개선',
          ]),
          feature('tree-menu', '계층형 트리 메뉴 시스템 구현', [
            'Depth1~4 구조의 계층형 카테고리 트리 메뉴를 구현하여 프로그램별 매뉴얼을 체계적으로 탐색할 수 있도록 구성',
            '트리 메뉴 선택 시 category 정보와 상태가 연동되어 관련 매뉴얼 목록 및 편집 화면이 동적으로 갱신되도록 구현',
          ]),
          feature('common-ui', '공통 UI 컴포넌트 개발', [
            'Dropdown, Dialog, CheckBox 등 재사용 가능한 공통 UI 컴포넌트를 구현',
            'Header 및 Depth 메뉴(TabListDepth) 구조를 컴포넌트 단위로 분리하여 UI 재사용성과 코드 유지보수성을 향상',
          ]),
          feature('manual', '매뉴얼 관리 기능 구현', [
            'CKEditor 기반 매뉴얼 작성 기능을 구현하여 프로그램별 매뉴얼을 작성·수정할 수 있도록 구성',
            '매뉴얼 등록·수정·삭제 기능을 REST API와 연동하여 데이터 기반으로 UI가 동적으로 갱신되도록 구현',
          ]),
          feature('admin', '관리자 모드(Admin) 기능 구현', [
            '관리자 화면에서 프로그램 및 카테고리(Depth1~4) 정보를 관리할 수 있는 기능 구현',
            '관리자 편집 페이지를 구축하여 카테고리 등록·수정·삭제 기능을 구현',
            '트리 메뉴 선택 상태와 연동하여 선택된 카테고리 정보를 편집할 수 있도록 구현하고 수정 시 UI와 상태가 동기화되도록 처리',
          ]),
        ],
      },
      {
        id: 'troubleshooting', title: '💫 Trouble Shooting', items: [
          feature('menu-selection', '검색 → 메뉴 이동 시 자동 메뉴 선택 충돌 문제', [
            '**[문제점]** 검색 결과에서 게시글 이동 시 메뉴 자동 선택 로직과 기존 메뉴 로딩 로직이 충돌하여 의도하지 않은 메뉴가 선택되는 문제가 발생',
            '**[해결]** 메뉴 상태를 `Zustand` 전역 상태로 관리하고 검색 이동 시 카테고리 정보를 기준으로 단계적으로 메뉴 상태를 설정하도록 로직을 분리',
            '**[회고]** 여러 로직이 동시에 상태를 변경할 경우 UI 상태 충돌이 발생할 수 있음을 경험했습니다.',
          ]),
          feature('ckeditor-types', 'CKEditor 커스텀 빌드 TypeScript 인식 문제', [
            '**[문제점]** 커스텀 CKEditor 빌드를 사용할 때 TypeScript가 모듈 타입을 인식하지 못해 컴파일 오류가 발생',
            '**[해결]** 커스텀 빌드 경로에 `.d.ts` 모듈 선언 파일을 추가하여 TypeScript가 모듈을 인식하도록 처리',
            '**[회고]** 외부 라이브러리 커스터마이징 시 타입 선언 관리의 중요성을 경험했습니다.',
          ]),
          feature('ckeditor-content', 'CKEditor 콘텐츠 렌더링 오류 처리', [
            '**[문제점]** 글 수정 페이지에서 게시글 콘텐츠를 CKEditor에 그대로 렌더링할 때 특정 문자열이 태그로 인식되어 에디터 로딩 오류가 발생',
            '**[해결]** `DOMParser`와 `DOMPurify`로 HTML을 파싱·정제한 후 CKEditor에 전달하도록 처리',
            '**[회고]** 사용자 입력 기반 HTML 콘텐츠는 렌더링 전 정제 과정이 필요함을 경험했습니다.',
          ]),
          feature('search-url', 'PDF 다운로드 검색 상태 URL 동기화 문제', [
            '**[문제점]** 검색어와 필터 상태가 URL과 동기화되지 않아 새로고침이나 브라우저 이동 시 검색 상태가 유지되지 않는 문제가 발생',
            '**[해결]** `Zustand` 상태와 `URLSearchParams`, `history.pushState`를 활용해 URL과 검색 상태를 동기화',
            '**[회고]** 검색 기능에서는 URL과 UI 상태를 함께 관리하는 방식의 중요성을 경험했습니다.',
          ]),
        ],
      },
    ],
    screens: [
      screen(nzBoard1, '로그인'), screen(nzBoard2, '메인'), screen(nzBoard3, '메인 (사이드 바)'),
      screen(nzBoard4, '메인 (검색 기능)'), screen(nzBoard5, '검색 결과'), screen(nzBoard6, '글 작성'),
      screen(nzBoard7, '글 수정'), screen(nzBoard8, '카테고리 편집'), screen(nzBoard9, 'PDF 다운로드'), screen(nzBoard10, 'PDF 다운로드 시연'),
    ],
  },
  zReport: {
    summary: ['기존 사내 리포트 툴을 웹 기반 서비스로 전환하는 프로젝트', '리포트 조회 및 관리 기능을 웹 페이지 형태로 구현하여 사용자의 접근성과 활용성을 개선.'],
    description: ['회사 내부 직원들이 사용하는 자사 리포트 관리 시스템으로, 리포트 작성·수정·조회 기능을 제공하는 웹 기반 프로그램'],
    stacks: [stack('SCSS', 'frontend'), stack('Git', 'dev'), stack('GitHub', 'dev'), stack('Jira', 'dev'), stack('Redmine', 'dev'), stack('Zeplin', 'dev')],
    sections: [
      {
        id: 'features', title: '✨ 주요 구현 기능', items: [
          feature('web-ui', '리포트 관리 시스템 웹 전환 UI 구현', ['기존 사내 리포트 프로그램을 웹 기반 리포트 관리 시스템으로 전환하는 프로젝트에서 화면 전반의 UI 퍼블리싱을 담당', '리포트 작성·수정·조회 기능 화면을 웹 환경에 맞는 사용자 인터페이스로 구현']),
          feature('backend-collaboration', '백엔드 개발자 협업 기반 화면 개발', ['타 부서 백엔드 개발자들과 협업하여 API 구조와 데이터 흐름을 기반으로 화면 UI를 구현', '기능 구현 과정에서 데이터 구조 및 기능 동작에 대한 의견을 공유하며 화면과 기능이 자연스럽게 연동되도록 개발']),
          feature('jira', 'Jira 기반 협업 및 일정 관리', ['Jira를 활용하여 작업 이슈를 할당받고 업무 진행 상황 및 일정 관리를 체계적으로 수행', '이슈 단위로 작업 내용 및 의견을 공유하며 팀원들과 협업 프로세스를 경험']),
          feature('common-ui', '공통 UI 모듈화', ['모달 및 반복적으로 사용되는 UI 요소를 공통 모듈로 구성하여 화면 개발 시 재사용성을 높임', '공통 스타일을 정리하여 프로젝트 전반에서 일관된 UI를 유지하도록 구성']),
          feature('schedule', '프로젝트 화면 작업 및 일정 조율', ['프로젝트 화면 전반의 퍼블리싱을 담당하며 기능 개발 진행 상황에 맞춰 작업 일정 및 진행 상황을 주기적으로 공유', '개발 일정과 기능 구현 상황을 고려하여 작업 우선순위를 조율하며 프로젝트 진행에 기여']),
        ],
      },
      {
        id: 'troubleshooting', title: '💫 Trouble Shooting', items: [
          feature('ui-alignment', '협업 과정에서 UI 표현 방식 정리', ['**[문제점]** 새롭게 추가되는 기능을 UI에서 어떻게 표현할지에 대한 기준이 명확하지 않아 타 부서 개발자들과의 이해 차이가 발생', '**[해결]** 기능 요구사항과 데이터 흐름을 기반으로 UI 구조를 정리하고 담당자들과 회의를 통해 화면 구성 방식을 조율', '**[회고]** 기능 구조를 이해한 상태에서 UI를 담당자들과 의논하고 협업을 통해 방향을 맞추는 과정의 중요성을 경험했습니다.']),
          feature('schedule-dependency', '협업 프로젝트 일정 의존성 관리', ['**[문제점]** 여러 개발자가 동시에 작업하는 구조로 인해 백엔드 개발 일정에 따라 프론트 작업이 대기 상태가 되는 상황이 발생', '**[해결]** `Jira`를 활용해 작업 이슈를 관리하고 백엔드 개발 일정에 맞춰 작업 우선순위를 조정하며 업무 시간을 효율적으로 배분', '**[회고]** 협업 프로젝트에서는 개인 작업 속도뿐 아니라 전체 개발 일정과 팀 작업 흐름을 고려한 일정 관리가 중요하다는 것을 배웠습니다.']),
        ],
      },
    ],
    screens: [screen(zReport1, '편집모드 1'), screen(zReport2, '텍스트 편집'), screen(zReport3, '스크립트 편집'), screen(zReport4, '제트리포트 시연')],
  },
  beyond: {
    summary: ['비욘드 재무보고서 (업체 재무 데이터 대시보드) 구축 프로젝트', '재무 데이터를 웹 페이지에서 조회할 수 있도록 대시보드 형태로 구현하고 데이터 시각화를 통해 재무 정보 조회 편의성과 데이터 가시성을 향상.'],
    description: ['세무 및 기업관리 프로그램에서 관리되는 업체 재무 데이터를 웹 페이지에서 조회할 수 있도록 구축한 재무 데이터 대시보드'],
    stacks: [stack('HTML5', 'frontend'), stack('CSS3', 'frontend'), stack('JavaScript', 'frontend'), stack('Chart.js', 'dataVisual'), stack('REST API', 'database'), stack('OZReport', 'database'), stack('Git', 'dev'), stack('Redmine', 'dev'), stack('Zeplin', 'dev')],
    sections: [
      { id: 'features', title: '✨ 주요 구현 기능', items: [
        feature('dashboard-ui', '재무 데이터 대시보드 UI 구현', ['업체 코드와 기준년월 파라미터를 기준으로 재무 데이터를 조회할 수 있는 대시보드 화면 구조 구현', '재무 지표를 직관적으로 확인할 수 있도록 다양한 데이터 시각화 UI를 구성']),
        feature('chart', 'Chart.js 기반 데이터 시각화', ['Chart.js 라이브러리를 활용하여 재무 데이터를 그래프 및 차트 형태로 시각화', '재무 지표를 시각적으로 표현하여 보고서 데이터의 이해도를 높일 수 있도록 구현']),
        feature('api', '백엔드 API 연동 및 데이터 바인딩', ['백엔드에서 제공하는 API를 통해 JSON 형태의 재무 데이터를 수신', '데이터 구조를 분석하여 대시보드 UI와 차트 컴포넌트에 정확하게 매핑']),
        feature('parameters', '파라미터 기반 동적 대시보드 구현', ['업체 코드 및 조회 기간 파라미터에 따라 동일 화면에서 데이터가 동적으로 변경되는 구조 구현', '다양한 업체 및 기간 데이터를 하나의 대시보드에서 조회할 수 있도록 설계']),
        feature('print', '재무보고서 인쇄 기능 구현', ['대시보드 화면 데이터를 인쇄 가능한 보고서 형태로 제공', 'OZReport를 활용하여 재무 데이터 기반 인쇄용 리포트 출력 기능 구현']),
        feature('responsive', '반응형 대시보드 레이아웃 구현', ['다양한 해상도 환경에서 재무 데이터를 안정적으로 확인할 수 있도록 반응형 레이아웃 구현', '대시보드 화면의 가독성과 활용성을 고려한 UI 구조 설계']),
      ] },
      { id: 'troubleshooting', title: '💫 Trouble Shooting', items: [
        feature('chart-customization', 'Chart.js 플러그인을 활용한 재무 데이터 차트 커스터마이징', ['**[문제점]** Chart.js가 Canvas 기반으로 렌더링되어 CSS 스타일링이 적용되지 않아 요구된 차트 디자인 구현에 제약 발생', '**[해결]** `chartjs-datalabels`와 `chartjs-annotation` 등을 활용해 데이터 라벨과 기준선 등을 구현하고 차트 옵션을 커스터마이징하여 재무 데이터 차트 구성', '**[회고]** 차트 렌더링 방식을 이해하고 플러그인을 이용해 라이브러리 기본 기능의 한계를 보완하는 방법을 경험했습니다.']),
        feature('data-extension', '프로젝트 진행 중 고객사 요청 데이터 항목 추가 대응', ['**[문제점]** 프로젝트 진행 중 고객사에서 신규 재무 데이터 항목 추가 요청이 발생하여 기존 대시보드 차트 구조 수정이 필요', '**[해결]** 설계자 및 백엔드와 협의하여 확장된 API 데이터를 전달받고 Chart.js 기반 차트를 수정·추가하여 신규 재무 데이터를 시각화', '**[회고]** 프로젝트 진행 과정에서 발생하는 요구사항 변경에 대응하며 데이터 구조 변화에 맞춰 UI를 유연하게 확장하는 경험을 했습니다.']),
        feature('responsive-report', '재무보고서 웹 페이지 반응형 UI 개선', ['**[문제점]** 재무보고서 페이지가 PC 화면 중심으로 구성되어 있어 모바일 환경에서는 차트와 데이터 테이블의 가독성이 떨어지는 문제가 발생', '**[해결]** SCSS 기반 반응형 레이아웃을 적용하고 화면 크기에 따라 차트와 테이블 구조를 재구성하여 PC와 모바일 환경 모두에서 재무 데이터를 확인할 수 있도록 UI를 개선', '**[회고]** 데이터 중심 화면에서는 단순 레이아웃 축소가 아닌 정보 구조와 가독성을 함께 고려한 반응형 설계가 중요하다는 것을 경험했습니다.']),
      ] },
    ],
    screens: [screen(beyond1, '재무보고서 PC', beyond1Thumb), screen(beyond2, '재무보고서 모바일', beyond2Thumb), screen(beyond3, '재무보고서 OZReport')],
  },
  bizbooks: {
    summary: ['비즈북스 (세무 비즈니스 플랫폼) 서비스 운영 및 UI 고도화', '신규 메뉴 및 기능 화면 퍼블리싱과 UI 리뉴얼 작업을 통해 서비스 화면 구조 확장 및 유지보수 효율 개선.'],
    description: ['세무 업무에 필요한 기능을 제공하는 세무 비즈니스 플랫폼 서비스'],
    stacks: [stack('HTML5', 'frontend'), stack('CSS3', 'frontend'), stack('JavaScript', 'frontend'), stack('ToastGrid', 'dataVisual'), stack('Chart.js', 'dataVisual'), stack('Git', 'dev'), stack('GitHub', 'dev'), stack('Redmine', 'dev'), stack('Zeplin', 'dev')],
    sections: [
      { id: 'features', title: '✨ 주요 구현 기능', items: [
        feature('new-menu', '플랫폼 신규 메뉴 및 기능 화면 구현', ['플랫폼 신규 메뉴 기획에 맞춰 서비스 메뉴 구조에 맞는 화면 레이아웃을 구현하고 UI를 적용', '기존 서비스 화면 구조와 UI 패턴을 고려하여 신규 메뉴와 기능 화면이 자연스럽게 확장될 수 있도록 구성']),
        feature('renewal', 'UI 리뉴얼 및 운영 서비스 유지보수', ['디자인 리뉴얼 시안을 기반으로 기존 서비스 화면 UI를 재구성하고 변경된 디자인을 적용', '서비스 운영 중 발생하는 레이아웃 깨짐 및 화면 UI 오류를 수정하여 안정적인 사용자 환경 유지']),
        feature('grid', 'Toast Grid 기반 데이터 그리드 UI 구현', ['Toast Grid를 활용하여 서비스 화면에서 사용하는 데이터 그리드 UI 구조를 구현', '그리드 스타일링과 기본 레이아웃 템플릿을 구성하여 여러 화면에서 공통으로 사용할 수 있는 그리드 UI 형태를 적용', '셀 내부 Select 메뉴, 버튼 UI를 적용하고 마우스 오버 시 위치 기반 툴팁이 표시되도록 인터랙션 기능 구현']),
        feature('chart', 'Chart.js 기반 데이터 시각화 구현', ['재무 및 통계 데이터를 직관적으로 확인할 수 있도록 Chart.js 기반 차트 UI 구현', '데이터 특성에 맞는 차트 형태를 적용하여 서비스 화면에서 재무 정보를 시각적으로 확인할 수 있도록 구성']),
      ] },
      { id: 'troubleshooting', title: '💫 Trouble Shooting', items: [
        feature('layout', '운영 서비스 UI 레이아웃 깨짐 대응', ['**[문제점]** 서비스 운영 중 특정 화면에서 데이터 길이나 화면 환경에 따라 UI 레이아웃이 깨지는 문제가 발생', '**[해결]** CSS 구조와 레이아웃 스타일을 수정하여 다양한 데이터 길이와 화면 환경에서도 UI가 안정적으로 표시되도록 처리', '**[회고]** 운영 서비스에서는 다양한 데이터 상황을 고려한 UI 구현과 빠른 문제 대응이 중요함을 경험했습니다.']),
        feature('chart-options', 'Chart.js 차트 데이터 표시 및 옵션 적용 문제', ['**[문제점]** 재무 데이터를 Chart.js로 시각화하는 과정에서 데이터 값과 차트 표시 방식이 요구된 화면과 다르게 표현되는 문제가 발생', '**[해결]** Chart.js 옵션을 조정하고 데이터 구조에 맞게 차트 설정을 수정하여 재무 데이터가 화면에서 정확하게 표시되도록 처리', '**[회고]** 데이터 시각화 구현 시 차트 라이브러리의 옵션과 데이터 구조를 함께 고려해야 원하는 UI 결과를 구현할 수 있음을 경험했습니다.']),
        feature('grid-tooltip', 'Toast Grid 셀 인터랙션 및 툴팁 표시 문제', ['**[문제점]** Toast Grid 셀 내부에 버튼, Select 메뉴 등의 UI 요소를 추가하고 마우스 오버 시 툴팁을 표시하는 과정에서 셀 위치와 맞지 않거나 이벤트가 정상적으로 동작하지 않는 문제가 발생', '**[해결]** 셀 렌더링 구조와 이벤트 동작 방식을 확인한 후 마우스 이벤트 위치를 기준으로 툴팁 위치를 계산하도록 처리하여 셀 UI와 인터랙션이 정상적으로 동작하도록 수정', '**[회고]** 그리드 라이브러리 내부 구조를 이해하고 셀 단위 UI 인터랙션을 처리하는 과정에서 라이브러리 기반 UI 커스터마이징 경험을 쌓을 수 있었습니다.']),
      ] },
    ],
    screens: [screen(bizbooks1, '상담관리'), screen(bizbooks2, '상담관리 테스트'), screen(bizbooks3, '신고관리'), screen(bizbooks4, '월결산보고서 시연'), screen(bizbooks5, '오류접수')],
  },
  nzHome: {
    summary: ['대표 홈페이지와 다수의 프로그램 마이크로사이트를 제작 및 유지보수', 'UI 인터랙션 구현과 SEO 개선 작업을 통해 사용자 경험과 웹 품질을 지속적으로 개선'],
    description: ['대표 홈페이지와 다수의 프로그램 마이크로사이트'],
    stacks: [stack('HTML5', 'frontend'), stack('CSS3', 'frontend'), stack('JavaScript', 'frontend'), stack('Ajax', 'frontend'), stack('AOS.js', 'library'), stack('Waypoints.js', 'library'), stack('CountUp.js', 'library'), stack('Magnify.js', 'library'), stack('Slick.js', 'library'), stack('Microsoft SQL Server', 'database'), stack('Google Lighthouse', 'analytics'), stack('GitHub', 'dev'), stack('Redmine', 'dev'), stack('Zeplin', 'dev')],
    sections: [
      { id: 'features', title: '✨ 주요 구현 기능', items: [
        feature('scroll-interaction', '대표 홈페이지 메인 스크롤 인터랙션 UI 구현', ['AOS, Waypoints, CountUp.js 등을 활용하여 스크롤 위치에 따라 애니메이션이 동작하는 인터랙션 UI 구현', '섹션별 등장 애니메이션과 카운트업 효과를 적용하여 메인 화면의 동적 사용자 경험 구성']),
        feature('gallery', '홈페이지 이미지 자료실 갤러리 기능 구현', ['magnify 플러그인을 커스터마이징하여 디자인 이미지 자료를 미리보기 형태로 확인할 수 있는 갤러리 UI 구현', '이미지 확대 보기 및 탐색 기능을 적용하여 자료 확인 편의성 개선']),
        feature('download', 'Ajax 기반 이미지 다운로드 기능 구현', ['Ajax를 활용하여 이미지 파일 다운로드 기능 구현', '한글 파일명 다운로드 시 발생하는 인코딩 문제를 처리하여 정상적인 파일명으로 저장되도록 개선']),
        feature('seo', 'SEO 및 웹 품질 개선', ['Google Lighthouse를 활용하여 성능(Performance), 접근성(Accessibility), SEO 항목 분석', '이미지 최적화, 마크업 구조 개선 등을 통해 웹 품질 및 검색 엔진 친화성 개선']),
      ] },
      { id: 'troubleshooting', title: '💫 Trouble Shooting', items: [
        feature('scroll-timing', '스크롤 애니메이션 이벤트 실행 시점 문제', ['**[문제]** 홈페이지 메인 스크롤 애니메이션 구현 과정에서 스크롤 위치에 따라 이벤트가 실행되는 시점이 의도한 구간과 맞지 않는 문제가 발생', '**[해결]** `Waypoints`를 활용하여 요소가 화면에 진입하는 기준 지점을 조정하고 이벤트 조건을 세분화하여 애니메이션이 의도한 시점에 실행되도록 수정', '**[회고]** 스크롤 기반 인터랙션 구현 시 단순 이벤트 처리보다 요소의 화면 진입 시점과 스크롤 흐름을 고려한 이벤트 제어가 중요하다는 것을 경험']),
        feature('magnify', 'Magnify.js 갤러리 기능 커스터마이징', ['**[문제]** 이미지 자료실 갤러리 구현 과정에서 디자인 요구사항이 Magnify.js에서 기본적으로 제공하는 기능보다 다양하여 원하는 UI와 동작을 그대로 적용하기 어려움', '**[해결]** `Magnify.js` 동작 구조를 분석하여 이미지 비율 유지 처리, 마우스 휠 확대 이벤트, 태그 저장 기능 등을 추가로 구현하여 요구된 기능을 커스터마이징 방식으로 적용', '**[회고]** 플러그인을 그대로 사용하는 것이 아니라 서비스 요구사항에 맞게 기능을 확장하거나 수정하는 과정에서 라이브러리 커스터마이징 경험을 쌓을 수 있었음']),
        feature('filename', '한글 파일명 이미지 다운로드 인코딩 문제', ['**[문제]** 이미지 자료실에서 Ajax로 파일 다운로드 구현 시 한글 파일명이 깨져 다운로드되는 문제가 발생', '**[해결]** 파일 다운로드 시 인코딩 처리를 적용하여 한글 파일명이 정상적으로 유지되도록 수정', '**[회고]** 파일 다운로드 기능 구현 시 브라우저와 서버 간 인코딩 처리 방식에 대한 이해가 필요하다는 것을 경험']),
      ] },
    ],
    screens: [screen(nzHome1, '대표 홈페이지 메인'), screen(nzHome2, '홈페이지 회사소개'), screen(nzHome3, '홈페이지 공지사항', nzHome3Thumb), screen(nzHome4, '홈페이지 이미지 자료실'), screen(nzHome5, '비즈북스 마이크로페이지', nzHome5Thumb), screen(nzHome6, '택스비즈북 마이크로페이지', nzHome6Thumb), screen(nzHome7, '케이렙365 마이크로페이지', nzHome7Thumb)],
  },
  portfolio: {
    summary: [
      '개인 포트폴리오 웹사이트 구축',
      '프로젝트 경험과 기술 역량을 구조적으로 보여주기 위한 React 기반 개인 포트폴리오 사이트',
    ],
    description: [
      '개발 프로젝트, 업무 경험, 기술 스택을 한 곳에서 소개하고 개별 프로젝트의 구현 내용과 문제 해결 과정을 기록하는 개인 웹사이트',
    ],
    stacks: [
      stack('React', 'frontend'), stack('React Router', 'frontend'), stack('SCSS', 'frontend'),
      stack('Spline', 'library'), stack('Jest', 'dev'), stack('GitHub Pages', 'dev'),
    ],
    sections: [
      {
        id: 'features', title: '✨ 주요 구현 기능', items: [
          feature('project-records', '프로젝트 기록 데이터 구조화', [
            '프로젝트 카드, 상세 설명, 기술 스택, 작업 화면 정보를 데이터 중심으로 구성하여 새로운 프로젝트를 같은 형식으로 추가할 수 있도록 설계',
            '공통 상세 화면 컴포넌트를 사용하여 프로젝트별 마크업 중복을 줄이고 콘텐츠 수정 범위를 데이터 파일로 제한',
          ]),
          feature('responsive-ui', '반응형 포트폴리오 UI 구현', [
            '데스크톱과 모바일 화면에서 프로젝트 및 경력 정보를 읽기 쉽게 확인할 수 있도록 반응형 레이아웃과 슬라이드 UI를 적용',
            '프로젝트 카드와 이미지 갤러리를 키보드로도 이용할 수 있도록 접근 가능한 인터랙션 구조를 적용',
          ]),
          feature('performance', '초기 로딩 성능 개선', [
            '용량이 큰 Spline 3D 요소와 프로젝트 상세 화면을 필요 시점에 불러오도록 지연 로딩을 적용',
            '이미지에 지연 로딩을 적용해 첫 화면에서 필요한 리소스 중심으로 로드되도록 구성',
          ]),
          feature('quality', '품질 검증 기반 유지보수', [
            '라우팅, 상세 화면 인터랙션, 프로젝트 카드, 클립보드 동작을 자동 테스트로 검증할 수 있도록 구성',
            '콘텐츠 추가 시 데이터와 공통 컴포넌트의 역할을 분리해 변경 영향을 줄이도록 관리',
          ]),
        ],
      },
    ],
    screens: [],
  },
};

export default projectDetails;
