import React from "react"
import s from './skills.module.scss'

export const Skills = () => {
    return (
        <div className={s.skillsPageContainer}>
            <h4>My Skills</h4>
            <div className={s.skillsContainer}>
                <div className={s.firstThreeBlockSkills}>
                    <div className={s.firstSkillsBlock}>
                        <span>React</span>
                        <span>Redux</span>
                        <span>Redux-thunk</span>
                        <span>Unit Testing</span>
                        <span>Storybook</span>
                        <span>Material UI</span>
                    </div>
                    <div className={s.secondSkillsBlock}>
                        <span>HTML5</span>
                        <span>CSS3</span>
                        <span>Sass/SCSS/LESS</span>
                        <span>Pixel Perfect</span>
                        <span>Bootstrap</span>
                        <span>BEM</span>
                    </div>
                    <div className={s.thirdSkillsBlock}>
                        <span>Javascript</span>
                        <span>Node.js</span>
                        <span>Webpack</span>
                        <span>Gulp</span>
                        <span>Yarn</span>
                        <span>Npm</span>
                    </div>
                </div>
                <div>
                    <div className={s.fourthSkillsBlock}>
                        <span>Photoshop</span>
                        <span>Figma</span>
                        <span>Zeplin</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
