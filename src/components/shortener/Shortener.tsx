import { Links } from "./Links";

export const Shortener = () => {
  return (
    <div className="container mx-auto relative bottom-20">
      <div className=" shorten-bg rounded-md p-14">
        <div className="flex flex-grow">
          <input
            className="p-4 rounded-md w-full mr-6 focus:outline-none focus:ring-1 font-normal"
            type="text"
            placeholder="Shorten a link here..."
          />
          <button className="btn btn-primary py-2 px-6 rounded-md">
            Shorten It!
          </button>
        </div>
      </div>

      {/* Result */}
      <article className="flex flex-col">
        <Links />
      </article>
    </div>
  );
};
