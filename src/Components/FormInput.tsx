const FormInput = ({errors, register, name, type, placeholder, params}) => {

    return (
        <label className="login__label">
            <input 
                className={`login__input ${errors[name] ? 'error' : ''}`}
                {...register(name, params)} 
                type={type} 
                placeholder={placeholder}
            />
            {errors[name] ? <span className="login__error">{errors[name]?.message}</span> : null}
        </label>
    )
}

export default FormInput