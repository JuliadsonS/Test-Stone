var items = require('./items')
var clients = require('./clients')

const accountList = function (listItems, listClients, typeUnit) {
    let totalItems = listItems.reduce((acc, item) => acc += item.price[typeUnit] * item.amount, 0)
    let result = listClients.map(item => {
        return {
            client: item,
            total: parseInt((totalItems / clients.length).toFixed(0))
        }
    })

    let valid = result.reduce((acc, item) => acc += item.total, 0)

    if (valid != totalItems)
        result[result.length - 1].total += totalItems - valid

    return result
}

console.log("Result: ", accountList(items, clients, "pack"))