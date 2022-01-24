import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entity/User";
import { Visit } from "./entity/Visit";
import { Page } from "./entity/Page";

createConnection()
  .then(async (connection) => {
    let page = new Page();
    page.title = "2 Téléchargez de la RAM!";
    page.description =
      "Téléchargez de la ram en toute discretion grace à notre méthode reconnue par le gouvernement du Venezuela !";
    page.img =
      "https://mppre.gob.ve/wp-content/uploads/2021/02/ESEQUIBO-LAUDO-ARBITRAL-VENEZUELA.jpg";
    page.url = "https://public.ecole-89.com/~cameron/";

    page = await connection.manager.save(page);

    let visit = new Visit();
    visit.page = page;
    visit.ip = "192.168.2.45";

    visit = await connection.manager.save(visit);

    visit = new Visit();
    visit.page = page;
    visit.ip = "172.17.250.1";

    visit = await connection.manager.save(visit);

    let res = await connection.manager.findOne(Page, page.id, { relations: ["visits"] });
    console.log(res);

    let res2 = await connection.manager.findOne(Visit, visit.id, { relations: ["page"] });
    console.log(res2);
    // console.log("Inserting a new user into the database...");
    // const user = new User();
    // user.firstName = "Timber";
    // user.lastName = "Saw";
    // user.age = 25;
    // await connection.manager.save(user);
    // console.log("Saved a new user with id: " + user.id);

    // console.log("Loading users from the database...");
    // const users = await connection.manager.find(User);
    // console.log("Loaded users: ", users);

    // console.log("Here you can setup and run express/koa/any other framework.");
    process.exit(0);
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });

import { Webserver } from "./webserver";
let webserv = new Webserver();
let hello: string = "hello world";
webserv.start(3000);
console.log(hello);
