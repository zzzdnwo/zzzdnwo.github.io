import Button from './Button';

const menuItems = [
  { id: 'main', label: 'Main' },
  { id: 'about', label: 'About' },
  { id: 'stack', label: 'Tech Stack' },
  { id: 'project', label: 'Project' },
  { id: 'exp', label: 'Experience' },
];

export default function HeaderNavigation({ activeSection, gnbTheme, showGnb, onNavigate }) {
  return (
    <div className="gnbInitWrap">
      <div className={`gnb ${showGnb ? 'show' : 'hide'} ${gnbTheme}`}>
        <div className="gnb_inner">
          <Button className="logo" onClick={() => onNavigate('main')} aria-label="메인으로 이동">
            로고
          </Button>
          <nav className="menu" aria-label="주요 탐색">
            {menuItems.map((item) => (
              <Button
                key={item.id}
                className={activeSection === item.id ? 'on' : ''}
                onClick={() => onNavigate(item.id)}
              >
                {item.label}
              </Button>
            ))}
          </nav>
          <div className="right">
            <Button className="contactBtn" onClick={() => onNavigate('contact')}>
              Contact
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
