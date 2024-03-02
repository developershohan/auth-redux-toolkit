
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
// import { createToast } from "../../helper/helpers.jsx"
import axios from 'axios';


const SignIn = () => {
    const navigate = useNavigate()

    const [errorMsg, setErrorMsg] = useState(null)

    const [input, setInput] = useState({
        auth: "",
        password: ""
    })
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const handleInputChange = (e) => {
        setInput((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        // const res = await axios.post("/api/v1/auth/register")
        // console.log(res);

        try {
            setLoading(true);
            setError(false);

            // Using axios for the POST request
            await axios.post('/api/v1/auth/login', input);
            navigate("/")

        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx

                setError(true);
                setErrorMsg(error.response.data.message)// And even the headers
            } else if (error.request) {
                // The request was made but no response was received

                setError(true);
                setErrorMsg(error.response.data.message)
            } else {
                // Something happened in setting up the request that triggered an 
                setError(true);
                setErrorMsg(error.response.data.message)
            }
            // Handle error situation
        } finally {
            setLoading(false); // Ensure loading is false after operation
        }



    };

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
                                        id="auth"
                                        name="auth"
                                        type="auth"
                                        autoComplete="auth"
                                        placeholder='auth Address'
                                        value={input.auth}
                                        required
                                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        onChange={handleInputChange}
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
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    {loading ? "Loading..." : "Sign in"}
                                </button>
                            </div>
                            <p> {error && `${errorMsg}`}</p>
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