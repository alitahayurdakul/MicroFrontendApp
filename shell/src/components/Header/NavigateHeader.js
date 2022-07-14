import React from 'react'
import { Link } from 'react-router-dom';
import './NavigateHeader.scss';

function NavigateHeader() {
    return (
        <nav role="navigation" class="navigation-header">
            <ul>
                <li><Link to="/" >Ana Sayfa</Link></li>
                <li>
                    <Link to="/" >Mobilya & Ev</Link>
                    <ul class="dropdown">
                        <li>
                            <Link to="/furniture" >
                                Mobilya
                            </Link>
                        </li>
                        <li>
                            <Link to="/home" >
                                Ev
                            </Link>
                        </li>
                        <li><a href="#">Web Design</a></li>
                        <li><a href="#">Illustration</a></li>
                        <li><a href="#">Iconography</a></li>
                    </ul>
                </li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    )
}
export default NavigateHeader;