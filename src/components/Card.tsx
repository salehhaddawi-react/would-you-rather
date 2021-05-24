import React from "react";

interface CardProps {
    image: string;
    title: string;
    children?: any;
}

export function Card(props: CardProps) {
    const {image, title, children} = props;

    return (
        <div className="bg-gradient-to-t from-black via-blue-500 to-blue-400 rounded-3xl shadow-md relative flex flex-col items-center justify-between md:items-start py-5 md:p-5 transition-all duration-150">
            {/* IMG PROFILE */}
            <img className="rounded-full w-16 h-16 shadow-sm absolute -top-8 transform md:scale-110 duration-700" src={image} alt="" />

            {/*  TEXTS */}
            <div className="align-middle text-2xl font-semibold text-gray-200 text-center m-auto md:m-0 md:mt-8 mt-4">{title}</div>
            <div className="text-white font-light md:block">
                { children }
            </div>

            {/* BUTTONS */}
            <div className="flex w-full justify-around">
                <button type="button" className="mt-2 text-white bg-blue-400 active:bg-blue-400 font-bold uppercase text-base px-8 py-2 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 ease-linear transition-all duration-150">
                    View Poll
                </button>
            </div>
        </div>
    );
}
