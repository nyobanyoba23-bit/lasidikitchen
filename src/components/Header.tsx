import React from 'react';
import '../styles/components/_header.scss';
import { FaHome, FaCookieBite, FaInfoCircle, FaEnvelope } from 'react-icons/fa'; // Import icons

interface HeaderProps {
  activeSection?: string | null; // Made optional to fix build error
}

    const Header: React.FC<HeaderProps> = ({ activeSection }) => {
      const navLinks = [
        // @ts-ignore
        { href: '#hero', label: 'Home', icon: <FaHome /> },
        // @ts-ignore
        { href: '#cookies', label: 'Cookies', icon: <FaCookieBite /> },
        // @ts-ignore
        { href: '#about', label: 'About Us', icon: <FaInfoCircle /> },
        // @ts-ignore
        { href: '#contact', label: 'Contact', icon: <FaEnvelope /> },
      ];
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <a href="/">La Sidi Kitchen</a>
        </div>
        <nav className="main-nav">
          <ul>
            {navLinks.map(link => (
              <li key={link.href}>
                <a 
                  href={link.href} 
                  className={activeSection === link.href.substring(1) ? 'active' : ''}
                >
                  {link.icon}
                  <span className="nav-label">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;