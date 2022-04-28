import React from 'react'
import PreJunior from "./preJunior/PreJunior";
import {Junior} from "./junior/Junior";
import {JuniorPlus} from "./juniorPlus/JuniorPlus";
import {Error404} from "./pages/Error404";
import {Link} from "react-router-dom";

function Header() {
    return (
        <div>
            <Link to={'/preJunior'}>PreJunior</Link>
            <Link to={'/junior'}>Junior</Link>
            <Link to={'/juniorPlus'}>JuniorPlus</Link>
            {/*<Error404/>*/}
        </div>
    )
}

export default Header
