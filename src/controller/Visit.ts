import * as typeorm from "typeorm";
import * as express from "express";
import { Visit } from "../entity/Visit";
import { Page } from "../entity/Page";

export function VisitController(db_manager: typeorm.EntityManager) {
  let router = express.Router({});

  router.post("/", async (req, res) => {
    let body: Visit = req.body;
    if (body.page === undefined) {
      res.status(400).send("missing page for visit");
    } else {
      try {
        body.page = await db_manager.save(Page, body.page as Page);
        await db_manager.save(Visit, body);
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
