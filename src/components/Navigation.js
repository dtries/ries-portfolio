import React, {Component} from 'react';

class Navigation extends Component {
    render () {
        return (
        <nav>
            <div className="nav-wrapper">
                <a href="/" className="brand-logo left">Logo</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a href="/">Home</a></li>
                    <li><a href="/Portfolio">Portfolio</a></li>
                    <li><a href="/About">About</a></li>
                </ul>
            </div>
        </nav> 
        );       
    }
}

export default Navigation;

