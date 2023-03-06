import './Footer.css'
import logo from '../../assets/img/Logo.svg'


const Footer = () => {
    return (
        <footer>
            <div className="footer__container">

                <div className="footer__container-top">

                    <div className="footer__logo">
                        <img className='footer__logo-img' src={logo} alt="img" />
                        <p className='footer__logo-text'>Our vision is to provide convenience <br /> and help increase your sales business.</p>
                    </div>
                    <div className="footer__columns">
                        <div className="footer__about footer__column ">
                            <p>About</p>
                            <a href="#">How it works</a>
                            <a href="#">Featured</a>
                            <a href="#">Partnership</a>
                            <a href="#">Bussiness relation</a>
                        </div>

                        <div className="footer__community footer__column ">
                            <p>Community</p>
                            <a href="#">Events</a>
                            <a href="#">Blog</a>
                            <a href="#">Podcast</a>
                            <a href="#">Invite a friend</a>
                        </div>

                        <div className="footer__socials footer__column">
                            <p>Socials</p>
                            <a href="#">Discord</a>
                            <a href="#">Instagram</a>
                            <a href="#">Twitter</a>
                            <a href="#">Facebook</a>
                        </div>
                    </div>
                </div>

                <div className="footer__container-bottom">
                    <p>©2023 MORENT. All rights reserved</p>
                    <p>Privacy & Policy</p>
                    <p>Terms & Condition</p>
                </div>


            </div>
        </footer>
    )
}


export default Footer;