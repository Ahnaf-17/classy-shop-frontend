import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    const navLinks = <>
    <li><NavLink to='/' className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-black" : ""
    }>Home</NavLink></li>
    <li><NavLink to='/addProduct' className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-black" : ""
    }>Add Product</NavLink></li>
    <li><NavLink to='/myCart' className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-black" : ""
    }>My Cart</NavLink></li>
    <li><NavLink to='/login' className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-black" : ""
    }>Log in</NavLink></li>
    
</>


    return (
        <div className="navbar  bg-white text-neutral-content">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="black"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white  text-amber-700 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>

                <Link to='/'><img src="https://i.ibb.co/17HxRTd/logo.png" alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu text-amber-700 menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        {/* <img src={avatar} /> https://i.ibb.co/ZBXgGBM/user.png*/}

                    </div>
                </label>
                {/* https://i.ibb.co/fqgXySz/avater.png */}
                <div className="dropdown dropdown-end">
                    {
                        // user ?
                        //     <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        //         {
                        //             user.photoURL ?
                        //             <div className="w-10 rounded-full">
                        //             <img src={user.photoURL} alt="https://i.ibb.co/fqgXySz/avater.png" />
                        //         </div>
                        //         :
                        //         <div className="w-10 rounded-full">
                        //             <img src='https://i.ibb.co/fqgXySz/avater.png' alt="" />
                        //         </div>
                        //         }
                        //     </label>
                        //     :
                        //     <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        //         <div className="w-10 rounded-full">
                        //             <img src="https://i.ibb.co/ZBXgGBM/user.png" />
                        //         </div>
                        //     </label>
                    }

                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-neutral rounded-box w-52">
                        {/* <li>
                            {
                                user ?
                                    <div className="flex flex-col items-start justify-start text-left">
                                        <p>Welcome,{user.displayName}</p>
                                        <button onClick={handleSignOut} className="btn">Log out</button>
                                    </div>
                                    :
                                    <Link to='/login'>
                                        <button className="btn bg-yellow-400 font-bold">Login</button>
                                    </Link>
                            }
                        </li> */}
                    </ul>
                </div>

                {/* {
                    user ?
                        <div className="md:flex md:justify-center md:items-center md:gap-2">
                            <p>Welcome,{user.displayName}</p>
                            <button onClick={handleSignOut} className="btn">Log out</button>
                        </div>
                        :
                        <Link to='/login'>
                            <button className="btn bg-yellow-400 font-bold">Login</button>
                        </Link>
                } */}

            </div>
        </div>
    );
};

export default Navbar;