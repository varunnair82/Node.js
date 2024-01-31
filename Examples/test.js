class Product{
    total;
    price;

    constructor(total, price){
        this.total = total;
        this.price = price;
    }

    sell(){
        this.total = this.total - 1;
    }

    get stock(){
        if(this.total > 0){
            return "In Stock";
        }
        else{
            return "Not in Stock";
        }
        
    }
}

const pen = new Product(3,2);

pen.sell();

var stock = pen.stock;

console.log(stock);

console.log(pen.total);

pen.sell();

var stock = pen.stock;
console.log(stock);

console.log(pen.total);

pen.sell();

var stock = pen.stock;
console.log(stock);

console.log(pen.total);

pen.sell();

var stock = pen.stock;
console.log(stock);

console.log(pen.total);