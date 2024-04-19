// import { navigation } from '../constants';
import Logo from './Logo';
import Button from './Button';
import { RxHamburgerMenu } from 'react-icons/rx';
// import NavLink from './NavLink';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Dropdown from './Dropdown';

const Navbar = () => {
  return (
    <nav
      className="sticky top-0 z-50 px-4 bg-black text-gray-100 py-4"
      id="nav"
    >
      <div className="max-w-[1240px] flex justify-between items-center h-[100px] mx-auto px-5 lg:px-10 font-bold">
        <div className="flex gap-10 lg:gap-16">
          <Logo />
          <ul className="uppercase grid-cols-3 cursor-pointer justify-center items-center gap-5 hidden md:grid mr-7">
            {/* {navigation.map((item, index) => (
              <NavLink key={index} item={item} />
            ))} */}
            <HashLink
              smooth
              to="/#about"
              draggable="false"
              onClick={() => scrollTo(0, 0)}
            >
              About
            </HashLink>
            {/* <NavLink to="/tools" draggable="false">
              <div>Tools</div>
            </NavLink> */}
            <Dropdown title={`Tools`} />
            <NavLink
              to="/contacts"
              draggable="false"
              onClick={() => scrollTo(0, 0)}
            >
              Contacts
            </NavLink>
          </ul>
        </div>
        <div className="hidden md:flex gap-10 justify-center items-center ">
          <p className="tracking-widest hidden lg:block">(123) 456-7890</p>
          <Button className={'text-[1.2em] text-nowrap '}>
            Find Property
          </Button>
        </div>
        <RxHamburgerMenu size={30} className="md:hidden block cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
