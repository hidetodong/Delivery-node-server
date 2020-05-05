const allSqlAction = require("../config/db")

async function findUser(phone, password) {
    let sql = `select * from user`
    return await allSqlAction.allSqlAction(sql).then(res => {
        return res
    })
}

module.exports = {
    findUser
}