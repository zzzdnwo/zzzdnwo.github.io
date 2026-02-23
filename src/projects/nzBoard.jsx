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
            프로젝트 전반 React + TypeScript 구조로 리뉴얼 안정성과 유지보수성을 향상시킴.
        </h2>
        <hr />
        <section>
           <h3>📍 주요 기능 및 특징</h3> 
           <ul>
                <li>기존 프로젝트 전반을 React + TypeScript 기반 프론트엔드 설계</li>
                <li>SCSS 기반 스타일 아키텍처</li>
                <li>공통 컴포넌트 및 UI 시스템 구축하며 <br />두 줄을 테스트해보다.</li>
           </ul>
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
                        React는 컴포넌트 기반으로 하며, 가상 DOM을 활용해 웹 애플리케이션의 성능을 최적화 합니다. 컴포넌트 재사용성을 높이고, 상태 관리를 용이하게 할 수 있습니다.
                    </div>                    
                </div>
                <div className={`itemBox ${openIndex[1] ? 'open' : ''}`} >
                    <div className="item_title" onClick={() => toggleItem(1)}>Typescript</div>
                    <div className="item_text">
                        TypeScript는 정적 타입을 지원하는 JavaScript 슈퍼셋 언어로, 코드를 실행하기 전 오류를 잡아 줄 수 있습니다.
                    </div>                    
                </div>   
                <div className={`itemBox ${openIndex[2] ? 'open' : ''}`} >
                    <div className="item_title" onClick={() => toggleItem(2)}>그레이 제목</div>
                    <div className="item_text">
                        TypeScript는 정적 타입을 지원하는 JavaScript 슈퍼셋 언어로, 코드를 실행하기 전 오류를 잡아 줄 수 있습니다.
                    </div>                    
                </div> 
            </div> 
        </section>
        <section>
           <h3>✨ 작업 기여도</h3>
            <div className="flexBox">
                <div className={`itemBox ${openIndex[3] ? 'open' : ''}`} >
                    <div className="item_title" onClick={() => toggleItem(3)}>기존 프로젝트 전반을 React + TypeScript 기반 프론트엔드 설계</div>
                    <div className="item_text">
                        <ul>
                            <li>컴포넌트 단위 구조 설계 및 타입 정의를 통해 안정적인 UI 개발</li>                               
                        </ul> 
                    </div>                    
                </div>
                <div className={`itemBox ${openIndex[4] ? 'open' : ''}`} >
                    <div className="item_title" onClick={() => toggleItem(4)}>SCSS 기반 스타일 아키텍처</div>
                    <div className="item_text">
                        <ul>
                            <li>컴포넌트 단위 SCSS 설계 및 유지보수 중심의 스타일 구조 구성</li>  
                        </ul> 
                    </div>                    
                </div>   
                <div className={`itemBox ${openIndex[5] ? 'open' : ''}`} >
                    <div className="item_title" onClick={() => toggleItem(5)}>공통 컴포넌트 및 UI 시스템 구축</div>
                    <div className="item_text">
                        <ul>
                            <li>재사용 가능한 UI 컴포넌트 설계로 개발 생산성 및 품질 향상</li>   
                        </ul> 
                    </div>                    
                </div> 
                <div className={`itemBox ${openIndex[6] ? 'open' : ''}`} >
                    <div className="item_title" onClick={() => toggleItem(6)}>협업 및 프로젝트 운영 역량</div>
                    <div className="item_text">
                        <ul>
                            <li>디자이너·백엔드 개발자와의 협업을 통한 프로젝트 일정 관리, 요구사항 조율 등 개발 스코프 관리 경험</li>
                        </ul> 
                    </div>                    
                </div>
            </div> 
        </section>
        <section>
           <h3>💫 Trouble Shooting</h3>
            <div className="flexBox">
                <div className={`itemBox ${openIndex[7] ? 'open' : ''}`} >
                    <div className="item_title" onClick={() => toggleItem(7)}>그레이 제목</div>
                    <div className="item_text">
                        <ul>
                            <li><strong>[문제점]</strong> 기존 프로젝트 전반을 React + TypeScript 기반 프론트엔드 설계</li>
                            <li><strong>[해결]</strong> <code>SCSS</code> 기반 스타일 아키텍처</li>
                            <li><strong>[회고]</strong> 공통 컴포넌트 및 UI 시스템 구축하며 <br />두 줄을 테스트해보다.</li>    
                        </ul> 
                    </div>                    
                </div>   
                <div className={`itemBox ${openIndex[8] ? 'open' : ''}`} >
                    <div className="item_title" onClick={() => toggleItem(8)}>그레이 제목</div>
                    <div className="item_text">
                        <ul>
                            <li>기존 프로젝트 전반을 React + TypeScript 기반 프론트엔드 설계</li>
                            <li>SCSS 기반 스타일 아키텍처</li>
                            <li>공통 컴포넌트 및 UI 시스템 구축하며 <br />두 줄을 테스트해보다.</li>    
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