import React from "react"
import s from './header.module.scss'
import {NavLink} from "react-router-dom";
import homePageIcon from "../../media/images/svg-icon/header/home.svg"
import AboutPageIcon from "../../media/images/svg-icon/header/profile-user.svg"
import PortfolioPageIcon from "../../media/images/svg-icon/header/briefcase.svg"
import skillsPageIcon from "../../media/images/svg-icon/header/skills.svg"
import contactPageIcon from "../../media/images/svg-icon/header/envelope.svg"

export const Header = () => {
    return (
        <div className={s.headerContainer}>
            <div>
                <p className={s.logo}>My Portfolio</p>
            </div>
            <div>
                <ul className={s.headerIcons}>
                    <li className={s.iconContainer}>
                        <NavLink to="/home"><img alt={'home page'} src={homePageIcon}/></NavLink>
                    </li>
                    <li className={s.iconContainer}>
                        <NavLink to="/about" ><img alt={'about page'} src={AboutPageIcon}/></NavLink>
                    </li>
                    <li className={s.iconContainer}>
                        <NavLink to="/portfolio" ><img alt={'portfolio page'} src={PortfolioPageIcon}/></NavLink>
                    </li>
                    <li className={s.iconContainer}>
                        <NavLink to="/skills" ><img alt={'skills page'} src={skillsPageIcon}/></NavLink>
                    </li>
                    <li className={s.iconContainer}>
                        <NavLink to="/contact" ><img alt={'contact page'} src={contactPageIcon}/></NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}
