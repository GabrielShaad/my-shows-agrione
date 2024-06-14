import { CardMedia, CardMediaProps, Typography, styled } from '@mui/material'
import { ComponentType } from 'react'

const Cover = styled(CardMedia as ComponentType<CardMediaProps>)({
    height: '400px',
    maxHeight: '500px',
    objectFit: 'cover',
    aspectRatio: '16/9',
})

const Description = styled(Typography)({
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 5,
    WebkitBoxOrient: 'vertical',
})

export { Cover, Description }
