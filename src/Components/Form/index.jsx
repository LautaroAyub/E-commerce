import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Form = ({ handleSign, dataState, changeState, type }) => {
    const expressions = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        password: /^.{4,12}$/,
    }
    const errors = {
        emailError: "enter a valid email",
        passwordError: "The password must be between 4 and 12 digits"
    }
    const [formIsOk, setFormIsOk] = useState(true)
    const [emailIsOk, setEmailIsOk] = useState(false)
    const [passwordIsOk, setPasswordIsOk] = useState(false)

    const onChangeValidation = () => {
        expressions.email.test(dataState.email) ? setEmailIsOk(true) : setEmailIsOk(false);
        expressions.password.test(dataState.password) ? setPasswordIsOk(true) : setPasswordIsOk(false);
    }
   
    useEffect(() => {
        onChangeValidation()
    }, [dataState])

    useEffect(() => {
        emailIsOk && passwordIsOk ? setFormIsOk(true) : setFormIsOk(false)
    }, [emailIsOk, passwordIsOk])


    return (
        <form onSubmit={handleSign}>
            <p>
                <span className='font-light text-sm'>Email: </span>
                <input
                    className={`border-2 border-solid ${dataState.email == 0 ? "border-gray-500" : emailIsOk ? "border-green-500 " : "border-red-500 border-2 border-solid"}}`}
                    placeholder="example@gmail.com"
                    name="email"
                    value={dataState.email}
                    onChange={changeState} />
                {(!emailIsOk && dataState.email.length > 0) && <p>{errors.emailError}</p>}

            </p>

            <p className=" mb-10">
                <div className="relative flex flex-row">
                    <span className='font-light text-sm'>Password: </span>
                    <input
                        className={` border-2 border-solid ${dataState.password == 0 ? "border-gray-500" : passwordIsOk ? "border-green-500 " : "border-red-500 border-2 border-solid"}}`}
                        placeholder="Enter your password"
                        type="password"
                        name="password"
                        value={dataState.password}
                        onChange={changeState} />
                </div>
                {(!passwordIsOk && dataState.password.length > 0) && <p>{errors.passwordError}</p>}
            </p>
            
            {
                type === "sign-in" &&
                <>
                    <button
                        disabled={!formIsOk}
                        type="submit"
                        className='bg-black disabled:bg-black/40 text-white  w-full rounded-lg py-3 mt-4 mb-2'>
                        Log in
                    </button>
                    <Link
                        to="/sign-up">
                        <button
                            className='border border-black disabled:text-black/40 disabled:border-black/40
                                         rounded-lg w-full mt-6 py-3'>
                            Sign up
                        </button>
                    </Link>
                </>
            }
            {type === "sign-up" &&
                <>
                    <button
                        disabled={!formIsOk}
                        type="submit"
                        className='border border-black disabled:text-black/40 disabled:border-black/40
                      rounded-lg w-full mt-6 py-3'
                    >
                        Sign up
                    </button>
                    <Link to="/sign-in">
                        <button
                            type="submit"
                            className='bg-black disabled:bg-black/40 text-white  w-full rounded-lg py-3 mt-4 mb-2'>
                            Log in
                        </button>
                    </Link>
                </>

            }

            <div className='text-center'>
                <a className='font-light text-xs underline underline-offset-4' href='/'>Forgot my password</a>
            </div>

        </form>
    )
}
export default Form