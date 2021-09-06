//const dotenv = require('dotenv');
//const path = require('path');

import dotenv from 'dotenv';
//import { dirname } from 'path';
//import { fileURLToPath } from 'url';
dotenv.config()
//const __dirname = dirname(fileURLToPath(import.meta.url));
//dotenv.config({ path: path.resolve(__dirname, '../../.env') });
//dotenv.config({`${__dirname}../../.env`});

//const model = require('./model');
import { createData, readData, findOneItem, updateItem, deleteItem } from './model.js';
//const blog_model = require('./blog_model');
import { createBlog, findAllBlogs, findOneBlog, deleteBlog, updateBlog } from './blog_model.js';
//const express = require('express');
import express from 'express';
//const bodyParser = require('body-parser');
import bodyParser from 'body-parser';
//const cors = require('cors');
import cors from 'cors';
//add stripe key
//const stripe = require("stripe")(process.env.SECRET_KEY);
import Stripe from 'stripe';
const stripe = new Stripe(process.env.SECRET_KEY);

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
        stock
    );
});

app.post('/shopping', (req, res) => {
    res.send('Shopping cart');
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
//inventory routes
app.post('/create', createData);
app.get('/read', readData);
app.get('/find_item/:id', findOneItem);
app.post('/update_item/:id', updateItem);
app.delete('/delete_item/:id', deleteItem);

//blog routes
app.post('/post_blog', createBlog);
app.get('/find_blog/:id', findOneBlog);
app.post('/update_blog/:id', updateBlog);
app.get('/delete_blog/:id', deleteBlog);


app.post('/shipping', (req, res)=> {
    const order = req.body.order;

    res.send(order[0].id);
})
/*
app.post('add_to_cart', (req, res) => {
    console.log(req.body);
})*/