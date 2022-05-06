import { useState } from "react";
import { linkData } from "../../interfaces/interfaces";

interface props {
  linksObj: linkData;
}

// export const Links = ({ linksObj }: props): JSX.Element => {
export const Links = ({ linksObj }: props): JSX.Element => {
  const { fullShortLink, originalLink } = linksObj;
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const handleClick = () => {
    window.open(fullShortLink);
  };

  const handleCopy = () => {
    setIsCopied(true);
    navigator.clipboard.writeText(fullShortLink);
    setTimeout(() => {
      setIsCopied(false);
    }, 5000);
  };

  return (
    <article className="bg-white flex flex-col mx-4 rounded-md mt-4 md:mx-0 md:justify-between md:flex-row md:items-center">
      <p className="m-4 text-lg text-dark-violet overflow-hidden whitespace-nowrap text-ellipsis md:w-2/3">
        {originalLink}
      </p>

      <div className="border-b"></div>

      <div className="flex flex-col items-start m-4 md:items-center md:flex-row">
        <button className="link-primary text-lg mb-4 mr-4 md:mb-0" onClick={handleClick}>
          {fullShortLink}
        </button>

        {!isCopied ? (
          <button
            className="btn btn-primary py-2 rounded-md min-w-full md:min-w-[7rem]"
            onClick={handleCopy}
          >
            Copy
          </button>
        ) : (
          <button
            disabled
            className="btn text-white bg-secondary py-2 rounded-md min-w-full md:min-w-[7rem]"
          >
            Copied!
          </button>
        )}
      </div>
    </article>
  );
};
