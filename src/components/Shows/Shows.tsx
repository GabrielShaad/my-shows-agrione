import { Grid } from '@mui/material'

import CardShow from '../CardShow'
import { ShowsResponse } from '@/types/Shows'
import SkeletonCard from '../SkeletonCard'

interface ShowsProps {
    isLoading: boolean
    shows?: ShowsResponse[]
}

function Shows({ shows, isLoading }: ShowsProps) {
    return (
        <section>
            <Grid
                container
                padding={2}
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

                {shows?.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <CardShow {...item.show} />
                    </Grid>
                ))}
            </Grid>
        </section>
    )
}

export default Shows
