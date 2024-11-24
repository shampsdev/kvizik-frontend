import tailwindcssAnimate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            colors: {
                layoutBorder: '#ECECEC', 
                backgroundGray: '#F6F6F6',
                textGray: '#A3A2AA',
                layoutBG: '#FFFFFF',
                purple: '#C4BBFE',
                yellow: '#F9E3A0',
                blue: '#94CBFF',
                answerGreen: '#ACE89C',
                answerRed: '#E89C9C',
            }
        }
    },
    plugins: [tailwindcssAnimate],
};