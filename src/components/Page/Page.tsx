import Header from '@/components/Header'
import { Loading, Wrapper } from './Page.styles'
import { CircularProgress, Container } from '@mui/material'
import { ReactNode } from 'react'

interface PageProps {
    isLoading?: boolean
    children: ReactNode
}

function Page({ isLoading, children }: PageProps) {
    return (
        <Wrapper>
            <Header />

            <Container
                maxWidth="lg"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'stretch',
                    justifyContent: 'space-around',
                    paddingTop: '80px',
                    gap: '1rem',
                }}
            >
                {isLoading ? (
                    <Loading>
                        <CircularProgress color="inherit" />
                    </Loading>
                ) : (
                    children
                )}
            </Container>
        </Wrapper>
    )
}

export default Page
