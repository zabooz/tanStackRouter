import {createRootRoute, Link, Outlet} from "@tanstack/react-router"
import { TanStackRouterDevtools } from '@tanstack/router-devtools'


export const Route = createRootRoute({

    component : () => (
        <>
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <Link to="/">home</Link>
            <Link to="/about">about</Link>
            <Link to="/App">Vite app</Link>
            <Link to="/fetches/fetch">Fetching</Link>
        </div>
        <hr />
        <Outlet />
        <TanStackRouterDevtools />
        </>
    )
})
