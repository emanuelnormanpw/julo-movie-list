import styled from '@emotion/styled';

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
    }),
);
