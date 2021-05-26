import React from "react"
import s from './home.module.scss'
import telegramIcon from '../../../media/images/svg-icon/home-page/telegram.svg'
import instagramIcon from '../../../media/images/svg-icon/home-page/instagram.svg'
import linkedIn from '../../../media/images/svg-icon/home-page/linkedin.svg'
import githubIcon from '../../../media/images/svg-icon/home-page/github.svg'

export const Home = () => {
    return (
        <div className={s.homeContainer}>
            <div className={s.avatarContainer}></div>
            <div className={s.homePageContentContainer}>
                <h1>Ivan Stupchuk</h1>
                <p className={s.myDescription}>Hello, I'm Front-end developer from Belarus. Nice to meet you</p>
                <div>
                    <ul className={s.socialNetworksIcons}>
                        <li className={s.socialNetwork}>
                            <a href={'https://www.linkedin.com/in/ivan-stupchuk/'}>
                                <img alt={'link to linkedIn'}src={linkedIn}/>
                            </a>
                        </li>
                        <li className={s.socialNetwork}>
                            <a href={'https://github.com/IvanStupchyk'}>
                                <img alt={'link to github'} src={githubIcon}/>
                            </a>
                        </li>
                        <li className={s.socialNetwork}>
                            <a href={'https://t.me/stupdogg'}>
                                <img alt={'link to telegram'} src={telegramIcon}/>
                            </a>
                        </li>
                        <li className={s.socialNetwork}>
                            <a href={'https://www.instagram.com/stupdogg/'}>
                                <img alt={'link to instagram'} src={instagramIcon}/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
