import { heroBg, suit } from '../assets';
import Button from './Button';
import { RiArrowRightUpLine } from 'react-icons/ri';

const Hero = () => {
  return (
    <section className="h-[800px] w-dvw mx-auto overflow-hidden" id="home">
      <div className="absolute h-[800px] w-full bg-black/55">
        <div className="h-full max-w-[1240px] mx-auto px-10">
          <div className="text-white/90 h-full flex flex-col justify-center items-center gap-10 md:flex-row">
            <div className="flex flex-col mr-10">
              <h1 className="text-5xl mb-5">HERO STATEMENT</h1>
              <h2 className="text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat magnam quis aut suscipit ipsam laudantium commodi similique. Enim esse nulla, repudiandae fugit quae iste. Reprehenderit quam perferendis accusamus ut nostrum.
              </h2>
              <div className="flex gap-5 mt-10 w-full text-xl">
                <Button className={`gap-2 w-[200px]`}>
                  Contact Me <RiArrowRightUpLine />
                </Button>
                <Button className={`hidden md:block`}>
                  Recent Transactions
                </Button>
              </div>
            </div>
            <img src={suit} alt="" width={350} className="rounded-[25%]" />
          </div>
        </div>
      </div>
      <img
        src={heroBg}
        alt="Real Estate Showcase"
        className="w-full h-[800px] object-cover"
      />
    </section>
  );
};

export default Hero;
