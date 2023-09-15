import {FaHome, FaFacebookF, FaTwitter, FaEnvelope} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function NavComponent(){
    const items = [{label:"Home", icon:<FaHome />}, {label:"facebook", icon:<FaFacebookF />}, {label:"twitter", icon:<FaTwitter />} , {label:"Contact", icon:<FaEnvelope />}];

    /*
    const doubleNumbers = numbers.map((number) => {
        return number *= 2;
    });
    */

    return (
        <ul id="navbar" className="flex space-x-8 text-white">
            {items.map((item)=>(
                <li><a href="#" className="group">{item.icon} <span className="hidden group-hover:inline-block">{item.label}</span></a></li>
            ))}
            <Link to="/" className="group">Home</Link>
            <Link to="/about" className="group">About</Link>
            <Link to="/contact" className="group">Contact</Link>
        </ul>
    );
}
