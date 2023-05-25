function RegisterInput ({label, name, id, handleChange}) {

    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input type="text" name={name} id={id} onChange={handleChange} />
        </div>
    )
}

export default RegisterInput;