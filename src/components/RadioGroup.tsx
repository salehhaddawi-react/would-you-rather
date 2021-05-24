import React, {useState} from "react";
import * as headlessui from "@headlessui/react";
import {Item} from "../interfaces";


interface RadioGroupProps {
    items: Array<Item>;
    onChange(value: string): void;
}

export default function RadioGroup(props: RadioGroupProps) {
    const {items} = props;
    const [selected, setSelected] = useState<string>();

    const onChange = (value: string) => {
        setSelected(value);

        props.onChange(value);
    }

    return (
        <headlessui.RadioGroup value={selected} onChange={onChange}>
            <headlessui.RadioGroup.Label className="sr-only">Server size</headlessui.RadioGroup.Label>
            <div className="space-y-2">
                {items.map((item) => (
                    <headlessui.RadioGroup.Option
                        key={item.id}
                        value={item.id}
                        className={({ active, checked }) =>
                            `${active ? 'ring-2 ring-offset-2 ring-offset-light-blue-300 ring-white ring-opacity-60' : ''}
                             ${checked ? 'bg-light-blue-900 bg-opacity-75 text-white' : 'bg-white'}
                            relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none`
                        }>
                        {({ active, checked }) => (
                            <>
                                <div className="flex items-center justify-between w-full">
                                    <div className="flex items-center">
                                        <div className="text-sm">
                                            <headlessui.RadioGroup.Label
                                                as="p"
                                                className={`font-medium  ${
                                                    checked ? 'text-white' : 'text-gray-900'
                                                }`}
                                            >
                                                {item.name}
                                            </headlessui.RadioGroup.Label>
                                            <headlessui.RadioGroup.Description
                                                as="span"
                                                className={`inline ${
                                                    checked ? 'text-light-blue-100' : 'text-gray-500'
                                                }`}
                                            >
                                            </headlessui.RadioGroup.Description>
                                        </div>
                                    </div>
                                    {checked && (
                                        <div className="flex-shrink-0 text-white" style={{position: 'absolute', top: '5px', right: '5px'}}>
                                            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                                                <circle cx="12" cy="12" r="12" fill="#fff" opacity="0.2"/>
                                                <path d="M7 13l3 3 7-7" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                    )}
                                </div>
                            </>
                        )}
                    </headlessui.RadioGroup.Option>
                ))}
            </div>
        </headlessui.RadioGroup>
    );
}
