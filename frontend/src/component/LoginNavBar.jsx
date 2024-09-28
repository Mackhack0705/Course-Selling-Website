import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";


const LoginNavBar = () => {
    const menuRef = useRef();
    const searchBarRef = useRef();
    const searchIconRef = useRef();
    const navigate = useNavigate();
    useGSAP(() => {
      gsap.from("#logo", {
        y: 20,
        duration: 1,
        delay: 0.5
      })
      gsap.from("#searchBar", {
        y: 20,
        duration: 1,
        delay: 0.5
      })
      gsap.from("#menu .btn", {
        y: 20,
        duration: 1,
        delay: 0.5
      })
    })

    function showSearchBar() {
      searchBarRef.current.classList.remove('hidden');
      searchIconRef.current.classList.add('hidden');
    }
    function hideSearchBar() {
      searchBarRef.current.classList.add('hidden');
      searchIconRef.current.classList.remove('hidden');
    }

    const handleClickOutside = (event) => {
      if(searchBarRef.current && !searchBarRef.current.contains(event.target)) {
        hideSearchBar();
      }
    }

    useEffect(() => {
      // Add event listener when search bar is visible
      document.addEventListener('mousedown', handleClickOutside);

      // Cleanup the event listener on unmount
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);

    function openMenu() {
      menuRef.current.classList.remove('invisible');
    }

    function closeMenu() {
      menuRef.current.classList.add('invisible');
    }
  return (
    <div className="flex items-center justify-between relative text-lg font-bold py-6 px-4 bg-[#ebfffe] xl:px-20">
      <div id="logo" className="text-2xl md:text-3xl">
        M<span className="text-[#01c8b5]">a</span>ke
        <span className="text-[#01c8b5]">hack</span>
      </div>
      <div ref={searchBarRef} id="searchBar" className="w-1/4 hidden mr-4 md:block">
        <SearchBar />
      </div>
      <div ref={searchIconRef} onClick={showSearchBar} className="ml-28 cursor-pointer md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
      </div>
      <div onClick={openMenu} className="md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>
      <div ref={menuRef} id="menu" className="flex gap-3 flex-wrap justify-center absolute top-14 right-5 bg-white border-[1px] border-gray-300 rounded-md w-28 py-4 invisible md:visible md:bg-transparent md:border-0 md:w-40 md:relative md:top-0 lg:justify-between">
        {/* Login and signup or Profile */}
        <div onClick={closeMenu} className="cursor-pointer md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 absolute right-2 top-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </div>
        <button className="btn text-sm text-[#0a2e31] mr-3 hover:shadow-lg md:text-lg" onClick={() => {
            navigate("/login");
            closeMenu();
          }
          }>
          Login
        </button>
        <button className="btn border-[1.5px] border-[#0a2e31] px-3 py-1 rounded-3xl text-sm bg-[#01c8b5] text-[#0a2e31] hover:shadow-xl md:text-lg" onClick={() => {
          navigate("/signup");
          closeMenu();
        }
        }>
          SignUp
        </button>
      </div>
    </div>
  )
}

export default LoginNavBar
