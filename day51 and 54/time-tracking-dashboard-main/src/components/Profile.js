import profile_photo from "./../images/HL WONG.png"

export default function Profile(props) {

    const timeframes = ["Daily", "Weekly", "Monthly"]
    const timeframe = timeframes.map(item => {
        const styles = props.timeframe === item ? {fontWeight: 500, color:"#fff"} : null

        return (
            <p key={item.toLowerCase()} className="timeframe" onClick={props.handleClick} style={styles}>{item}</p>
        )
    })

    return (
        <div className="report__container">
            <div className="report__profile">
                <img src={profile_photo} alt="" className="profile__photo"/>
                <div>
                    <p className="profile__report">Report for</p>
                    <p className="profile__name">HL Wong</p>
                </div>
            </div>
            <div className="report__timeframes">
                {timeframe}
            </div>
        </div>
    )
}

