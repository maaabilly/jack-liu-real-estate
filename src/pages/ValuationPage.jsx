import Footer from '../components/Footer';
import { house } from '../assets';
import PageHeading from '../components/PageHeading';
const ValuationPage = () => {
  return (
    <>
      <section id="valuation" className="w-full min-h-[calc(100dvh-330px)]">
        <PageHeading title="Home Valuation" imgSrc={house} />
        <div className="max-w-[1000px] px-10 my-20 mx-auto">
          <div className="flex justify-between text-4xl">
            <h1>Home Valuation Page Content</h1>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ValuationPage;
