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

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [projectIndex, setProjectIndex] = useState(0);
  const [expIndex, setExpIndex] = useState(0);

  const workRef = useRef(null);
  const projectRef = useRef(null);
  const expRef = useRef(null);
  
  const isScrollingRef = useRef(false);
  const projectSliderRef = useRef(null);
  const expSliderRef = useRef(null);
  

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

  //모바일 체크용

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 홈 화면 인터랙션 타이머
  useEffect(() => {
    const timer = setTimeout(() => {
      setHeroStart(true);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  // 홈 화면 마우스 라이트 효과
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

  // work 섹션 네비게이션 인터랙션
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

  // Qna 스크롤 이벤트 
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

  // project 스크롤 이벤트
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

  // exp 스크롤 이벤트
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

  useEffect(() => {
    const el = projectSliderRef.current;
    if (!el) return;

    const handleScroll = () => {
      if (isScrollingRef.current) return;

      const children = Array.from(el.children);

      let closestIndex = 0;
      let minDiff = Infinity;

      children.forEach((child, i) => {
        const diff = Math.abs(el.scrollLeft - child.offsetLeft);
        if (diff < minDiff) {
          minDiff = diff;
          closestIndex = i;
        }
      });

      setProjectIndex(closestIndex);
    };

    el.addEventListener('scroll', handleScroll);
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const el = expSliderRef.current;
    if (!el) return;

    const handleScroll = () => {
      if (isScrollingRef.current) return;

      const children = Array.from(el.children);

      let closestIndex = 0;
      let minDiff = Infinity;

      children.forEach((child, i) => {
        const diff = Math.abs(el.scrollLeft - child.offsetLeft);
        if (diff < minDiff) {
          minDiff = diff;
          closestIndex = i;
        }
      });

      setExpIndex(closestIndex);
    };

    el.addEventListener('scroll', handleScroll);
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);
  

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

  // 모바일 슬라이드 관련
  const expLength = 5;

  function scrollToIndex(ref, index) {
    if (!isMobile) return;

    const el = ref.current;
    if (!el) return;

    const child = el.children[index];
    if (!child) return;

    isScrollingRef.current = true;

    el.scrollTo({
      left: child.offsetLeft,
      behavior: 'smooth',
    });

    // 스크롤 버벅임 방지
    setTimeout(() => {
      isScrollingRef.current = false;
    }, 400);
  }

  function handlePrev(type) {
    if (type === 'project') {
      const next = Math.max(projectIndex - 1, 0);
      setProjectIndex(next);
      scrollToIndex(projectSliderRef, next);
    }

    if (type === 'exp') {
      const next = Math.max(expIndex - 1, 0);
      setExpIndex(next);
      scrollToIndex(expSliderRef, next);
    }
  }

  function handleNext(type, length) {
    if (!isMobile) return;

    if (type === 'project') {
      const next = Math.min(projectIndex + 1, length - 1);
      setProjectIndex(next);
      scrollToIndex(projectSliderRef, next);
    }

    if (type === 'exp') {
      const next = Math.min(expIndex + 1, length - 1);
      setExpIndex(next);
      scrollToIndex(expSliderRef, next);
    }
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
            <div className="project_slider_wrap">
              {isMobile && (
                <button className="arrow prev" onClick={() => handlePrev('project')} />
              )}
              <ul ref={projectSliderRef} className="slider">
                {projects.map((p) => (
                <li key={p.id} className="project-item" onClick={() => openProject(p)} onMouseEnter={() => preload(p.file)}>
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
              {isMobile && (
                <button className="arrow next" onClick={() => handleNext('project', projects.length)} />
              )}
              {isMobile && (
                <div className="dots">
                  {projects.map((_, i) => (
                    <button
                      key={i}
                      className={i === projectIndex ? 'on' : ''}
                      onClick={() => {
                        setProjectIndex(i);
                        scrollToIndex(projectSliderRef, i);
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="exp_cont" ref={expRef}>
          <div className="exp_ani" ref={expAniRef}>
            <div className="exp_slider_wrap">
              {isMobile && (
                <button className="arrow prev" onClick={() => handlePrev('exp')} />
              )}
              <ul className="exp_list slider" ref={expSliderRef}>
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
                        <td>프로젝트 전반 React + TypeScript 구조로 리뉴얼 안정성과 유지보수성을 향상</td>
                      </tr>
                      <tr>
                        <th>역할</th>
                        <td>
                          <ul className="role">
                            <li>
                              1.  React + TypeScript 기반 프로젝트 구조 개선 및 UI 구현
                              <div>
                                기존 구조를 컴포넌트 단위로 분리하고 타입을 정의하여 안정적인 UI 개발 환경 구성
                              </div>
                            </li>
                            <li>
                              2. Zustand 기반 전역 상태관리 및 UI 상태 흐름 제어
                              <div>
                                depth 구조와 선택 상태를 관리하며 트리 구조 UI의 상태 흐름을 안정적으로 구현
                              </div>
                            </li>
                            <li>
                              3. 공통 컴포넌트 및 재사용 UI 개발
                              <div>
                                Dropdown, Dialog, Tab 등 공통 UI 컴포넌트를 구현하여 화면 간 일관성과 재사용성 확보
                              </div>
                            </li>
                            <li>
                              4. SCSS 기반 스타일 구조 개선
                              <div>
                                컴포넌트 단위 스타일링을 적용하여 유지보수와 확장성을 고려한 스타일 구조 구성
                              </div>
                            </li>
                            <li>
                              5. 협업 및 요구사항 조율
                              <div>
                                디자이너 및 백엔드와 협업하며 UI 구현, 기능 요구사항 반영 및 일정 조율 경험
                              </div>
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <th>기술</th>
                        <td>
                          <ul className="skills">
                            <li>React + TypeScript 기반 SPA 구조에서 컴포넌트 중심 UI 개발 경험</li>
                            <li>Zustand를 활용한 전역 상태관리 및 depth 기반 메뉴 구조의 UI 상태 흐름 제어</li>
                            <li>SCSS 기반 컴포넌트 단위 스타일링 및 유지보수 친화적 스타일 구조 구성</li>
                            <li>CKEditor 5 커스터마이징 (툴바 구성, 한글 UI, 이미지 업로드 등 에디터 환경 개선)</li>
                            <li>Zeplin 시안을 기반으로 UI 구현 및 디자이너 협업 경험</li>
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
                        <td>기존 리포트 에디터를 웹 환경으로 구현하여 사용자 접근성과 UI 일관성을 개선</td>
                      </tr>
                      <tr>
                        <th>역할</th>
                        <td>
                          <ul className="role">
                            <li>
                              1. 리포트 에디터 UI 퍼블리싱 및 구조 정리
                              <div>
                                복잡한 편집 화면을 웹 환경에 맞게 재구성하고, 화면 단위로 UI를 나누어 퍼블리싱 진행
                              </div>
                            </li>
                            <li>
                              2. 공통 UI 컴포넌트 정리 및 재사용 구조 적용
                              <div>
                                버튼, 패널, 입력 요소 등을 공통화하여 화면 간 UI 일관성과 작업 효율 개선
                              </div>
                            </li>
                            <li>
                              3. 협업 기반 UI 구현 및 요구사항 반영
                              <div>
                                Zeplin 시안을 기반으로 UI를 구현하고, Jira를 통해 이슈 관리 및 수정사항 반영
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
                            <li>Jira를 활용한 이슈 관리 및 협업 프로세스 경험</li>
                            <li>Zeplin 기반 디자인 구현 및 디자이너 협업 경험</li>                          
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
                        <td>비욘드 재무보고서 (재무 데이터 대시보드) 프로젝트</td>
                      </tr>
                      <tr>
                        <th>기간</th>
                        <td>2024.06-2024.09 (4개월)</td>
                      </tr>
                      <tr>
                        <th>성과</th>
                        <td>파라미터 기반 재무 데이터를 시각화한 대시보드 구축하여, 정보 조회 효율을 향상</td>
                      </tr>
                      <tr>
                        <th>역할</th>
                        <td>
                          <ul className="role">
                            <li>
                              1. 재무 데이터 대시보드 화면 구현
                              <div>
                                업체 코드 및 기준년월 파라미터에 따라 데이터를 조회하고, Chart.js를 활용해 그래프 및 차트 형태로 시각화
                              </div>
                              <div>
                                다양한 해상도에서도 안정적으로 확인할 수 있도록 반응형 레이아웃 적용
                              </div>
                            </li>
                            <li>
                              2. 백엔드 API 연동 및 데이터 처리
                              <div>
                                API를 통해 수신한 JSON 데이터를 항목별로 가공하여 대시보드 UI에 맞게 바인딩
                              </div>                            
                            </li>
                            <li>
                              3. 파라미터 기반 동적 화면 구성
                              <div>
                                동일 화면에서 업체 및 기간 변경에 따라 데이터가 실시간으로 갱신되는 구조 구현
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
                            <li>백엔드 API 연동 및 JSON 데이터 가공·바인딩 경험</li>
                            <li>파라미터 기반 동적 화면 처리 및 상태 흐름 제어</li>
                            <li>Chart.js를 활용한 데이터 시각화 및 대시보드 UI 구현</li>
                            <li>OZReport 연동을 통한 인쇄용 리포트 구현</li>
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
                        <td>비즈북스 (세무 비즈니스 플랫폼) 운영 및 고도화 프로젝트</td>
                      </tr>
                      <tr>
                        <th>기간</th>
                        <td>2021.06-2025.10 (상시 운영 및 기능 고도화)</td>
                      </tr>
                      <tr>
                        <th>성과</th>
                        <td>장기 운영 서비스의 신규기능·메뉴 추가 및 화면 리뉴얼 작업을 지속 수행하며, 컴포넌트 단위 구조화를 통해 유지보수 효율과 화면 일관성을 안정적으로 유지</td>
                      </tr>
                      <tr>
                        <th>역할</th>
                        <td className="role">
                          <ul>
                            <li>
                              1. 플랫폼 신규 기능 및 화면 구현
                              <div>
                                기능 요구사항에 맞춰 신규 메뉴 및 화면을 구현하고, 기존 구조를 고려하여 확장 가능한 형태로 구성
                              </div>
                            </li>
                            <li>
                              2. 운영 서비스 유지보수 및 이슈 대응
                              <div>
                                운영 중 발생하는 UI 오류 및 기능 이슈를 분석하고 수정하여 서비스 안정성 유지
                              </div>
                              <div>
                                다양한 수정 요청을 반영하며 화면 품질과 일관성 지속 관리
                              </div>
                            </li>
                            <li>
                              3. 리뉴얼 UI 반영 및 기존 화면 개선
                              <div>
                                디자인 변경에 맞춰 기존 화면을 재구성하고, 공통 UI를 기준으로 일관된 스타일 적용
                              </div>
                            </li>
                            <li>
                              4. 공통 UI 구조 관리 및 반복 작업 개선
                              <div>
                                버튼, 테이블, 모달 등 공통 요소를 분리하여 재사용성을 높이고, 반복 작업을 최소화
                              </div>
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <th>기술</th>
                        <td>
                          <ul className="skills">
                            <li>Toast Grid 기반 데이터 그리드 UI 구현</li>
                            <li>Chart.js 기반 데이터 시각화 구현</li>
                            <li>Git 기반 버전 관리 및 협업 경험</li>
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
                              1. 대표 홈페이지 메인 인터랙션 구현
                              <div>
                                AOS, Waypoints, CountUp.js를 활용하여 스크롤 위치에 따라 애니메이션이 동작하는 인터랙션 UI 구현
                              </div>
                              <div>
                                요소의 화면 진입 시점을 기준으로 이벤트 조건을 조정하여 자연스러운 사용자 흐름 구성
                              </div>
                            </li>
                            <li>
                              2. 이미지 자료실 갤러리 기능 구현 및 커스터마이징
                              <div>
                                Magnify.js 플러그인을 기반으로 이미지 미리보기 및 확대 기능 구현
                              </div>
                              <div>
                                기본 기능의 한계를 보완하기 위해 이미지 비율 유지, 마우스 휠 확대, 태그 기능 등을 추가 구현
                              </div>
                            </li>
                            <li>
                              3. 파일 다운로드 기능 및 이슈 해결
                              <div>
                                Ajax를 활용한 이미지 다운로드 기능 구현
                              </div>
                              <div>
                                한글 파일명 인코딩 문제를 해결하여 정상적인 파일 다운로드 환경 구축
                              </div>
                            </li>
                            <li>
                              4. SEO 및 웹 품질 개선
                              <div>
                                Google Lighthouse를 활용하여 성능, 접근성, SEO 항목을 점검하고 이미지 최적화 및 마크업 개선 적용
                              </div>
                            </li>
                            <li>
                              5. 프로그램 마이크로사이트 신규 제작 및 유지보수
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <th>기술</th>
                        <td>
                          <ul className="skills">
                            <li>AOS, Waypoints, CountUp.js를 활용한 스크롤 기반 인터랙션 구현 및 이벤트 제어</li>
                            <li>Magnify.js를 활용한 갤러리 구현 및 커스터마이징을 통한 기능 확장 경험</li>
                            <li>Ajax 기반 파일 다운로드 구현 및 인코딩 이슈 처리 경험</li>
                            <li>Google Lighthouse 기반 성능·접근성·SEO 개선 경험</li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </li>
              </ul>
              {isMobile && (
                <button className="arrow next" onClick={() => handleNext('exp', expLength)} />
              )}
              {isMobile && (
                <div className="dots">
                  {Array.from({ length: expLength }).map((_, i) => (
                    <button
                      key={i}
                      className={i === expIndex ? 'on' : ''}
                      onClick={() => {
                        setExpIndex(i);
                        scrollToIndex(expSliderRef, i);
                      }}
                    />
                  ))}
                </div>
              )}
            </div> 
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