import React from "react"
import Link from "gatsby-link"

export default ({ ...props }) => {
    console.log(props)
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
                                        target="_blank">{link.text}</a>
                                </li>
                        )
                    }) 
                    :
                    props.links.map((link, index) => {
                        return (
                            <li className="link-list__item" key={index}>
                                <Link 
                                    className="link-list__link"
                                    to={link.url}>{link.text}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}
