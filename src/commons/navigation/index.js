import styled from '@emotion/styled';
import Button from 'commons/button/button';
import { Row, Col } from 'commons/grid';
import { color, mobile, bold, normal } from 'commons/theme';
import { faHomeAlt } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const NavWrapper = styled('div')({
    position: 'fixed',
    width: '100%',
    display: 'inherit',
    padding: 16,
    bottom: 0,
    height: 64,
    background: 'rgba(255, 255, 255, 0.19)',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(10px)',
});

const ActionButton = styled('button')({
    color: color.lightGray,
    margin: 0,
    display: 'flex',
    padding: '0 6px',
    backgroundColor: 'inherit',
    border: 'none',
    borderRadius: 5,
    cursor: 'pointer',
    minWidth: 27,
    minHeight: 27,
    marginLeft: 4,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    '&:hover': {
        color: color.primary,
    },
});

const Navigation = () => {
    return (
        <NavWrapper>
            <Row>
                <Col col="6" md="6">
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Link to="/">
                            <ActionButton>
                                <FontAwesomeIcon icon={faHomeAlt}></FontAwesomeIcon>
                            </ActionButton>
                        </Link>
                    </div>
                </Col>
                <Col col="6" md="6">
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <ActionButton>
                            <Link to="/wishlist">
                                <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                            </Link>
                        </ActionButton>
                    </div>
                </Col>
            </Row>
        </NavWrapper>
    );
};

export default Navigation;
