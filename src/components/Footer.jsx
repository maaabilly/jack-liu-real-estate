import { plainTwinOaksLogo } from '../assets';
import FooterLogo from './FooterLogo';

import Button from './Button';

const Footer = ({ className = '' }) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={`w-full ${className}`}>
      <div className="bg-black text-white">
        <div className="max-w-[1240px] mx-auto py-3 px-10 bg-black text-white">
          <div className="grid md:grid-cols-3 justify-center items-center gap-3">
            <FooterLogo className={`hidden md:block`}/>
            <img
              src={plainTwinOaksLogo}
              alt="twin oaks logo"
              width={200}
              className="justify-self-center"
            />
            <div className="flex flex-col justify-self-end">
              <p className="mb-2 text-[1.2rem] font-semibold">
                Sign up for our Newsletter!
              </p>
              <div className="flex gap-5">
                <form className="max-w-md mx-auto">
                  <input
                    type="email"
                    id="email"
                    className="bg-white rounded-xl px-4 py-3"
                    placeholder="Email Address"
                    required
                  />
                </form>
                <Button className={`rounded-xl`}>Sign Up</Button>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <p className="pt-8 text-sm">
              Copyright &copy; {currentYear} - All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
