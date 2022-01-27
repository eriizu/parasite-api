import * as typeorm from "typeorm";
import * as express from "express";
import { Visit } from "../entity/Visit";
import { Page } from "../entity/Page";

export function VisitController(db_manager: typeorm.EntityManager) {
  let router = express.Router({});

  router.post("/", async (req, res) => {
    let { page } = req.body as Visit;
    let visit = new Visit();
    visit.on = new Date();
    visit.page = page;
    visit.ip = req.ip;

    // let body: Visit = req.body;
    if (visit.page === undefined) {
      res.status(400).send("missing page for visit");
    } else {
      try {
        visit.page = await db_manager.save(Page, visit.page as Page);
        await db_manager.save(Visit, visit);
        res.sendStatus(201);
      } catch (err) {
        console.error(err);
        res.status(400).send(err);
      }
    }
  });
  return router;
}

// export class VisitController {
//   constructor(db_manager: typeorm.EntityManager) {
//     // db_manager
//   }

//   router() {

//   }
// }
