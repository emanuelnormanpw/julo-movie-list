import styled from '@emotion/styled';
import { Row, Col } from 'commons/grid';
import { color, mobile } from 'commons/theme';
import { Link } from 'react-router-dom';

const CardWrapper = styled('div')({
    width: '100%',
    overflow: 'hidden',
    boxShadow: '0 .1rem 1rem rgba(0, 0, 0, 0.1)',
    borderRadius: 10,
    color: color.lightGray,
    fontSize: 14,
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
    [mobile]: {
        height: 200,
    },
});

const TextOverlay = () => {};

export const Card = (props) => {
    const { id, img, text, isAdult, withLink } = props;
    return (
        <CardWrapper>
            {withLink
                ? (
                    <Link to={`detail/${id}`}>
                        <CardImage>
                            <img src={img}></img>
                        </CardImage>
                    </Link>
                )
                : (
                    <CardImage>
                        <img src={img}></img>
                    </CardImage>
                )}
        </CardWrapper>
    );
};

export default Card;
