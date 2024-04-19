import { NavLink } from 'react-router-dom';
import { twinOaksLogo } from '../assets';

const Logo = ({ className }) => {
  return (
    <div
      onClick={() => scrollTo(0, 0)}
      className={`flex justify-center items-center cursor-pointer ${className}`}
    >
      <NavLink to="/">
        <div className="flex justify-evenly">
          <div className="flex flex-col justify-center items-center text-2xl tracking-wider">
            <div>Jack</div>
            <div>Liu</div>
          </div>
          <div className="w-[1px] bg-white border ml-2" />
          <img
            src={twinOaksLogo}
            alt="twin oaks real estate logo"
            width={100}
            height={100}
          />
        </div>
      </NavLink>
    </div>
  );
};

export default Logo;
