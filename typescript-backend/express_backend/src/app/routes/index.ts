// Controllers
import { UserController } from "./../controllers/user.controller";

import { RoutesOptionsType } from "./../types/routes";

export const routes = ({ app }: RoutesOptionsType) => {
  app.post("/api/user", async (req, res) => {
    const user = await UserController.createUser({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
    });
    return res.send(user);
  });
};
