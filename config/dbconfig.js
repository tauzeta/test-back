let sqlite3 = require('sqlite3');

/**
 *  Конфигурация БД
 */

/* Загружает БД */
let db = new sqlite3.Database('./db/users.db');

/* Инициализация таблицы, если не существует */
let  init = function() {
    db.run("CREATE TABLE if not exists users (" +
        "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE," +
        " username TEXT NOT NULL UNIQUE," +
        " password TEXT NOT NULL" +
        ")");
};

module.exports = {
    init: init,
    db: db
};