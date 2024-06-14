export interface Show {
    id: string
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

export interface ShowImage {
    id: string
    resolutions: {
        original: {
            url: string
            width: number
            height: number
        }
        medium: {
            url: string
            width: number
            height: number
        }
    }
}
