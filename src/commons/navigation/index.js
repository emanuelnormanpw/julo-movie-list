import styled from '@emotion/styled';
import Button from 'commons/button/button';
import { Row, Col } from 'commons/grid';
import { color, mobile, bold, normal } from 'commons/theme';
import { Typography } from 'commons/typography';

const NavWrapper = styled('div')({
    position: 'sticky',
    display: 'none',
    padding: 16,
    bottom: 0,
    height: 64,
    background: 'rgba(255, 255, 255, 0.19)',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(10px)',
    [mobile]: {
        display: 'inherit',
    },
});

const Navigation = () => {
    return (
        <NavWrapper>
            <Row>
                <Col col="6">
                    <Button
                        text="Home"
                    />
                </Col>
                <Col col="6">
                    <Button
                        text="Favorite"
                    />
                </Col>
            </Row>
        </NavWrapper>
    );
};

export default Navigation;
