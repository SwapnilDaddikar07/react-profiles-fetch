import {useState} from "react";
import '../node_modules/font-awesome/css/font-awesome.min.css';

const ProfileInfo = props => {
    const {displayPhoto, firstName, lastName, email, phone, gender} = props;
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="container">
            <img className="photo" src={displayPhoto} alt="profile photo"/>
            <br/>
            <button title="More Info" onClick={handleClick}>
                {firstName} {lastName}
            </button>
            {isOpen &&
            <div className="more-info">
                <i className="fa fa-envelope"></i>
                <p>{email}</p>
                <hr/>
                <i className="fa fa-phone"></i>
                <p>{phone}</p>
                <hr/>
                <p className="gender">{gender}</p>
            </div>
            }
        </div>
    );
};

export default ProfileInfo;