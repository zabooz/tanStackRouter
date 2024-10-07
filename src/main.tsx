import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen.ts'




const router = createRouter({routeTree})


declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}



const rootELement = document.getElementById('root')!

if(!rootELement.innerHTML){
  const root = ReactDOM.createRoot(rootELement)

  root.render(
    <StrictMode>
      <RouterProvider router={router}/>
    </StrictMode>
  )
}


