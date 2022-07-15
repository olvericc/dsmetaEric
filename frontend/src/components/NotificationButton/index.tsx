import icon from '../../assets/img/notification_icon.svg'
import './styles.css'

function NotificationButton() {
    return(
        <>
            <div className="dsmeta-red-button">
                <img src= {icon} alt = "notifying"></img>
            </div>
        </>
    )
}

export default NotificationButton