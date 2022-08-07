import styled from '@emotion/styled';
import { Row, Col } from 'commons/grid';

const Logo = styled('img')({
    width: 45,
});

const UserImage = styled('img')({
    width: 45,
    height: 45,
    objectFit: 'cover',
    objectPosition: 'top',
    borderRadius: 8,
});

const Header = () => {
    return (
        <div style={{ marginBottom: 16 }}>
            <Row align="center">
                <Col col="6">
                    <Logo src="/movie-logo.svg"></Logo>
                </Col>
                <Col col="6" align="end">
                    <UserImage src="/pp.jpeg"></UserImage>
                </Col>
            </Row>

        </div>
    );
};

export default Header;
