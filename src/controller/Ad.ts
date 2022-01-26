import * as typeorm from "typeorm";
import * as express from "express";
import { Visit } from "../entity/Visit";
import { Page } from "../entity/Page";

export function AdController(db_manager: typeorm.EntityManager) {
  let router = express.Router();

  router.get("/", async (req, res) => {
    let ip = req.ip;

    let visit: Visit;

    try {
      let res = await db_manager
        .getRepository(Visit)
        .createQueryBuilder("visit")
        .where("visit.ip = :ip", { ip })
        .addOrderBy("visit.on", "DESC")
        .leftJoinAndSelect("visit.page", "page")
        .getOne();
      if (res) visit = res;
      else throw "no visit found";
    } catch (err) {
      res.status(404).send(err);
      return;
    }
    res.send(visit);
  });
  return router;
}
