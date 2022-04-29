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

function Roads() {
    return (
        <div>
            {/*Switch выбирает первый подходящий роут*/}
            <Routes>

                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                {/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
{/*
                <Route path={'/'} exact render={() => <Redirect to={PATH.PRE_JUNIOR}/>}/>
*/}

                <Route path='/preJunior' element={<PreJunior/>}/>

                <Route path='/junior' element={<Junior/>}/>

                <Route path='/juniorPlus' element={<JuniorPlus/>}/>
                {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}

                <Route path='/*' element={<Error404/>}/>


            </Routes>
        </div>
    )
}

export default Roads
