import React, { FC } from "react";
import { Provider } from "react-redux";
import { Starships } from "./bus/starships";
import { Header } from "./elements/Header";

import { store } from "./init/store";

export const App: FC = () => {
  return (
    <Provider store={store}>
      <div>
        <Header title="some" />
        <Starships />
      </div>
    </Provider>
  );
};
