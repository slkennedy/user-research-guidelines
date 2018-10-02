import React from "react"
import { Link } from "gatsby"

export default ({ ...props }) => {
    return (
        <section className="link-list">
            <h1 className="link-list__heading">{props.heading}:</h1>
            <ul className="link-list__list">
                {
                    props.externalLinks ? 
                        props.links.map((link, index) => {
                            return (
                                <li className="link-list__item" key={index}>
                                    <a 
                                        className="link-list__link link-list__link--external"
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer">{link.text}</a>
                                </li>
                        )
                    }) 
                    :
                    props.links.map((link, index) => {
                        return (
                            <li className="link-list__item" key={index}>
                                <Link 
                                    activeClassName="link-list__link"
                                    to={link.url}>{link.text}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}
