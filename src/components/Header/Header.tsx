import { Typography } from '@mui/material'
import LiveTvIcon from '@mui/icons-material/LiveTv'

import { Wrapper } from './Header.styles'

function Header() {
    return (
        <Wrapper>
            <LiveTvIcon />
            <Typography component="h1" variant="h5" fontWeight={700}>
                My TV Shows
            </Typography>
        </Wrapper>
    )
}

export default Header
