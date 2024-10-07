import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/fetches/apiFetches/chuckFetch')({
  component: chuckFetch
})


function chuckFetch(){

    return (

        <div>
            <button>Chuck Fetch</button>
        </div>


    )



}