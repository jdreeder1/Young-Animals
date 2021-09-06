//DB model for inventory
//const { firebaseApp, db } = require('../base');
import firebaseApp from '../base.js';

//const { func } = require('prop-types');
import Inventory from '../stock.js';

const db = firebaseApp.firestore();

async function createData(req, res){
    //res.send(JSON.stringify(stock));
    try {
        const data = req.body;
        await db.collection("inventory").doc().set(data);
        
        res.send({msg: 'Data added!'});
    }
    catch(err) {
        res.status(500).json({error: err.message})
    }
}
async function readData(req, res){
    try {
        const inventory = await db.collection("inventory");
        const data = await inventory.get();
        const inventoryArr = [];
        if(data.empty){
            res.status(404).send('Not found');
        }
        else {
            data.forEach((doc) => {
                const inven = new Inventory(
                    doc.id,
                    doc.data().descrip,
                    doc.data().image,
                    doc.data().price,
                    doc.data().quantity,
                    doc.data().status
                )
                inventoryArr.push(inven);
            });
            res.send(inventoryArr);
        }
    }
    catch(err) {
        res.status(500).json({error: err.message})
    }
}

async function findOneItem(req, res){
    try {
        const id = req.params.id;
        const item = await db.collection("inventory").doc(id);
        const data = await item.get();
        if(!data.exists){
            res.status(404).send('Not found');
        }
        else {
            res.send(data.data());
        }
    }
    catch(err) {
        res.status(500).json({error: err.message})
    }
}

async function updateItem(req, res){
    try {
        const id = req.params.id;
        const data = req.body;
        const item = await db.collection("inventory").doc(id);
        await item.update(data);
        res.send('Updated successfully');
    }
    catch(err) {
        res.status(500).json({error: err.message})
    }
}

async function deleteItem(req, res){
    try {
        const id = req.params.id;
        const item = await db.collection("inventory").doc(id).delete();
        res.send('Item deleted');
    }
    catch(err) {
        res.status(500).json({error: err.message})
    }
}

export {createData, readData, findOneItem, updateItem, deleteItem};
