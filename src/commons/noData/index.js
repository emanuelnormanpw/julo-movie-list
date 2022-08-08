import styled from '@emotion/styled';
import { Row, Col } from 'commons/grid';
import { color, animateUpdown } from 'commons/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileVideo } from '@fortawesome/free-solid-svg-icons';
import { Typography } from 'commons/typography';

const NoDataWrapper = styled('div')({
    color: color.white,
    fontSize: 90,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'calc(100vh - 200px)',
});

const AnimateWrapper = styled('div')({
    animation: `${animateUpdown} 2s infinite ease-in-out`,
});

const NoData = () => {
    return (
        <NoDataWrapper>
            <Row justify="center" align="center">
                <Col col="12" center>
                    <AnimateWrapper>
                        <FontAwesomeIcon icon={faFileVideo}></FontAwesomeIcon>
                    </AnimateWrapper>
                </Col>
                <Col col="12" center>
                    <Typography fs="20px" m="8px 0 8px 0" type={color.white}>
                        Data tidak ditemukan
                    </Typography>
                </Col>
            </Row>
        </NoDataWrapper>
    );
};

export default NoData;
