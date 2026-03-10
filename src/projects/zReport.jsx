import React, { useState } from 'react';
import screenShot1 from '../assets/images/zReport_screen1.png';
import screenShot2 from '../assets/images/zReport_screen2.png';
import screenShot3 from '../assets/images/zReport_screen3.png';
import screenShot4 from '../assets/images/zReport_screenGif.gif';


export default function ZReport() {
    const [openIndex, setOpenIndex] = useState(() => {
        const initialState = {};
        for (let i = 0; i <= 11; i++) {
            initialState[i] = true;
        }
        return initialState;
    });
    const [selectedImage, setSelectedImage] = useState(null);


    const toggleItem = (index) => {
        setOpenIndex((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    
    return (
    <article className="project_detail">
        <h2>
            기존 사내 리포트 툴을 웹 기반 서비스로 전환하는 프로젝트로,<br />
            리포트 조회 및 관리 기능을 웹 페이지 형태로 구현하여 사용자의 접근성과 활용성을 개선.
            <hr />
        </h2>        
        <section>
           <h3>📍 프로그램 설명</h3> 
           <ul>
                <li>회사 내부 직원들이 사용하는 자사 리포트 관리 시스템으로, 리포트 작성·수정·조회 기능을 제공하는 웹 기반 프로그램</li>
                {/* <li>트리 기반 계층형 매뉴얼 관리 시스템 설계 및 구현</li>
                <li><code>Zustand</code>를 활용한 복잡한 상태 관리 구조 설계</li>
                <li><code>CKEditor 5</code> 커스텀 빌드 및 <code>TypeScript</code> 이슈 해결</li>
                <li>SPA 환경에서 조건부 레이아웃 제어 및 화면 전환 로직 구현</li>
                <li>카테고리 종속 구조 기반 동적 글쓰기 폼 개발</li>
                <li>비동기 처리 안정화를 위한 GUID 로딩 제어 설계</li> */}
                
           </ul>
        </section>
        <section className="skillCont">
           <h3>🛠️ 기술 스택</h3>
            <div className="flexBox">                
                <div className="item">HTML5</div>
                <div className="item">SCSS</div>
                <div className="item">JavaScript</div>                                
                <div className="item">Git</div>
                <div className="item">GitHub</div>
                <div className="item">Jira</div>
                <div className="item">Redmine</div>
                <div className="item">Zeplin</div>
            </div> 
        </section>
        <section>
            <h3>✨ 주요 구현 기능</h3>
            <div className="flexBox">
                <div className={`itemBox ${openIndex[1] ? 'open' : ''}`} >
                    <div className="item_title" onClick={() => toggleItem(1)}>리포트 관리 시스템 웹 전환 UI 구현</div>
                    <div className="item_text">
                        <ul>
                            <li>기존 사내 리포트 프로그램을 웹 기반 리포트 관리 시스템으로 전환하는 프로젝트에서 화면 전반의 UI 퍼블리싱을 담당</li>
                            <li>리포트 작성·수정·조회 기능 화면을 웹 환경에 맞는 사용자 인터페이스로 구현</li>
                        </ul> 
                    </div>                    
                </div>
                <div className={`itemBox ${openIndex[2] ? 'open' : ''}`} >
                    <div className="item_title" onClick={() => toggleItem(2)}>백엔드 개발자 협업 기반 화면 개발</div>
                    <div className="item_text">
                        <ul>
                            <li>타 부서 백엔드 개발자들과 협업하여 API 구조와 데이터 흐름을 기반으로 화면 UI를 구현</li>
                            <li>기능 구현 과정에서 데이터 구조 및 기능 동작에 대한 의견을 공유하며 화면과 기능이 자연스럽게 연동되도록 개발</li>
                        </ul> 
                    </div>                    
                </div>
                <div className={`itemBox ${openIndex[3] ? 'open' : ''}`} >
                    <div className="item_title" onClick={() => toggleItem(3)}>Jira 기반 협업 및 일정 관리</div>
                    <div className="item_text">
                        <ul>
                            <li>Jira를 활용하여 작업 이슈를 할당받고 업무 진행 상황 및 일정 관리를 체계적으로 수행</li>
                            <li>이슈 단위로 작업 내용 및 의견을 공유하며 팀원들과 협업 프로세스를 경험</li>
                        </ul> 
                    </div>                    
                </div>
                <div className={`itemBox ${openIndex[4] ? 'open' : ''}`} >
                    <div className="item_title" onClick={() => toggleItem(4)}>공통 UI 모듈화</div>
                    <div className="item_text">
                        <ul>
                            <li>모달 및 반복적으로 사용되는 UI 요소를 공통 모듈로 구성하여 화면 개발 시 재사용성을 높임</li>
                            <li>공통 스타일을 정리하여 프로젝트 전반에서 일관된 UI를 유지하도록 구성</li>
                        </ul> 
                    </div>                    
                </div>
                <div className={`itemBox ${openIndex[5] ? 'open' : ''}`} >
                    <div className="item_title" onClick={() => toggleItem(5)}>프로젝트 화면 작업 및 일정 조율</div>
                    <div className="item_text">
                        <ul>
                            <li>프로젝트 화면 전반의 퍼블리싱을 담당하며 기능 개발 진행 상황에 맞춰 작업 일정 및 진행 상황을 주기적으로 공유</li>
                            <li>개발 일정과 기능 구현 상황을 고려하여 작업 우선순위를 조율하며 프로젝트 진행에 기여</li>
                        </ul> 
                    </div>                    
                </div>
            </div>
        </section>
        <section>
           <h3>💫 Trouble Shooting</h3>
            <div className="flexBox">
                <div className={`itemBox ${openIndex[6] ? 'open' : ''}`} >
                    <div className="item_title" onClick={() => toggleItem(6)}>협업 과정에서 UI 표현 방식 정리</div>
                    <div className="item_text">
                        <ul>
                            <li><strong>[문제점]</strong> 새롭게 추가되는 기능을 UI에서 어떻게 표현할지에 대한 기준이 명확하지 않아 타 부서 개발자들과의 이해 차이가 발생</li>
                            <li><strong>[해결]</strong> 기능 요구사항과 데이터 흐름을 기반으로 UI 구조를 정리하고 담당자들과 회의를 통해 화면 구성 방식을 조율</li>
                            <li><strong>[회고]</strong> 기능 구조를 이해한 상태에서 UI를 담당자들과 의논하고 협업을 통해 방향을 맞추는 과정의 중요성을 경험했습니다.</li>    
                        </ul> 
                    </div>                    
                </div>

                <div className={`itemBox ${openIndex[7] ? 'open' : ''}`} >
                    <div className="item_title" onClick={() => toggleItem(7)}>협업 프로젝트 일정 의존성 관리</div>
                    <div className="item_text">
                        <ul>
                            <li><strong>[문제점]</strong> 여러 개발자가 동시에 작업하는 구조로 인해 백엔드 개발 일정에 따라 프론트 작업이 대기 상태가 되는 상황이 발생</li>
                            <li><strong>[해결]</strong> <code>Jira</code>를 활용해 작업 이슈를 관리하고 백엔드 개발 일정에 맞춰 작업 우선순위를 조정하며 업무 시간을 효율적으로 배분</li>
                            <li><strong>[회고]</strong> 협업 프로젝트에서는 개인 작업 속도뿐 아니라 전체 개발 일정과 팀 작업 흐름을 고려한 일정 관리가 중요하다는 것을 배웠습니다.</li>    
                        </ul> 
                    </div>                    
                </div>               
            </div> 
        </section>
        <section className='project_screen'>
           <h3>
            💻 작업 화면
            <p>이미지 클릭 시 크게 볼 수 있습니다. (작업화면이 현재와 다를 수 있습니다.)<br />* 저작권 이슈가 있는 경우 첨부하지 않았습니다.</p>
            </h3>
            <div className="gridBox">
                 <div className="screen_item" onClick={() => setSelectedImage(screenShot1)}>
                    <img src={screenShot1} alt="프로젝트 작업 화면 1" />
                    <p className="item_title">편집모드 1</p>
                 </div>
                 <div className="screen_item" onClick={() => setSelectedImage(screenShot2)}>
                    <img src={screenShot2} alt="프로젝트 작업 화면 2" />
                    <p className="item_title">텍스트 편집</p>
                 </div>
                 <div className="screen_item" onClick={() => setSelectedImage(screenShot3)}>
                    <img src={screenShot3} alt="프로젝트 작업 화면 3" />
                    <p className="item_title">스크립트 편집</p>
                 </div>
                 <div className="screen_item" onClick={() => setSelectedImage(screenShot4)}>
                    <img src={screenShot4} alt="프로젝트 작업 화면 4" />
                    <p className="item_title">제트리포트 시연</p>
                 </div>                 
            </div> 
        </section>
        {selectedImage && (
            <div className="image_modal">
                <div className="image_modal_content" onClick={(e) => e.stopPropagation()}>
                    <img src={selectedImage} alt="확대 이미지" />
                    <button className='btn_modalClose' onClick={() => setSelectedImage(null)}>✕</button>
                </div>
            </div>
        )}
    </article>
    );
}