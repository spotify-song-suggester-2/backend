const db = require('../database/seeds/002_songstable')
module.exports ={
    findById
}

function findById(id){
    return db.select('songs').where ({id});
}