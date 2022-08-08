import styled from '@emotion/styled';
import { color, mobile, bold, normal } from 'commons/theme';

const grid = (col) => {
    return (100 / (12 / col));
};

export const Row = styled('div')(
    {
        display: 'flex',
        flexWrap: 'wrap',
    },
    (props) => ({
        justifyContent: props.justify,
        alignItems: props.align,
    }),
);

export const Col = styled('div')(
    {
        flex: '0 0 100%',
        minWidth: '100%',
        padding: 4,
    },
    (props) => ({
        textAlign: props.align,
        flex: `0 0 ${grid(props.col)}%`,
        minWidth: `${grid(props.col)}%`,
        display: props.center && 'flex',
        justifyContent: props.center && 'center',
        alignItems: props.center && 'center',
        [mobile]: {
            flex: `0 0 ${grid(props.md || props.col)}%`,
        },
    }),
);
