import React from 'react'

export default function Payment() {
    let message = '';
    if(window.location.href.includes('success')){
        message = 'Payment submitted successfully!';
    }
    else {
        message = 'Payment attempt cancelled.';
    }
    return (
        <div>
            { message }
            <br></br>
            <a href="/"><button>Home</button></a>
        </div>
    )
}
