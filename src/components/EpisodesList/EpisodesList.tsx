import { Grid, Typography } from '@mui/material'

import { Episode } from '@/types/Episodes'
import SkeletonCard from '@/components/SkeletonCard'
import EpisodeCard from '../EpisodeCard'

interface EpisodesListProps {
    isLoading: boolean
    episodes?: Episode[]
}

function EpisodesList({ isLoading, episodes }: EpisodesListProps) {
    return (
        <section>
            <Typography
                variant="h3"
                fontSize="2rem"
                fontWeight="bold"
                padding="32px 0"
            >
                Episodes
            </Typography>

            <Grid
                container
                padding="32px 0"
                spacing={2}
                alignItems="center"
                justifyContent="center"
            >
                {isLoading && (
                    <>
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={item}>
                                <SkeletonCard />
                            </Grid>
                        ))}
                    </>
                )}

                {episodes?.map((episode) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={episode.id}>
                        <EpisodeCard {...episode} />
                    </Grid>
                ))}
            </Grid>
        </section>
    )
}

export default EpisodesList
