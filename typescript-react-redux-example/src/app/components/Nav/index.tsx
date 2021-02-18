// Core
import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import PropTypes from "prop-types";

// Instruments
import Styles from "./styles.module.css";
import { book } from "../../routes/book";
import { HistoryType } from "../../init/middleware";

type Props = HistoryType;

export const Nav: FC<Props> = (props) => {
  const dispatch = useDispatch();

  const navigateToRoot = () => dispatch(push(book.root));
  const navigateToPanel = () => dispatch(push(book.panel));
  const navigateToProfile = () => dispatch(push(book.profile));

  const {
    // eslint-disable-next-line
    location: { pathname },
  } = props;

  return (
    <section className={Styles.nav}>
      {pathname === book.root ? null : (
        <>
          <button onClick={navigateToProfile} type="button">
            Профиль
          </button>
          <button onClick={navigateToPanel} type="button">
            Панель
          </button>
          <button
            className={Styles.bridge}
            onClick={navigateToRoot}
            type="button"
          >
            Мостик
          </button>
        </>
      )}
    </section>
  );
};

// Nav.propTypes = {
//   location: PropTypes.string,
// };
