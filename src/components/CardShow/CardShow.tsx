import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import {
    Box,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    Typography,
} from '@mui/material'
import { StarRounded } from '@mui/icons-material'

import { Show } from '@/types/Shows'
import { ShowContext } from '@/context/ShowContext'
import useSanitizeText from '@/hooks/useSanitizeText'

import { Cover, Description } from './CardShow.styles'

function CardShow(show: Show) {
    const { id, image, name, rating, summary } = show

    const context = useContext(ShowContext)

    const [text] = useSanitizeText(summary)

    const navigate = useNavigate()

    return (
        <Card elevation={5}>
            <CardActionArea
                onClick={() => {
                    context?.setShow(show)
                    navigate(`/show/${id}`)
                }}
            >
                <Cover component="img" image={image?.original} />

                <CardContent>
                    <Box display="flex" flexDirection="column" gap={2}>
                        <Typography
                            fontSize="1.5rem"
                            component="h3"
                            fontWeight="bold"
                        >
                            {name}
                        </Typography>

                        <Box height="100px">
                            <Description variant="body2">{text}</Description>
                        </Box>
                    </Box>
                </CardContent>

                <CardActions>
                    <StarRounded />

                    <Typography variant="h6" component="p" fontWeight="bold">
                        {rating.average ?? 'N/A'}
                    </Typography>
                </CardActions>
            </CardActionArea>
        </Card>
    )
}

export default CardShow
