import ellipsis_icon from "./../images/icon-ellipsis.svg"
import work_icon from "./../images/icon-work.svg"
import play_icon from "./../images/icon-play.svg"
import study_icon from "./../images/icon-study.svg"
import exercise_icon from "./../images/icon-exercise.svg"
import social_icon from "./../images/icon-social.svg"
import selfcare_icon from "./../images/icon-self-care.svg"


export default function Card(props) {
    let card_title, card_icon
    if (props.card.title.toLowerCase() === "self care") {
        card_title = props.card.title.toLowerCase().replace(" ", "-")
        card_icon = selfcare_icon
    }
    else {
        card_title = props.card.title.toLowerCase()
        
        if (card_title === "work") {
            card_icon = work_icon
        }
        else if (card_title === "play") {
            card_icon = play_icon
        }
        else if (card_title === "study") {
            card_icon = study_icon
        }
        else if (card_title === "exercise") {
            card_icon = exercise_icon
        }
        else if (card_title === "social") {
            card_icon = social_icon
        }
    }

    let previous_timeframe
    if (props.timeframe === "Daily") {
        previous_timeframe = `Yesterday - ${props.previous}hrs`
    }
    else if (props.timeframe === "Weekly") {
        previous_timeframe = `Last week - ${props.previous}hrs`
    }
    else if (props.timeframe === "Monthly") {
        previous_timeframe = `Last month - ${props.previous}hrs`
    }

    return (
        <div className={`card ${card_title}`}>
            <div className="icon__container">
                <img src={card_icon} alt="" className="card__icon" />
            </div>
            <div className="card__container">
                <div className="card__category">
                    <h3 className="category__title">{props.card.title}</h3>
                    <img src={ellipsis_icon} alt="" className="category__three-dot" />
                </div>
                <div className="card__time">
                    <p className="time__current">{props.current}hrs</p>
                    <p className="time__previous">{previous_timeframe}</p>
                </div>
            </div>
        </div>
    )
}
