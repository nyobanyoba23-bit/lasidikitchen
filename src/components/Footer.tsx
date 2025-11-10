import React from 'react';
import '../styles/components/_footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} La Sidi Kitchen. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
