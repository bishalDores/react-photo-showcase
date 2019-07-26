import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component{
    render(){
        return(
            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="col col-auto my-auto">
                            <a href="/" className="logo">PhotoShowCase</a>
                        </div>
                        <div className="col my-auto text-right">
                            <div className="mainmenu">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/disclaimer">Disclaimer</Link></li>
                                    <li><Link to="/credits">Credits</Link></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </header>
        )
    }
};

export default Header;