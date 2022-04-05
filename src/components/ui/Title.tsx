import working from "../../assets/img/illustration-working.svg";

export const Title = () => {
  return (
    <article className="container mx-auto grid grid-row-2 md:grid-cols-2 overflow-visible">
      <article className="row-start-2 md:row-start-auto">
        <div className="flex flex-col justify-center h-full items-center text-center md:text-left md:items-start md:w-3/4">
          <h2 className="font-extrabold text-5xl lg:text-7xl">
            More than just shorter links
          </h2>
          <p className="mt-4">
            Build your brand's recognition and get detailed insights on how yur
            links are performing.
          </p>
          <button className="py-2 px-4 btn btn-primary mt-8 rounded-full w-fit">
            Get Started
          </button>
        </div>
      </article>

      <div className="text-right row-start-1 md:row-start-auto">
        <img src={`${working}`} alt="working" className="max-w-none w-[140%]" />
      </div>
    </article>
  );
};
