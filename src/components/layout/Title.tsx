import working from "../../assets/img/illustration-working.svg";

export const Title = () => {
  return (
    <article className="bg-white container grid grid-row-2 mx-auto mt-24 md:grid-cols-2 overflow-visible">
      <article className="row-start-2 md:row-start-auto">
        <div className="flex flex-col justify-center h-full items-center text-center md:text-left md:items-start">
          <h2 className="font-extrabold text-4xl lg:text-7xl">
            More than just shorter links
          </h2>
          <p className="mt-4 mx-4 text-lg md:mx-0 md:w-3/4">
            Build your brand's recognition and get detailed insights on how yur
            links are performing.
          </p>
          <button className="py-2 px-6 btn btn-primary mt-8 font-semibold rounded-full w-fit">
            Get Started
          </button>
        </div>
      </article>

      <div className="text-right row-start-1 md:row-start-auto">
        <img src={`${working}`} alt="working" className="max-w-none ml-6 mb-6 w-[133%] md:m-0 md:w-[140%]" />
      </div>
    </article>
  );
};
