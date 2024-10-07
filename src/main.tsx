import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen.ts'
import { QueryClientProvider,QueryClient } from '@tanstack/react-query'




const router = createRouter({routeTree})


declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const queryClient = new QueryClient()

const rootELement = document.getElementById('root')!

if(!rootELement.innerHTML){
  const root = ReactDOM.createRoot(rootELement)

  root.render(
    <StrictMode>
       <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}/>
       </QueryClientProvider>
    </StrictMode>
  )
}


