import {RxHamburgerMenu} from "react-icons/rx";
import {useState} from "react";
import ROUTES from "@/constants/routs.js";

export default function Header() {
    const [isMobileMenuShown, setIsMobileMenuShown] = useState();

    function handleClickBurger() {
        setIsMobileMenuShown(!isMobileMenuShown);
    }

    return (
        <nav className="flex flex-wrap justify-left items-center p-3 bg-gray-100 space-x-5">
            {/* Burger button */}
            <div className="lg:hidden">
                <button
                    onClick={handleClickBurger}
                    className="rounded-lg p-2 focus:ring-1 focus:ring-gray-200"
                >
                    <RxHamburgerMenu size={25}/>
                </button>
            </div>
            {/* Logo */}
            <div className="flex items-center justify-between w-screen">
                <div>
                    <a href="#">
                        <h1 className="text-xl font-semibold">WBLight</h1>
                    </a>
                </div>
                <div className="cursor-pointer">Войти</div>
            </div>
            {/* Menu list for mobile */}
            <div
                className={`${!isMobileMenuShown && "hidden"} lg:hidden w-full mt-2`}
            >
                <ul className="p-4 bg-gray-50 text-md border border-gray-100 rounded-lg">
                    {ROUTES.map((route, index) => {
                        return (
                            <li
                                className={`px-3 py-2 rounded cursor-pointer ${index === 0 ? "bg-[#CCE5FF]" : "hover:bg-gray-100"} `}
                                key={route}
                            >
                                {route}
                            </li>
                        );
                    })}
                </ul>
            </div>
            {/*Menu list for large screen*/}
        </nav>
    );
}