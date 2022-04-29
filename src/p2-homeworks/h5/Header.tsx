import React from 'react'
import style from './header.module.css'
import PreJunior from "./preJunior/PreJunior";
import {Junior} from "./junior/Junior";
import {JuniorPlus} from "./juniorPlus/JuniorPlus";
import {Error404} from "./pages/Error404";
import {Link} from "react-router-dom";

function Header() {
    return (
        <div className={style.event}>
            <div>
                <Link to={'/preJunior'}>PreJunior</Link>
            </div>

            <div>
                <Link to={'/junior'}>Junior</Link>
            </div>

            <div>
                <Link to={'/juniorPlus'}>JuniorPlus</Link>
            </div>
            {/*<Error404/>*/}
        </div>
    )
}

export default Header
