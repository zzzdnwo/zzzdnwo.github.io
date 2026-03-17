import React, { useState, useMemo, Suspense, useRef, useEffect } from 'react';
import '../assets/scss/main.scss';
import '../assets/scss/detail.scss';
import Modal from '../components/Modal';
import ErrorBoundary from '../components/ErrorBoundary';
import projects from '../data/projects';




export default function Home() {
  const [activeProject, setActiveProject] = useState(null);
  const [activeNav, setActiveNav] = useState(null);
  const [heroStart, setHeroStart] = useState(false);

  const workRef = useRef(null);
  const projectRef = useRef(null);
  const expRef = useRef(null);
  
  //애니메이션용
  const qnaAniRef = useRef(null);
  const projectAniRef = useRef(null);
  const expAniRef = useRef(null);

  // activeFile이 바뀔 때마다 lazy 컴포넌트를 만들어 반환
  const ActiveComponent = useMemo(() => {
    if (!activeProject) return null;
    return React.lazy(() => import(`../projects/${activeProject.file}.jsx`));
  }, [activeProject]);




  //useEffect 영역

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeroStart(true);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {

  const moveLight = (e) => {

    const x = e.clientX + "px";
    const y = e.clientY + "px";

    document.documentElement.style.setProperty('--mouse-x', x);
    document.documentElement.style.setProperty('--mouse-y', y);
  };

  window.addEventListener('mousemove', moveLight);

  return () => {
    window.removeEventListener('mousemove', moveLight);
  };

}, []);

  useEffect(() => {
    const workEl = workRef.current;
    const projectEl = projectRef.current;
    const expEl = expRef.current;
    if (!workEl || !projectEl || !expEl) return;

    const observer = new IntersectionObserver(
      () => {
        const workRect = workEl.getBoundingClientRect();

        // work 영역 밖
        if (workRect.bottom <= 0 || workRect.top >= window.innerHeight) {
          setActiveNav(null);
          return;
        }

        const projectRect = projectEl.getBoundingClientRect();
        const expRect = expEl.getBoundingClientRect();

        // project_cont가 보이는 정도
        const projectVisible =
          projectRect.bottom > 0 &&
          projectRect.top < window.innerHeight;

        if (projectVisible) {
          setActiveNav('project');
          return;
        }

        // project_cont가 안보이면 exp 버튼 activeNav
        const expTriggerLine = window.innerHeight * 0.4;
        if (expRect.top <= expTriggerLine) {
          setActiveNav('exp');
          return;
        }
      },
      {
        threshold: 0,
      }
    );

    observer.observe(workEl);
    observer.observe(projectEl);
    observer.observe(expEl);

    return () => observer.disconnect();
  }, []);

  /* QNA 스크롤 이벤트 */
  useEffect(() => {
    const el = qnaAniRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('show');
        } else {
          el.classList.remove('show');
        }
      },
      {
        threshold: 0.3,
        rootMargin: '25% 0px 0px 0px',
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = projectAniRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('show');
        } else {
          el.classList.remove('show');
        }
      },
      {
        threshold: 0.06,
        rootMargin: '25% 0px 0px 0px',
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = expAniRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('show');
        } else {
          el.classList.remove('show');
        }
      },
      {
        threshold: 0.06,
        rootMargin: '25% 0px 0px 0px',
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  // work 섹션 네비게이션 스크롤 이벤트
  function scrollTo(section) {
    if (section === 'project') {
      projectRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
    if (section === 'exp') {
      const y =
        expRef.current.getBoundingClientRect().top +
        window.pageYOffset +
        1;

      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  //맨 위로 스크롤
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  function openProject(project) {
    setActiveProject(project);
  }

  // 마우스 엔터 시 사전 로드(preload) — 모달 첫 열림 지연 완화
  function preload(file) {
    import(`../projects/${file}.jsx`).catch(() => {}); 
  };

  //메일 클립보드 저장
  function copyMail() {
    const email = 'seosson@naver.com';

    navigator.clipboard.writeText(email)
      .then(() => {
        alert('메일 주소가 복사되었습니다!');
      });
  }

  return (
  <div className='mainCont'>
    <main className={heroStart ? "hero_start" : ""}>
      <div className="pos">
        <div className="main_bg"></div>
        <div className="intro_mask"></div>
        <div className="myname_wrap">
          <h2 className="myname">SHIN WOO JAE</h2>
        </div>
      </div>
    </main>
    <section className="about">
      <div className="about_left">
        <h3>About me</h3>
        <div className="about_profile">

        </div>
        <p className="about_period">2021.09 - 2025.10 <span></span> 4년 11개월</p>
        <span className="about_companyNm">뉴젠솔루션</span>
        <ul className="about_workList">
          <li>뉴젠보드</li>
          <li>제트리포트</li>
          <li>비욘드 재무보고서</li>
          <li>비즈북스</li>
          <li>홈페이지 및 마이크로사이트</li>
        </ul>
      </div>
      <div className="about_right">
        <div className="qna_ani" ref={qnaAniRef}>
          <h3>Interview</h3>
          <div className="qnaList">
            <div className="qna">
              <span className="qna_question">
                Q. 웹퍼블리셔를 선택한 이유는 무엇인가요?
              </span>
              <p className="qna_answer">
                디자인을 코드로 구현해 <strong>실제 서비스 환경에서 작동하는 웹을 만드는 과정</strong>에 매력을 느꼈습니다.<br />
                초기에는 마크업 중심의 작업이었지만, 프로젝트를 진행하며 웹 접근성과 크로스브라우징 이슈를 직접 대응하고<br />
                SPA 구조 전환 작업을 경험하면서 단순 구현을 넘어 구조와 흐름을 이해하는 일에 흥미를 갖게 되었습니다.<br />
                <br />
                또한 API 연동을 통해 서버 데이터를 화면에 반영하는 작업을 수행하며, 웹은 ‘보여지는 결과물’이 아니라<br />
                사용자와 끊임없이 상호작용하는 환경이라는 것을 체감했습니다.<br />
                이러한 경험을 통해 이 직무의 확장성과 깊이에 매력을 느끼게 되었고, 자연스럽게 이 길을 선택하게 되었습니다.
              </p>
            </div>
            <div className="qna">
              <span className="qna_question">
                Q. 어떤 방식으로 일하는 걸 중요하게 생각하나요?
              </span>
              <p className="qna_answer">                                
                협업 과정에서의 명확한 커뮤니케이션을 가장 중요하게 생각합니다.<br />
                 실제 프로젝트에서 기획 의도와 디자인 해석의 차이로 수정이 반복된 경험이 있었고,<br />
                 이후에는 초기 단계에서부터 <strong>기술적 제약과 구현 방식을 함께 논의</strong>하는 습관을 갖게 되었습니다.<br />
                 <br />
                 또한 화면을 구현할 때는 단순히 디자인을 재현하는 데 그치지 않고, 이후 <strong>기능 확장이나 유지보수를 고려해 구조화</strong>하려고 합니다.<br />
                 운영 단계에서 작은 구조 차이가 유지보수 난이도를 크게 좌우한다는 것을 경험했기 때문에,<br />
                 안정적으로 운영될 수 있는 결과물을 만드는 것을 중요하게 생각합니다.
              </p>
            </div>
            <div className="qna">
              <span className="qna_question">
                Q. 앞으로 어떤 개발자로 성장하고 싶나요?
              </span>
              <p className="qna_answer">
                단순 구현을 넘어, <strong>구조와 데이터 흐름을 이해하고 안정적으로 확장할 수 있는 개발자</strong>로 나아가고자 합니다.<br />
                React 기반 리뉴얼 프로젝트를 진행하며 컴포넌트 단위로 역할을 분리하고 재사용성을 고려한 구조를 고민해왔으며,<br />
                API 통신과 상태 관리를 직접 구현하며 프론트엔드 영역을 확장해왔습니다.<br />
                <br />
                앞으로는 화면의 완성도뿐 아니라 성능, 유지보수성, 데이터 흐름까지 균형 있게 고려할 수 있는 개발자로 자리 잡는 것이 목표입니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="work" ref={workRef}>
      <nav className="work_nav">
        <button id="project"
          className={activeNav === 'project' ? 'on' : ''}
          onClick={() => scrollTo('project')}      
        >Project</button>
        <button id="exp"
          className={activeNav === 'exp' ? 'on' : ''}
          onClick={() => scrollTo('exp')}
        >Experience</button>
      </nav>
      <div className="work_right">
        <div className='project_cont' ref={projectRef}>
          <div className="project_ani" ref={projectAniRef}>
            <ul>
              {projects.map((p) => (
              <li key={p.id} className="project-item">
                <div className="project_wrap">
                  <div className="project_thumbnail">
                    <img src={require(`../assets/images/${p.file}_thumb.png`)} alt={p.title} />
                  </div>
                  <div className="project_details">
                    <div className="project_title">{p.title}</div>
                    <div className="project_label">{p.label}</div>
                    <div className="project_tag">
                      {p.tag?.map((tag, idx) => (
                        <span key={idx} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="project_period">{p.period}</p>
                  </div>
                </div>                     
                <div className="project_actions">
                  <div className="por">
                      <h5>{p.title}</h5>
                      <button onClick={() => openProject(p)} onMouseEnter={() => preload(p.file)}>자세히보기</button>
                  </div>                
                </div>
              </li>
              ))}
            </ul>
          </div>
          {/* <div className="work_category">
            <button id="all">All</button>
            <button id="team">Team</button>
            <button id="single">Single</button>
          </div> */}
        </div>
        <div className="exp_cont" ref={expRef}>
          <div className="exp_ani" ref={expAniRef}>
            <ul className="exp_list">
              {/* <li>
                <p className="period">2025.06 - 2025.10</p>
                <div className="titleCont">
                  <h4 className="title">뉴젠보드(프로그램 메뉴얼 가이드 사이트)<br />리뉴얼 프로젝트</h4>
                  <h5 className="subTitle">프로젝트 전반 React + TypeScript 구조로 리뉴얼 안정성과 유지보수성을 향상시킴.</h5>
                </div>
                <ul className="details">
                  <li>기존 프로젝트 전반을 React + TypeScript 기반 프론트엔드 설계<br /> 컴포넌트 단위 구조 설계 및 타입 정의를 통해 안정적인 UI 개발</li>
                  <li>JavaScript, React 등 핵심 기술 학습</li>
                  <li>JavaScript, React 등 핵심 기술 학습</li>
                </ul>
              </li> */}
              <li>
                <table>
                  <tbody>
                    <tr>
                      <th>업무명</th>
                      <td>뉴젠보드(프로그램 메뉴얼 가이드 사이트) 리뉴얼 프로젝트</td>
                    </tr>
                    <tr>
                      <th>기간</th>
                      <td>2025.06 ~ 2025.10 (5개월)</td>
                    </tr>
                    <tr>
                      <th>성과</th>
                      <td>프로젝트 전반 React + TypeScript 구조로 리뉴얼 안정성과 유지보수성을 향상시킴.</td>
                    </tr>
                    <tr>
                      <th>역할</th>
                      <td>
                        <ul className="role">
                          <li>
                            1.  기존 프로젝트 전반을 React + TypeScript 기반 프론트엔드 설계
                            <div>
                              컴포넌트 단위 구조 설계 및 타입 정의를 통해 안정적인 UI 개발
                            </div>
                          </li>
                          <li>
                            2. SCSS 기반 스타일 아키텍처
                            <div>
                              컴포넌트 단위 SCSS 설계 및 유지보수 중심의 스타일 구조 구성
                            </div>
                          </li>
                          <li>
                            3. 공통 컴포넌트 및 UI 시스템 구축
                            <div>
                              재사용 가능한 UI 컴포넌트 설계로 개발 생산성 및 품질 향상
                            </div>
                          </li>
                          <li>
                            4. 협업 및 프로젝트 운영 역량
                            <div>
                              디자이너·백엔드 개발자와의 협업을 통한 프로젝트 일정 관리, 요구사항 조율 등 개발 스코프 관리 경험
                            </div>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <th>기술</th>
                      <td>
                        <ul className="skills">
                          <li>React + TypeScript 기반 SPA 아키텍처 설계 및 컴포넌트 중심 개발 경험</li>
                          <li>Zustand를 확용한 전역 상태관리 및 복잡한 UI 상태 흐름 제어</li>
                          <li>SCSS 기반 컴포넌트 단위 스타일링 및 유지보수 친화적 스타일 구조 설계</li>
                          <li>CKEditor 5 커스터마이징 (툴바 구성, 한글 UI, 이미지 업로드, 글쓰기 환경 개선)</li>
                          <li>Zeplin 시안을 기준으로 한 UI 구현 및 디자이너 협업 경험</li>
                          <li>Git 기반 버전 관리 및 협업 환경에서의 코드 통합 경험</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </li>
              <li>
                <table>
                  <tbody>
                    <tr>
                      <th>업무명</th>
                      <td>제트리포트 (리포트 툴) 웹 페이지 화 프로젝트</td>
                    </tr>
                    <tr>
                      <th>기간</th>
                      <td>2024.09-2025.01 (5개월)</td>
                    </tr>
                    <tr>
                      <th>성과</th>
                      <td>리포트 에디터  웹 페이지화 퍼블리싱 하여, 편집 기능 접근성 및 UI 일관성을 개선시킴.</td>
                    </tr>
                    <tr>
                      <th>역할</th>
                      <td>
                        <ul className="role">
                          <li>
                            1. 에디터 전반 UI 퍼블리싱 및 구조 정비
                            <div>
                              컴포넌트 단위 구조 설계 및 프로젝트 전반 화면 퍼블리싱 담당
                            </div>
                          </li>
                          <li>
                            2. 공통 컴포넌트 및 UI 시스템 구축
                            <div>
                              재사용 가능한 UI 컴포넌트 설계로 개발 생산성 및 품질 향상
                            </div>
                          </li>                          
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <th>기술</th>
                      <td>
                        <ul className="skills">
                          <li>GIt 기반 버전 관리 및 협업 환경에서의 코드 통합 경험</li>
                          <li>Jira를 통한 이슈 관리로 작업 단위 관리, 수정 요청 반영, 진행 상황 공유 등 프로젝트 운영 프로세스 경험</li>
                          <li>Zeplin 시안을 기준으로 한 UI 구현 및 디자이너 협업 경험</li>                          
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </li>
              <li>
                <table>
                  <tbody>
                    <tr>
                      <th>업무명</th>
                      <td>비욘드 재무보고서 (업체 재무 데이터 대시보드) 프로젝트</td>
                    </tr>
                    <tr>
                      <th>기간</th>
                      <td>2024.06-2024.09 (4개월)</td>
                    </tr>
                    <tr>
                      <th>성과</th>
                      <td>파라미터 기반 재무 데이터를 시각화한 대시보드 구축하여, 정보 조회 효율과 의사결정 가시성을 향상시킴.</td>
                    </tr>
                    <tr>
                      <th>역할</th>
                      <td>
                        <ul className="role">
                          <li>
                            1. 재무보고서 대시보드 화면 구현
                            <div>
                               업체 코드 및 기준년월 파라미터를 기준으로 재무 데이터를 조회하는 화면 구조 구현
                            </div>
                            <div>
                              Chart.js를 활용해 재무 데이터를 그래프·차트등 다양한 형태로 시각화해 보고서 재무 정보 이해도를 향상 시킴
                            </div>
                            <div>
                              재무 대시보드 화면을 다양한 해상도에서 안정적으로 확인할 수 있도록 반응형 레이아웃 구현해, 보고서 활용성과 접근성을 향상 시킴
                            </div>
                          </li>
                          <li>
                            2. 백엔드 API 연동 및 데이터 바인딩
                            <div>
                              백엔드에서 제공한 API를 통해 JSON 형태의 재무 데이터를 수신
                            </div>
                            <div>
                              항목별 데이터 구조를 분석해 대시보드 UI에 정확히 매핑
                            </div>
                          </li>
                          <li>
                            3. 파라미터 기반 동적 대시보드 구현
                            <div>
                              동일 화면에서 업체·기간에 따라 데이터가 동적으로 변경되는 구조 구현
                            </div>
                          </li>
                          <li>
                            4. 재무보고서 인쇄 기능 구현
                            <div>
                              고객 요청에 따라 대시보드 화면을 인쇄 가능한 형태로 제공
                            </div>
                            <div>
                              OZReport를 활용해 재무 데이터 기반 출력 리포트 연동
                            </div>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <th>기술</th>
                      <td>
                        <ul className="skills">
                          <li>Git 기반 버전 관리 및 협업 환경에서의 코드 통합 경험</li>
                          <li>백엔드 API 연동 및 JSON 데이터 바인딩</li>
                          <li>Chart.js (시각화 라이브러리)를 활용한 데이터 대시보드 구현</li>
                          <li>OZReport 연동을 통한 인쇄용 리포트 구현</li>
                          <li>Zeplin 시안을 기준으로 한 UI 구현 및 디자이너 협업 경험</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </li>
              <li>
                <table>
                  <tbody>
                    <tr>
                      <th>업무명</th>
                      <td>비즈북스 (세무 비즈니스 플랫폼) 프로젝트</td>
                    </tr>
                    <tr>
                      <th>기간</th>
                      <td>2021.06-2025.10 (플랫폼 상시 운영 및 고도화)</td>
                    </tr>
                    <tr>
                      <th>성과</th>
                      <td>플랫폼 신규기능·메뉴 추가 및 리뉴얼 작업을 지속 수행하며, 컴포넌트 단위 구조화를 통해 유지보수 효율과 화면 일관성을 안정적으로 유지</td>
                    </tr>
                    <tr>
                      <th>역할</th>
                      <td className="role">
                        <ul>
                          <li>
                            1. 플랫폼 신규 메뉴 및 화면 퍼블리싱 담당
                            <div>
                              신규 기능 기획에 맞춰 화면 구조 구현 및 UI 적용
                            </div>
                            <div>
                              메뉴 추가 시 기존 구조를 고려한 확장형 화면 구성
                            </div>
                          </li>
                          <li>
                            2. 운영중인 서비스 유지보수 전담
                            <div>
                              화면 오류, 레이아웃 깨짐, 기능 수정 요청 대응
                            </div>
                            <div>
                              운영 환경에서 발생하는 이슈를 빠르게 반영
                            </div>
                          </li>
                          <li>
                            3. 리뉴얼 프로젝트 UI 반영
                            <div>
                              변경된 디자인 시안에 맞춰 기존 화면 재구성
                            </div>
                            <div>
                              공통 컴포넌트 구조를 유지하며 디자인 일괄 적용
                            </div>
                          </li>
                          <li>
                            4. 컴포넌트 단위 퍼블리싱 구조 설계 및 관리
                            <div>
                              버튼, 테이블, 모달 등 공통 요소 분리 및 개별 스타일시트 작업
                            </div>
                            <div>
                              반복 작업 최소화 및 유지보수 효율 극대화
                            </div>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <th>기술</th>
                      <td>
                        <ul className="skills">
                          <li>Toast Grid 기반 데이터 테이블 구현</li>
                          <li>Chart.js를 활용한 재무 데이터 차트 구성</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </li>
              <li>
                <table>
                  <tbody>
                    <tr>
                      <th>업무명</th>
                      <td>대표 홈페이지 및 마이크로사이트 운영·리뉴얼</td>
                    </tr>
                    <tr>
                      <th>기간</th>
                      <td>재직 기간 전반 (상시 신규 제작 및 유지보수)</td>
                    </tr>
                    <tr>
                      <th>성과</th>
                      <td>대표 홈페이지 및 다수의 마이크로사이트를 신규 제작·운영하며,
                      UI 구현과 SEO 개선을 통해 사용자 경험과 사이트 완성도를 지속적으로 향상</td>
                    </tr>
                    <tr>
                      <th>역할</th>
                      <td className="role">
                        <ul>
                          <li>
                            1. 대표 홈페이지 리뉴얼 작업
                            <div>
                              메인 동적 UI 구성하며 AOS, Waypoints, CountUp.js 등 플러그인을 이용해 스크롤 이벤트 화면 구현
                            </div>
                          </li>
                          <li>
                            2. 홈페이지 내 이미지 자료실 신규 메뉴 작업
                            <div>
                              디자인 이미지 자료를 magnify 플러그인을 커스텀해서 미리보기 화면 구현
                            </div>
                            <div>
                              Ajax로 이미지 파일 다운로드 기능 구현
                            </div>
                          </li>
                          <li>
                            3. SEO 및 웹 품질 개선 작업
                            <div>
                              Google Lighthouse를 활용한 성능 접근성 SEO 점수 개선
                            </div>
                          </li>
                          <li>
                            4. 프로그램 마이크로사이트 신규 제작 및 유지보수
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <th>기술</th>
                      <td>
                        <ul className="skills">
                          <li>AOS, Waypoints를 활용한 대표 홈페이지 메인 스크롤 인터랙션 구현</li>
                          <li>magnify 플러그인을 활용하여 이미지 자료실의 갤러리 기능을 구현</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section className="contact">
      <div className="contact_contents">
          <h3>Contact</h3>
          <div className="contact_info">
            <p>+82 10-4027-1487</p>
            <p className="mail" onClick={copyMail}>
              seosson@naver.com
              <div className="copyBtn">메일 복사버튼</div>
            </p>            
          </div>
          <h5 className="copyright">@Copyright 2026. shinwoojae All rights reserved.</h5>
          <span className="thanksTxt">Thank you</span>
      </div>        
        
    </section>
    <div className="floating">
      <button id="copyMail" onClick={copyMail}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 538 404" fill="none"><path d="M0.750488 0.613525V67.7139L269.152 201.915L537.553 67.7139V0.613525H0.750488ZM0.750488 134.814V403.216H537.553V134.814L269.152 269.015L0.750488 134.814Z" fill="black"></path></svg></button>
      <button id="goTop" onClick={scrollToTop}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 28 17" fill="none"><path d="M2 15L14 3L26 15" stroke="black" stroke-width="3" stroke-linecap="round"></path></svg></button>
    </div>
    <Modal 
      isOpen={!!activeProject} 
      onClose={() => setActiveProject(null)} 
      project={activeProject}
    >
    <ErrorBoundary>
      <Suspense fallback={<div className="modal-loading"></div>}>
        {ActiveComponent ? <ActiveComponent /> : null}
      </Suspense>
    </ErrorBoundary>
    </Modal>
  </div>
  );
}