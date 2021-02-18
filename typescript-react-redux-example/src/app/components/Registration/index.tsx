// Core
import React, { FC } from "react";

// Components
import { RegistrationForm } from "../RegistrationForm";

export const Registration: FC = () => {
  const handleSubmit = (values: any) => {
    window.alert(JSON.stringify(values, null, 4));
  };

  const getInitialValues = () => {
    return {
      preference: "spaces",
      newsletter: true,
    };
  };

  return (
    <RegistrationForm
      onSubmit={handleSubmit}
      initialValues={getInitialValues()}
    />
  );
};
