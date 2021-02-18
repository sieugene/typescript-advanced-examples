// Core
import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";

// Instruments
import Styles from "./styles.module.css";
import { feedActions } from "../../bus/feed/actions";
import { StarshipTile } from "../StarshipTile";
import { AppState } from "../../init/rootReducer";

export const Panel: FC = () => {
  const dispatch = useDispatch();
  const starships = useSelector((state: AppState) => state.feed.starships);
  const isFetching = useSelector((state: AppState) => state.feed.isFetching);

  const fetchPostsAsync = () => {
    return dispatch(feedActions.fetchStarshipsAsync());
  };

  const starshipsJSX = starships.map((starship) => {
    return <StarshipTile key={starship.name} {...starship} />;
  });

  const buttonMessage = isFetching ? "⏳ Вызываю..." : "📲 Вызвать корабли";

  return (
    <section className={Styles.panel}>
      <h1>🖥</h1>
      <button disabled={isFetching} onClick={fetchPostsAsync} type="button">
        {buttonMessage}
      </button>
      <ul>{starshipsJSX}</ul>
    </section>
  );
};
