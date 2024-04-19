const PageHeading = ({ title, imgSrc }) => {
  return (
    <>
      <div className="absolute bg-black/60 h-[180px] md:h-[250px] w-full">
        <div className="max-w-[1240px] mx-auto h-full flex justify-center items-end">
          <h1 className="text-gray-50 text-[3rem] md:text-6xl tracking-wider mb-12 uppercase">
            {title}
          </h1>
        </div>
      </div>
      <img
        src={imgSrc}
        alt="contacts image"
        width={550}
        className="w-full h-[180px] md:h-[250px] object-cover bg-bottom bg-no-repeat"
      />
    </>
  );
};

export default PageHeading;
