/* eslint-disable max-len */
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { color } from 'commons/theme';
import { Typography } from 'commons/typography';

const loading = keyframes`
  0% {
    transform: translateX(0);
  }
  50%,
  100% {
    transform: translateX(552px);
  }
`;

export const SkeletonWrapper = styled('div')({
    display: 'flex',
    alignItems: 'center',
    padding: 8,
    position: 'relative',
});

export const Skeleton = styled('div')({
    width: '100%',
    borderRadius: 2,
    background: '#f2f2f2',
    marginTop: 3,
    position: 'relative',
    overflow: 'hidden',
    '&::before': {
        content: "''",
        position: 'absolute',
        top: 0,
        left: 0,
        width: 30,
        height: '100%',
        background: 'linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2)',
        animation: `${loading} 2s infinite linear`,
    },
},
(props) => ({
    height: props.height || '100px',
    width: props.width,
}));
