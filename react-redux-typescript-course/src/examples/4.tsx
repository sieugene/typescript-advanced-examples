import React, { FC, FocusEvent, MouseEvent, ReactElement } from "react";

export type PropTypes = {
  onClick: (e: MouseEvent) => void;
};

export const Component4: FC<PropTypes> = ({
  onClick,
}: PropTypes): ReactElement => {
  const onFocus = (e: FocusEvent) => {
    console.log(e.currentTarget.id);
  };
  return (
    <button
      onKeyDown={(e): void => {
        console.log(e);
      }}
      onClick={onClick}
      type="button"
      onFocus={onFocus}
    >
      Click me
    </button>
  );
};
