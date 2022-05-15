import brandRecognition from "../../assets/img/icon-brand-recognition.svg";
import detailedRecord from "../../assets/img/icon-detailed-records.svg";
import fullyCustomisable from "../../assets/img/icon-fully-customizable.svg";

export const Statistics = () => {
  return (
    <>
      <article className="container flex flex-col mx-auto">
        <div className="my-10 mx-2 md:mx-0">
          <h2 className="font-semibold text-center text-3xl md:text-4xl">
            Advanced Statistics
          </h2>
          <p className="text-base font-medium text-center mt-4 md:text-xl md:mx-auto md:w-1/2">
            Track how your links are performing across the web with
            our advanced statistics dashboard.
          </p>
        </div>

        <div className="flex flex-col my-24 mx-4 text-center md:flex-row md:mx-0 md:text-left">
          <section className="bg-white p-6 lg:p-9 relative rounded-md md:bottom-12">
            <div className="bg-secondary bottom-20 h-auto rounded-full p-5 relative mx-auto -mb-12 w-fit">
              <img
                src={brandRecognition}
                alt="brandRecognition"
                className="w-12"
              />
            </div>
            <h3 className="font-bold text-2xl mb-4">Brand Recognition</h3>
            <p className="font-medium">
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </section>

          <div className="bg-cyan w-2 h-16 md:relative mx-auto md:top-28 md:w-16 md:h-2"></div>
          <section className="bg-white p-6 lg:p-9 mt-10 rounded-md md:mt-0">
            <div className="bg-secondary bottom-20 h-auto rounded-full p-5 relative mx-auto -mb-12 w-fit">
              <img src={detailedRecord} alt="detailedRecord" className="w-12" />
            </div>
            <h3 className="font-bold text-2xl mb-4">Detailed Records</h3>
            <p className="font-medium">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </section>
          <div className="bg-cyan w-2 h-16 relative mx-auto md:top-28 md:w-16 md:h-2"></div>

          <section className="bg-white p-6 lg:p-9 mt-10 rounded-md md:mt-0 md:top-12 md:relative">
            <div className="bg-secondary bottom-20 h-auto rounded-full p-5 relative mx-auto -mb-12 w-fit">
              <img
                src={fullyCustomisable}
                alt="fullyCustomisable"
                className="w-12"
              />
            </div>
            <h3 className="font-bold text-2xl mb-4">Fully Customizable</h3>
            <p className="font-medium">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </section>
        </div>
      </article>

      <article className="boost-bg flex flex-col place-items-center mt-16 py-12">
        <h2 className="font-semibold text-4xl text-white">
          Boost your links today
        </h2>
        <button className="py-2 px-4 btn btn-primary mt-8 rounded-full w-fit">
          Get Started
        </button>
      </article>
    </>
  );
};
