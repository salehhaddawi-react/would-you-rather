import React from "react";

interface TabItem {
    title: string;
    content: any;
}

interface TabsProps {
    tabs: Array<TabItem>
}

export default function Tabs(props: TabsProps) {
    const [openTab, setOpenTab] = React.useState(0);
    const {tabs} = props;

    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full">
                    <ul className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row" role="tablist">
                        {tabs.map((tabItem, indx) => (
                            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center" key={tabItem.title}>
                                <a
                                    className={
                                        "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                        (openTab === indx
                                            ? "text-white bg-blue-400"
                                            : "text-blue-400 bg-white")
                                    }
                                    onClick={e => {
                                        e.preventDefault();
                                        setOpenTab(indx);
                                    }}
                                    data-toggle="tab"
                                    href={"#link" + indx}
                                    role="tablist"
                                >
                                    {tabItem.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                        <div className="px-4 py-5 flex-auto">
                            <div className="tab-content tab-space">
                                {tabs.map((tabItem, indx) => (
                                    <div className={openTab === indx ? "block" : "hidden"} key={tabItem.title}>
                                        { tabItem.content }
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
