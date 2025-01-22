import { Link, NavLink, useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase/config";
import { signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import Swal from "sweetalert2";
import Logo from "./finallogo.png";

export const Headerr = () => {
  const [isAuth, setIsAuth] = useState(JSON.parse(localStorage.getItem("isAuth")) || false);
  const navigate=useNavigate();
  function handleLogin(){
    signInWithPopup(auth, provider).then((result) => {
      setIsAuth(true);
      localStorage.setItem("isAuth", true);
      console.log(result);
      Swal.fire({
        title: 'Logged In Successully',
        icon: 'success',
        confirmButtonText: 'Cool!'
      })
    })
    .catch(function (error) {
      console.error(error);
      Swal.fire({
        title: `Login Failed`,
        icon: 'error',
        confirmButtonText: 'Okay'
      })
    })
  }
  function handleLogout(){
    signOut(auth);
    setIsAuth(false);
    navigate("/");
    localStorage.setItem("isAuth", false);
    Swal.fire({
      title: 'Logged Out Successully!',
      icon: 'success',
      confirmButtonText: 'Okay'
    })
  }
  return (
    <header>
      <nav className="font-serif z-50 relative bg-Bluee shadow-md px-4 py-3">
        <div className="max-w-screen-xl z-50 flex items-center justify-between mx-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={Logo} className="h-12" alt="PlanOrama Logo" />
            <div className="flex flex-col items-start">
              <span className="text-3xl font-bold text-blue-600 tracking-wide">
                Plan<span className="text-blue-800">O</span>rama
              </span>
              <span className="text-sm font-medium text-gray-600">
                Explore. Plan. Live.
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className=" md:flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-base font-medium ${
                  isActive ? "text-blue-700" : "text-gray-700"
                } hover:text-blue-600 transition duration-300`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-base font-medium ${
                  isActive ? "text-blue-700" : "text-gray-700"
                } hover:text-blue-600 transition duration-300`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-base font-medium ${
                  isActive ? "text-blue-700" : "text-gray-700"
                } hover:text-blue-600 transition duration-300`
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/faqs"
              className={({ isActive }) =>
                `text-base font-medium ${
                  isActive ? "text-blue-700" : "text-gray-700"
                } hover:text-blue-600 transition duration-300`
              }
            >
              FAQs
            </NavLink>
          </div>

          {/* Profile Icon */}
          <div className="flex items-center space-x-4">
          {isAuth ? (  
          <NavLink
              to="/mydashboard"
              className={({ isActive }) =>
                `text-base font-medium ${
                  isActive ? "text-blue-700" : "text-gray-700"
                } hover:text-blue-600 transition duration-300`
              }
            >
              Dashboard
            </NavLink>):<></>}

            <div className="text-gray-700 hover:text-blue-600 transition duration-300">
            {! isAuth ? ( <button onClick={handleLogin}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-google border-2 p-1 border-gray-950 rounded-full" viewBox="0 0 16 16">
  <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"/>
</svg></button>):<button onClick={handleLogout}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-door-closed border-2 p-1 border-gray-950" viewBox="0 0 16 16">
  <path d="M3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3zm1 13h8V2H4z"/>
  <path d="M9 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/>
</svg></button>}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
