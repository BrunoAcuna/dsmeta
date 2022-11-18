import icon from '../../assets/img/notification-icon.svg';
import './styles.css';


function NotificationButton() {
    return (
        <div className="acuna-red-btn-container">
            <img src={icon} alt="Notificar" />
        </div>
    )
}

export default NotificationButton;