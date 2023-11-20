/*
This is only for created the database and the tables. import db.js for the connection to the database.
*/

var sqlite = require('sqlite3')

new sqlite.Database('./pets.db', sqlite.OPEN_READWRITE , (err)=>{
    if(err && err.code=="SQLITE_CANTOPEN"){
        create_database()
        return
    }else if(err){
        console.log(err)
        exit(1)
    }
    console.log("Database and tables created")
})

function create_database(){
    var newdb = new sqlite.Database('pets.db', (err)=>{
        if(err){
            console.log(err)
            exit(1)
        }
        create_tables(newdb)
    })
}

/*
    id must be INTEGER, if it is INT auto_increment will not work
    auto_increment is not needed, SQLite will auto set auto_increment for primary keys
*/
function create_tables(db){
    db.exec(`
        create table pets(
            id INTEGER PRIMARY KEY NOT NULL,
            name text not null
        )
    `,(err)=>{
        if(err) console.log(err)
    })
}

