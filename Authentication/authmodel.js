const db = require('../dbConfig.js');

module.exports = {
    insert,
    findByUsername,
};

function insert(user){
    return db ('users')

        .insert(user, 'id')
        .then(([id]) => id);

}

function findByUsername(username){
    return db('users')
        .where(username)
       
}