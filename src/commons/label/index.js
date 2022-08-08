import styled from '@emotion/styled';
import { color } from 'commons/theme';
import { Typography } from 'commons/typography';

const LabelWrapper = styled('div')({
    color: color.white,
    margin: 0,
    display: 'inline-block',
    padding: 6,
    backgroundColor: color.darkGray,
    borderRadius: 5,
    '& p': {
        fontSize: 10,
    },
},
(props) => ({
    margin: props.labelMargin,
    padding: props.labelPadding,
    backgroundColor: props.bordered ? 'inherit' : props.customColor,
    border: `1px solid ${props.customColor || color.darkGray}`,
}));

export const Label = (props) => {
    const { text } = props;

    return (
        <LabelWrapper {...props}>
            <Typography
                {...props}
            >
                {text}
            </Typography>
        </LabelWrapper>
    );
};

export default Label;
