import express from "express";
import cors from "cors";
import * as http from "http";

export class Webserver {
  app: express.Application;
  server?: http.Server;
  constructor() {
    this.app = express();

    this.app.use(cors());

    this.app.get("/", (req, res) => {
      res.send("hello!");
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
