import { SubmitHandler, useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import FormInput from "../Components/FormInput"
import { ILogin } from "../Interface/auth"
import { useMutation } from "@tanstack/react-query"
import { loginUser } from "../Services/auth.services"


const Login = () => {
    const { 
        register, 
        handleSubmit,
        reset,
        formState: { errors } 
    } = useForm<ILogin>({
        mode: 'onBlur',
    })

    const { mutate, isSuccess, data } = useMutation({
        mutationFn: async (data: ILogin) => await loginUser(data),
    })

    const onSubmit: SubmitHandler<ILogin> = loginData => {
        mutate(loginData);

        if(isSuccess) {
            console.log(data);
            reset();
        }

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
                            name="username"
                            placeholder="Логин"
                            type="text"
                            params={{
                                required: "Поле обязательно для заполнения",
                                minLength: {
                                    value: 3,
                                    message: "Минимальная длина логина 3 символов"
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