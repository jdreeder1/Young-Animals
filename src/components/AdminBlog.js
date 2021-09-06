import React, { useEffect } from 'react';
//const {firebaseApp, db} = require('../base');
import firebaseApp from '../base';
import { findAllBlogs } from '../server/blog_model';
import AdminViewBlogs from './AdminViewBlogs';

const db = firebaseApp.firestore();

function AdminBlog() {
    const [fileUrl, setFileUrl] = React.useState(null);
    const [blogs, getBlog] = React.useState([]);

    const onFileChange = async (e) => {
        const file = e.target.files[0];
        const storageRef = firebaseApp.storage().ref();
        const fileRef = storageRef.child(file.name);
        await fileRef.put(file);
        setFileUrl(await fileRef.getDownloadURL());
    }
    const onSubmit = (e) => {
        e.preventDefault();
        const title = document.getElementById('title');
        const content = document.getElementById('content');
        const stamp = `${new Date(Date.now())}`;
        db.collection('blog').doc().set({
            title: title.value,
            timeStamp: stamp,
            content: content.value,
            image: fileUrl
        })
    }

    /*const findBlog = async (blog) => {
        await fetch(`http://localhost:3500/find_blog/${blog}`)
            .then(resp => {
                return resp.json() 
            })
            .then(data => {
                return <AdminViewBlogs props={data}/> 
            })
            .catch(err => console.log(err));
            //console.log(blg.json());

    }*/
    const updatePost = async (blog) => {
        let dt = `${new Date(Date.now())}`;
        const thisBlog = document.getElementById(`${blog.id}`);
        const thisTitle = thisBlog.querySelector('input[type="text"]');
        const thisContent = thisBlog.querySelector('textarea');
        /*let obj = JSON.stringify({
            title: blog.title,
            timeStamp: dt,
            content: blog.content,
            image: blog.image
        });*/
        //console.log(obj); 
        await fetch(`http://localhost:3500/update_blog/${blog.id}`, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: thisTitle.value,
                timeStamp: dt,
                content: thisContent.value,
                image: blog.image
                })            
            })
            .then(res => {
                if(res.ok){
                    console.log('Res OK');
                }
                else {
                    console.log('RES FAILED');
                }
            })
            .then(data => {
                console.log(data);
            })
            .catch(err => {console.log(err)})
            
    }
    const deletePost = async (blog) => {
        await fetch(`http://localhost:3500/delete_blog/${blog}`)
            .then(resp => {
                return resp.text()
            })
            .then(data => {
                console.log(data)
            })
            .then(
                window.location.reload()
            )
            .catch(err => {
                console.log(err)
            })
    };
    
    useEffect(() => {
        const fetchBlog = async() => {
            const blogCollection = await db.collection('blog').get();
            getBlog(blogCollection.docs.map(doc => {
                return {
                    id: doc.id, 
                    title: doc.data().title,
                    timeStamp: doc.data().timeStamp,
                    content: doc.data().content,
                    image: doc.data().image                    
                };
            }))
        }
            fetchBlog()
        }, [])
        
    return (
        <div className="container" style={{width: '80vw'}}>
            <div className="row justify-content-center">
            <form className="col-12" onSubmit={onSubmit} >
                <input type="text" className="text-center" id="title" name="title" placeholder="Blog Title"/><br/>
                <textarea name="content" id="content" placeholder="Type blog here..." cols="100" rows="25">
                </textarea><br/>

                <input type="file" multiple onChange={onFileChange} /><br/>
                <button>Submit</button>
            </form>  
               <section>
                   <h2>Previous Posts</h2>
                    {blogs.map(blog => {
                        return (
                        <div key={blog.id} id={blog.id}>
                            <input type="text" defaultValue={blog.title}/>
                            <h3>{blog.timeStamp}</h3>
                            <textarea cols="100" rows="10" defaultValue={blog.content}>
                            </textarea> 
                                <img src={blog.image} height="100px" width="100px"/>
                                <button onClick={()=> {deletePost(blog.id)}}>Delete Post</button>
                                <button onClick={()=> {updatePost(blog)}}>Update Post</button>
                        </div>
                        )   
                    })}
               </section>
            </div>       
        </div>
    )
}

export default AdminBlog
