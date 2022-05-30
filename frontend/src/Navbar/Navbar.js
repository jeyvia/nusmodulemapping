import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Navbaritems } from './Navbaritems';
import { HiDesktopComputer } from "react-icons/hi";
import './Navbar.css'
import { IconContext } from 'react-icons';

class navbar extends Component{
    render(){
        return (
            <div className = "navbar">
                <IconContext.Provider value ={{ color: '#696969',}}>
                <div className = "navbar-header">
                    <h2 className = "navbar-header-text"><a href = "/">NUSModuleMapping</a><HiDesktopComputer/></h2> 
                </div>
                <nav>
                    <ul className="navbar-menu-items">
                        {Navbaritems.map((item, index) => {
                            return(
                                <li key = {index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            ) 
                        })}
                    </ul>
                </nav>
                </IconContext.Provider>
            </div>
        )
    }
}

export default navbar;