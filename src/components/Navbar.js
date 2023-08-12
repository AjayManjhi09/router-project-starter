import React from 'react'
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom'
import logo from "../assets/Logo.svg";


const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;
  return (
    <div className=' flex justify-between items-center w-11/12 max-w-[1160px] p-4 mx-auto'>
        <Link to="/">
            <img src={logo} alt="Logo" width={160} height={32} loading="lazy"/>
        </Link>

        <nav>
            <ul className=' flex gap-x-6 text-richblack-100'>
                <li >
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/">About</Link>
                </li>

                <li>
                    <Link to="/">Contact</Link>
                </li>
            </ul>
        </nav>

        {/* login - signup - logout - dashboard */}

        <div className=' flex items-center gap-x-4'>
            { !isLoggedIn &&
                <Link to="/login">
                    <button className=' bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>
                        Login
                    </button>
                </Link>
            }

            { !isLoggedIn &&
                <Link to="/singup">
                    <button className=' bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>
                        Sign Up
                    </button>
                </Link>
            }

            { isLoggedIn &&
                <Link to="/">
                    <button className=' bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'
                     onClick={ () =>{
                        setIsLoggedIn(false)
                        toast.success("Logged out"); 
                    }}>
                        Log Out
                    </button>
                </Link>
            }

            { isLoggedIn &&
                <Link to="/dashboard">
                    <button className=' bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>
                        Dashbord 
                    </button>
                </Link>
            }
        </div>
    </div>
    
  )
}

export default Navbar