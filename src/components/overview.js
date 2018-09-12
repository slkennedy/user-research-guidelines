import React from "react"

const createScore = (count) => {
    let score = []
    let diff = 5 - count; //3
    
    for(let i = 0; i < count; i++) {
        score.push(<span className="overview__score overview__score--filled"></span>)
    }
    
    for(let i = 0; i < diff; i++) {
        score.push(<span className="overview__score"></span>)
    }

    return score;
}

export default ({ ...props }) => {
    const overview = props.overview
    return (
        <section className="overview">
                {
                    overview.map((item, index) => {
                        return (
                                <section className="overview__group" key={index}>
                                    <h1 className="overview__heading">{item.heading}</h1>
                                    {
                                        createScore(item.amount)
                                    }
                                    {/* <div className="overview__score">{item.amount}</div> */}
                                    <p className="overview__description">{item.description}</p>
                                </section>
                        )
                    })
                }
        </section>
    )
}