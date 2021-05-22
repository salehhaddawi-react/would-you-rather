import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {Store} from "../interfaces";
import ItemsSelect, {Item} from "../components/ItemsSelect";

function Login() {
    const users = useSelector((state: Store) => state.users);
    const [user, setUser] = useState<Item | null>(null);

    const onChange = (item: Item) => {
        setUser(item);
    }

    return (
        <div className={"flex w-full h-screen"}>
            <div className={"flex flex-col h-1/2 m-auto shadow-lg text-center w-1/2"}>
                <h1>Welcome To Would You Rather</h1>
                <span className={"text-gray-400 text-sm"}>Please Sign in to continue</span>
                <img
                    src={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"}
                    alt={"logo"}/>
                <ItemsSelect items={users} onChange={onChange} selected={user} placeholder="Please choose User..."/>
                <button type="button" className={`m-2 p-4 rounded text-white font-bold text-lg ${user ? 'bg-blue-300 hover:bg-blue-400' : 'bg-gray-300 pointer-events-none'}`}>Sign In</button>
            </div>
        </div>
    );
}

export default Login;
