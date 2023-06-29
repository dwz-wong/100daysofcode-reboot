import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmerica } from '@fortawesome/free-solid-svg-icons';

export default function Nav() {
    return (
        <nav className="nav">
            <FontAwesomeIcon icon={faEarthAmerica} className="fa-earth-america"/>
            <p className="nav__title">my travel journal</p>
        </nav>
    )
}