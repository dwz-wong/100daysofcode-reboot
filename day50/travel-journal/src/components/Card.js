import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function Card(props) {
    let exist_data;
    if 
    (
        props.place.name !== undefined &&
        props.place.description !== undefined &&
        props.place.image !== undefined &&
        props.place.country !== undefined &&
        props.place.date !== undefined &&
        props.place.link !== undefined
    )
    { 
        return (
            <div className="card">
                <div className="left-col">
                    <img src={props.place.image} className="card__image"/>
                </div>
                <div className="right-col">
                    <div className="location">
                        <FontAwesomeIcon icon={faLocationDot} className="fa-location-dot"/>
                        <p className="location__country">{props.place.country}</p>
                        <a href={props.place.link} target="_blank" className="location__view">View on Google Maps</a>
                    </div>
                    <h1 className="place__title">{props.place.name}</h1>
                    <h2 className="travel__date">{props.place.date}</h2>
                    <p className="place__description">{props.place.description}</p>
                </div>
            </div>
        ) 
    }

    /*
    return (
        <div className="card">
            <div className="left-col">
                <img src={props.place.image} className="card__image"/>
            </div>
            <div className="right-col">
                <div className="location">
                    <FontAwesomeIcon icon={faLocationDot} className="fa-location-dot"/>
                    <p className="location__country">{props.place.country}</p>
                    <a href={props.place.link} className="location__view">View on Google Maps</a>
                </div>
                <h1 className="place__title">{props.place.name}</h1>
                <h2 className="travel__date">{props.place.date}</h2>
                <p className="place__description">{props.place.description}</p>
            </div>
        </div>
    )
    */
}