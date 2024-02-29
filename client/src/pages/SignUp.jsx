
import { Link } from "react-router-dom"
import { useState } from "react"
// import axios from "axios"


const SignUp = () => {



    const [input, setInput] = useState({
        name: "",
        auth: "",
        password: "",
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
    setError(false)
    const res = await fetch('/api/v1/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(input),
    });
    const data = await res.json();
    console.log(data);
    if (data.success === false) {
        setError(true);
        return
    }
    setLoading(false);
} catch (error) {
    setLoading(false);
    setError(true)
}



    };

    return (
        <div>

            <div className=" border bg-white rounded-lg border-blue-100" >
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-6 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Sign Up
                        </h2>
                    </div>
                    <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-3" onSubmit={handleSubmit} method="POST">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    autoComplete="name"
                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    placeholder="name"
                                    onChange={handleInputChange}
                                    value={input.name}
                                />
                            </div>
                            <div>
                                <input
                                    id="auth"
                                    name="auth"
                                    type="auth"
                                    autoComplete="auth"
                                    placeholder='auth Address'
                                    required
                                    className="block w-full bg-transparent rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={handleInputChange}
                                    value={input.auth}
                                />
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    placeholder='Password'
                                    required
                                    className="block w-full bg-transparent rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={handleInputChange}
                                    value={input.password}
                                />
                            </div>
                            <div>
                                <button
                                    type="submit" disabled={loading}
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    {loading? "Loading...": "Sign Up"}
                                </button>
                            </div>
                            <p> {error && "something is wrong"}</p>
                        </form>
                        <p className="mt-10 text-center text-sm text-gray-500">
                            Already have an Account?{' '}
                            <Link to="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
            </div >

        </div >
    )
}

export default SignUp