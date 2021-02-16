var items = require('./items')
var clients = require('./clients')

const accountList = function (listItems, listClients, typeUnit) {
    let result = []
    let valid = 0
    let ultkey = ''

    let totalItems = listItems.reduce((acc, item) => acc += item.price[typeUnit] * item.amount, 0)
    listClients.map(item => result[item] = parseInt((totalItems / clients.length).toFixed(0)))
    result.reduce((acc, item) => acc += item, 0)

    for (const item in result) {
        valid += result[item]
        ultkey = item
    }

    if (valid < totalItems)
        result[ultkey] += totalItems - valid

    return result
}

console.log("Result: ", accountList(items, clients, "unit"))