import React from "react"
import {NavLink} from "react-router-dom"
import s from "./navigation.module.scss"

export const Navigation = () => {
    return (
        <div className={s.navigationContainer}>
            <nav>
                <ul>
                    <li><NavLink className={s.tub} activeClassName={s.activeLink} to="/portfolio/home">Home</NavLink></li>
                    <li><NavLink className={s.tub} activeClassName={s.activeLink} to="/portfolio/about">About</NavLink></li>
                    <li><NavLink className={s.tub} activeClassName={s.activeLink} to="/portfolio/portfolio">Portfolio</NavLink></li>
                    <li><NavLink className={s.tub} activeClassName={s.activeLink} to="/portfolio/skills">Skills</NavLink></li>
                    <li><NavLink className={s.tub} activeClassName={s.activeLink} to="/portfolio/contact">Contact</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}
