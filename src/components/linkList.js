import React from "react"
import Link from "gatsby-link"

export default ({ ...props }) => {
    console.log(props)
    return (
        <section className="secondary-content">
            <h2 className="secondary-content__heading">{props.heading}:</h2>
            {
                props.externalLinks ? 
                    props.links.map((link, index) => {
                        return (
                            <a 
                                className="secondary-content__link secondary-content__link--external"
                                href={link.url}
                                key={index} 
                                target="_blank">{link.text}</a>
                        )
                    }) 
                    :
                    props.links.map((link, index) => {
                        return (
                            <Link 
                                className="secondary-content__link"
                                to={link.url}
                                key={index}>{link.text}</Link>
                        )
                    })
            }
        </section>
    )
}
