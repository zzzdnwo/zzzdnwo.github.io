import React, { useState, useMemo, useRef, useEffect } from 'react';
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
        <section>
          <div className="section_title">자기소개</div>
          <div className="section_content">
            <h3>"사용자 경험을 개선하고 성능 지표 향상을 통해 팀의 개발 효율과 협업 품질을 높이는 개발자"</h3>
            <p>
              저는 코드 한 줄에 명확한 의도를 담고, 책임이 분명한 설계를 지향합니다. 단순히 기능을 구현하는 것을 넘어, Streaming SSR 도입과 사내 업무 자동화 툴 개발을 통해 서비스 성능과 팀의 생산성을 동시에 개선해 왔습니다.<br />
              <br />
              동료들과 기술적 고민을 나누고 발전적인 리뷰를 주고받는 과정을 즐기며, 이를 통해 개인의 성장이 곧 팀의 시너지로 이어지는 선순환 구조를 만드는 데 기여하고 싶습니다.
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
                <h3 className="project_name">뉴젠보드(프로그램 메뉴얼 가이드 사이트) 리뉴얼 프로젝트</h3>
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
                  기존 리포트 에디터를 웹 환경으로 구현하여 사용자 접근성과 UI 일관성을 개선
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

            </div>
          </div>
        </section>
        <section className="url">
          <div className="section_title">포트폴리오</div>
          <div className="section_content">
            <h3>"사용자 경험을 개선하고 성능 지표 향상을 통해 팀의 개발 효율과 협업 품질을 높이는 개발자"</h3>
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
        <section></section>
        <section></section>
      </div>
    </main>
  </div>
  );
}