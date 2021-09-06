import React from 'react';
import '../css/header.css';

class Header extends React.Component {
    render(){
        return (
            <nav className="nav_head">
                <ul>
                    <li><a href="/"><button>Home</button></a></li>
                    <li><a href="/bio"><button>Bio</button></a></li>
                    <li><a href="/blog"><button>Blog</button></a></li>
                    <li><a href="/tour"><button>Tour</button></a></li>
                    <li><a href="/merch"><button>Merch</button></a></li>
                </ul>
            </nav>
        );
    }
}

export default Header;