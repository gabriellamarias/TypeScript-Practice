interface Mountain {
    name: String;
    height: Number;
};

 var mountains: Mountain[];
 mountains = [{name:"Kilimanjaro", height: 19341}, {name:"Everest", height: 29029}, {name: "Denali", height: 20310}];

 function findNameOfTallestMountain(mountain: Mountain[]): String{
   const max = mountain.reduce(function(prev, current) {
       return (prev.height > current.height) ? prev : current
   });
   return max.name;
 }
 const highestMountain = findNameOfTallestMountain(mountains);
 console.log(highestMountain);

interface Product {
     name: String;
     price: number;
};

 var products: Product[];
 products = [{name: "lemon", price: 1.00}, {name: "tea", price: 4.00}, {name: "honey", price: 5.00}, {name: "milk", price: 3.00} ];

 function calcAverageProductPrice(product: Product[]): Number{
    var total = 0;
    for(var i = 0; i <product.length; i++) {
        total += product[i].price;
    };
    var avg = total / product.length;
    return avg;
 };

 const averagePrice = calcAverageProductPrice(products);
 console.log(averagePrice);

interface InventoryItem {
    product: Product;
    quantity: number;
}
 var inventory: InventoryItem[];
 inventory = [{product:{name: "motor", price: 10.00}, quantity: 10}, {product:{name: "sensor", price: 12.50}, quantity: 4}, {product:{name: "LED", price: 1.00}, quantity: 20}];

 function calcInventoryValue(inventory: InventoryItem[]) {
     var total = 0;
    for (var i = 0; i < inventory.length; i++) {
        total += inventory[i].product.price * inventory[i].quantity;
    }
    return total;
 };

 const totalCost = calcInventoryValue(inventory);
 console.log(totalCost);

