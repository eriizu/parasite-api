import nano from "nano";

let server = nano("http://exploit:oriflamme@127.0.0.1:5984");

interface Pew {
  name: string;
}

let tata: nano.View<Pew> = {
  map: function (doc) {
    emit(doc._id, doc._rev);
  }.toString(),
};

export const create_test_db = async () => {
  try {
    // await server.db.create("test", {});
    let db = server.db.use<Pew>("test");
    await db.insert({ name: "toto" }, { new_edits: false });
    await db.insert({ name: "tata" });
  } catch (err) {
    console.log(err);
  }
};
