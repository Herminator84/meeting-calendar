import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light text-center py-3">
      <p>&copy; {new Date().getFullYear()} Meeting Calendar. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
