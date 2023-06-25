import photo from './../images/HL WONG 3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Info() {
    return (
        <div className="info__container">
            <img src={photo} alt="photo" className="card__photo"/>
            <div className="card__info">
                <h1 className="info__name">HL Wong</h1>
                <p className="info__occupation">Student</p>
                <div className="link__container">
                    <a href="https://dwz-wong.netlify.app/" target='_blank' className="info__links link">
                        <FontAwesomeIcon icon={faLink} style={{ marginRight: "5px"}}/> Link
                    </a>

                    <a href="https://www.linkedin.com/in/hl-wong-578b57261/" target='_blank' className="info__links linkedin">
                        <FontAwesomeIcon icon={faLinkedin} size="lg" style={{ marginRight: "5px"}}/> LinkedIn
                    </a>
                </div>
            </div>
        </div>
    )
}
