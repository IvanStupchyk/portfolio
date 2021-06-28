import React, {useState} from "react"
import s from './portfolio.module.scss'
import nodeProject from '../../../media/images/portfolio-page/node.png'
import walkingDogHTMLCSS from '../../../media/images/portfolio-page/walkingDogHTMLCSS.png'
import creativeAgencyHTMLCSS from '../../../media/images/portfolio-page/creativeAgencyHTMLCSS.png'
import todolist from '../../../media/images/portfolio-page/todolist.png'
import counter from '../../../media/images/portfolio-page/counter.png'

export const Portfolio = () => {
    type FilterType = 'all' | 'react' | 'html' | 'node'

    type workType = {
        filter: FilterType
        link: string
        photo: string
    }

    type stateType = Array<workType>

    const state: stateType = [
        {filter: 'react', link: 'https://ivanstupchyk.github.io/training-todolist/', photo: todolist},
        {filter: 'react', link: '1', photo: 'https://ivanstupchyk.github.io/counter/'},
        {filter: 'react', link: '2', photo: counter},
        {filter: 'html', link: 'https://ivanstupchyk.github.io/creative-agency/dist/index.html', photo: creativeAgencyHTMLCSS},
        {filter: 'html', link: 'https://ivanstupchyk.github.io/walking-dog/', photo: walkingDogHTMLCSS},
        {filter: 'node', link: 'https://github.com/IvanStupchyk/final-javascript-project', photo: nodeProject},
    ]

    const [filter, setFilter] = useState<FilterType>('all')

    const changeFilterValueOnAll = () => setFilter('all')
    const changeFilterValueOnReact = () => setFilter('react')
    const changeFilterValueOnHTML = () => setFilter('html')
    const changeFilterValueOnNode = () => setFilter('node')

    return (
        <div className={s.portfolioContainer}>
            <div className={s.topicContainer}>
                <h3>Creative Portfolio</h3>
                <div className={s.tabsContainer}>
                    <ul>
                        <li>
                            <span onClick={changeFilterValueOnAll} className={`${filter === 'all' && s.activeTab}`}>All</span>
                        </li>
                        <li>
                            <span onClick={changeFilterValueOnReact} className={`${filter === 'react' && s.activeTab}`}>
                                React
                                TS/Redux
                            </span>
                        </li>
                        <li>
                            <span onClick={changeFilterValueOnHTML} className={`${filter === 'html' && s.activeTab}`}>
                                HTML
                                CSS
                            </span>
                        </li>
                        <li>
                            <span onClick={changeFilterValueOnNode} className={`${filter === 'node' && s.activeTab}`}>
                                Node.js
                                Webpack
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={s.contentPortfolioContainer}>
                {
                    state.filter(wrk => filter !== 'all' ? wrk.filter === filter : wrk)
                        .map((wrk, i) => {
                            return <div className={s.workContainer} key={i}>
                                        <a href={wrk.link}>See the project</a>
                                        <img src={wrk.photo} alt={'screen work from portfolio'}/>
                                </div>
                        })
                }
            </div>
        </div>
    )
}
