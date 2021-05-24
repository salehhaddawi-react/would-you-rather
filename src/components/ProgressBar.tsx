import React from "react";

interface ProgressBarProps {
    label?: string;
    text?: string;
    progress: number;
    color: string
}

export default function ProgressBar(props: ProgressBarProps) {
    const {color, progress, label, text} = props;

    return (
        <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
                <div>
                    <span className={`text-xs font-semibold inline-block py-1 px-2 rounded-full text-${color}-600 bg-${color}-200`}>
                        {label}
                    </span>
                </div>
                <div className="text-right">
                    <span className={`text-xs font-semibold inline-block text-${color}-600`}>
                        {progress}%
                    </span>
                </div>
            </div>
            <div className={`overflow-hidden h-6 mb-4 text-xs flex rounded bg-${color}-200 text-center items-center`}>
                {text && <span className="absolute" style={{transform: 'translateX(-50%)', left: '50%'}}>{text}</span>}
                <div style={{width: progress + '%'}} className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-${color}-500 h-full`}>
                </div>
            </div>
        </div>
    );
}
