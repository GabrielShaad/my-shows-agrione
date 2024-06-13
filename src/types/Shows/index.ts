export interface Show {
    image: {
        medium: string
        original: string
    }
    name: string
    rating: {
        average: number
    }
    summary: string
}

export interface ShowsResponse {
    score: number
    show: Show
}
