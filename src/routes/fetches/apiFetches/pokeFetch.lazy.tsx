import { useQuery } from '@tanstack/react-query';
import { createLazyFileRoute } from '@tanstack/react-router';
import { useState } from 'react';


export const Route = createLazyFileRoute('/fetches/apiFetches/pokeFetch')({
  component: poke,
});

function poke() {


  const [id, setId] = useState(1);

  const { isLoading, error, data, isError,refetch } = useQuery({
    queryKey: ['rdmPoke', id],
    queryFn: async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    },
  });


  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

 
  return (
    <div>
      <button onClick={() =>{
      const rdmId = Math.floor(Math.random() * 100) + 1;
      setId(rdmId)
      refetch({ cancelRefetch: true })

      }}>
        Click me
      </button>
      {data && (
        <>
          <h1>{data.name}</h1>
          <img src={data.sprites.front_default} alt={data.name} />
        </>
      )}
    </div>
  );
}
