import React, { FC } from "react";
import { Title } from "../../elements/Title";
import { useStarshipsFetch } from "../hooks/useStarshipsFetch";
import { Starship } from "./types";

export const Starships: FC = () => {
  const { isFetching, data, error } = useStarshipsFetch();
  const errorMessageJSX = typeof error === "object" && error.status === 404 && (
    <p>Not found!</p>
  );
  const loaderJSX = isFetching && <p>loading data from Api...</p>;
  const listJSX =
    isFetching ||
    data.results.map(({ name }: Starship, index: number) => (
      <li key={Number(index)}>{name}</li>
    ));

  return (
    <div>
      <Title>Starships</Title>
      {errorMessageJSX}
      {loaderJSX}
      {listJSX}
    </div>
  );
};
