import { Formik, Form } from "formik";
import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import * as yup from "yup";
import { auth } from "../auth/auth.js";
import FormElement from "./FormElement.jsx";

const loginSchema = yup.object().shape({
  name: yup.string().required(),
  password: yup
    .string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters.")
});

function LoginForm({ history }) {
  const [formValues] = useState({
    name: "",
    password: ""
  });

  return (
    <Formik
      initialValues={{
        name: formValues.name,
        secondName: formValues.secondName,
        password: formValues.password
      }}
      validationSchema={loginSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          auth.logIn();
          history.push("/races");
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ values, handleChange, errors, isSubmitting }) => (
        <Form className="login-form">
          <p>Simple Flight Check</p>
          <FormElement
            labelName="Логин: "
            type="text"
            value={values.name}
            handleChange={handleChange}
            fieldName="name"
            errors={errors}
          />
          <FormElement
            labelName="Пароль: "
            type="password"
            value={values.password}
            handleChange={handleChange}
            fieldName="password"
            errors={errors}
          />
          <button type="submit" disabled={isSubmitting}>
            Войти
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default withRouter(LoginForm);
