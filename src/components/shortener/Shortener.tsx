import { Field, Form, Formik, FormikErrors } from "formik";
import { useLinks } from "../../hooks/useLinks";
import { getLinkData } from "../../utils/helpers/shortener.helpers";
import { Links } from "./Links";

export interface FormValues {
  shortener: string;
}

export const Shortener = () => {

  const { addLink } = useLinks();

  const handleSubmit = async ({ shortener }: { shortener: string }) => {
    const linkObj = await getLinkData(shortener)
    linkObj.code !== '' ? addLink( linkObj ) : console.error("No Result")
  };

  return (
    <div className="container mx-auto relative bottom-20">
      <Formik
        initialValues={{ shortener: "" }}
        onSubmit={handleSubmit}
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
          </Form>
        )}
      </Formik>

      {/* Result */}
      <article className="flex flex-col">
        <Links />
      </article>
    </div>
  );
};
