import React from 'react'; 
import {comapanyMenuData, technologyMenuData, servicesMenuData} from './footer-menu-data';
import 'font-awesome/css/font-awesome.min.css';
import Copyright from './copyright';
import './footer.css';

const Footer = () => {
    return(
        <footer>
            <div className="com-cover">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6 col-xs-12 mb-4">
                            <a className="fa-icon" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-twitter" aria-hidden="true"></i>
                            </a>
                            <a className="fa-icon" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-facebook" aria-hidden="true"></i>
                            </a>
                            <a className="fa-icon" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-pinterest" aria-hidden="true"></i>
                            </a>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="office-address mb-5">
                                <h4 className="section-title text-uppercase">Address</h4>
                                <p>
                                    Office No 6. Silver Fern Building, Karve Road, Kothrud, Pune, Maharashtra 411029 
                                </p>
                            </div>
                            {/* <div className="contact-info">
                                <h4 className="section-title text-uppercase">Phone</h4>
                                <p>
                                    +91 7350013701<br/>
                                    +91 7350013702 
                                </p>
                            </div> */}
                        </div>
                        <div className="footer-menu col-md-2 col-sm-4 col-xs-12">
                            <h4 className="section-title text-uppercase">Company</h4>
                            <nav>
                                {comapanyMenuData.length && (      
                                    <ul className="footer-menu-items unstyled">
                                        { comapanyMenuData.map (item =>
                                            <li key = {item.label} className="mb-3">
                                                <a href = {item.url}> {item.label} </a>
                                            </li>
                                        ) }
                                    </ul>
                                )}
                            </nav>
                        </div>
                        <div className="footer-menu col-md-2 col-sm-4 col-xs-12">
                            <h4 className="section-title text-uppercase">Technology</h4>
                            <nav>
                                {technologyMenuData.length && (      
                                    <ul className="footer-menu-items unstyled">
                                        { technologyMenuData.map (item =>
                                            <li key = {item.label} className="mb-3">
                                                <a href = {item.url}> {item.label} </a>
                                            </li>
                                        ) }
                                    </ul>
                                )}
                            </nav>
                        </div>
                        <div className="footer-menu col-md-2 col-sm-4 col-xs-12">
                            <h4 className="section-title text-uppercase">Services</h4>
                            <nav>
                                {servicesMenuData.length && (      
                                    <ul className="footer-menu-items unstyled">
                                        { servicesMenuData.map (item =>
                                            <li key = {item.label} className="mb-3">
                                                <a href = {item.url}> {item.label} </a>
                                            </li>
                                        ) }
                                    </ul>
                                )}
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <Copyright />
        </footer>
    )
}
 export default Footer;