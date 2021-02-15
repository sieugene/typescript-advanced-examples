import React, { ReactElement, ReactNode } from "react";

export interface IProps {
  title?: string;
  children: ReactNode;
}
export function Component1({ children, title }: IProps): ReactElement {
  return (
    <div>
      {title}
      :
      {children}
    </div>
  );
}
