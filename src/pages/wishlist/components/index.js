/* eslint-disable import/no-absolute-path */
import { Heading } from 'commons/layout';
import { Row, Col } from 'commons/grid';
import { Card } from 'commons/card';
import Label from 'commons/label';
import { Typography } from 'commons/typography';
import styled from '@emotion/styled';
import { color } from 'commons/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartCircleMinus } from '@fortawesome/free-solid-svg-icons';
import { SkeletonWrapper, Skeleton } from 'commons/skeleton';
import NoData from 'commons/noData';

const IconAction = styled('div')({
    display: 'flex',
    justifyContent: 'end',
});

const ActionButton = styled('button')({
    color: color.lightGray,
    margin: 0,
    display: 'inline-block',
    padding: '0 6px',
    backgroundColor: 'inherit',
    border: `1px solid ${color.darkGray}`,
    borderRadius: 5,
    cursor: 'pointer',
    minWidth: 27,
    minHeight: 27,
    marginLeft: 4,
    '&:hover': {
        color: color.white,
        backgroundColor: color.primary,
    },
});

const CardLoading = () => {
    return (
        <>
            <SkeletonWrapper>
                <Skeleton height="300px" />
            </SkeletonWrapper>
            <Row>
                <Col col="6">
                    <SkeletonWrapper>
                        <Skeleton height="30px" />
                    </SkeletonWrapper>
                </Col>
                <Col col="6">
                    <SkeletonWrapper>
                        <Skeleton height="30px" />
                    </SkeletonWrapper>
                </Col>
            </Row>
            <SkeletonWrapper>
                <Skeleton height="30px" />
            </SkeletonWrapper>
        </>
    );
};

const WishlistView = (props) => {
    const { data, loading, removeWishlist } = props;

    if (!loading && data) {
        if (data.Page.media.length === 0) {
            return (
                <>
                    <Heading align="left" transform="uppercase" bold>WISHLIST</Heading>
                    <NoData />
                </>
            );
        }
        return (
            <div>
                <Row>
                    <Col col="12">
                        <Heading align="left" transform="uppercase" bold>WISHLIST</Heading>
                    </Col>
                    <Col col="12">
                        <Row>
                            {
                                data.Page.media.map((item, key) => (
                                    <Col col="4" md="6" key={key}>
                                        <Row>
                                            <Col col="12">
                                                <Card
                                                    withLink
                                                    id={item.id}
                                                    isAdult={item.isAdult}
                                                    img={item.coverImage.large}
                                                    text={item.title.native}
                                                />
                                            </Col>
                                            <Col col="6">
                                                <Label text={item.isAdult ? '18+' : 'SU'} />
                                            </Col>
                                            <Col col="6">
                                                <IconAction>
                                                    <ActionButton onClick={(e) => { removeWishlist(item.id); }}>
                                                        <FontAwesomeIcon icon={faHeartCircleMinus} />
                                                    </ActionButton>
                                                </IconAction>
                                            </Col>
                                            <Col col="12">
                                                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                                    <Label
                                                        labelMargin="0 4px 4px 0"
                                                        type={color.white}
                                                        customColor={color.primary}
                                                        text={item.seasonYear}
                                                        bordered
                                                    />
                                                    {item.genres.map((genre, idx) => {
                                                        return (
                                                            <Label
                                                                key={idx}
                                                                labelMargin="0 4px 4px 0"
                                                                type={color.white}
                                                                customColor={color.primary}
                                                                text={genre}
                                                            />
                                                        );
                                                    })}
                                                </div>
                                            </Col>
                                            <Col col="12">
                                                {item.title.native && (
                                                    <Col col="12">
                                                        <Typography>
                                                            {item.title.native}
                                                        </Typography>
                                                    </Col>
                                                )}
                                            </Col>
                                        </Row>
                                    </Col>
                                ))
                            }
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }

    return (
        <Row>
            <Col col="12">
                <SkeletonWrapper>
                    <Skeleton height="40px" width="50%" />
                </SkeletonWrapper>
            </Col>
            <Col col="4" md="6">
                <CardLoading />
            </Col>
            <Col col="4" md="6">
                <CardLoading />
            </Col>
            <Col col="4" md="6">
                <CardLoading />
            </Col>
            <Col col="4" md="6">
                <CardLoading />
            </Col>
            <Col col="4" md="6">
                <CardLoading />
            </Col>
            <Col col="4" md="6">
                <CardLoading />
            </Col>
        </Row>
    );
};

export default WishlistView;
