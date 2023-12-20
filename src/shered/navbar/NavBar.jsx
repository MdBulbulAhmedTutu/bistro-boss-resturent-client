import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    const navOptions = <>
        <li className="mr-2 text-white"><NavLink to="/">Home</NavLink></li>
        <li className="mr-2 text-white"><NavLink to="/contact">Contact Us</NavLink></li>
        <li className="text-white"><NavLink to="/dashboard">DashBoard</NavLink></li>
    </>
    return (
        <div className="absolute z-10 top-0 w-full">
            <div className="navbar bg-[#38363693] lg:px-10 md:px-5 fixed">
                <div className="navbar-start">
                    <div className="dropdown z-10">
                        <div tabIndex={0} role="button" className="btn btn-ghost text-white lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm bg-gray-500 dropdown-content mt-3 z-[10] p-2 shadow  rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <Link>
                        <h2 className="text-xl font-semibold text-white">BISTRO_BOSS</h2>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="text-white bg-orange-600 font-bold px-6 py-2 rounded-sm">Login</button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;