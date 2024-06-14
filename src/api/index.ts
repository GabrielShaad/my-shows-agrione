import { Episode } from '@/types/Episodes'
import { Show, ShowImage, ShowsResponse } from '@/types/Shows'
import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.tvmaze.com',
})

const getShows = async (query: string) => {
    const response = await api.get<ShowsResponse[]>(`search/shows?q=${query}`)
    return response.data
}

const getShowDetails = async (id: string) => {
    const response = await api.get<Show>(`shows/${id}`)
    return response.data
}

const getShowImages = async (id: string) => {
    const response = await api.get<ShowImage[]>(`shows/${id}/images`)
    return response.data
}

const getEpisodes = async (id: string) => {
    const response = await api.get<Episode[]>(`shows/${id}/episodes`)
    return response.data
}

export { getShows, getShowDetails, getShowImages, getEpisodes }
