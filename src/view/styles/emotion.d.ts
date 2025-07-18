import '@emotion/react';

declare module '@emotion/react' {
    export interface Theme {
        colors: {
            success: string;
            warning: string;
            error: string;
            orange: {
                [key: number]: string;
            };
            gray: {
                [key: string]: string;
            };
            fill: {
                white: string;
                extraLight50: string;
                extraLight: string;
                light: string;
                default0: string;
                semiHard: string;
                hard: string;
                extraHard: string;
                black30: string;
                highlight: string;
            };
            bg: {
                white: string;
                extraLight60: string;
                extraLight: string;
                hard: string;
            };
            line: {
                white: string;
                extraLight15: string;
                light1: string;
                default0: string;
                hard1: string;
                extraHard15: string;
                highlight: string;
            };
            text: {
                white: string;
                guideText: string;
                extraLight15: string;
                light1: string;
                default0: string;
                black: string;
                highlight: string;
            };
            icon: {
                white: string;
                extraLight15: string;
                light1: string;
                default0: string;
                highlight: string;
                highlight50: string;
            };
            primary: {
                regular: string;
                semiHard: string;
                extraHard: string;
            };
        };
        spacing: {
            [key: number]: string;
        };
        radius: {
            [key: number]: string;
            s: string;
            m: string;
            l: string;
        };
        lineWeight: {
            divider: number;
            stroke: number;
            nav: number;
        };

        screens: {
            sm: string;
            md: string;
            lg: string;
            xl: string;
        }
    }
}