import styles from './Header.css';


const Header = () => {
    return (
        <header>
            <div className="container header__container ">
                <img src="" alt="" className='header__logo' />
                <input type="text" className='header__searchbar' />
                <button className='header__favorites'></button>
                <button className='header__notification'></button>
                <button className='header__settings'>Test</button>
                <img src="" alt="" className='header__profile' />
            </div>
        </header>
    )
}

export default Header;