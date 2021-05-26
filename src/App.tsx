import React from 'react';
import {Header} from "./components/Header/Header";
import {Navigation} from "./components/Navigation/Navigation";
import {Content} from "./components/Content/Content";
import s from "./app.module.scss"

function App() {
    return (
        <div>
            <Header/>
            <div className={s.mainScreenWrapper}>
                <Navigation/>
                <Content/>
            </div>
        </div>
    );
}

export default App;
