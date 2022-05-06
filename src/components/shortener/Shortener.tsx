import { Field, Form, Formik, FormikErrors, FormikHelpers } from "formik";
import { useState } from "react";
import { useLinks } from "../../hooks/useLinks";
import {
  getLinkData,
  verifyDuplicated,
} from "../../utils/helpers/shortener.helpers";
import { Spinner } from "../layout/Spinner/Spinner";
import { Links } from "./Links";

export interface FormValues {
  shortener: string;
}

export const Shortener = () => {
  const { addLink, links } = useLinks();
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    setLoading(true);

    actions.resetForm();
    const linkObj = await getLinkData(values.shortener);
    const verificated = linkObj.error ? true : verifyDuplicated(linkObj, links);

    //Duplicated is True addLink to Array
    !verificated && addLink(linkObj);
    setLoading(false);
  };

  return (
    <div className="container mx-auto relative bottom-20">
      <Formik
        initialValues={{ shortener: "" }}
        onSubmit={(values, actions) => handleSubmit(values, actions)}
        validate={(values) => {
          const errors: FormikErrors<FormValues> = {};

          if (!values.shortener) {
            errors.shortener = "Please add a link";
            return errors;
          }
        }}
      >
        {({ errors }) => (
          <Form
            autoComplete="off"
            className="mx-4 shorten-bg rounded-md p-8 md:p-14 md:mx-0"
          >
            <div className="flex flex-col md:flex-row flex-grow md:flex-wrap md:justify-between xl:justify-between">
              <Field
                className={`p-2 pl-4 border-2 rounded-md w-full mr-6 focus:outline-none focus:ring-1 font-normal md:mr-0 md:p-4 md:w-3/4 lg:w-[80%] xl:w-[84%] 2xl:w-[88%]
                  ${
                    errors.shortener
                      ? "border-red-500 placeholder:text-red-200"
                      : "border-white"
                  }`}
                name="shortener"
                type="text"
                placeholder="Shorten a link here..."
              />
              <button
                className="btn btn-primary mt-4 py-2 px-6 rounded-md font-semibold order-last md:mt-0 md:-order-none w-auto"
                type="submit"
              >
                Shorten It!
              </button>

              {errors.shortener && (
                <div className="flex justify-between h-4 w-full">
                  <div className="error w-fit italic my-1 md:ml-1 md:mt-2">
                    {errors.shortener}
                  </div>
                </div>
              )}
              {loading && (
                <div className="flex justify-between h-4 w-full">
                  <span className="flex justify-end sm:justify-center mt-2">
                    <Spinner />
                  </span>
                </div>
              )}
            </div>
          </Form>
        )}
      </Formik>

      {/* Result */}
      <article className="flex flex-col">
        {links.length > 0 &&
          links.map((linksData) => (
            <Links key={linksData.code} linksObj={linksData} />
          ))}
      </article>
    </div>
  );
};
