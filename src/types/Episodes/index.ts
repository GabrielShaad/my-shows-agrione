export interface Episode {
    id: string
    name: string
    season: number
    number: number
    summary: string
    image: {
        medium: string
        original: string
    }
}
