import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import Home from '@/pages/Home'
import Show from '@/pages/Show'

import '@fontsource/comfortaa/300.css'
import '@fontsource/comfortaa/400.css'
import '@fontsource/comfortaa/500.css'
import '@fontsource/comfortaa/700.css'
import { ShowProvider } from './context/ShowContext'

const theme = createTheme({
    typography: {
        fontFamily: 'Comfortaa',
    },
})

const queryClient = new QueryClient()

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/show/:id',
        element: <Show />,
    },
])

function App() {
    return (
        <CssBaseline>
            <ThemeProvider theme={theme}>
                <QueryClientProvider client={queryClient}>
                    <ShowProvider>
                        <RouterProvider router={router} />
                    </ShowProvider>
                </QueryClientProvider>
            </ThemeProvider>
        </CssBaseline>
    )
}

export default App
