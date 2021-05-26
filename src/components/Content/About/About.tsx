import React from "react"
import s from './about.module.scss'
import aboutWallpaper from '../../../media/images/about-page/background-about.jpg'

export const About = () => {
    return (
        <div className={s.aboutContainer}>
            <div className={s.wallpaperContainer}>
                <img alt={'background about page'} src={aboutWallpaper}/>
            </div>
            <div className={s.aboutContent}>
                <div className={s.aboutContentLeftBlock}>
                    <h2>Ivan Stupchuk & Front-end Developer</h2>
                    <p>
                        Hi, this is my little portfolio.
                        In it I used technologies such as JS, React, Redux, Redux-thunk,
                        TypeScript, Node.js, Webpack, Gulp, Bootstrap, BEM.
                        I hope you will enjoy. If you liked it, call me</p>
                </div>
                <div className={s.aboutContentRightBlock}>
                    <ul>
                        <li><span className={s.nameGraph}>Birthday:</span><span>07.10.1992</span></li>
                        <li><span className={s.nameGraph}>Age:</span><span>28</span></li>
                        <li><span className={s.nameGraph}>Address:</span><span>Brest, Belarus</span></li>
                        <li><span className={s.nameGraph}>Study:</span><span>Gomel State Technical University</span></li>
                        <li><span className={s.nameGraph}>Email:</span> <a href={'mailto:vanyastupchuk@gmail.com'}>vanyastupchuk@gmail.com</a></li>
                        <li><span className={s.nameGraph}>Phone:</span><a href={'tel:+375297915465'}>+375 (29) 791-54-65</a></li>
                        <li><span className={s.nameGraph}>LinkedIn:</span><a href={'https://www.linkedin.com/in/ivan-stupchuk/'}>click here</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
