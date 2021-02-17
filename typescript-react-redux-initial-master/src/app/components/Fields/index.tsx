import React, { FC, HTMLAttributes } from "react";
import cx from "classnames";
import {
  Field,
  FieldArrayFieldsProps,
  WrappedFieldMetaProps,
  WrappedFieldProps,
} from "redux-form";

const getValidityClassName = (
  meta: WrappedFieldMetaProps
): string | undefined => {
  if (meta.asyncValidating) {
    return "async-validating";
  }

  if (meta.active) {
    return "";
  }

  if (meta.touched && meta.invalid) {
    return "invalid";
  }

  if (meta.touched && meta.valid) {
    return "valid";
  }
  return undefined;
};

type CustomInputProps = WrappedFieldProps & {
  type: string;
  label: string;
  meta: WrappedFieldMetaProps;
};

export const customInput: FC<CustomInputProps> = (props) => {
  const { label, input, type, meta } = props;

  return (
    <div
      className={cx(
        "custom-input-container",
        { "flex-row-reverse": type === "checkbox" },
        { dirty: meta.dirty },
        getValidityClassName(meta)
      )}
    >
      <label>{label}</label>
      <input {...input} type={type} />
      {meta.error && meta.touched && !meta.active && (
        <div className="feedback-text error-text">{meta.error}</div>
      )}
    </div>
  );
};

type CustomSelectProps = {
  label: string;
  input: HTMLAttributes<HTMLSelectElement>;
};
export const customSelect: FC<CustomSelectProps> = (props) => {
  return (
    <div className="custom-select-container">
      <label>{props.label}</label>
      <select {...props.input}>
        <option value="tabs">Tabs</option>
        <option value="spaces">Spaces</option>
      </select>
    </div>
  );
};

type DiscountPropsType = {
  fields: FieldArrayFieldsProps<string>;
};
export const discounts: FC<DiscountPropsType> = ({ fields }) => (
  <div className="custom-field-array-container">
    {fields.map((code, index) => (
      <div key={index.toString()} className="field-array-item">
        <Field
          name={code}
          type="text"
          component={customInput}
          label={`Discount Code #${index + 1}`}
          autoFocus
        />
        <button type="button" onClick={() => fields.remove(index)}>
          &times;
        </button>
      </div>
    ))}
    <button
      type="button"
      onClick={() => {
        console.log(Array.isArray(fields));
        fields.push("");
        // console.log(fields);
      }}
    >
      Add 
      {' '}
      {!fields.length ? "Discount Code(s)" : "Another"}
    </button>
  </div>
);
