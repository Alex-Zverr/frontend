import { SubmitHandler, useForm } from "react-hook-form";
import FormInput from "../Components/FormInput"
import { IUser } from "../Interface/user";
import { registerUser } from "../Services/auth.services";

const Registration = () => {
    const { 
        register, 
        handleSubmit,
        reset,
        formState: { errors } 
    } = useForm<IUser>({
        mode: 'onBlur',
    })

    const onSubmit: SubmitHandler<IUser> = async data => {
        let user = await registerUser(data);
        console.log(user);
        
        reset();
    }

    return (
        <div className="registration">
            <div className="container">
                <div className="registration__holder">
                    <span className="registration__title">Регистрация</span>
                    <form 
                        className="registration__form"
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
                            name="email"
                            placeholder="email"
                            type="text"
                            params={{
                                required: "Поле обязательно для заполнения",
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
                            }}
                        />
                        <FormInput 
                            errors={errors} 
                            register={register}
                            name="repeatPassword"
                            placeholder="Повторите пароль"
                            type="password"
                            params={{
                                required: "Поле обязательно для заполнения",
                            }}
                        />
                        <button className="registration__btn btn">Зарегистрироваться</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Registration