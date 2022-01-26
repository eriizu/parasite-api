import express from "express";
import cors from "cors";
import * as http from "http";

export class Webserver {
  app: express.Application;
  server?: http.Server;
  constructor() {
    this.app = express();
    this.app.set("trust proxy", true);

    this.app.use(cors());
    this.app.use(express.json());

    this.app.get("/", (req, res) => {
      res.send("hello!");
    });

    this.app.put("/", (req, res) => {
      console.log(req.body);
      res.sendStatus(200);
    });
  }

  start(port: number) {
    this.server = this.app?.listen(port);
    // return new Promise<void>((resolve, reject) => {
    //   this.server = this.app.listen(port, () => {
    //     // if (this.server.)
    // resolve();
    //   });
    //   this.server.on("listening", () => resolve());
    // });
  }
}
