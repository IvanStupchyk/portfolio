import React, {useState} from "react"
import s from './portfolio.module.scss'
import node from '../../../media/images/portfolio-page/node.png'

export const Portfolio = () => {
    type FilterType = 'all' | 'react' | 'html' | 'node'

    type workType = {
        filter: FilterType
        link: string
        photo: string
    }

    type stateType = Array<workType>

    const state: stateType = [
        {filter: 'react', link: "0", photo: 'fdf'},
        {filter: 'react', link: "1", photo: 'fdf'},
        {filter: 'react', link: "2", photo: 'fdf'},
        {filter: 'html', link: "3", photo: 'fdf'},
        {filter: 'html', link: "4", photo: 'fdf'},
        {filter: 'node', link: "https://github.com/IvanStupchyk/final-javascript-project", photo: node},
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
                            <a onClick={changeFilterValueOnAll} className={`${filter === 'all' && s.activeTab}`}>All</a>
                        </li>
                        <li>
                            <a onClick={changeFilterValueOnReact} className={`${filter === 'react' && s.activeTab}`}>
                                React
                                TS/Redux
                            </a>
                        </li>
                        <li>
                            <a onClick={changeFilterValueOnHTML} className={`${filter === 'html' && s.activeTab}`}>
                                HTML
                                CSS
                            </a>
                        </li>
                        <li>
                            <a onClick={changeFilterValueOnNode} className={`${filter === 'node' && s.activeTab}`}>
                                Node.js
                                Webpack
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={s.contentPortfolioContainer}>
                {
                    state.filter(wrk => filter !== 'all' ? wrk.filter === filter : wrk)
                        .map(wrk => {
                            return <div className={s.workContainer}>
                                <a href={wrk.link}>See the project</a>
                                <img src={wrk.photo} alt={'screen work from portfolio'}/>
                            </div>
                        })
                }
            </div>
        </div>
    )
}
