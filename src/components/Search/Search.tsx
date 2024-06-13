import { Search as SearchIcon, TvOutlined } from '@mui/icons-material'
import { SearchInput, SearchSection } from './Search.styles'
import { Button } from '@mui/material'
import { FormEvent } from 'react'

interface SearchProps {
    setSearch: (search: string) => void
}

function Search({ setSearch }: SearchProps) {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const search = formData.get('search') as string

        setSearch(search)
    }

    return (
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <SearchSection>
                <SearchInput
                    name="search"
                    placeholder="Pesquise por suas séries..."
                    fullWidth
                    startAdornment={<SearchIcon />}
                    autoComplete="off"
                />

                <Button type="submit" endIcon={<TvOutlined />}>
                    Buscar
                </Button>
            </SearchSection>
        </form>
    )
}

export default Search
