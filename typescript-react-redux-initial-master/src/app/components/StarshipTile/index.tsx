// Core
import React, { FC } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

// Instruments
import Styles from "./styles.module.css";
import { book } from "../../routes/book";
import { Starship } from "../../bus/feed/types";

type Props = Starship;

export const StarshipTile: FC<Props> = (props) => {
  const dispatch = useDispatch();

  const { name, starship_class, manufacturer, crew } = props;

  const navigateToStarship = () => {
    const url = `${book.panel}/${name.replace(/ /g, "-").toLowerCase()}`;
    dispatch(push(url));
  };

  return (
    <section
      className={Styles.starshipTile}
      onClick={navigateToStarship}
      aria-hidden="true"
    >
      <h1>Ω</h1>
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
            {starship_class}
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

StarshipTile.propTypes = {
  name: PropTypes.string.isRequired,
  starship_class: PropTypes.string.isRequired,
  manufacturer: PropTypes.string.isRequired,
  crew: PropTypes.string.isRequired,
};
