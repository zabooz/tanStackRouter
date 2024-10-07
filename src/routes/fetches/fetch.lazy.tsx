import { createLazyFileRoute, Link } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/fetches/fetch')({
  component: fetchDiv
})


function fetchDiv() {
  return (
    <div style={{ padding: '20px',display: 'flex', justifyContent: 'space-between' }}>
    <Link to="/fetches/apiFetches/pokeFetch"> PokeFetch</Link>
    <Link to="/fetches/apiFetches/chuckFetch"> Chuck fetch</Link>
    </div>
  )
}