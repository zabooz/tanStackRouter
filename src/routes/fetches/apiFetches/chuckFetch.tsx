import { useQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/fetches/apiFetches/chuckFetch')({
  component: chuckFetch
});

function chuckFetch() {
  const { isLoading, error, data, isError, refetch } = useQuery({
    queryKey: ["lol"],
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
      <button onClick={() => refetch()}>Click me</button>
      {data && (
        <>
          <h1>{data.value}</h1>
        </>
      )}
    </div>
  );
}
