import { useFetch } from "./components";

interface User {
  id: number;
  name: string;
}


const url = 'https://jsonplaceholder.typicode.com/users';


function App () {
  const { data, loading, error } = useFetch<User[]>(url);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Users</h1>
      <ul>
        <button onClick={() => {}} >Sort</button>
        {data && data.map((user: User) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default App;
