import { keyframes } from '@emotion/react';

/* eslint-disable import/prefer-default-export */
export const color = {
    primary: '#785FDC',
    secondary: '#ECB365',
    lightBlue: '#ECB365',
    white: '#FFFFFF',
    lightGray: '#A7B1B9',
    darkGray: '#57616A',
    bgBody: '#02101D',
};

export const mobile = '@media (max-width: 769px)';

export const light = 'Inter-Light';
export const normal = 'Inter-Regular';
export const bold = 'Inter-Bold';

export const animateUpdown = keyframes`
0% {
    transform: translateY(0);
}
50% {
    transform: translateY(10px);
}
100% {
    transform: translateY(0px);
}`;
