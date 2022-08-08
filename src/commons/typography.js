import styled from '@emotion/styled';
import { color, mobile, bold, normal, light } from './theme';

export const Typography = styled('p')(
    {
        color: color.lightGray,
        fontSize: 14,
    },
    (props) => ({
        color: props.type,
        fontFamily: props.normal ? normal : bold,
        fontSize: props.fs,
        margin: props.m,
        padding: props.p,
    }),
);
