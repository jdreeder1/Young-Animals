const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const inventory = require('../stock');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
//add stripe key
const stripe = require("stripe")(process.env.SECRET_KEY);
//const uuid = require("uuid/v4");
const port = 3500;

const app = express();
app.use(cors());
//app.use(bodyParser.json());
app.use(express.json());
//to use url encoded values. 
//if set extended to false, allows accessing req.body to get posted formdata
app.use(bodyParser.urlencoded({
    extended: false
}));

app.listen(port, () => console.log(`App listening on port ${port}.`));

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.get('/stock', (req, res) => {
    res.json(
        inventory
    );
});

const storeItems = new Map([
    [1, {priceInCents: 1999, name: "T-shirt 1" }],
    [2, {priceInCents: 1899, name: "T-shirt 2"}],
]);

app.post('/create_checkout', async (req, res) => {
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: req.body.items.map(item => {
                const storeItem = storeItems.get(item.id)
                return {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: storeItem.name
                        },
                        unit_amount: storeItem.priceInCents 
                    },
                    quantity: item.quantity
                }
            }),
            success_url: `${process.env.SERVER_URL}success`,
            cancel_url: `${process.env.SERVER_URL}cancel` 
        })
        res.json({ url: session.url });

    }
    catch(err) {
        res.status(500).json({error: err.message })
    }
})