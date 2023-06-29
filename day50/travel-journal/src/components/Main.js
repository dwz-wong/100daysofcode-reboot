import Card from "./Card"
import data from "./../data"

export default function Main() {
    const cards = data.map(place => {
        return (
            <Card
                key={place.id}
                place={place}
            />
        )
    })

    return (
        <main className="main">
            {cards}
        </main>
    )
}