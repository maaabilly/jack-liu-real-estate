import { NavLink } from 'react-router-dom';
import { AiFillInstagram } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const FooterLogo = ({ className }) => {
  return (
    <div
      onClick={() => scrollTo(0, 0)}
      className={`flex justify-center items-center cursor-pointer ${className}`}
    >
      <NavLink to="/">
        <div className="flex items-center">
          <div className="flex flex-col justify-center items-center text-2xl tracking-wider pr-3 border-r-[2.5px] font-bold">
            <div>Jack</div>
            <div>Liu</div>
          </div>
        </div>
      </NavLink>
      <Link to={`https://www.instagram.com/jackliu.sf/`} target="_blank">
        <AiFillInstagram className="ml-3" size={40} />
      </Link>
    </div>
  );
};

export default FooterLogo;
