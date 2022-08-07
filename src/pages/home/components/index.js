/* eslint-disable import/no-absolute-path */
import { Heading } from 'commons/layout';
import { Row, Col } from 'commons/grid';
import { Card } from 'commons/card';
import Button from 'commons/button/button';
import Label from 'commons/label';
import { Typography } from 'commons/typography';

const HomeView = (props) => {
    const { data, loading, error, loadMore } = props;
    if (loading) {
        return (
            <div>
                Loading
            </div>
        );
    }

    return (
        <div>
            <Row>
                <Col col="12">
                    <Heading align="left" transform="uppercase" bold>Trending</Heading>
                </Col>
                <Col col="12">
                    <Row>
                        {
                            data.Page.media.map((item, key) => (
                                <Col col="4" md="6" key={key}>
                                    <Row>
                                        <Col col="12">
                                            <Card
                                                id={item.id}
                                                withLink
                                                isAdult={item.isAdult}
                                                img={item.coverImage.large}
                                                text={item.title.native}
                                            />
                                        </Col>
                                        <Col col="12">
                                            <div>
                                                <Label text={item.isAdult ? '18+' : 'SU'} />
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
                <Col col="12">
                    <Button
                        onClick={loadMore}
                        text={loading ? 'Loading' : 'Load More'}
                    />
                </Col>
            </Row>
        </div>
    );
};

export default HomeView;
