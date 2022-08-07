import styled from '@emotion/styled';
import { Row, Col } from 'commons/grid';
import { color, mobile, bold, normal } from 'commons/theme';
import { Typography } from 'commons/typography';

const LabelWrapper = styled('div')({
    color: color.lightGray,
    margin: 0,
    display: 'inline-block',
});

export const Label = (props) => {
    const { text } = props;
    return (
        <LabelWrapper>
            <Typography
                {...props}
                style={{
                    padding: 6,
                    fontSize: 10,
                    backgroundColor: color.darkGray,
                    borderRadius: 5,
                }}
            >
                {text}
            </Typography>
        </LabelWrapper>
    );
};

export default Label;
