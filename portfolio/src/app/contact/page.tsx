import Image from 'next/image'
import style from '../../../styles/home.module.css'
import { FaLinkedin, FaGithub, FaTwitter, FaFacebook } from 'react-icons/fa';

function contact() {
    return (
        <div className={style.contact}>
            <h1>You Can Contact with This Links: </h1>
            <div className={style.links}>
                <a href="https://www.linkedin.com/in/your-profile" className={style.socialIcon} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={40}  />
                </a>
                <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer" className={style.socialIcon}>
                    <FaGithub size={40}  />
                </a>

                {/* Twitter Icon */}
                <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer" className={style.socialIcon}>
                    <FaTwitter size={40}  />
                </a>

                {/* Facebook Icon */}
                <a href="https://facebook.com/your-profile" target="_blank" rel="noopener noreferrer" className={style.socialIcon}>
                    <FaFacebook size={40} />
                </a>
            </div>
        </div>
    )
}


export default contact;