import Footer from '../components/Footer';
import { calculation } from '../assets';
import PageHeading from '../components/PageHeading';
const ToolsPage = () => {
  return (
    <>
      <section id="tools" className="w-full min-h-[calc(100dvh-330px)]">
        <PageHeading title="Tools" imgSrc={calculation} />
        <div className="max-w-[1000px] px-10 my-20 mx-auto">
          <div className="flex justify-between text-4xl">
            <h1>Mortgage Calculator</h1>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ToolsPage;
