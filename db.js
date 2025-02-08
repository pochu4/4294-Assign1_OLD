const mysql = require("mysql2");

const db = mysql.createConnection({
    host:"localhost",
    user: "book_app_user",
    password: "!k+Y2J",
    database: "book_app"
})

db.connect( (error) => {

    if (error) {
        console.log ("Error Connecting" + error.stack)
        return;
    }

    console.log("Connected with db id:" + db.threadId)

});

module.exports = db;