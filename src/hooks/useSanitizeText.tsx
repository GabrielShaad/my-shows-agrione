import { useEffect, useState } from 'react'

function useSanitizeText(text: string | undefined) {
    const [sanitizedText, setSanitizedText] = useState('')

    useEffect(() => {
        if (!text) {
            return
        }

        const regex = /<[^>]*>?/gm
        const sanitized = text?.replace(regex, '')

        setSanitizedText(sanitized)
    }, [text])

    return [sanitizedText]
}

export default useSanitizeText
