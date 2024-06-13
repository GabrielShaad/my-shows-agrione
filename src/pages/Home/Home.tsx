import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import { getShows } from '@/api'
import Page from '@/components/Page'
import Search from '@/components/Search'
import Shows from '@/components/Shows'

function Home() {
    const [search, setSearch] = useState('planet')

    const { data, isFetching } = useQuery({
        queryKey: ['shows', { search }],
        queryFn: async () => {
            const data = await getShows(search)
            return data
        },
    })

    return (
        <Page>
            <Search setSearch={setSearch} />
            <Shows shows={data} isLoading={isFetching} />
        </Page>
    )
}

export default Home
