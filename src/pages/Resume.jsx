// import React, { useState, useMemo, useRef, useEffect } from 'react';
import React from 'react';
import '../assets/scss/pages/resume.scss';

export default function Resume() {

  return (
  <div className='resumeCont'>
    <main>    
      <div className="resume_header">
        <div className="resume_profile">
          <span className="profile_job">프론트엔드 개발자</span>
          <span className="profile_name">신우재</span>
          <span className="profile_mail">seosson@naver.com</span>
        </div>
      </div>
      <div className="resume_content">
        <section className="introduce">
          <div className="section_title">자기소개</div>
          <div className="section_content">
            <h3>"UI 구현과 구조 개선을 통해 서비스 품질과 개발 효율을 높이는 프론트엔드 개발자"</h3>
            <p>
              React와 TypeScript 기반 프로젝트에서 다양한 화면을 구현하며 공통 컴포넌트화와 코드 정리를 통해 반복 작업을 줄이고 운영 중 발생하는 이슈에도 빠르게 대응해왔습니다.
            </p>
            <p>
              동료들과 구현 과정에서 발생하는 이슈를 공유하고, 코드 리뷰와 의견 교환을 통해 더 나은 결과를 만들며 팀의 개발 효율과 서비스 완성도에 기여하고 싶습니다.
            </p>
          </div>
        </section>
        <section className="skill">
          <div className="section_title">기술스택</div>
          <div className="section_content">
            <ul className="skill_list">
              <li>React</li>
              <li>TypeScript</li>
              <li>Zustand</li>
              <li>REST API</li>
              <li>Ajax</li>
              <li>SCSS</li>
              <li>HTML5</li>
              <li>JSP</li>
              <li>CKEditor 5</li> 
              <li>Chart.js</li>
              <li>OZReport</li>
              <li>Nexacro</li>             
            </ul>
          </div>
        </section>
        <section className="project">
          <div className="section_title">프로젝트</div>
          <div className="section_content">
            <div className="project_list">
              <div className="project_item">
                <h3 className="project_name">뉴젠보드(프로그램 매뉴얼 사이트) 리뉴얼 프로젝트</h3>
                <p className="project_period">2025.06 ~ 2025.10 (5개월)</p>
                <h4 className="project_result">
                  기존 레거시 구조의 게시판 시스템을 React + TypeScript 기반으로 전면 리뉴얼하여
                  상태 흐름 안정화 및 유지보수 효율 개선, 신규 기능 개발 생산성 약 30% 향상
                </h4>
                <hr />
                <ol className="project_role">
                  <li>
                    <span>React + TypeScript 기반 프로젝트 구조 개선 및 UI 구현</span>
                    <ul>
                      <li>기존 구조를 컴포넌트 단위로 분리하고 타입을 정의하여 안정적인 UI 개발 환경 구성</li>
                    </ul>
                  </li>
                  <li>
                    <span>Zustand 기반 전역 상태관리 및 UI 상태 흐름 제어</span>
                    <ul>
                      <li>Depth 구조와 선택 상태를 관리하며 트리 구조 UI의 상태 흐름을 안정적으로 구현</li>
                    </ul>
                  </li>
                  <li>
                    <span>공통 컴포넌트 및 재사용 UI 개발</span>
                    <ul>
                      <li>재사용 가능한 UI 컴포넌트 설계로 개발 생산성 및 품질 향상</li>
                    </ul>
                  </li>
                  <li>
                    <span>SCSS 기반 스타일 구조 개선</span>
                    <ul>
                      <li>컴포넌트 단위 스타일링을 적용하여 유지보수와 확장성을 고려한 스타일 구조 구성</li>
                    </ul>
                  </li>
                  <li>
                    <span>협업 및 요구사항 조율</span>
                    <ul>
                      <li>디자이너 및 백엔드와 협업하며 UI 구현, 기능 요구사항 반영 및 일정 조율 경험</li>
                    </ul>
                  </li>
                </ol>
              </div>
              <div className="project_item">
                <h3 className="project_name">제트리포트 (리포트 툴) 웹 페이지 화 프로젝트</h3>
                <p className="project_period">2024.09 ~ 2025.01 (5개월)</p>
                <h4 className="project_result">
                  기존 리포트 에디터를 웹 환경으로 구현하여 접근성 개선 및 UI 일관성 확보하고 사용자 작업 편의성, 데이터 가독성 향상
                </h4>
                <hr />
                <ol className="project_role">
                  <li>
                    <span>리포트 에디터 UI 퍼블리싱 및 구조 정리</span>
                    <ul>
                      <li>복잡한 편집 화면을 웹 환경에 맞게 재구성하고, 화면 단위로 UI를 나누어 퍼블리싱 진행</li>
                    </ul>
                  </li>
                  <li>
                    <span>공통 UI 컴포넌트 정리 및 재사용 구조 적용</span>
                    <ul>
                      <li>버튼, 패널, 입력 요소 등을 공통화하여 화면 간 UI 일관성과 작업 효율 개선</li>
                    </ul>
                  </li>
                  <li>
                    <span>협업 기반 UI 구현 및 요구사항 반영</span>
                    <ul>
                      <li>Zeplin 시안을 기반으로 UI를 구현하고, Jira를 통해 이슈 관리 및 수정사항 반영</li>
                    </ul>
                  </li>
                </ol>
              </div>
              <div className="project_item">
                <h3 className="project_name">비욘드 재무보고서 (재무 데이터 대시보드) 프로젝트</h3>
                <p className="project_period">2024.06 ~ 2024.09 (4개월)</p>
                <h4 className="project_result">
                  파라미터 기반 데이터 조회 및 Chart.js 기반 대시보드 구축으로 데이터 조회 및 확인 과정을 단순화하여 사용자 데이터 확인 시간 약 25% 단축
                </h4>
                <hr />
                <ol className="project_role">
                  <li>
                    <span>재무 데이터 대시보드 화면 구현</span>
                    <ul>
                      <li>업체 코드 및 기준년월 파라미터에 따라 데이터를 조회하고, Chart.js를 활용해 그래프 및 차트 형태로 시각화</li>
                      <li>다양한 해상도에서도 안정적으로 확인할 수 있도록 반응형 레이아웃 적용</li>
                    </ul>
                  </li>
                  <li>
                    <span>백엔드 API 연동 및 데이터 처리</span>
                    <ul>
                      <li>API를 통해 수신한 JSON 데이터를 항목별로 가공하여 대시보드 UI에 맞게 바인딩</li>
                    </ul>
                  </li>
                  <li>
                    <span>파라미터 기반 동적 화면 구성</span>
                    <ul>
                      <li>동일 화면에서 업체 및 기간 변경에 따라 데이터가 실시간으로 갱신되는 구조 구현</li>
                    </ul>
                  </li>
                  <li>
                    <span>재무보고서 인쇄 기능 구현</span>
                    <ul>
                      <li>고객 요청에 따라 대시보드 화면을 인쇄 가능한 형태로 제공</li>
                      <li>OZReport를 활용해 재무 데이터 기반 출력 리포트 연동</li>
                    </ul>
                  </li>                  
                </ol>
              </div>
              <div className="project_item">
                <h3 className="project_name">비즈북스 (세무 비즈니스 플랫폼) 운영 및 고도화 프로젝트</h3>
                <p className="project_period">2021.06 ~ 2025.10 (상시 운영 및 기능 고도화)</p>
                <h4 className="project_result">
                  장기 운영 서비스의 기능 고도화 및 UI 구조 개선을 통해 지속적인 서비스 안정성 유지 및 유지보수 효율 개선
                </h4>
                <hr />
                <ol className="project_role">
                  <li>
                    <span>플랫폼 신규 기능 및 화면 구현</span>
                    <ul>
                      <li>기능 요구사항에 맞춰 신규 메뉴 및 화면을 구현하고, 기존 구조를 고려하여 확장 가능한 형태로 구성</li>
                    </ul>
                  </li>
                  <li>
                    <span>운영 서비스 유지보수 및 이슈 대응</span>
                    <ul>
                      <li>운영 중 발생하는 UI 오류 및 기능 이슈를 분석하고 수정하여 서비스 안정성 유지</li>
                      <li>다양한 수정 요청을 반영하며 화면 품질과 일관성 지속 관리</li>
                    </ul>
                  </li>
                  <li>
                    <span>리뉴얼 UI 반영 및 기존 화면 개선</span>
                    <ul>
                      <li>디자인 변경에 맞춰 기존 화면을 재구성하고, 공통 UI를 기준으로 일관된 스타일 적용</li>
                    </ul>
                  </li>
                  <li>
                    <span>공통 UI 구조 관리 및 반복 작업 개선</span>
                    <ul>
                      <li>버튼, 테이블, 모달 등 공통 요소를 분리하여 재사용성을 높이고, 반복 작업을 최소화</li>
                    </ul>
                  </li>
                </ol>
              </div>
              <div className="project_item">
                <h3 className="project_name">대표 홈페이지 및 마이크로사이트 운영·리뉴얼</h3>
                <p className="project_period">재직 기간 전반 (상시 신규 제작 및 유지보수)</p>
                <h4 className="project_result">
                  대표 홈페이지 및 다수의 마이크로사이트를 신규 제작·운영하며,
                  UI 구현과 SEO 개선을 통해 사용자 경험과 사이트 완성도를 지속적으로 향상
                </h4>
                <hr />
                <ol className="project_role">
                  <li>
                    <span>대표 홈페이지 메인 인터랙션 구현</span>
                    <ul>
                      <li>AOS, Waypoints, CountUp.js를 활용하여 스크롤 위치에 따라 애니메이션이 동작하는 인터랙션 UI 구현</li>
                      <li>요소의 화면 진입 시점을 기준으로 이벤트 조건을 조정하여 자연스러운 사용자 흐름 구성</li>
                    </ul>
                  </li>
                  <li>
                    <span>이미지 자료실 갤러리 기능 구현 및 커스터마이징</span>
                    <ul>
                      <li>Magnify.js 플러그인을 기반으로 이미지 미리보기 및 확대 기능 구현</li>
                      <li>기본 기능의 한계를 보완하기 위해 이미지 비율 유지, 마우스 휠 확대, 태그 기능 등을 추가 구현</li>
                    </ul>
                  </li>
                  <li>
                    <span>파일 다운로드 기능 및 이슈 해결</span>
                    <ul>
                      <li>Ajax를 활용한 이미지 다운로드 기능 구현</li>
                      <li>한글 파일명 인코딩 문제를 해결하여 정상적인 파일 다운로드 환경 구축</li>
                    </ul>
                  </li>
                  <li>
                    <span>SEO 및 웹 품질 개선 작업</span>
                    <ul>
                      <li>Google Lighthouse를 활용하여 성능, 접근성, SEO 항목을 점검하고 이미지 최적화 및 마크업 개선 적용</li>
                    </ul>
                  </li>
                  <li>
                    <span>프로그램 마이크로사이트 신규 제작 및 유지보수</span>                    
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        <section className="cert">
          <div className="section_title">자격증</div>
          <div className="section_content">
            <ul className="cert_list">
              <li>
                <p className="cert_name">컴퓨터그래픽스운용기능사</p>
                <p className="cert_agency">한국산업인력관리공단</p>
                <p className="cert_date">2020.10</p>
              </li>
              <li>
                <p className="cert_name">웹디자인기능사</p>
                <p className="cert_agency">한국산업인력관리공단</p>
                <p className="cert_date">2020.09</p>
              </li>
              <li>
                <p className="cert_name">GTQ 1급</p>
                <p className="cert_agency">한국생산성본부</p>
                <p className="cert_date">2020.08</p>
              </li>     
            </ul>
          </div>
        </section>
        <section className="url">
          <div className="section_title">포트폴리오</div>
          <div className="section_content">
            <h3>URL</h3>
            <div className="urlBox">
              <span className="url_Item">
                <a href="https://github.com/zzzdnwo">Github</a>
              </span>
              <span className="url_Item">
                <a href="/portfolio">포트폴리오</a>
              </span>
            </div>
          </div>
        </section>        
      </div>
    </main>
  </div>
  );
}