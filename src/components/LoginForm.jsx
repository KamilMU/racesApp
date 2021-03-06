import { Formik, Form } from "formik";
import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import * as yup from "yup";
import { auth } from "../auth/auth.js";
import FormElement from "./FormElement.jsx";
import './LoginForm.scss';

const loginSchema = yup.object().shape({
  email: yup
  .string()
  .email("Must be a valid email adress")
  .required("No email provided."),
  password: yup
    .string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters.")
});

function LoginForm({ history }) {
  const [formValues] = useState({
    email: "",
    password: ""
  });

  return (
    <Formik
      initialValues={{
        email: formValues.email,
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
            value={values.email}
            handleChange={handleChange}
            fieldName="email"
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
