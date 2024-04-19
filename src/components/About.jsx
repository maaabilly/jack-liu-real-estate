import { suit } from '../assets';
import Button from './Button';

const About = () => {
  return (
    <section className="w-full bg-white" id="about">
      <div className="max-w-[1240px] px-10 py-[4rem] mx-auto" >
        <div className="flex justify-center items-center gap-10">
          <div className="flex-1">
            <img
              src={suit}
              alt="portrait photo"
              width={300}
              height={500}
              className="object-contain rounded-[25%] mx-auto"
            />
          </div>

          <div className="flex flex-col justify-start items-center gap-3 flex-1">
            <h2 className="text-2xl">About Me</h2>
            <h3 className="text-4xl">ABOUT TITLE</h3>
            <p className="text-xl my-6">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
              laboriosam architecto quas a alias rem earum minus, doloribus
              molestias maiores dignissimos? Nobis inventore odio recusandae
              veniam velit aspernatur eius, adipisci sequi officiis culpa quas
              consequatur placeat ipsum, earum sed obcaecati accusantium? Eius
              amet deleniti autem nobis soluta at saepe minus!
            </p>
            <Button className="text-xl">Recent Transactions</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
