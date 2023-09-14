import NavComponent from "./NavComponent";

export default function Navbar() {
    return (
        <div className="mx-10 top-0 flex-none">
            <div className="py-4 lg:mx-0">
                <div className="relative flex items-center">
                    <div className="md:hidden flex items-center">
                        <button id="menuButton" type="button" className="lg:hidden text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300">
                            <span className="sr-only">Navigation</span>
                            <svg width="24" height="24">
                                <path d="M5 6h14M5 12h14M5 18h14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                </path>
                            </svg>
                        </button>
                    </div>
                    <div id="menu" className="hidden md:flex items-center">
                        <nav className="text-sm mx-auto">
                            <NavComponent />
                        </nav>
                    </div>
                    <div className="relative lg:flex items-center ml-auto">
                        <button type="button" className="focus:outline-none text-white bg-fuchsia-700 hover:bg-fuchsia-300 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Contact</button>
                    </div>
                </div>
            </div>
        </div>
    )
  }