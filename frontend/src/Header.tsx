import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
    links: { name: string; path: string }[]; // Array of objects with name and path for each link
  }

const Header: React.FC<HeaderProps> = ({ links }) => {
    return (
      <header className="App-header">
        <div className="flex flex-row px-5">
          <h1 className="font-semibold text-black">Ymke Wegereef</h1>
        </div>
        <div className="flex flex-row space-x-5 px-5">
          {/* Dynamically generate the navigation links */}
          {links.map((link, index) => (
            <Link key={index} to={link.path}>
              {link.name}
            </Link>
          ))}
        </div>
      </header>
    );
  };

export default Header;