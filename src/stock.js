/*const inventory = {
    shirt1: {
        name: "Shirt One",
        image: "/images/tshirt.jpg",
        price: 1999,
        status: "available",
        quantity: 10
    },
    shirt2: {
        name: "Shirt Two",
        image: "/images/tshirt2.jpg",
        price: 1998,
        status: "available",
        quantity: 9
    }
}*/
export default class Inventory {
    constructor(id, descrip, image, price, status, quantity){
        this.id = id;
        this.descrip = descrip;
        this.image = image;
        this.price = price;
        this.status = status;
        this.quantity = quantity;
    }
}

//module.exports = Inventory; 
//export default inventory;