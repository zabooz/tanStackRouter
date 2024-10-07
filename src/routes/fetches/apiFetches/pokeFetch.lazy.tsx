import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/fetches/apiFetches/pokeFetch')({
  component: poke
})


function poke() {





return (
  <div>
    <button>Click me</button>
  </div>
)


}