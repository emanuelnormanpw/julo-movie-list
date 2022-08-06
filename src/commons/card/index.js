import styled from '@emotion/styled';
import { Row, Col } from 'commons/grid';
import { color, mobile, bold, normal } from 'commons/theme';
import { Typography } from 'commons/typography';

const CardWrapper = styled('div')({
    width: '100%',
    overflow: 'hidden',
    boxShadow: '0 .1rem 1rem rgba(0, 0, 0, 0.1)',
    borderRadius: 10,
    color: color.lightGray,
    fontSize: 14,
    '& p': {
        marginTop: 16,
    },
});

const CardImage = styled('div')({
    width: '100%',
    height: 300,
    padding: 16,
    color: color.lightGray,
    position: 'relative',
    fontSize: 14,
    '& img': {
        position: 'absolute',
        left: 0,
        right: 0,
        borderRadius: 10,
        objectFit: 'cover',
        width: '100%',
        height: '100%',
    },
});

export const Card = (props) => {
    const { img, text } = props;
    return (
        <CardWrapper>
            <Row>
                <Col col="12">
                    <CardImage>
                        <img src={img}></img>
                    </CardImage>
                </Col>
                <Col col="12">
                    <Typography>
                        {text}
                    </Typography>
                </Col>
            </Row>
        </CardWrapper>
    );
};

export default Card;
