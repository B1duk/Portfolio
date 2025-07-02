import React, { useState, useEffect } from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';


interface NavItem {
  id: string;
  label: string;
}


export const Header: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
 const navigate = useNavigate();
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navItems = [
    { id: 'about', label: 'Обо мне' },
    { id: 'projects', label: 'Мои проекты'  },
    { id: 'skills', label: 'Навыки' },
    { id: 'contact', label: 'Обратная связь' },
  ];

  const handleNavClick = (id: string) => {
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }

    navigate(`/#${id}`, { replace: true });

    setMenuOpen(false);
  };


  return (
    <div className="header-container">
      <header className="header">
        {isMobile ? (
          <>
            <button 
              className={`hamburger ${menuOpen ? 'active' : ''}`} 
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            
            {menuOpen && (
              <div className="mobile-menu">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    className="nav-button"
                    onClick={() => handleNavClick(item.id)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </>
        ) : (
          <nav className="desktop-nav">
            {navItems.map((item) => (
              <button
                key={item.id}
                className="nav-button"
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </header>
    </div>
  );
};

