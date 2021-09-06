import React from 'react'

function AdminViewBlogs(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <div>
                {props.content}
            </div>
            <img src={props.image} height="100px" width="100px"/>
        </div>
    )
}

export default AdminViewBlogs