import { SubmitHandler, useForm } from "react-hook-form";
import FormInput from "../Components/FormInput"
import { IRegisterUser } from "../Interface/user";
import { registerUser } from "../Services/auth.services";
import { useMutation } from "@tanstack/react-query";

const Registration = () => {

    const {mutate, data, isSuccess} = useMutation({
        mutationFn: async (data: IRegisterUser) => await registerUser(data),
    })

    const { 
        register, 
        handleSubmit,
        reset,
        getValues,
        formState: { errors } 
    } = useForm<IRegisterUser>({
        mode: 'onBlur',
    })

    const onSubmit: SubmitHandler<IRegisterUser> = async newUserData => {
        delete newUserData.confirmPassword;
    
        mutate(newUserData);

        if(isSuccess){
            console.log(data);
        }
        
        
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
                                    message: "Минимальная длина логина 3 символов"
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