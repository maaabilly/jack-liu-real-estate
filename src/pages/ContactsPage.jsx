import { MdLocationOn, MdMail, MdPhone } from 'react-icons/md';
import { AiFillWechat } from 'react-icons/ai';
import Footer from '../components/Footer';
import { contacts } from '../assets';
import PageHeading from '../components/PageHeading';

const ContactsPage = () => {
  return (
    <>
      <section id="contacts" className="w-full">
        <PageHeading title="Get In Touch" imgSrc={contacts} />
        <div className="max-w-[800px] px-10 my-20 mx-auto">
          <div className="flex flex-col sm:grid sm:grid-rows-2 gap-20 justify-center ml-4 sm:ml-0">
            <div className="flex flex-col sm:grid sm:grid-cols-2 gap-20">
              <div className="flex flex-col">
                <MdLocationOn size={40} className="text-[#2da2e1]" />
                <h3 className="text-3xl font-bold">Address</h3>
                <p className="text-[1.5rem] md:text-[1.4rem]">
                  1375 Locust St, Suite 201
                  <br />
                  Walnut Creek, CA 94596
                </p>
              </div>
              <div className="flex flex-col">
                <MdPhone size={40} className="text-[#886cc4]" />
                <h3 className="text-3xl font-bold">Phone Number</h3>
                <p className="text-[1.5rem] md:text-[1.4rem]">(415) 517-6805</p>
              </div>
            </div>
            <div className="flex flex-col sm:grid sm:grid-cols-2 gap-20">
              <div className="flex flex-col">
                <MdMail size={40} className="text-[#ff2e00]" />
                <h3 className="text-3xl font-bold">Email</h3>
                <p className="text-[1.5rem] md:text-[1.4rem]">
                  jackliurealestate@gmail.com
                </p>
              </div>
              <div className="flex flex-col">
                <AiFillWechat size={40} className="text-[#09B83E]" />
                <h3 className="text-3xl font-bold">WeChat</h3>
                <p className="text-[1.5rem] md:text-[1.4rem]">_JACKLIU_</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactsPage;
