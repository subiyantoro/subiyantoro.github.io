type HomeButtons = {
    key: string,
    label: string,
    url: string,
}

const navHomeButtons: Array<HomeButtons> = [
    {
        key: 'exp',
        label: 'Experience',
        url: '/experience'
    },
    {
        key: 'port',
        label: 'Portfolio',
        url: '/portfolio',
    },
    {
        key: 'contact',
        label: 'Contact',
        url: '/contact'
    }
];

export {
    navHomeButtons
}