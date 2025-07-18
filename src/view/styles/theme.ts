import { Theme } from '@emotion/react';

export const theme: Theme = {
    colors: {
        success: '#1FB511',
        warning: '#FFAB35',
        error: '#FF4242',

        orange: {
            50: '#FFF3E0',
            100: '#FFE0B2',
            200: '#FFCC80',
            300: '#FFB74D',
            400: '#FFA726',
            500: '#FF9800',
            600: '#FB8C00',
            700: '#F57C00',
            800: '#EF6C00',
            900: '#E65100',
        },

        gray: {
            white: '#FFFFFF',
            100: '#F5F5FA',
            200: '#E6E6EB',
            300: '#D7D7DC',
            400: '#C8C8CD',
            500: '#AFAFB4',
            600: '#96969B',
            700: '#69696E',
            800: '#323237',
            black: '#000000',
        },

        fill: {
            white: '#FFFFFF',
            extraLight50: 'rgba(245, 245, 250, 0.5)',
            extraLight: '#F5F5FA',
            light: '#E6E6EB',
            default0: '#D7D7DC',
            semiHard: '#AFAFB4',
            hard: '#69696E',
            extraHard: '#323237',
            black30: 'rgba(0, 0, 0, 0.3)',
            highlight: '#FF9800',
        },

        bg: {
            white: '#FFFFFF',
            extraLight60: 'rgba(245, 245, 250, 0.6)',
            extraLight: '#F5F5FA',
            hard: '#69696E',
        },

        line: {
            white: '#FFFFFF',
            extraLight15: 'rgba(230, 230, 235, 0.6)',
            light1: '#E6E6EB',
            default0: '#D7D7DC',
            hard1: '#AFAFB4',
            extraHard15: '#323237',
            highlight: '#F57C00',
        },

        text: {
            white: '#FFFFFF',
            guideText: '#C8C8CD',
            extraLight15: '#96969B',
            light1: '#69696E',
            default0: '#323237',
            black: '#000000',
            highlight: '#FF9800',
        },

        icon: {
            white: '#FFFFFF',
            extraLight15: '#AFAFB4',
            light1: '#69696E',
            default0: '#323237',
            highlight: '#FF9800',
            highlight50: 'rgba(255, 152, 0, 0.2)',
        },

        primary: {
            regular: '#FF9800',
            semiHard: '#F57C00',
            extraHard: '#E65100',
        },
    },

    spacing: {
        2: '2px',
        4: '4px',
        6: '6px',
        8: '8px',
        10: '10px',
        12: '12px',
        14: '14px',
        16: '16px',
        20: '20px',
        24: '24px',
        28: '28px',
        32: '32px',
        36: '36px',
        40: '40px',
    },

    radius: {
        2: '2px',
        4: '4px',
        8: '8px',
        12: '12px',
        16: '16px',
        20: '20px',
        24: '24px',
        s: '4px',
        m: '8px',
        l: '12px',
    },

    lineWeight: {
        divider: 1,
        stroke: 2,
        nav: 0.4,
    },
};