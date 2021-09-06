import firebaseApp from '../base.js';
//const firebaseApp = require('../base');
const db = firebaseApp.firestore();

class Blog {
    constructor(id, title, timeStamp, content, image){
    this.id = id;
    this.title = title;
    this.timeStamp = timeStamp;
    this.content = content;
    this.image = image;
    }
}

async function createBlog(req, res){
    //res.send(JSON.stringify(stock));
    try {
        const data = req.body;
        await db.collection('blog').doc().set(data);
        
        res.send({msg: 'Data added!'});
    }
    catch(err) {
        res.status(500).json({error: err.message})
    }
}
async function findAllBlogs(req, res){
    try {
        const blog = await db.collection("blog");
        const data = await blog.get();
        const blogArr = [];
        if(data.empty){
            res.status(404).send('Not found');
        }
        else {
            data.forEach((doc) => {
                const inven = new Blog(
                    doc.id,
                    doc.data().title,
                    doc.data().timeStamp,
                    doc.data().conten,
                    doc.data().image,
                )
                blogArr.push(inven);
            });
            res.send(blogArr);
        }
    }
    catch(err) {
        res.status(500).json({error: err.message})
    }
}
async function findOneBlog(req, res){
    try {
        const id = req.params.id;
        const item = await db.collection('blog').doc(id);
        const data = await item.get();
        if(!data.exists){
            res.status(404).send('Not found');
        }
        else {
            res.json({
                title: data.data().title,
                timeStamp: data.data().timeStamp,
                content: data.data().content,
                image: data.data().image
            });
        }
    }
    catch(err) {
        res.status(500).json({error: err.message})
    }
}
async function updateBlog(req, res){
    try {
        const id = req.params.id;
        const data = req.body;
        //console.log(data);
        const item = await db.collection('blog').doc(id);
        await item.update(data);
        res.send('Updated successfully');
        //console.log('Updated successfully!');
    }
    catch(err) {
        res.status(500).json({error: err.message})
    }
}
async function deleteBlog(req, res){
    try {
        const id = req.params.id;
        const item = await db.collection('blog').doc(id).delete();
        res.send('Post deleted!');
    }
    catch(err) {
        res.status(500).json({error: err.message})
    }
}

export { createBlog, findAllBlogs, findOneBlog, updateBlog, deleteBlog };