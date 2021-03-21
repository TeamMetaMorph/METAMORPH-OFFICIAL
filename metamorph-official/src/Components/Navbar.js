import React from 'react'
import '../css/Navbar.scss'
import LogoM from '../images/LogoM.png'
import {Link} from 'react-router-dom'
function Navbar() {
    return (
        <div>
              <div>
            <nav className="navbar  navbar-expand-lg navbar-dark bg-transparent fu">
                <a className="navbar-brand" href="#/"><b>Meta Morph</b></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <a className="logo">
                             <img src={LogoM} />
                </a>
                

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Our Team</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Q&A</a>
                        </li>
                      
                    </ul>
                </div>
            </nav>
        </div>
        </div>
    )
}

export default Navbar