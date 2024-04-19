import { HashLink } from 'react-router-hash-link';

const Button = ({ path = '/#home', children, className }) => {
  return (
    <HashLink smooth to={path}>
      <button
        className={`flex justify-center items-center px-8 py-3 ring rounded-[2rem] ring-green-500/90 hover:bg-green-500/90 hover:font-bold hover:text-black transition-all duration-100 ${
          className ? className : ''
        }`}
      >
        {children}
      </button>
    </HashLink>
  );
};

export default Button;
