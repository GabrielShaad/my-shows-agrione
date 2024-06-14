import { getEpisodes, getShowDetails, getShowImages } from '@/api'
import EpisodesList from '@/components/EpisodesList'
import Page from '@/components/Page'
import ShowImages from '@/components/ShowImages'
import { ShowContext } from '@/context/ShowContext'
import useSanitizeText from '@/hooks/useSanitizeText'
import { Typography } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'

function Show() {
    const context = useContext(ShowContext)

    const { id } = useParams()

    const { data: showDetails } = useQuery({
        queryKey: ['show', { id }],
        queryFn: async () => {
            const data = await getShowDetails(id as string)
            return data
        },
        enabled: context?.show ? false : true,
    })

    const { data: showImages, isPending } = useQuery({
        queryKey: ['showImages', { id }],
        queryFn: async () => {
            const data = await getShowImages(id as string)
            return data
        },
    })

    const { data: episodes, isPending: episodesLoading } = useQuery({
        queryKey: ['episodes', { id }],
        queryFn: async () => {
            const data = await getEpisodes(id as string)
            return data
        },
    })

    const [text] = useSanitizeText(
        context?.show?.summary || showDetails?.summary
    )

    return (
        <Page isLoading={isPending}>
            {showImages && <ShowImages images={showImages} />}

            <Typography variant="h2" fontSize="3rem" fontWeight="bold">
                {context?.show?.name || showDetails?.name}
            </Typography>

            <Typography>{text}</Typography>

            {episodes && (
                <EpisodesList isLoading={episodesLoading} episodes={episodes} />
            )}
        </Page>
    )
}

export default Show
