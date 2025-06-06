import { createRouter as createTanStackRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { DefaultCatchBoundary, NotFound } from './components'
import { AppLayout } from './layouts/AppLayout'

export function createRouter() {
    const router = createTanStackRouter({
        routeTree,
        defaultPreload: 'intent',
        defaultErrorComponent: DefaultCatchBoundary,
        defaultNotFoundComponent: () => (<AppLayout><NotFound /></AppLayout>),
        scrollRestoration: true,
    })

    return router
}

declare module '@tanstack/react-router' {
    interface Register {
        router: ReturnType<typeof createRouter>
    }
}