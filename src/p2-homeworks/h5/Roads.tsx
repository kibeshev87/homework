import React from 'react'
import {Route, Routes} from "react-router-dom";
import PreJunior from "./preJunior/PreJunior";
import {Error404} from "./pages/Error404";
import {Junior} from "./junior/Junior";
import {JuniorPlus} from "./juniorPlus/JuniorPlus";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    // add paths
}

export function Roads() {
    return (
        <div>
            <Routes>

                <Route path='/preJunior' element={<PreJunior/>}/>

                <Route path='/junior' element={<Junior/>}/>

                <Route path='/juniorPlus' element={<JuniorPlus/>}/>

                <Route path='/*' element={<Error404/>}/>

            </Routes>
        </div>
    )
}

