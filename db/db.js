/* 
    I was just testing code here, we will export db to a different file and query there
*/

var sqlite = require('sqlite3')
var open = require('sqlite3') 

let db = new sqlite.Database('./pets.db', sqlite.OPEN_READWRITE, (err)=>{
    if(err)console.error(err)
    console.log("Connected to Database")
})


db.run(`INSERT INTO pets (name) VALUES("horse");`)

//welcome to callback hell
db.all(`
    SELECT * FROM pets
`, (err, rows)=>{
    console.log(rows)
})


/*
    Another fun way to access the db

    All statements in db.serialize() will await the previous statement to complete before running. If you do not use this
    like I did above then the queries will run in parallel. 
*/
// db.serialize(function(){
//     db.run(`INSERT INTO pets (id, name) VALUES(1, "cat");`)
// })


/* 
    Way to prepare statements, good to use for large queries but not necessary
*/
// const stmt = db.prepare('INSERT INTO pets(name) VALUES(name=?)')
// stmt.bind({id:1, name:"cat"})
// stmt.run()






