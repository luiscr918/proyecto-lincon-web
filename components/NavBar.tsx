

const NavBar = () => {
    return (
        <div>
            <nav className="fixed top-0 border-solid border-gray-200 w-full border-b py-3 bg-white z-50 ">
                <div className="container mx-auto ">
                    <div className="w-full flex  flex-col lg:flex-row">
                        <div className=" flex justify-between  lg:flex-row">
                            <button data-collapse-toggle="navbar-with-text" type="button"
                                className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                aria-controls="navbar-with-text" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                        clipRule="evenodd"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="hidden w-full lg:flex item-center lg:pl-11 " id="navbar-with-text">
                            <ul className="flex items-center flex-col mt-4 lg:mt-0 lg:mx-auto lg:flex-row gap-4">
                                <li>
                                <a href="javascript:;"
                                    className="flex items-center justify-between text-gray-500 text-sm lg:text-base font-medium hover:text-indigo-700 transition-all duration-500 mb-2 lg:mr-6 md:mb-0 md:mr-3">Inicio</a>
                                </li>
                                <li>
                                <a href="javascript:;"
                                    className="flex items-center justify-between text-gray-500 text-sm lg:text-base font-medium hover:text-indigo-700 transition-all duration-500 mb-2 lg:mr-6 md:mb-0 md:mr-3"></a>
                                </li>
                                <li>
                                <a href="javascript:;"
                                    className="flex items-center justify-between text-gray-500 text-sm lg:text-base font-medium hover:text-indigo-700 transition-all duration-500 mb-2 lg:mr-6 md:mb-0 md:mr-3"></a>
                                </li>
                                <li>
                                <a href="javascript:;"
                                    className="flex items-center justify-between text-gray-500 text-sm lg:text-base font-medium hover:text-indigo-700 transition-all duration-500 mb-2 lg:mr-6 md:mb-0 md:mr-3"></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;