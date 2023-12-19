import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    const navOptions = <>
        <li className="mr-2"><NavLink to="/">Home</NavLink></li>
        <li className="mr-2"><NavLink to="/contact">Contact Us</NavLink></li>
        <li><NavLink to="/dashboard">DashBoard</NavLink></li>
    </>
    return (
        <div className="max-w-7xl mx-auto px-4">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <Link>
                        <h2 className="text-xl font-semibold">BISTRO <span className="text-orange-400 text-sm">BOSS</span></h2>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-ghost">Login</button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;