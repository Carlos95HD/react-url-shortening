import brandRecognition from "../../assets/img/icon-brand-recognition.svg";
import detailedRecord from "../../assets/img/icon-detailed-records.svg";
import fullyCustomisable from "../../assets/img/icon-fully-customizable.svg";

export const Statistics = () => {
  return (
    <>
      <article className="container flex flex-col mx-auto">
        <div className="my-10">
          <h2 className="font-semibold text-center text-4xl">
            Advanced Statistics
          </h2>
          <p className="text-center mt-4">
            Track how your links are performing across the web with <br />
            our advanced statistics dashboard.
          </p>
        </div>

        <div className="flex my-24">
          <section className="bg-white p-9 relative rounded-md bottom-12">
            <div className="rounded-full bg-secondary w-fit h-auto p-5 relative bottom-20 -mb-12">
              <img
                src={brandRecognition}
                alt="brandRecognition"
                className="w-12"
              />
            </div>
            <h3 className="font-bold text-xl mb-4">Brand Recognition</h3>
            <p>
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </section>

          <div className="bg-cyan w-16 h-2 relative top-28"></div>
          <section className="bg-white p-9 rounded-md">
            <div className="rounded-full bg-secondary w-fit h-auto p-5 relative bottom-20 -mb-12">
              <img src={detailedRecord} alt="detailedRecord" className="w-12" />
            </div>
            <h3 className="font-bold text-xl mb-4">Detailed Records</h3>
            <p>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </section>
          <div className="bg-cyan w-16 h-2 relative top-28"></div>

          <section className="bg-white p-9 relative rounded-md top-12">
            <div className="rounded-full bg-secondary w-fit h-auto p-5 relative bottom-20 -mb-12">
              <img
                src={fullyCustomisable}
                alt="fullyCustomisable"
                className="w-12"
              />
            </div>
            <h3 className="font-bold text-xl mb-4">Fully Customizable</h3>
            <p>
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
