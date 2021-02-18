import React from "react";

const styles = {
  primary: {
    color: "blue",
  },
  danger: {
    color: "red",
  },
};

type StylesType = typeof styles;
type ButtonType = keyof StylesType;

interface PropsType {
  type: ButtonType;
}

export function Button({ type }: PropsType) {
  return (
    <button style={styles[type]} type="button">
      click
    </button>
  );
}

const b = <Button type="danger" />;
