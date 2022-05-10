import React from "react";
import './Menu.css'
import { Link } from 'react-router-dom'

const Menu = props => (
    <aside className="Menu">
        <nav>
            <ul>
                <li>
                    <Link to="/">inicio</Link>
                </li>
                <li>
                    <Link to="/Param/123">Param #01</Link>
                </li>
                <li>
                    <Link to="/Param/testando">Param #02</Link>
                </li>
                <li>
                    <Link to="/About">Sobre</Link>
                </li>
                <li>
                    <Link to="/naoExiste">Não Existe</Link>
                </li>
            </ul>
        </nav>
    </aside>
)

export default Menu
