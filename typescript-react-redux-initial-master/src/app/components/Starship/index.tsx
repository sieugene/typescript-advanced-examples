// Core
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { createMatchSelector } from "connected-react-router";
import { book, BookType } from "../../routes/book";

// Instruments
import Styles from "./styles.module.css";
import { AppState } from "../../init/rootReducer";
import { Starship as StarshipType } from "../../bus/feed/types";

export const Starship = () => {
  const starships = useSelector((state: AppState) => state.feed.starships);
  const matchSelector = createMatchSelector<AppState, BookType>(book.starship);
  const State = useSelector((state: AppState) => state);
  const match = matchSelector(State);

  if (!match) {
    return false;
  }

  const starshipName = match.params.starship;

  if (!starships.length) {
    return false;
  }

  const starship = starships.find((starshipItem: StarshipType) => {
    return starshipItem.name.replace(/ /g, "-").toLowerCase() === starshipName;
  });

  if (!starship) {
    return false;
  }
  // eslint-disable-next-line
  const { name, starship_class, manufacturer, crew } = starship;

  return (
    <section className={Styles.starship}>
      <h1>Starship</h1>
      <div className={Styles.description}>
        <div>
          <span>Имя:</span>
          <span>
            &nbsp;
            {name}
          </span>
        </div>
        <div>
          <span>Класс:</span>
          <span>
            &nbsp;
            {
              // eslint-disable-next-line
              starship_class
            }
          </span>
        </div>
        <div>
          <span>Производитель:</span>
          <span>
            &nbsp;
            {manufacturer}
          </span>
        </div>
        <div>
          <span>Команда:</span>
          <span>
            &nbsp;
            {crew}
          </span>
        </div>
      </div>
    </section>
  );
};
