import { useEffect, useState } from "react";


const App = () => {
  interface Post {
    id: number;
    name: string;
    username: string;
    email: string;
  }

  const [data, setData] = useState<Post[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

// comunicarnos con un endpoint-entidad externa al componente
// operaciones async
//parametro de entrada

// consumir el endpoint se maneja segun el re-render de componente 
// se utiliza para renderizar only Sync con entidades externas o fuera de la aplicacion ejemplo de api externa parametro de entrada
useEffect(() => {
  // se ejecuta 1- cuando se monta el componente o se renderiza el componente
  // se ejecuta 2- cuando se modifique uno de los valor que esta adentro del arreglo de dependencias []
 
  
  
},[]);


  return (
    <div>
      <h1>App</h1>
      <button onClick={fetchData}>Fetch Data</button>
      <ul>
        {data.map((item) => (
          <li>{item.id}  {item.name} {item.username} {item.email}</li>
        ))}
      </ul>
    </div>
  );


}
export default App;