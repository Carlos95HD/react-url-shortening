import brandRecognition from "../../assets/img/icon-brand-recognition.svg";
import detailedRecord from "../../assets/img/icon-detailed-records.svg";
import fullyCustomisable from "../../assets/img/icon-fully-customizable.svg";

export const Statistics = () => {
  return (
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

      <div className="flex mb-10">
        <section className="bg-white p-9 relative">
          <div className="rounded-full bg-secondary w-fit h-auto p-5 relative bottom-20">
            <img
              src={brandRecognition}
              alt="brandRecognition"
              className="w-12"
            />
          </div>
          <h3>Brand Recognition</h3>
          <p>
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </section>

        <div className="bg-cyan w-16 h-2 relative top-28"></div>
        <section className="bg-white p-9">
          <div>
            <div className="rounded-full bg-secondary w-fit h-auto p-5 relative bottom-20">
              <img src={detailedRecord} alt="detailedRecord" className="w-12" />
            </div>
            <h3>Detailed Records</h3>
            <p>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
        </section>
        <div className="bg-cyan w-16 h-2 relative top-28"></div>

        <section className="bg-white p-9 relative">
          <div className="rounded-full bg-secondary w-fit h-auto p-5 relative bottom-20">
            <img
              src={fullyCustomisable}
              alt="fullyCustomisable"
              className="w-12"
            />
          </div>
          <h3>Fully Customizable</h3>
          <p>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </section>
      </div>
    </article>
  );
};
