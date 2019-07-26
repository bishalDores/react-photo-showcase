import React from 'react';

class Footer extends React.Component{
    render(){
        return(
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <h2>Lorem ipsum dolor sit amet.</h2>
                            <h3>+88016-16789204</h3>
                            <div className="footer-menu">
                                <ul>
                                    <li><a href="/">Facebook</a></li>
                                    <li><a href="/">Twitter</a></li>
                                    <li><a href="/">LinkedIn</a></li>
                                    <li><a href="/">Instagram</a></li>
                                </ul>
                            </div>
                            <div className="copyright-text">Lorem ipsum dolor sit.</div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
};

export default Footer;