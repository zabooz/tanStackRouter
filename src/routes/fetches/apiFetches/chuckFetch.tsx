import { useQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react';

export const Route = createFileRoute('/fetches/apiFetches/chuckFetch')({
  component: chuckFetch
})


function chuckFetch(){

 const [num, setNum] = useState(0);


  const { isLoading, error, data, isError } = useQuery({
    queryKey: [num],
    queryFn: async () => {
      const response = await fetch(`https://api.chucknorris.io/jokes/random`);
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
      <button onClick={() => setNum(num + 1)}>
        Click me
      </button>
      {data && (
        <>
          <h1>{data.value}</h1>
        </>
      )}
    </div>
  );


}