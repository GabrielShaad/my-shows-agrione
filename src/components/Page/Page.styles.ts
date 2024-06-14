import { styled } from '@mui/material'

const Wrapper = styled('main')({
    position: 'relative',
    width: '100%',
    height: '100svh',
})

const Loading = styled('div')({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
})

export { Wrapper, Loading }
