import * as express from "express";
import { Request, Response, Application } from "express";
import * as bodyParser from "body-parser";

const app: Application = express();
const port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome");
});

app.listen(port, () => {
  console.log("Server was started on", port, " port");
});
