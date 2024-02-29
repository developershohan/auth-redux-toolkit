
import {  useState } from "react"
import { Link } from "react-router-dom"
// import { createToast } from "../../helper/helpers.jsx"


const SignIn = () => {



    const [input, setInput] = useState({
        email: "",
        password: ""
    })

    const handleInput = (e) => {
        e.preventDefault()
        setInput((prevInput) => ({

            ...prevInput,
            [e.target.name]: e.target.value

        }))


    }
    const handleSubmit = async (e) => {

        e.preventDefault()
        

    }

    return (
        <div>
            <h1></h1>
            <div className=" border rounded-lg border-blue-100" >
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-6 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Sign in
                        </h2>
                    </div>
                    <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form onSubmit={handleSubmit} className="space-y-3" method="POST">
                            <div>
                                <div>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        placeholder='Email Address'
                                        value={input.email}
                                        required
                                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        onChange={handleInput}
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        placeholder='Password'
                                        value={input.password}
                                        required
                                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        onChange={handleInput}
                                    />
                                </div>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Sign in
                                </button>
                            </div>
                        </form>

                        <p className="mt-10 text-center text-sm text-gray-500">
                            Not a member?{' '}
                            <Link to="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                Create An Account
                            </Link>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SignIn