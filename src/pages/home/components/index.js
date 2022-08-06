/* eslint-disable import/no-absolute-path */
import { Heading } from 'commons/layout';
import { Row, Col } from 'commons/grid';
import { Card } from 'commons/card';
import Button from 'commons/button/button';

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
                                <Col col="6" key={key}>
                                    <Card
                                        img={item.coverImage.large}
                                        text={item.title.native}
                                    />
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
