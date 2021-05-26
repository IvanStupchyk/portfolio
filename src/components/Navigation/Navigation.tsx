import React from "react"
import {NavLink} from "react-router-dom"
import s from "./navigation.module.scss"

export const Navigation = () => {
    return (
        <div className={s.navigationContainer}>
            <nav>
                <ul>
                    <li><NavLink className={s.tub} activeClassName={s.activeLink} to="/portfolio">Home</NavLink></li>
                    <li><NavLink className={s.tub} activeClassName={s.activeLink} to="/about">About</NavLink></li>
                    <li><NavLink className={s.tub} activeClassName={s.activeLink} to="/port">Portfolio</NavLink></li>
                    <li><NavLink className={s.tub} activeClassName={s.activeLink} to="/skills">Skills</NavLink></li>
                    <li><NavLink className={s.tub} activeClassName={s.activeLink} to="/contact">Contact</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}
