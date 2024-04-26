import { SubmitHandler, useForm } from "react-hook-form";
import FormInput from "../Components/FormInput"
import { IRegisterUser } from "../Interface/user";
import { registerUser } from "../Services/auth.services";

const Registration = () => {
    const { 
        register, 
        handleSubmit,
        reset,
        getValues,
        formState: { errors } 
    } = useForm<IRegisterUser>({
        mode: 'onBlur',
    })

    const onSubmit: SubmitHandler<IRegisterUser> = async data => {
        delete data.confirmPassword;
        
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
                            name="username"
                            placeholder="Логин"
                            type="text"
                            params={{
                                required: "Поле обязательно для заполнения",
                                minLength: {
                                    value: 3,
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
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 
                                    message: "Пользовательская почта введена некорректно"
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
                            }}
                        />
                        <FormInput 
                            errors={errors} 
                            register={register}
                            name="confirmPassword"
                            placeholder="Повторите пароль"
                            type="password"
                            params={{
                                required: "Поле обязательно для заполнения",
                                validate: (val: string) => {
                                    if (val !== getValues("password")) {
                                        return "Пароли не совпадают";
                                    } else {
                                        return true;
                                    }
                                }
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