import React from "react"
import s from './home.module.scss'
import telegramIcon from '../../../media/images/svg-icon/home-page/telegram.svg'
import instagramIcon from '../../../media/images/svg-icon/home-page/instagram.svg'
import vkIcon from '../../../media/images/svg-icon/home-page/vk.svg'
import facebookIcon from '../../../media/images/svg-icon/home-page/facebook.svg'

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
                            <a href={'https://t.me/stupdogg'}>
                                <img alt={'link to telegram'} src={telegramIcon}/>
                            </a>
                        </li>
                        <li className={s.socialNetwork}>
                            <a href={'https://www.instagram.com/stupdogg/'}>
                                <img alt={'link to instagram'} src={instagramIcon}/>
                            </a>
                        </li>
                        <li className={s.socialNetwork}>
                            <a href={'https://vk.com/stupdogg'}>
                                <img alt={'link to vk'}src={vkIcon}/>
                            </a>
                        </li>
                        <li className={s.socialNetwork}>
                            <a href={'https://www.facebook.com/ivan.stupchik/'}>
                                <img alt={'link to facebook'} src={facebookIcon}/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
