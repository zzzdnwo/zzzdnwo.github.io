import React, { useState } from 'react';
import screenShot1 from '../assets/images/nzHome_screen1.png';
import screenShot1Thumb from '../assets/images/nzHome_screen1Thumb.png';
import screenShot2 from '../assets/images/nzBoard_screen2.png';
import screenShot3 from '../assets/images/nzBoard_screen3.png';
import screenShot4 from '../assets/images/nzBoard_screen4.png';
import screenShot5 from '../assets/images/nzBoard_screen5.png';
import screenShot6 from '../assets/images/nzBoard_screen6.png';
import screenShot7 from '../assets/images/nzBoard_screen7.png';
import screenShot8 from '../assets/images/nzBoard_screen8.png';
import screenShot9 from '../assets/images/nzBoard_screen9.png';
import screenShot10 from '../assets/images/nzBoard_screenGif1.gif';

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
            대표 홈페이지와 다수의 프로그램 마이크로사이트를 제작 및 유지보수<br />
            UI 인터랙션 구현과 SEO 개선 작업을 통해 사용자 경험과 웹 품질을 지속적으로 개선
            <hr />
        </h2>        
        <section>
           <h3>📍 프로그램 설명</h3> 
           <ul>
                <li>대표 홈페이지와 다수의 프로그램 마이크로사이트</li>
           </ul>
        </section>
        <section className="skillCont">
           <h3>🛠️ 기술 스택</h3>
            <div className="flexBox">                
                <div className="item">HTML5</div>
                <div className="item">CSS3</div>                                
                <div className="item">JavaScript</div>
                <div className="item">Ajax</div>
                <div className="item">AOS.js</div>
                <div className="item">Waypoints.js</div>
                <div className="item">CountUp.js</div>
                <div className="item">Magnify.js</div>
                <div className="item">Slick.js</div>
                <div className="item">Microsoft SQL Server</div>
                <div className="item">Google Lighthouse</div>
                <div className="item">GitHub</div>
                <div className="item">Redmine</div>
                <div className="item">Zeplin</div>
            </div> 
        </section>
        <section>
           <h3>✨ 주요 구현 기능</h3>
            <div className="flexBox">
                <div className={`itemBox ${openIndex[1] ? 'open' : ''}`} >
                    <div className="item_title" onClick={() => toggleItem(1)}>
                        대표 홈페이지 메인 스크롤 인터랙션 UI 구현
                    </div>
                    <div className="item_text">
                        <ul>
                            <li>AOS, Waypoints, CountUp.js 등을 활용하여 스크롤 위치에 따라 애니메이션이 동작하는 인터랙션 UI 구현</li>
                            <li>섹션별 등장 애니메이션과 카운트업 효과를 적용하여 메인 화면의 동적 사용자 경험 구성</li>
                        </ul> 
                    </div>                    
                </div>
                <div className={`itemBox ${openIndex[2] ? 'open' : ''}`} >
                    <div className="item_title" onClick={() => toggleItem(2)}>
                        홈페이지 이미지 자료실 갤러리 기능 구현
                    </div>
                    <div className="item_text">
                        <ul>
                            <li>magnify 플러그인을 커스터마이징하여 디자인 이미지 자료를 미리보기 형태로 확인할 수 있는 갤러리 UI 구현</li>
                            <li>이미지 확대 보기 및 탐색 기능을 적용하여 자료 확인 편의성 개선</li>
                        </ul> 
                    </div>                    
                </div>
                <div className={`itemBox ${openIndex[3] ? 'open' : ''}`} >
                    <div className="item_title" onClick={() => toggleItem(3)}>
                        Ajax 기반 이미지 다운로드 기능 구현
                    </div>
                    <div className="item_text">
                        <ul>
                            <li>Ajax를 활용하여 이미지 파일 다운로드 기능 구현</li>
                            <li>한글 파일명 다운로드 시 발생하는 인코딩 문제를 처리하여 정상적인 파일명으로 저장되도록 개선</li>
                        </ul> 
                    </div>                    
                </div>
                <div className={`itemBox ${openIndex[4] ? 'open' : ''}`} >
                    <div className="item_title" onClick={() => toggleItem(4)}>
                        SEO 및 웹 품질 개선
                    </div>
                    <div className="item_text">
                        <ul>
                            <li>Google Lighthouse를 활용하여 성능(Performance), 접근성(Accessibility), SEO 항목 분석</li>
                            <li>이미지 최적화, 마크업 구조 개선 등을 통해 웹 품질 및 검색 엔진 친화성 개선</li>
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
                        스크롤 애니메이션 이벤트 실행 시점 문제
                    </div>
                    <div className="item_text">
                        <ul>
                            <li><strong>[문제]</strong> 홈페이지 메인 스크롤 애니메이션 구현 과정에서 스크롤 위치에 따라 이벤트가 실행되는 시점이 의도한 구간과 맞지 않는 문제가 발생</li>
                            <li><strong>[해결]</strong> <code>Waypoints</code>를 활용하여 요소가 화면에 진입하는 기준 지점을 조정하고 이벤트 조건을 세분화하여 애니메이션이 의도한 시점에 실행되도록 수정</li>
                            <li><strong>[회고]</strong> 스크롤 기반 인터랙션 구현 시 단순 이벤트 처리보다 요소의 화면 진입 시점과 스크롤 흐름을 고려한 이벤트 제어가 중요하다는 것을 경험</li>
                        </ul> 
                    </div>                    
                </div>
                <div className={`itemBox ${openIndex[8] ? 'open' : ''}`} >
                    <div className="item_title" onClick={() => toggleItem(8)}>
                        Magnify.js 갤러리 기능 커스터마이징
                    </div>
                    <div className="item_text">
                        <ul>
                            <li><strong>[문제]</strong> 이미지 자료실 갤러리 구현 과정에서 디자인 요구사항이 <code>Magnify.js</code>에서 기본적으로 제공하는 기능보다 다양하여 원하는 UI와 동작을 그대로 적용하기 어려움</li>
                            <li><strong>[해결]</strong> <code>Magnify.js</code> 동작 구조를 분석하여 이미지 비율 유지 처리, 마우스 휠 확대 이벤트, 태그 저장 기능 등을 추가로 구현하여 요구된 기능을 커스터마이징 방식으로 적용</li>
                            <li><strong>[회고]</strong> 플러그인을 그대로 사용하는 것이 아니라 서비스 요구사항에 맞게 기능을 확장하거나 수정하는 과정에서 라이브러리 커스터마이징 경험을 쌓을 수 있었음</li>
                        </ul> 
                    </div>                    
                </div>
                <div className={`itemBox ${openIndex[9] ? 'open' : ''}`} >
                    <div className="item_title" onClick={() => toggleItem(9)}>
                        한글 파일명 이미지 다운로드 인코딩 문제
                    </div>
                    <div className="item_text">
                        <ul>
                            <li><strong>[문제]</strong> 이미지 자료실에서 <code>Ajax</code>로 파일 다운로드 구현 시 한글 파일명이 깨져 다운로드되는 문제가 발생</li>
                            <li><strong>[해결]</strong> 파일 다운로드 시 인코딩 처리를 적용하여 한글 파일명이 정상적으로 유지되도록 수정</li>
                            <li><strong>[회고]</strong> 파일 다운로드 기능 구현 시 브라우저와 서버 간 인코딩 처리 방식에 대한 이해가 필요하다는 것을 경험</li>
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
                    <img src={screenShot1Thumb} alt="프로젝트 작업 화면 1" />
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
                 <div className="screen_item" onClick={() => setSelectedImage(screenShot10)}>
                    <img src={screenShot10} alt="프로젝트 작업 화면 10" />
                    <p className="item_title">PDF 다운로드 시연</p>
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