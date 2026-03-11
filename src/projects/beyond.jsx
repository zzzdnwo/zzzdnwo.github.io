import React, { useState } from 'react';
import screenShot1 from '../assets/images/beyond_screen1.jpg';
import screenShot2 from '../assets/images/beyond_screen2.jpg';
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
            비욘드 재무보고서 (업체 재무 데이터 대시보드) 구축 프로젝트<br />
            재무 데이터를 웹 페이지에서 조회할 수 있도록 대시보드 형태로 구현하고 데이터 시각화를 통해 재무 정보 조회 편의성과 데이터 가시성을 향상시킴.
            <hr />
        </h2>        
        <section>
           <h3>📍 프로그램 설명</h3> 
           <ul>
                <li>세무 및 기업관리 프로그램에서 관리되는 업체 재무 데이터를 웹 페이지에서 조회할 수 있도록 구축한 재무 데이터 대시보드</li>
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
                <div className="item">CSS3</div>
                <div className="item">JavaScript</div> 
                <div className="item">REST API</div>
                <div className="item">Chart.js</div>                
                <div className="item">OZReport</div>
                <div className="item">Git</div>
                <div className="item">Redmine</div>
                <div className="item">Zeplin</div>
            </div> 
        </section>
        <section>
            <h3>✨ 주요 구현 기능</h3>
            <div className="flexBox">
                <div className={`itemBox ${openIndex[1] ? 'open' : ''}`} >
                    <div className="item_title" onClick={() => toggleItem(1)}>재무 데이터 대시보드 UI 구현</div>
                    <div className="item_text">
                        <ul>
                            <li>업체 코드와 기준년월 파라미터를 기준으로 재무 데이터를 조회할 수 있는 대시보드 화면 구조 구현</li>
                            <li>재무 지표를 직관적으로 확인할 수 있도록 다양한 데이터 시각화 UI를 구성</li>
                        </ul> 
                    </div>                    
                </div>
                <div className={`itemBox ${openIndex[2] ? 'open' : ''}`} >
                    <div className="item_title" onClick={() => toggleItem(2)}>Chart.js 기반 데이터 시각화</div>
                    <div className="item_text">
                        <ul>
                            <li>Chart.js 라이브러리를 활용하여 재무 데이터를 그래프 및 차트 형태로 시각화</li>
                            <li>재무 지표를 시각적으로 표현하여 보고서 데이터의 이해도를 높일 수 있도록 구현</li>
                        </ul> 
                    </div>                    
                </div>
                <div className={`itemBox ${openIndex[3] ? 'open' : ''}`} >
                    <div className="item_title" onClick={() => toggleItem(3)}>백엔드 API 연동 및 데이터 바인딩</div>
                    <div className="item_text">
                        <ul>
                            <li>백엔드에서 제공하는 API를 통해 JSON 형태의 재무 데이터를 수신</li>
                            <li>데이터 구조를 분석하여 대시보드 UI와 차트 컴포넌트에 정확하게 매핑</li>
                        </ul> 
                    </div>                    
                </div>
                <div className={`itemBox ${openIndex[4] ? 'open' : ''}`} >
                    <div className="item_title" onClick={() => toggleItem(4)}>파라미터 기반 동적 대시보드 구현</div>
                    <div className="item_text">
                        <ul>
                            <li>업체 코드 및 조회 기간 파라미터에 따라 동일 화면에서 데이터가 동적으로 변경되는 구조 구현</li>
                            <li>다양한 업체 및 기간 데이터를 하나의 대시보드에서 조회할 수 있도록 설계</li>
                        </ul> 
                    </div>                    
                </div>
                <div className={`itemBox ${openIndex[5] ? 'open' : ''}`} >
                    <div className="item_title" onClick={() => toggleItem(5)}>재무보고서 인쇄 기능 구현</div>
                    <div className="item_text">
                        <ul>
                            <li>대시보드 화면 데이터를 인쇄 가능한 보고서 형태로 제공</li>
                            <li>OZReport를 활용하여 재무 데이터 기반 인쇄용 리포트 출력 기능 구현</li>
                        </ul> 
                    </div>                    
                </div>
                <div className={`itemBox ${openIndex[6] ? 'open' : ''}`} >
                    <div className="item_title" onClick={() => toggleItem(6)}>반응형 대시보드 레이아웃 구현</div>
                    <div className="item_text">
                        <ul>
                            <li>다양한 해상도 환경에서 재무 데이터를 안정적으로 확인할 수 있도록 반응형 레이아웃 구현</li>
                            <li>대시보드 화면의 가독성과 활용성을 고려한 UI 구조 설계</li>
                        </ul> 
                    </div>                    
                </div>
            </div>
        </section>
        <section>
            <h3>💫 Trouble Shooting</h3>
            <div className="flexBox">
                <div className={`itemBox ${openIndex[7] ? 'open' : ''}`} >
                    <div className="item_title" onClick={() => toggleItem(7)}>
                        Chart.js 플러그인을 활용한 재무 데이터 차트 커스터마이징
                    </div>
                    <div className="item_text">
                        <ul>
                            <li><strong>[문제점]</strong> Chart.js가 Canvas 기반으로 렌더링되어 CSS 스타일링이 적용되지 않아 요구된 차트 디자인 구현에 제약 발생</li>
                            <li><strong>[해결]</strong> <code>chartjs-datalabels</code>와 <code>chartjs-annotation</code>등을 활용해 데이터 라벨과 기준선 등을 구현하고 차트 옵션을 커스터마이징하여 재무 데이터 차트 구성</li>
                            <li><strong>[회고]</strong> 차트 렌더링 방식 이해하고 플러그인을 이용해 라이브러리 기본 기능의 한계를 보완하는 방법을 경험했습니다.</li>    
                        </ul> 
                    </div>                    
                </div> 
                <div className={`itemBox ${openIndex[8] ? 'open' : ''}`} >
                    <div className="item_title" onClick={() => toggleItem(8)}>
                        프로젝트 진행 중 고객사 요청 데이터 항목 추가 대응
                    </div>
                    <div className="item_text">
                        <ul>
                            <li><strong>[문제점]</strong> 프로젝트 진행 중 고객사에서 신규 재무 데이터 항목 추가 요청이 발생하여 기존 대시보드 차트 구조 수정이 필요</li>
                            <li><strong>[해결]</strong> 설계자 및 백엔드와 협의하여 확장된 API 데이터를 전달받고 Chart.js 기반 차트를 수정·추가하여 신규 재무 데이터를 시각화</li>
                            <li><strong>[회고]</strong> 프로젝트 진행 과정에서 발생하는 요구사항 변경에 대응하며 데이터 구조 변화에 맞춰 UI를 유연하게 확장하는 경험을 했습니다.</li>    
                        </ul> 
                    </div>                    
                </div>
                <div className={`itemBox ${openIndex[9] ? 'open' : ''}`} >
                    <div className="item_title" onClick={() => toggleItem(9)}>
                        재무보고서 웹 페이지 반응형 UI 개선
                    </div>
                    <div className="item_text">
                        <ul>
                            <li><strong>[문제점]</strong> 재무보고서 페이지가 PC 화면 중심으로 구성되어 있어 모바일 환경에서는 차트와 데이터 테이블의 가독성이 떨어지는 문제가 발생</li>
                            <li><strong>[해결]</strong> SCSS 기반 반응형 레이아웃을 적용하고 화면 크기에 따라 차트와 테이블 구조를 재구성하여 PC와 모바일 환경 모두에서 재무 데이터를 확인할 수 있도록 UI를 개선</li>
                            <li><strong>[회고]</strong> 데이터 중심 화면에서는 단순 레이아웃 축소가 아닌 정보 구조와 가독성을 함께 고려한 반응형 설계가 중요하다는 것을 경험했습니다.</li>    
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