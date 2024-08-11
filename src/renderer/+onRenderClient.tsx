// https://vike.dev/onRenderClient
export { onRenderClient }

import React from 'react'
import { createRoot } from 'react-dom/client'
import { PageLayout } from './PageLayout'


type PageContext = {
    Page: React.ComponentType
}

async function onRenderClient(pageContext: PageContext): Promise<void> {
    const { Page } = pageContext
    const rootElement = document.getElementById('root')

    if (!rootElement) {
        throw new Error('Root element not found')
    }

    createRoot(rootElement).render(
        <PageLayout>
            <Page />
        </PageLayout>
    )
}
