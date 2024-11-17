import { Formik, Field, Form } from "formik";

const LoginForm = () => {
  return (
    <div>
      <Formik
        initialValues={{ name: "", email: "" }}
        onSubmit={(values) => {
          alert(JSON.stringify(values));
        }}
      >
        <Form>
          <Field name="name" type="text" />
          <Field name="email" type="email" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
