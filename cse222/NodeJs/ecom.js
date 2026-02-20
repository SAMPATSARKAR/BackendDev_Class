import { EventEmitter } from 'events';

let products = [
    { id: 1, name: 'Laptop', price: 56000, stock: 10 },
    { id: 2, name: 'Smartphone', price: 34000, stock: 5 },
    { id: 3, name: 'Headphones', price: 3400, stock: 7 },
    { id: 4, name: 'Charger', price: 1000, stock: 8 }
]

function placeOrder(user, productid, quantity) {
    const orders = new EventEmitter();
    const product = products.find((p) => {
        return p.id === productid;
    })

    // if (!product || product.stock < quantity) {
    //     console.log("Order not placed");
    //     return;
    // }

    if (product.stock > quantity) {
        orders.on('newOrder', (user, product, quantity) => {
            product.stock = product.stock - quantity
            console.log(`The stock updated for ${user} - ${product.name}, 
            remaining stock: ${product.stock}`);
        })

        orders.on('newOrder', (user) => {
            console.log(`Order confirmed through email for ${user}`);
        })

        orders.on('newOrder', (user) => {
            console.log("Track order for", user);
        })

        orders.emit('newOrder', user, product, quantity);
    } else if (product.stock <= quantity) {
        orders.on('newOrder', (user, product) => {
            product.stock = 0;
            console.log(`The stock updated for ${user} - ${product.name}, 
            remaining stock: ${product.stock}`);
        })
        orders.emit('newOrder', user, product);
    }
}

placeOrder('Ankit', 1, 12);

