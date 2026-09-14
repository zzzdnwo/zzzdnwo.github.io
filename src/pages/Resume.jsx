import ResumeProjectList from '../components/ResumeProjectList';
import experiences, { resumeSkills } from '../data/experiences';
import '../assets/scss/pages/resume.scss';

const certifications = [
  { name: '컴퓨터그래픽스운용기능사', agency: '한국산업인력관리공단', date: '2020.10' },
  { name: '웹디자인기능사', agency: '한국산업인력관리공단', date: '2020.09' },
  { name: 'GTQ 1급', agency: '한국생산성본부', date: '2020.08' },
];

export default function Resume() {
  return (
    <div className="resumeCont">
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
              <p>React와 TypeScript 기반 프로젝트에서 다양한 화면을 구현하며 공통 컴포넌트화와 코드 정리를 통해 반복 작업을 줄이고 운영 중 발생하는 이슈에도 빠르게 대응해왔습니다.</p>
              <p>동료들과 구현 과정에서 발생하는 이슈를 공유하고, 코드 리뷰와 의견 교환을 통해 더 나은 결과를 만들며 팀의 개발 효율과 서비스 완성도에 기여하고 싶습니다.</p>
            </div>
          </section>
          <section className="skill">
            <div className="section_title">기술스택</div>
            <div className="section_content">
              <ul className="skill_list">
                {resumeSkills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </div>
          </section>
          <section className="project">
            <div className="section_title">프로젝트</div>
            <div className="section_content"><ResumeProjectList experiences={experiences} /></div>
          </section>
          <section className="cert">
            <div className="section_title">자격증</div>
            <div className="section_content">
              <ul className="cert_list">
                {certifications.map((certification) => (
                  <li key={certification.name}>
                    <p className="cert_name">{certification.name}</p>
                    <p className="cert_agency">{certification.agency}</p>
                    <p className="cert_date">{certification.date}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <section className="url">
            <div className="section_title">포트폴리오</div>
            <div className="section_content">
              <h3>URL</h3>
              <div className="urlBox">
                <span className="url_Item"><a href="https://github.com/zzzdnwo">Github</a></span>
                <span className="url_Item"><a href="/portfolio">포트폴리오</a></span>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
