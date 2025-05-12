
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="py-4 px-6 md:px-10 bg-[#F9F5F0] shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-[#6B4025] font-montserrat text-2xl font-semibold tracking-tight">
          Sweet Delights
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/catalog/classic">Классические</NavLink>
          <NavLink to="/catalog/diet">ПП торты</NavLink>
          <NavLink to="/catalog/vegan">Веган торты</NavLink>
          <NavLink to="/catalog/other">Другие сладости</NavLink>
        </nav>
        <div className="md:hidden">
          <button className="text-[#6B4025]" aria-label="Меню">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ children, to }: { children: React.ReactNode; to: string }) => {
  return (
    <Link 
      to={to} 
      className="text-[#6B4025] font-roboto text-base hover:text-[#A67F5D] transition-colors"
    >
      {children}
    </Link>
  );
};

export default Header;
