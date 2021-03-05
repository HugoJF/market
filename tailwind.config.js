// tailwind.config.js
module.exports = {
    purge: [
        './resources/js/**/*.tsx',
        './resources/js/**/*.ts',
    ],
    theme: {
        extend: {
            fontSize: {
                'xs': '.7rem',
                'sm': '.8rem',
                'base': '.9rem',
                'lg': '1rem',
                'xl': '1.125rem',
                '2xl': '1.25rem',
                '3xl': '1.5rem',
                '4xl': '1.875rem',
                '5xl': '2.5rem',
                '6xl': '3rem',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            spacing: {
                '0.5': '0.125rem',
                '1/2': '50%',
                '1/3': '33.333333%',
                '2/3': '66.666667%',
                '1/4': '25%',
                '2/4': '50%',
                '3/4': '75%',
                '1/5': '20%',
                '2/5': '40%',
                '3/5': '60%',
                '4/5': '80%',
                '1/6': '16.666667%',
                '2/6': '33.333333%',
                '3/6': '50%',
                '4/6': '66.666667%',
                '5/6': '83.333333%',
                '1/12': '8.333333%',
                '2/12': '16.666667%',
                '3/12': '25%',
                '4/12': '33.333333%',
                '5/12': '41.666667%',
                '6/12': '50%',
                '7/12': '58.333333%',
                '8/12': '66.666667%',
                '9/12': '75%',
                '10/12': '83.333333%',
                '11/12': '91.666667%',
            },
            boxShadow: {
                menu: '0 -4px 6px -1px rgba(0, 0, 0, 0.02), 0 -2px 4px -1px rgba(0, 0, 0, 0.02)',
            },
            colors: {
                black: '#0A0A0A',

                red: {
                    100: '#FDEDEA',
                    200: '#F9D2CB',
                    300: '#FEA292',
                    400: '#F7725B',
                    500: '#E55D45',
                    600: '#BF331A',
                    700: '#93220E',
                    800: '#69180A',
                    900: '#431108',
                },

                gray: {
                    100: '#f5f5f5',
                    200: '#E8E8E8',
                    300: '#E0E0E0',
                    400: '#9E9E9E',
                    500: '#7A7A7A',
                    600: '#595959',
                    700: '#363636',
                    800: '#1F1F1F',
                    900: '#0F0F0F',
                },

                primary: {
                    100: '#E8FDF2',
                    200: '#BCF5D9',
                    300: '#8BE5B8',
                    400: '#53D091',
                    500: '#38A870',
                    600: '#2F7F57',
                    700: '#23583D',
                    800: '#1B3B2B',
                    900: '#173124',
                },

                secondary: {
                    100: '#FEF0E6',
                    200: '#FCC9A6',
                    300: '#F9B486',
                    400: '#F69F65',
                    500: '#F28740',
                    600: '#DA6110',
                    700: '#BF540D',
                    800: '#A0480E',
                    900: '#77380D',
                },
            }
        },
    },
    plugins: [],
};
