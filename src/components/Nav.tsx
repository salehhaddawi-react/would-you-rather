import React from "react";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {State, User} from "../interfaces";
import {handleLogout} from "../actions/auth";

export default function Nav () {
    const user = useSelector((state: State) => state.auth).user;
    const [menuOpen, setMenuOpen] = React.useState(false);
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(handleLogout(user as User));
    }

    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full">
                    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-blue-400">
                        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                            <div
                                className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
                                <NavLink to="/" exact activeClassName="active" className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">
                                    Would You Rather
                                </NavLink>
                                <button onClick={() => setMenuOpen((state) => !state)}
                                    className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
                                    type="button">
                                    <span className="block relative w-6 h-px rounded-sm bg-white"/>
                                    <span className="block relative w-6 h-px rounded-sm bg-white mt-1"/>
                                    <span className="block relative w-6 h-px rounded-sm bg-white mt-1"/>
                                </button>
                            </div>
                            <div className={`sm:flex-grow sm:inline-flex items-center ${menuOpen ? 'flex' : 'hidden'}`}>
                                <ul className="flex flex-col lg:flex-row list-none ml-auto">
                                    <li className="nav-item">
                                        <NavLink to="/" exact activeClassName="underline" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                                            Home
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/add" exact activeClassName="underline" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                                            New Question
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/leaderboard" exact activeClassName="underline" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                                            Leaderboard
                                        </NavLink>
                                    </li>
                                </ul>
                                <ul className={`list-none ml-auto ${!user ? 'hidden' : ''}`}>
                                    <li className="nav-item flex align-middle items-center">
                                        <span className="text-white">hello، {user?.name}</span>
                                        <img src={user?.avatarURL} alt="profile-pic" className="rounded-full w-8 mx-2"/>
                                        <button onClick={logout} className="text-white">Logout</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
}
