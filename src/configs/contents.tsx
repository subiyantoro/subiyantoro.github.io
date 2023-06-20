import React, {ReactElement} from "react";
import {BriefcaseIcon, PhoneIcon, Square3Stack3DIcon} from "@heroicons/react/20/solid";

type HomeButtons = {
    key: string,
    label: string,
    url: string,
    icon: ReactElement,
}

const navHomeButtons: Array<HomeButtons> = [
    {
        key: 'exp',
        label: 'Experience',
        url: '/experience',
        icon: <BriefcaseIcon className="fill-white w-7 h-7" />,
    },
    {
        key: 'port',
        label: 'Portfolio',
        url: '/portfolio',
        icon: <Square3Stack3DIcon className="fill-white w-7 h-7" />,
    },
    {
        key: 'contact',
        label: 'Contact',
        url: '/contact',
        icon: <PhoneIcon className="fill-white w-7 h-7" />,
    },
];

export {
    navHomeButtons
}