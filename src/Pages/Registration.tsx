const Registration = () => {
    return (
        <div className="registration">
            <div className="container">
                <div className="registration__holder">
                    <span className="registration__title">Регистрация</span>
                    <form className="registration__form">
                        <input className="registration__input" type="text" placeholder="Логин" />
                        <input className="registration__input" type="email" placeholder="email" />
                        <input className="registration__input" type="password" placeholder="Пароль" />
                        <input className="registration__input" type="password" placeholder="Повторите пароль" />
                        <button className="registration__btn btn">Зарегистрироваться</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Registration