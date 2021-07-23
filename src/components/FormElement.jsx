import React from 'react';
import { ErrorMessage, Field } from "formik";

export default function FormElement({
  labelName,
  type,
  value,
  fieldName,
  errors
}) {
  return (
    <div>
      <div className="label">
        <label htmlFor="">{labelName}</label>
      </div>
      <Field
        type={type}
        name={fieldName}
        value={value}
        className={Object.keys(errors).length !== 0 && !value ? 'error-input' : ''}
      />
      <ErrorMessage name={fieldName} component="div" className="error" />
    </div>
  );
}
