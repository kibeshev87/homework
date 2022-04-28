import React from 'react'
import Header from './Header'
import {BrowserRouter, HashRouter} from "react-router-dom";
import Roads from "./Roads";

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}

                <BrowserRouter>

                    <Header/>

                    <Roads/>

                </BrowserRouter>
        </div>
    )
}

export default HW5
