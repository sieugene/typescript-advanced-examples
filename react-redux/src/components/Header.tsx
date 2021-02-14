import React, { FC } from "react";

type PropsType = {
  title?: string;
  children?: never;
};

export const Header: FC<PropsType> = ({ title }: PropsType) => {
  const content = typeof title === "string" ? title.toLowerCase() : null;
  return (
    <div>
      <h1>header</h1>
      {content}
    </div>
  );
};

Header.defaultProps = {
  title: "",
  children: undefined,
};
