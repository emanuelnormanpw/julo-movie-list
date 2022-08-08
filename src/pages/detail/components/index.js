/* eslint-disable react/no-danger */
/* eslint-disable import/no-absolute-path */
import { Heading } from 'commons/layout';
import { Row, Col } from 'commons/grid';
import { Card } from 'commons/card';
import styled from '@emotion/styled';
import { color, normal } from 'commons/theme';
import { Link } from 'react-router-dom';
import { Typography } from 'commons/typography';
import { SkeletonWrapper, Skeleton } from 'commons/skeleton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';

const Description = styled('div')(
    {
        color: color.lightGray,
        fontSize: 14,
        fontFamily: normal,
        padding: 8,
        textAlign: 'justify',
    },
);

const DetailView = (props) => {
    const { data, loading } = props;
    if (loading) {
        return (
            <Row>
                <Col col="12">
                    <SkeletonWrapper>
                        <Skeleton height="40px" />
                    </SkeletonWrapper>
                </Col>
                <Col col="12">
                    <SkeletonWrapper>
                        <Skeleton height="200px" />
                    </SkeletonWrapper>
                </Col>
                <Col col="12">
                    <SkeletonWrapper>
                        <Skeleton height="200px" />
                    </SkeletonWrapper>
                </Col>
            </Row>
        );
    }

    let movieData = data.Page.media[0];

    return (
        <div>
            <Row>
                <Col col="12">
                    <Link to="/">
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <FontAwesomeIcon icon={faChevronCircleLeft}></FontAwesomeIcon>
                            <Typography type={color.white} m="0 0 0 8px">Kembali</Typography>
                        </div>
                    </Link>
                </Col>
                <Col col="12">
                    <Heading align="left" transform="uppercase" bold>{movieData.title.native}</Heading>
                </Col>
                <Col col="12">
                    <Row>
                        <Col col="12">
                            <Card
                                isAdult={movieData.isAdult}
                                img={movieData.coverImage.large}
                            />
                        </Col>
                    </Row>
                </Col>
                <Col col="12">
                    <Description dangerouslySetInnerHTML={{
                        __html: movieData.description,
                    }}
                    >
                    </Description>
                </Col>
            </Row>
        </div>
    );
};

export default DetailView;
