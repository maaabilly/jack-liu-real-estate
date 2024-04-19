import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BiChevronDown } from 'react-icons/bi';

const Dropdown = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="w-full">
      <div className="relative inline-block">
        <NavLink
          to={`/tools`}
          type="button"
          onMouseEnter={toggleDropdown}
          onClick={closeDropdown}
        >
          <div className="flex justify-center items-center gap-1">
            {title}
            <BiChevronDown size={20} />
          </div>
        </NavLink>
        {isOpen && (
          <div className="origin-top-left absolute left-0 mt-2 w-[15rem] p-2 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <ul
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <li>
                <Link
                  to="/tools/#mortgageCalculator"
                  className="block px-4 py-2 text-sm text-gray-700 hover:text-green-600"
                  onClick={closeDropdown}
                >
                  Mortgage Calculator
                </Link>
              </li>
              <li>
                <Link
                  to="/tools/#homeValuation"
                  className="block px-4 py-2 text-sm text-gray-700 hover:text-green-600"
                  onClick={closeDropdown}
                >
                  Home Valuation
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
