export const Links = () => {
  return (
    <article className="bg-white flex justify-between items-center p-5 rounded-md mt-4">
      <p className="text-lg text-dark-violet">https://www.frontendmentor.io</p>

      <div>
        <a href="/" className="link-primary text-lg mr-4">
          https://rel.ink/k4lkyk
        </a>
        <button className="btn btn-primary py-2 rounded-md min-w-[7rem]">
          Copy
        </button>
        {/* <button
        disabled
        className="btn text-white bg-secondary py-2 rounded-md min-w-[7rem]"
      >
        Copied!
      </button> */}
      </div>
    </article>
  );
};
