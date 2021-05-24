import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Store, User} from "../interfaces";
import ItemsSelect, {Item} from "../components/ItemsSelect";
import {handleLogin} from "../actions/auth";
import {Redirect} from "react-router-dom";

function Login() {
    const users = useSelector((state: Store) => state.users);
    const loggedUser = useSelector((state: Store) => state.auth);
    const [user, setUser] = useState<Item | null>(null);
    const dispatch = useDispatch();

    const onChange = (item: Item) => {
        setUser(item);
    }

    const signIn = () => {
        if (user) {
            dispatch(handleLogin(user as User));
        }
    }

    if (loggedUser) {
        // successfully logged in
        return <Redirect to="/"/>
    }

    return (
        <div className="flex w-full h-screen">
            <div className="flex flex-col m-auto shadow-lg text-center lg:w-4/12 px-4 rounded-lg border-0 bg-white p-2">
                <h1 className="text-4xl text-blueGray-500">Welcome To Would You Rather</h1>
                <img
                    src={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"}
                    alt={"logo"}/>
                <ItemsSelect items={users} onChange={onChange} selected={user} placeholder="Please choose User..."/>
                <button onClick={signIn} type="button" className={`mt-4 mb-4 text-white ${user ? 'bg-blue-400 active:bg-blue-400' : 'bg-gray-300 pointer-events-none'} font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`}>Sign In</button>
            </div>
        </div>
    );
}

export default Login;
