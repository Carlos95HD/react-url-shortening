import { Field, Form, Formik, FormikErrors, FormikHelpers } from "formik";
import { useState } from "react";
import { useLinks } from "../../hooks/useLinks";
import { getLinkData, verifyDuplicated } from "../../utils/helpers/shortener.helpers";
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
    const duplicated = verifyDuplicated(linkObj, links);

    //Duplicated is True addLink to Array
    !duplicated && addLink(linkObj);
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
          <Form autoComplete="off" className=" shorten-bg rounded-md p-14">
            <div className="flex flex-grow">
              <Field
                className="p-4 rounded-md w-full mr-6 focus:outline-none focus:ring-1 font-normal"
                name="shortener"
                type="text"
                placeholder="Shorten a link here..."
              />
              <button
                className="btn btn-primary py-2 px-6 rounded-md"
                type="submit"
              >
                Shorten It!
              </button>
            </div>
            <div className="absolute error italic mt-2 ml-1">
              {errors.shortener}
            </div>
            <span className="flex justify-center">
              {loading && <Spinner />}
            </span>
          </Form>
        )}
      </Formik>

      {/* Result */}
      <article className="flex flex-col">
        {/* <Links /> */}
        {links.length > 0 &&
          links.map((linksData) => (
            <Links key={linksData.code} linksObj={linksData} />
          ))}
      </article>
    </div>
  );
};
