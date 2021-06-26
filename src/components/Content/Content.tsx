import React from "react"
import {Route} from 'react-router-dom';
import s from './content.module.scss'
import {Home} from "./Home/Home";
import {About} from "./About/About";
import {Skills} from "./Skills/Skills";
import {Portfolio} from "./Portfolio/Portfolio";
import {Contact} from "./Contact/Contact";

export const Content = () => {
    return (
        <div className={s.contentContainer}>
            <Route path={"/"} exact render={() => <Home />}/>
            <Route path={"/about"} render={() => <About />}/>
            <Route path={"/port"} render={() => <Portfolio />}/>
            <Route path={"/skills"} render={() => <Skills />}/>
            <Route path={"/contact"} render={() => <Contact />}/>
        </div>
    )
}
