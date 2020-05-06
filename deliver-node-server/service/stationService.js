const allSqlAction = require("../config/db")

async function getStation() {
    let sql = `select * from station`
    return await allSqlAction.allSqlAction(sql).then(res => {
        return res
    })
}

module.exports = {
    getStation
}