module.exports = {
    content: [`src/**/*.{js,ts,jsx,tsx}`],
    theme: {},
    plugins: [require('daisyui'), require('@tailwindcss/typography')],
    daisyui: {
        themes: [
            {
                linksquares: {
                    primary: '#f47527',
                    secondary: '#130046',
                    accent: '#EB6B47',
                    neutral: '#23282F',
                    'base-100': '#ffffff',
                    'base-200': '#cccccc',
                    info: '#119da4',
                    success: '#36D399',
                    warning: '#ffec66',
                    error: '#c43950',
                },
            },
        ],
    },
};
