import { useState } from 'react'
import { Dialog, Popover } from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import {useSelector} from "react-redux"


export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const {user} = useSelector((state)=>state.user)

    return (
        <header className="bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-12">


                    <Link to={"/about"} className="text-sm font-semibold leading-6 text-gray-900">
                        About
                    </Link>

                </Popover.Group>


                {user ? 
                    <Link to={"/profile"} className="text-sm font-semibold leading-6 text-gray-900">
                                       <img className="h-10 w-auto" src= {user.user.profilePicture} alt="" />
                </Link>

                    
                    :
                    
           (    
            
            <div className="hidden gap-2 lg:flex lg:flex-1 lg:justify-end">
                    
                    <Link to={"/sign-up"} className="text-sm font-semibold leading-6 text-gray-900">
                    Sign Up <span aria-hidden="true">&rarr;</span>
                </Link>
                
                <Link to={"/sign-in"} className="text-sm font-semibold leading-6 text-gray-900">
                        Log in <span aria-hidden="true">&rarr;</span>
                    </Link>

 
            </div>
            
) }

            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link to={"/about"} className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt=""
                            />
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">

                                <Link to={"/about"} className="text-sm font-semibold leading-6 text-gray-900">
                                    About
                                </Link>
                            </div>
                            <div className="py-6 flex flex-col ">
                                <Link to={"/sign-up"} className="text-sm font-semibold leading-6 text-gray-900">
                                    Sign Up <span aria-hidden="true">&rarr;</span>
                                </Link>
                                <Link to={"/sign-in"} className="text-sm font-semibold leading-6 text-gray-900">
                                    Log in <span aria-hidden="true">&rarr;</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
