import { useState } from "react";
import { linkData } from "../../interfaces/interfaces";

interface props {
  linksObj: linkData;
}

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
    <article className="bg-white flex justify-between items-center p-5 rounded-md mt-4">
      <p className="text-lg text-dark-violet overflow-hidden whitespace-nowrap text-ellipsis w-2/3">
        {originalLink}
      </p>

      <div>
        <button className="link-primary text-lg mr-4" onClick={handleClick}>
          {fullShortLink}
        </button>

        {!isCopied ? (
          <button
            className="btn btn-primary py-2 rounded-md min-w-[7rem]"
            onClick={handleCopy}
          >
            Copy
          </button>
        ) : (
          <button
            disabled
            className="btn text-white bg-secondary py-2 rounded-md min-w-[7rem]"
          >
            Copied!
          </button>
        )}
      </div>
    </article>
  );
};
