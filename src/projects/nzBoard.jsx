import React, { useState } from 'react';
import screenShot1 from '../assets/images/nzBoard_screen1.png';
import screenShot2 from '../assets/images/nzBoard_screen2.png';
import screenShot3 from '../assets/images/nzBoard_screen3.png';
import screenShot4 from '../assets/images/nzBoard_screen4.png';
import screenShot5 from '../assets/images/nzBoard_screen5.png';
import screenShot6 from '../assets/images/nzBoard_screen6.png';
import screenShot7 from '../assets/images/nzBoard_screen7.png';
import screenShot8 from '../assets/images/nzBoard_screen8.png';
import screenShot9 from '../assets/images/nzBoard_screen9.png';

export default function NzBoard() {
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
            뉴젠보드(프로그램 메뉴얼 가이드 사이트) 리뉴얼 프로젝트<br />
            기존 레거시 Vanilla JS 기반 구조를 React + TypeScript 구조로 리뉴얼 안정성과 유지보수성을 향상시킴.
            <hr />
        </h2>        
        <section>
           <h3>📍 프로그램 설명</h3> 
           <ul>
                <li>뉴젠 전체 프로그램 메뉴얼을 조회/검색 및 등록/수정/삭제<br />할 수 있는 메뉴얼 통합 관리 웹사이트</li>
                {/* <li>트리 기반 계층형 매뉴얼 관리 시스템 설계 및 구현</li>
                <li><code>Zustand</code>를 활용한 복잡한 상태 관리 구조 설계</li>
                <li><code>CKEditor 5</code> 커스텀 빌드 및 <code>TypeScript</code> 이슈 해결</li>
                <li>SPA 환경에서 조건부 레이아웃 제어 및 화면 전환 로직 구현</li>
                <li>카테고리 종속 구조 기반 동적 글쓰기 폼 개발</li>
                <li>비동기 처리 안정화를 위한 GUID 로딩 제어 설계</li> */}
                
           </ul>
        </section>
        <section>
           <h3>✨ 주요 구현 기능</h3>
            <div className="flexBox">
                <div className={`itemBox ${openIndex[7] ? 'open' : ''}`} >
                    <div className="item_title" onClick={() => toggleItem(7)}>React + TypeScript 기반 프론트엔드 개발</div>
                    <div className="item_text">
                        <ul>
                            <li>React + TypeScript 기반 컴포넌트 구조로 프론트엔드를 구현하여 화면 단위를 모듈화하고 유지보수를 고려한 UI 구조로 개발</li>
                            <li>계층형 카테고리(Depth1~4) 기반 매뉴얼 관리 UI를 구현하고 프로그램 선택 및 Depth 상태에 따라 화면이 동적으로 변경되는 구조를 구성</li>
                        </ul> 
                    </div>                    
                </div>
                <div className={`itemBox ${openIndex[8] ? 'open' : ''}`} >
                    <div className="item_title" onClick={() => toggleItem(8)}>전역 상태 관리 구조 구축 (Zustand)</div>
                    <div className="item_text">
                        <ul>
                            <li>프로그램 선택 상태와 Depth 계층 상태를 전역으로 관리하여 화면 간 상태 흐름을 일관되게 유지</li>  
                            <li>Write 화면 진입 시 현재 선택된 카테고리 정보를 자동으로 전달하도록 구현하여 매뉴얼 작성 시 사용자 편의성을 개선</li>
                        </ul> 
                    </div>                    
                </div>   
                <div className={`itemBox ${openIndex[9] ? 'open' : ''}`} >
                    <div className="item_title" onClick={() => toggleItem(9)}>공통 UI 컴포넌트 개발</div>
                    <div className="item_text">
                        <ul>
                            <li>Dropdown, Dialog, CheckBox 등 재사용 가능한 공통 UI 컴포넌트를 구현</li>   
                            <li>Header 및 Depth 메뉴(TabListDepth) 구조를 컴포넌트 단위로 분리하여 UI 재사용성과 코드 유지보수성을 높임</li>
                        </ul> 
                    </div>                    
                </div> 
                <div className={`itemBox ${openIndex[10] ? 'open' : ''}`} >
                    <div className="item_title" onClick={() => toggleItem(10)}>매뉴얼 관리 기능 구현</div>
                    <div className="item_text">
                        <ul>
                            <li>CKEditor 기반 매뉴얼 작성 기능을 구현하여 프로그램별 매뉴얼을 작성·수정할 수 있도록 구성</li>
                            <li>매뉴얼 등록·수정·삭제 기능을 REST API와 연동하여 데이터 기반으로 UI가 동적으로 갱신되도록 구현</li>
                        </ul> 
                    </div>                    
                </div>
                <div className={`itemBox ${openIndex[10] ? 'open' : ''}`} >
                    <div className="item_title" onClick={() => toggleItem(10)}>스타일 구조 관리</div>
                    <div className="item_text">
                        <ul>
                            <li>SCSS 기반으로 컴포넌트 단위 스타일을 구성하여 화면 구조와 스타일을 분리하고 유지보수성을 고려한 스타일 관리 방식을 적용</li>
                        </ul> 
                    </div>                    
                </div>
            </div> 
        </section>
        <section>
           <h3>
            🛠️ 사용 기술 및 언어
            <p>클릭 시 세부 내용을 확인 할 수 있습니다.</p>
            </h3>
            <div className="flexBox">
                <div className={`itemBox ${openIndex[0] ? 'open' : ''}`} >
                    <div className="item_title" onClick={() => toggleItem(0)}>React</div>
                    <div className="item_text">
                        계층형(Depth1~4) 트리 메뉴 구조와 Header 기반 화면 전환(설정/글쓰기/PDF/검색)을 SPA 형태로 구현<br />
                        컴포넌트 단위로 메뉴, 레이아웃, 콘텐츠 영역을 분리 설계하여 재사용성과 유지보수성을 고려한 구조를 구성하고 조건부 렌더링을 통해 UI 상태에 따른 동적 화면 전환 로직을 구현
                    </div>                    
                </div>
                <div className={`itemBox ${openIndex[1] ? 'open' : ''}`} >
                    <div className="item_title" onClick={() => toggleItem(1)}>Typescript</div>
                    <div className="item_text">
                        계층형 카테고리(Depth1~4) 및 프로그램 매핑 데이터에 대해 명확한 인터페이스를 정의하고 lv(레벨) 값에 따른 분기 로직을 타입 기반으로 설계<br />
                        수정/등록 모드 전환 시 Props 및 API 응답 타입을 구체적으로 정의하여 undefined 접근 오류 및 잘못된 상태 참조를 사전에 방지
                    </div>                    
                </div>   
                <div className={`itemBox ${openIndex[2] ? 'open' : ''}`} >
                    <div className="item_title" onClick={() => toggleItem(2)}>Zustand</div>
                    <div className="item_text">
                        프로그램 선택 상태와 Depth 계층 상태를 전역으로 관리하여 화면 전환 및 메뉴 선택 시 일관된 상태 흐름을 유지<br />
                        Write 화면 진입 시 현재 선택된 카테고리 정보를 자동으로 전달하도록 설계하고 비동기 데이터 로딩 시 특정 조건에서만 상태가 변경되도록 제어하여 데이터가 꼬이는 문제를 방지
                    </div>                    
                </div>
                <div className={`itemBox ${openIndex[3] ? 'open' : ''}`} >
                    <div className="item_title" onClick={() => toggleItem(3)}>SCSS</div>
                    <div className="item_text">
                        계층형 트리 메뉴 구조(Depth1~4)에 맞춰 스타일을 구분하고 선택 상태 및 화면 전환 조건에 따라 UI가 동적으로 변경되도록 구현<br />
                        Header, Depth 영역, Content 영역을 분리하여 유지보수에 용이하도록 정리하고 기능 추가 시 기존 스타일 영향 범위를 최소화하는 방향으로 작업
                    </div>                    
                </div>
                <div className={`itemBox ${openIndex[4] ? 'open' : ''}`} >
                    <div className="item_title" onClick={() => toggleItem(4)}>CKEditor 5</div>
                    <div className="item_text">
                        기본 빌드가 아닌 Custom Build를 적용하여 프로젝트 요구사항에 맞는 에디터 환경을 구성<br />
                        한글 UI 적용, Toolbar 커스터마이징(폰트, 정렬, 표, 이미지 업로드 등)을 진행하고 TypeScript 환경에서 발생한 모듈 인식(ts7016) 문제를 해결하여 프로젝트에 안정적으로 통합
                    </div>                    
                </div>
                <div className={`itemBox ${openIndex[5] ? 'open' : ''}`} >
                    <div className="item_title" onClick={() => toggleItem(5)}>REST API 연동</div>
                    <div className="item_text">
                        계층형 카테고리(Depth1~4) 구조에서 상위 Depth 선택 시 하위 데이터를 재조회하도록 REST API를 연동하고 선택된 categorycd 기준으로 하위 목록이 동적으로 갱신되도록 구현<br />
                        또한 프로그램별 매뉴얼 매핑 데이터를 조회한 뒤 기존 Depth 상태와 충돌하지 않도록 조건부로 상태를 업데이트하여 UI가 일관되게 반영되도록 구성
                    </div>                    
                </div>
                <div className={`itemBox ${openIndex[6] ? 'open' : ''}`} >
                    <div className="item_title" onClick={() => toggleItem(6)}>Git</div>
                    <div className="item_text">
                        기능 단위 브랜치 전략을 기반으로 개발을 진행하고 코드 변경 이력 관리 및 기능별 분리를 통해 안정적인 개발 환경을 유지
                    </div>                    
                </div>
            </div> 
        </section>
        <section>
           <h3>💫 Trouble Shooting</h3>
            <div className="flexBox">
                <div className={`itemBox ${openIndex[11] ? 'open' : ''}`} >
                    <div className="item_title" onClick={() => toggleItem(11)}>검색 → 메뉴 이동 시 자동 메뉴 선택 충돌 문제</div>
                    <div className="item_text">
                        <ul>
                            <li><strong>[문제점]</strong> 검색 결과에서 게시글 이동 시 메뉴 자동 선택 로직과 기존 메뉴 로딩 로직이 충돌하여 의도하지 않은 메뉴가 선택되는 문제가 발생</li>
                            <li><strong>[해결]</strong> 메뉴 상태를 <code>Zustand</code> 전역 상태로 관리하고 검색 이동 시 카테고리 정보를 기준으로 단계적으로 메뉴 상태를 설정하도록 로직을 분리</li>
                            <li><strong>[회고]</strong> 여러 로직이 동시에 상태를 변경할 경우 UI 상태 충돌이 발생할 수 있음을 경험했습니다.</li>    
                        </ul> 
                    </div>                    
                </div>

                <div className={`itemBox ${openIndex[12] ? 'open' : ''}`} >
                    <div className="item_title" onClick={() => toggleItem(12)}>CKEditor 커스텀 빌드 TypeScript 인식 문제</div>
                    <div className="item_text">
                        <ul>
                            <li><strong>[문제점]</strong> 커스텀 CKEditor 빌드를 사용할 때 <code>TypeScript</code>가 모듈 타입을 인식하지 못해 컴파일 오류가 발생</li>
                            <li><strong>[해결]</strong> 커스텀 빌드 경로에 <code>.d.ts</code> 모듈 선언 파일을 추가하여 <code>TypeScript</code>가 모듈을 인식하도록 처리</li>
                            <li><strong>[회고]</strong> 외부 라이브러리 커스터마이징 시 타입 선언 관리의 중요성을 경험했습니다.</li>    
                        </ul> 
                    </div>                    
                </div>

                <div className={`itemBox ${openIndex[13] ? 'open' : ''}`} >
                    <div className="item_title" onClick={() => toggleItem(13)}>CKEditor 콘텐츠 렌더링 오류 처리</div>
                    <div className="item_text">
                        <ul>
                            <li><strong>[문제점]</strong> 글 수정 페이지에서 게시글 콘텐츠를 CKEditor에 그대로 렌더링할 때 특정 문자열이 태그로 인식되어 에디터 로딩 오류가 발생</li>
                            <li><strong>[해결]</strong> <code>DOMParser</code>와 <code>DOMPurify</code>로 HTML을 파싱·정제한 후 CKEditor에 전달하도록 처리</li>
                            <li><strong>[회고]</strong> 사용자 입력 기반 HTML 콘텐츠는 렌더링 전 정제 과정이 필요함을 경험했습니다.</li>    
                        </ul> 
                    </div>                    
                </div>

                <div className={`itemBox ${openIndex[14] ? 'open' : ''}`} >
                    <div className="item_title" onClick={() => toggleItem(14)}>PDF 다운로드 검색 상태 URL 동기화 문제</div>
                    <div className="item_text">
                        <ul>
                            <li><strong>[문제점]</strong> 검색어와 필터 상태가 URL과 동기화되지 않아 새로고침이나 브라우저 이동 시 검색 상태가 유지되지 않는 문제가 발생</li>
                            <li><strong>[해결]</strong> <code>Zustand</code> 상태와 <code>URLSearchParams</code>, <code>history.pushState</code>를 활용해 URL과 검색 상태를 동기화</li>
                            <li><strong>[회고]</strong> 검색 기능에서는 URL과 UI 상태를 함께 관리하는 방식의 중요성을 경험했습니다.</li>    
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
                    <p className="item_title">로그인</p>
                 </div>
                 <div className="screen_item" onClick={() => setSelectedImage(screenShot2)}>
                    <img src={screenShot2} alt="프로젝트 작업 화면 2" />
                    <p className="item_title">메인</p>
                 </div>
                 <div className="screen_item" onClick={() => setSelectedImage(screenShot3)}>
                    <img src={screenShot3} alt="프로젝트 작업 화면 3" />
                    <p className="item_title">메인 (사이드 바)</p>
                 </div>
                 <div className="screen_item" onClick={() => setSelectedImage(screenShot4)}>
                    <img src={screenShot4} alt="프로젝트 작업 화면 4" />
                    <p className="item_title">메인 (검색 기능)</p>
                 </div>
                 <div className="screen_item" onClick={() => setSelectedImage(screenShot5)}>
                    <img src={screenShot5} alt="프로젝트 작업 화면 5" />
                    <p className="item_title">검색 결과</p>
                 </div>
                 <div className="screen_item" onClick={() => setSelectedImage(screenShot6)}>
                    <img src={screenShot6} alt="프로젝트 작업 화면 6" />
                    <p className="item_title">글 작성</p>
                 </div>
                 <div className="screen_item" onClick={() => setSelectedImage(screenShot7)}>
                    <img src={screenShot7} alt="프로젝트 작업 화면 7" />
                    <p className="item_title">글 수정</p>
                 </div>
                 <div className="screen_item" onClick={() => setSelectedImage(screenShot8)}>
                    <img src={screenShot8} alt="프로젝트 작업 화면 8" />
                    <p className="item_title">카테고리 편집</p>
                 </div>
                 <div className="screen_item" onClick={() => setSelectedImage(screenShot9)}>
                    <img src={screenShot9} alt="프로젝트 작업 화면 9" />
                    <p className="item_title">PDF 다운로드</p>
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