let hello: string = "hello world";

console.log(hello);

import { Webserver } from "./webserver";

let webserv = new Webserver();

webserv.start(3000);

import { create_test_db } from "./database";

create_test_db();
