import React from 'react';

class Header extends React.Component {
    render(){
        return (
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/bio">Bio</a></li>
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="/tour">Tour</a></li>
                    <li><a href="/merch">Merch</a></li>
                    <li><a href="/rand">Rand</a></li>
                </ul>
            </nav>
        );
    }
}

export default Header;