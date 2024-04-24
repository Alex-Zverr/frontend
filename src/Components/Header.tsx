import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className="header">
            <div className="header__container container">
                <div className="header__logo">
                <Link className="header__link" to="/"><img src="/logo.png" alt="Лого сайта"/></Link>
                </div>
                <div className="header__nav">
                    <Link className="header__link" to="/about">О нас</Link>
                    <Link className="header__link" to="/contacts">Контакты</Link>
                </div>
                <div className="header__buttons">
                    <Link className="header__btn btn" to="/login">Войти в аккаунт</Link>
                </div>
            </div>
        </header>
    )
}

export default Header