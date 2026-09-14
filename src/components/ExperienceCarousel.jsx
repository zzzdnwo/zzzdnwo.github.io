import React from 'react';
import Button from './Button';

function Achievement({ children }) {
  const lines = children.split('\n');

  return lines.map((line, index) => (
    <React.Fragment key={`${line}-${index}`}>
      {line}
      {index < lines.length - 1 && <br />}
    </React.Fragment>
  ));
}

export default function ExperienceCarousel({ experiences, isMobile, slider }) {
  return (
    <div className="exp_slider_wrap">
      {isMobile && slider.index > 0 && (
        <Button className="arrow prev" onClick={slider.goToPrevious} aria-label="이전 경력" />
      )}
      <ul className="exp_list slider" ref={slider.sliderRef}>
        {experiences.map((experience) => (
          <li key={experience.id}>
            <table>
              <tbody>
                <tr><th>업무명</th><td>{experience.title}</td></tr>
                <tr><th>기간</th><td>{experience.period}</td></tr>
                <tr><th>성과</th><td><Achievement>{experience.achievement}</Achievement></td></tr>
                <tr>
                  <th>역할</th>
                  <td className={experience.id >= 4 ? 'role' : ''}>
                    <ul className={experience.id < 4 ? 'role' : ''}>
                      {experience.roles.map((role) => (
                        <li key={role.title}>
                          {role.title}
                          {role.details?.map((detail) => <div key={detail}>{detail}</div>)}
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th>기술</th>
                  <td>
                    <ul className="skills">
                      {experience.skills.map((skill) => <li key={skill}>{skill}</li>)}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </li>
        ))}
      </ul>
      {isMobile && slider.index < experiences.length - 1 && (
        <Button className="arrow next" onClick={slider.goToNext} aria-label="다음 경력" />
      )}
      {isMobile && (
        <div className="dots" aria-label="경력 슬라이드 선택">
          {experiences.map((experience, index) => (
            <Button
              key={experience.id}
              className={index === slider.index ? 'on' : ''}
              onClick={() => slider.scrollToIndex(index)}
              aria-label={`${experience.title} 보기`}
              aria-current={index === slider.index ? 'true' : undefined}
            />
          ))}
        </div>
      )}
    </div>
  );
}
