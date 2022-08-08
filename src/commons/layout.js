/* eslint-disable import/prefer-default-export */
import styled from '@emotion/styled';
import { color, mobile, bold, normal } from 'commons/theme';

export const Layout = styled('div')(
    {
        color: color.white,
        fontFamily: 'Inter-Regular',
        paddingBottom: 64,
    },
);

export const Container = styled('div')(
    {
        maxWidth: 600,
        margin: 'auto',
        padding: 12,
        [mobile]: {
            maxWidth: 350,
        },

    },
);

export const Heading = styled('h1')(
    {
        color: color.white,
    },
    (props) => ({
        textTransform: props.transform,
        textAlign: props.align,
        fontFamily: props.normal ? normal : bold,
        color: props.color,
    }),
);
