import React, {useEffect} from "react"
import {NavLink, Route} from 'react-router-dom';
import s from './content.module.scss'
import {Home} from "./Home/Home";
import {About} from "./About/About";
import {Skills} from "./Skills/Skills";
import {Portfolio} from "./Portfolio/Portfolio";
import {Contact} from "./Contact/Contact";

export const Content = () => {
    let a = useEffect(() => {
        <Home />
    })

    return (
        <div className={s.contentContainer}>
            {a}
            <Route path={"/portfolio/home"} render={() => <Home />}/>
            <Route path={"/portfolio/about"} render={() => <About />}/>
            <Route path={"/portfolio/portfolio"} render={() => <Portfolio />}/>
            <Route path={"/portfolio/skills"} render={() => <Skills />}/>
            <Route path={"/portfolio/contact"} render={() => <Contact />}/>
        </div>
    )
}
