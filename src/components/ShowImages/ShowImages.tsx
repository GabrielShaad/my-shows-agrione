import { ShowImage } from '@/types/Shows'
import { Box, ImageList, ImageListItem, useMediaQuery } from '@mui/material'

interface ShowImageProps {
    images: ShowImage[]
}

function ShowImages({ images }: ShowImageProps) {
    const isMobile = useMediaQuery('(max-width:600px)')

    const cols = isMobile ? 2 : 6

    return (
        <Box>
            <ImageList
                variant="quilted"
                cols={cols}
                gap={8}
                sx={{
                    maxHeight: '70vh',
                    overflowX: 'none',
                    scrollbarWidth: 'none',
                }}
            >
                {images?.slice(0, 12).map((image) => (
                    <ImageListItem key={image.id}>
                        <img
                            src={image.resolutions.original.url}
                            alt="Show image"
                            loading="lazy"
                            style={{ borderRadius: '8px' }}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    )
}

export default ShowImages
