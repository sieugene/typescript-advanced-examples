import { RoutesOptionsType } from "./../types/routes";

export const routes = ({ app }: RoutesOptionsType) => {
  app.get("/api/user", (req, res) => {
    return res.send('Test');
  });
};
