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
        CREATE TABLE pets(
            id INTEGER PRIMARY KEY NOT NULL,
            species TEXT NOT NULL,
            common_name TEXT NOT NULL,
            group_behaviour TEXT DEFAULT "" NOT NULL,
            diet TEXT DEFAULT "" NOT NULL,
            lifestyle TEXT DEFAULT "" NOT NULL,
            skin_type TEXT NOT NULL,
            lifespan TEXT NOT NULL,
            weight TEXT NOT NULL,
            height TEXT NOT NULL,
            len TEXT DEFAULT "" NOT NULL,
            habitat TEXT NOT NULL
        )
    `,(err)=>{
        if(err) console.log(err)
    })
}

