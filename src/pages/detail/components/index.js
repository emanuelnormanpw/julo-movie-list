/* eslint-disable react/no-danger */
/* eslint-disable import/no-absolute-path */
import { Heading } from 'commons/layout';
import { Row, Col } from 'commons/grid';
import { Card } from 'commons/card';
import styled from '@emotion/styled';
import { color, normal } from 'commons/theme';

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
    const { data, loading, error } = props;
    if (loading) {
        return (
            <div>
                Loading
            </div>
        );
    }

    let movieData = data.Page.media[0];

    return (
        <div>
            <Row>
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
