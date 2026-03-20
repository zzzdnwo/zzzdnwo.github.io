import React, { useState } from 'react';
import screenShot1 from '../assets/images/bizbooks_screen1.png';
import screenShot2 from '../assets/images/bizbooks_screenGif1.gif';
import screenShot3 from '../assets/images/bizbooks_screen2.png';
import screenShot4 from '../assets/images/bizbooks_screenGif2.gif';
import screenShot5 from '../assets/images/bizbooks_screen3.png';

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
            비즈북스 (세무 비즈니스 플랫폼) 서비스 운영 및 UI 고도화<br />
            신규 메뉴 및 기능 화면 퍼블리싱과 UI 리뉴얼 작업을 통해 서비스 화면 구조 확장 및 유지보수 효율 개선.
            <hr />
        </h2>        
        <section>
           <h3>📍 프로그램 설명</h3> 
           <ul>
                <li>세무 업무에 필요한 기능을 제공하는 세무 비즈니스 플랫폼 서비스</li>
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
                <div className="item">ToastGrid</div>
                <div className="item">Chart.js</div>              
                <div className="item">Git</div>
                <div className="item">GitHub</div>
                <div className="item">Redmine</div>
                <div className="item">Zeplin</div>
            </div> 
        </section>
        <section>
            <h3>✨ 주요 구현 기능</h3>
            <div className="flexBox">
                <div className={`itemBox ${openIndex[1] ? 'open' : ''}`} >
                    <div className="item_title" onClick={() => toggleItem(1)}>플랫폼 신규 메뉴 및 기능 화면 구현</div>
                    <div className="item_text">
                        <ul>
                            <li>플랫폼 신규 메뉴 기획에 맞춰 서비스 메뉴 구조에 맞는 화면 레이아웃을 구현하고 UI를 적용</li>
                            <li>기존 서비스 화면 구조와 UI 패턴을 고려하여 신규 메뉴와 기능 화면이 자연스럽게 확장될 수 있도록 구성</li>
                        </ul> 
                    </div>                    
                </div>
                <div className={`itemBox ${openIndex[2] ? 'open' : ''}`} >
                    <div className="item_title" onClick={() => toggleItem(2)}>UI 리뉴얼 및 운영 서비스 유지보수</div>
                    <div className="item_text">
                        <ul>
                            <li>디자인 리뉴얼 시안을 기반으로 기존 서비스 화면 UI를 재구성하고 변경된 디자인을 적용</li>
                            <li>서비스 운영 중 발생하는 레이아웃 깨짐 및 화면 UI 오류를 수정하여 안정적인 사용자 환경 유지</li>
                        </ul> 
                    </div>                    
                </div>
                <div className={`itemBox ${openIndex[3] ? 'open' : ''}`} >
                    <div className="item_title" onClick={() => toggleItem(3)}>Toast Grid 기반 데이터 그리드 UI 구현</div>
                    <div className="item_text">
                        <ul>
                            <li>Toast Grid를 활용하여 서비스 화면에서 사용하는 데이터 그리드 UI 구조를 구현</li>
                            <li>그리드 스타일링과 기본 레이아웃 템플릿을 구성하여 여러 화면에서 공통으로 사용할 수 있는 그리드 UI 형태를 적용</li>
                            <li>셀 내부 Select 메뉴, 버튼 UI를 적용하고 마우스 오버 시 위치 기반 툴팁이 표시되도록 인터랙션 기능 구현</li>
                        </ul> 
                    </div>                    
                </div>
                <div className={`itemBox ${openIndex[4] ? 'open' : ''}`} >
                    <div className="item_title" onClick={() => toggleItem(4)}>Chart.js 기반 데이터 시각화 구현</div>
                    <div className="item_text">
                        <ul>
                            <li>재무 및 통계 데이터를 직관적으로 확인할 수 있도록 Chart.js 기반 차트 UI 구현</li>
                            <li>데이터 특성에 맞는 차트 형태를 적용하여 서비스 화면에서 재무 정보를 시각적으로 확인할 수 있도록 구성</li>
                        </ul> 
                    </div>                    
                </div>                    
            </div> 
        </section>
        <section>
            <h3>💫 Trouble Shooting</h3>
            <div className="flexBox">
                <div className={`itemBox ${openIndex[5] ? 'open' : ''}`} >
                    <div className="item_title" onClick={() => toggleItem(5)}>
                        운영 서비스 UI 레이아웃 깨짐 대응
                    </div>
                    <div className="item_text">
                        <ul>
                            <li><strong>[문제점]</strong> 서비스 운영 중 특정 화면에서 데이터 길이나 화면 환경에 따라 UI 레이아웃이 깨지는 문제가 발생</li>
                            <li><strong>[해결]</strong> CSS 구조와 레이아웃 스타일을 수정하여 다양한 데이터 길이와 화면 환경에서도 UI가 안정적으로 표시되도록 처리</li>
                            <li><strong>[회고]</strong> 운영 서비스에서는 다양한 데이터 상황을 고려한 UI 구현과 빠른 문제 대응이 중요함을 경험했습니다.</li>    
                        </ul> 
                    </div>                    
                </div>
                <div className={`itemBox ${openIndex[6] ? 'open' : ''}`} >
                    <div className="item_title" onClick={() => toggleItem(6)}>
                        Chart.js 차트 데이터 표시 및 옵션 적용 문제
                    </div>
                    <div className="item_text">
                        <ul>
                            <li><strong>[문제점]</strong> 재무 데이터를 Chart.js로 시각화하는 과정에서 데이터 값과 차트 표시 방식이 요구된 화면과 다르게 표현되는 문제가 발생</li>
                            <li><strong>[해결]</strong> Chart.js 옵션을 조정하고 데이터 구조에 맞게 차트 설정을 수정하여 재무 데이터가 화면에서 정확하게 표시되도록 처리</li>
                            <li><strong>[회고]</strong> 데이터 시각화 구현 시 차트 라이브러리의 옵션과 데이터 구조를 함께 고려해야 원하는 UI 결과를 구현할 수 있음을 경험했습니다.</li>    
                        </ul> 
                    </div>                    
                </div>
                <div className={`itemBox ${openIndex[7] ? 'open' : ''}`} >
                    <div className="item_title" onClick={() => toggleItem(7)}>
                        Toast Grid 셀 인터랙션 및 툴팁 표시 문제
                    </div>
                    <div className="item_text">
                        <ul>
                            <li><strong>[문제점]</strong> Toast Grid 셀 내부에 버튼, Select 메뉴 등의 UI 요소를 추가하고 마우스 오버 시 툴팁을 표시하는 과정에서 셀 위치와 맞지 않거나 이벤트가 정상적으로 동작하지 않는 문제가 발생</li>
                            <li><strong>[해결]</strong> 셀 렌더링 구조와 이벤트 동작 방식을 확인한 후 마우스 이벤트 위치를 기준으로 툴팁 위치를 계산하도록 처리하여 셀 UI와 인터랙션이 정상적으로 동작하도록 수정</li>
                            <li><strong>[회고]</strong> 그리드 라이브러리 내부 구조를 이해하고 셀 단위 UI 인터랙션을 처리하는 과정에서 라이브러리 기반 UI 커스터마이징 경험을 쌓을 수 있었습니다.</li>    
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
                    <p className="item_title">상담관리</p>
                 </div>
                 <div className="screen_item" onClick={() => setSelectedImage(screenShot2)}>
                    <img src={screenShot2} alt="프로젝트 작업 화면 2" />
                    <p className="item_title">상담관리 테스트</p>
                 </div>
                 <div className="screen_item" onClick={() => setSelectedImage(screenShot3)}>
                    <img src={screenShot3} alt="프로젝트 작업 화면 3" />
                    <p className="item_title">신고관리</p>
                 </div>
                 <div className="screen_item" onClick={() => setSelectedImage(screenShot4)}>
                    <img src={screenShot4} alt="프로젝트 작업 화면 4" />
                    <p className="item_title">월결산보고서 시연</p>
                 </div>
                 <div className="screen_item" onClick={() => setSelectedImage(screenShot5)}>
                    <img src={screenShot5} alt="프로젝트 작업 화면 5" />
                    <p className="item_title">오류접수</p>
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