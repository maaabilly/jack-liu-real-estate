import Footer from '../components/Footer';
import { calculation } from '../assets';
import PageHeading from '../components/PageHeading';
const ToolsPage = () => {
  return (
    <>
      <section id="tools" className="w-full h-[700px]">
        <PageHeading title="Tools" imgSrc={calculation} />
        <div className="max-w-[1000px] px-10 my-20 mx-auto">
          <div className="flex justify-between text-4xl">
            <h1>Mortgage Calculator</h1>
            <h1>Home Valuation</h1>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ToolsPage;
