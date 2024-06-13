import { Box, Card, Skeleton } from '@mui/material'

function SkeletonCard() {
    return (
        <Card elevation={5}>
            <Box display="flex" flexDirection="column" gap={1}>
                <Skeleton variant="rectangular" width="100%" height="400px" />

                <Box display="flex" flexDirection="column" padding={1} gap={1}>
                    <Skeleton variant="text" sx={{ fontSize: '1.5rem' }} />

                    <Skeleton variant="rectangular" height="100px" />

                    <Box display="flex" gap={1} alignItems="center">
                        <Skeleton
                            variant="rounded"
                            height="24px"
                            width="24px"
                        />

                        <Skeleton width="32px" height="50px" />
                    </Box>
                </Box>
            </Box>
        </Card>
    )
}

export default SkeletonCard
