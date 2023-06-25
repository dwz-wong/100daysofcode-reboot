import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitterSquare, faGithubSquare, faDev } from '@fortawesome/free-brands-svg-icons';

export default function Social() {
    return (
        <div className="social__container">
            <a href="https://twitter.com/dwz_wong_01" target='_blank' className="social__link twitter">
                <FontAwesomeIcon icon={faTwitterSquare} />
            </a>

            <a href="https://github.com/dwz-wong" target='_blank' className="social__link github">
                <FontAwesomeIcon icon={faGithubSquare} />
            </a>

            <a href="https://dev.to/dwz_wong" target='_blank' className="social__link dev">
                <FontAwesomeIcon icon={faDev} />
            </a>
        </div>
    )
}