const db = require('../../data/dbConfig')

async function getUsers(){
    const users = await db('users')
    return users
}

async function getUser(id){
const user = await db("users").where('user_id', id)
return user
}

async function insertUser(newUser){
    const [user_id] = await db('users').insert(newUser)
    return getUser().where({user_id}).first();
}

module.exports = {getUsers, getUser, insertUser}

