import { useEffect, useState } from "react";

const App = () => {
  interface Post {
    id: number;
    name: string;
    username: string;
    email: string;
  }

  const [data, setData] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>("");

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setData(data);
    } catch (error) {
      setError("Error fetching data");
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

 
  useEffect(() => {
   
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Lookym</h1>
      <button onClick={fetchData}>User Data</button>
      <ul>
        {data.map((item) => (
          <li>
            {item.id} {item.name} {item.username} {item.email}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default App;
