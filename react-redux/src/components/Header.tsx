import React, { FC, useState } from "react";

type PropsType = {
  title?: string;
  children?: never;
};

export const Header: FC<PropsType> = ({ title }: PropsType) => {
  const [counter, setCounter] = useState<number>(0);
  const content = typeof title === "string" ? title.toLowerCase() : null;
  const increase = (): void => {
    setCounter((prev) => prev + 1);
  };
  const decrease = (): void => {
    setCounter((prev) => prev - 1);
  };
  return (
    <>
      {counter}
      <div>
        <h1>header</h1>
        {content}
      </div>
    </>
  );
};

Header.defaultProps = {
  title: "",
  children: undefined,
};
