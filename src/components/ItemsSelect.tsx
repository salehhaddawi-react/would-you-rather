import {FC} from 'react';
import {Listbox} from '@headlessui/react';
import {CheckIcon, SelectorIcon} from '@heroicons/react/solid';

export interface Item {
    name: string;
    id: string| number;
    disabled?: boolean;
    [index: string]: any;
}

interface ItemsObj {
    [index: string]: Item
}

interface SelectItemsProps {
    items: ItemsObj;
    selected: Item | null;
    onChange(value: Item): void;
    className?: string;
    placeholder?: string;
}

const ItemsSelect: FC<SelectItemsProps> = (props) => {
    const {selected, items, onChange, className, placeholder} = props;

    const _onChange = (value: any) => {
        onChange(items[value]);
    }

    return (
        <div className={className ? className : ''}>
            <Listbox value={selected} onChange={_onChange}>
                <div className="relative mt-1">
                    <Listbox.Button
                        className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                        <span className="block truncate">{(selected && selected.name) || (<span className="text-gray-400">{placeholder || 'choose item'}</span>)}</span>
                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <SelectorIcon className="w-5 h-5 text-gray-400" aria-hidden="true"/>
                        </span>
                    </Listbox.Button>
                    <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {Object.keys(items).map((itemKey) => (
                            <Listbox.Option key={items[itemKey].id} value={items[itemKey].id} disabled={items[itemKey].disabled} className={({ active }) =>
                                `${active ? 'text-gray-900 bg-gray-100' : 'text-gray-900'}
                                    cursor-default select-none relative py-2 pl-10 pr-4`
                                }>
                                {({ active, selected }) => (
                                    <>
                                        <span className={`${selected ? 'font-medium' : 'font-normal'} block truncate`}>
                                            {items[itemKey].name}
                                        </span>
                                        {selected && (
                                        <span className={`${active ? 'text-amber-600' : 'text-amber-600'} absolute inset-y-0 left-0 flex items-center pl-3`}>
                                            <CheckIcon className="w-5 h-5" aria-hidden="true" />
                                        </span>)}
                                    </>
                                )}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </div>
            </Listbox>
        </div>
    )
}

export default ItemsSelect;
