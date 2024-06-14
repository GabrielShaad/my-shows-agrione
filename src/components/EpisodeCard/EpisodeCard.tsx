import { StarRounded } from '@mui/icons-material'
import {
    Box,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    Typography,
} from '@mui/material'

import { Episode } from '@/types/Episodes'
import useSanitizeText from '@/hooks/useSanitizeText'

import { Cover, Description } from './EpisodeCard.styles'

function EpisodeCard(episode: Episode) {
    const { image, name, season, number, summary } = episode

    const [text] = useSanitizeText(summary)

    return (
        <Card elevation={5}>
            <CardActionArea>
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
                        {`S${season} x E${number}`}
                    </Typography>
                </CardActions>
            </CardActionArea>
        </Card>
    )
}

export default EpisodeCard
