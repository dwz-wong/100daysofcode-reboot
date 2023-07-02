import React from "react"
import Profile from "./Profile"
import Card from "./Card"
import data from "./../data.json"

export default function Dashboard() {
    const [timeframe, setTimeframe] = React.useState("Weekly")
    const handleClick = event => {
        setTimeframe(event.target.innerText)
    }

    const cards = data.map(card => {
        return <Card
            key={card.id} 
            card={card}
            current={card.timeframes[timeframe.toLowerCase()]["current"]}
            previous={card.timeframes[timeframe.toLowerCase()]["previous"]}
            timeframe={timeframe}
        />
    })

    return (
        <div className="dashboard">
            <Profile
                handleClick={handleClick}
                timeframe={timeframe}
            />
            { cards }
        </div>
    )
}
