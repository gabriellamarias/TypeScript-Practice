;
var mountains;
mountains = [{ name: "Kilimanjaro", height: 19341 }, { name: "Everest", height: 29029 }, { name: "Denali", height: 20310 }];
function findNameOfTallestMountain(mountain) {
    var max = mountain.reduce(function (prev, current) {
        return (prev.height > current.height) ? prev : current;
    });
    return max.name;
}
var highestMountain = findNameOfTallestMountain(mountains);
console.log(highestMountain);
;
var products;
products = [{ name: "lemon", price: 1.00 }, { name: "tea", price: 4.00 }, { name: "honey", price: 5.00 }, { name: "milk", price: 3.00 }];
function calcAverageProductPrice(product) {
    var total = 0;
    for (var i = 0; i < product.length; i++) {
        total += product[i].price;
    }
    ;
    var avg = total / product.length;
    return avg;
}
;
var averagePrice = calcAverageProductPrice(products);
console.log(averagePrice);
var inventory;
inventory = [{ product: { name: "motor", price: 10.00 }, quantity: 10 }, { product: { name: "sensor", price: 12.50 }, quantity: 4 }, { product: { name: "LED", price: 1.00 }, quantity: 20 }];
function calcInventoryValue(inventory) {
    var total = 0;
    for (var i = 0; i < inventory.length; i++) {
        total += inventory[i].product.price * inventory[i].quantity;
    }
    return total;
}
;
var totalCost = calcInventoryValue(inventory);
console.log(totalCost);
