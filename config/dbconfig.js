let sqlite3 = require('sqlite3');

/**
 *  DB configuration
 */


let db = new sqlite3.Database('./db/users.db');

let  init = function() {
    db.run("CREATE TABLE if not exists users (" +
        "id INTEGER PRIMARY KEY AUTOINCREMENT," +
        " username TEXT," +
        " password TEXT" +
        ")");
};

module.exports = {
    init: init,
    db: db
};