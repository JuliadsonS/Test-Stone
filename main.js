var items = require('./items')
var clients = require('./clients')

const AccountList = function (listItems, listClients) {
    let totalItems = listItems.reduce((acc, item) => acc += item.price.unit * item.amount, 0)
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

console.log("Result: ", AccountList(items, clients))