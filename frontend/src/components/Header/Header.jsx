import styles from './Header.css';
import logo from '../../assets/img/Logo.svg'
import search from '../../assets/img/search-normal.svg'
import heart from '../../assets/img/heart.svg'
import notification from '../../assets/img/notification.svg'
import setting from '../../assets/img/setting.svg'
import avatar from '../../assets/img/avatar.svg'





const Header = () => {
    return (
        <header>
            <div className="header__container container">
                <>
                    <img src={logo} alt="" className='header__logo' />

                    <div className="header__searchbar">
                        <input className='searchbar__input' type="text" placeholder='Search something here' />
                        <img className='searchbar__label' src={search} alt="" />
                    </div>
                </>

                <div className="header__circles">
                    <button className='header__favorites header__button'><img src={heart} alt="" /></button>
                    <button className='header__notification header__button'><img src={notification} alt="" srcset="" /></button>
                    <button className='header__settings header__button'><img src={setting} alt="" srcset="" /></button>
                    <img src={avatar} alt="" className='header__profile' />
                </div>
            </div>
        </header>
    )
}

export default Header;