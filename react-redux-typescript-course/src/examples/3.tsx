import React, { FC, HTMLAttributes, ReactElement, ReactNode } from "react";

export type PropTypes = {
  title?: string;
  children: ReactNode;
  extends: HTMLAttributes<HTMLDivElement>;
};

export const Component3: FC<PropTypes> = ({
  children,
  title,
  ...other
}: PropTypes): ReactElement => {
  return (
    <div {...other}>
      {title}
      {children}
    </div>
  );
};

const p = <Component3 extends={{ className: "some" }}>1</Component3>;
