import styled from '@emotion/styled';
import { Row, Col } from 'commons/grid';
import { color, mobile, bold, normal } from 'commons/theme';
import { Typography } from 'commons/typography';

const ButtonWrapper = styled('div')(
    {
        width: '100%',
        color: color.white,
        textAlign: 'center',
        borderRadius: 8,
        fontFamily: bold,
        cursor: 'pointer',
        padding: 8,
        backgroundColor: color.primary,
    },
    (props) => ({
        color: props.btnColor,
    }),
);

export const Button = (props) => {
    const { color, text, onClick } = props;
    return (
        <ButtonWrapper btnColor={color} onClick={() => onClick()}>
            {text}
        </ButtonWrapper>
    );
};

export default Button;
