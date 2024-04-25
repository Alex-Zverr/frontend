import { SubmitHandler, useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import FormInput from "../Components/FormInput"

interface ILogin {
    login: string,
    password: string 
}

const Login = () => {
    const { 
        register, 
        handleSubmit,
        reset,
        formState: { errors } 
    } = useForm<ILogin>({
        mode: 'onBlur',
        defaultValues: {
            login: '',
            password: ''
        }
    })

    const onSubmit: SubmitHandler<ILogin> = data => {
        console.log(data);
        reset();
    }

    return (
        <div className="login">
            <div className="container">
                <div className="login__holder">
                    <span className="login__title">Войти в аккаунт</span>
                    <form 
                        className="login__form" 
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <FormInput 
                            errors={errors} 
                            register={register}
                            name="login"
                            placeholder="Логин"
                            type="text"
                            params={{
                                required: "Поле обязательно для заполнения",
                                minLength: {
                                    value: 5,
                                    message: "Минимальная длина логина 5 символов"
                                }
                            }}
                        />
                        <FormInput 
                            errors={errors} 
                            register={register}
                            name="password"
                            placeholder="Пароль"
                            type="password"
                            params={{
                                required: "Поле обязательно для заполнения",
                                minLength: {
                                    value: 6,
                                    message: "Минимальная длина логина 6 символов"
                                }
                            }}
                        />
                        <button className="login__btn btn">Войти</button>
                        <Link className="login__link" to="/registration">Зарегистрироваться</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login